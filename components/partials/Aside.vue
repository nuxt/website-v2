<template>
  <aside class="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-24 bg-white lg:bg-transparent">
      <nav class="px-6 pt-6 overflow-y-auto lg:pt-8 lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)">
        <p class="uppercase font-bold pb-6">
          {{ $store.state.lang.text.version }} <span class="text-nuxt-lightgreen">{{ $store.state.docVersion }}</span>
        </p>
        <template v-for="(group, index) in list">
          <h3 :key="`title-${index}`" class="uppercase text-gray-500 pb-2">
            {{ group.title }}
          </h3>
          <ul :key="`list-${index}`" class="pb-8">
            <li v-for="link in group.links" :key="link.to" class="py-2">
              <nuxt-link class="text-gray-700 hover:text-nuxt-lightgreen" :class="{'nuxt-link-active': path === menu + link.to}" :to="menu + link.to" exact>
                {{ link.name }}
              </nuxt-link>
              <ul v-if="path === menu + link.to && link.contents" class="pl-2 py-1">
                <li v-for="content in link.contents" :key="content.to" class="py-1 text-sm">
                  <a :href="menu + link.to + content.to" class="text-gray-600" :class="{'text-nuxt-gray': current === index}" @click.prevent="scrollTo(content.to)">
                    {{ content.name }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </template>
      </nav>
    </div>
  </aside>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  props: {
    section: {
      type: String,
      required: true
    }
  },
  data () {
    return { current: 0, setInter: null }
  },
  computed: {
    list () { return this.$store.state.menu[this.section] },
    visible () { return this.$store.state.visibleAffix },
    path () { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    menu () { return (this.$i18n.locale !== 'en' ? `/${this.$i18n.locale}/` : '/') + this.section },
    contents () {
      const c = []
      this.list.forEach((group) => {
        if (Array.isArray(group.links) && !c.length) {
          const l = group.links.find((link) => {
            return this.path === this.menu + link.to
          })
          if (l && l.contents) {
            l.contents.forEach((content) => {
              const el = document.getElementById(content.to.slice(1))
              if (el) {
                c.push(el.offsetTop)
              }
            })
          }
        }
      })
      return c
    }
  },
  watch: {
    '$route.fullPath': 'hashChanged'
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', throttle(() => this.scrolled(), 100))
      if (this.$route.hash.length) {
        this.scrollTo(this.$route.hash)
      }
      this.scrolled()
    })
  },
  methods: {
    hashChanged (toPath, fromPath) {
      toPath = toPath.split('#')
      fromPath = fromPath.split('#')
      this.$nextTick(() => this.scrollTo(this.$route.hash))
    },
    toggle () { this.$store.commit('toggle', 'visibleAffix') },
    scrolled () {
      const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      const el = this.contents.find((pos) => {
        return pos > top + (h / 2)
      })
      this.current = (el ? this.contents.indexOf(el) : this.contents.length) - 1
    },
    scrollTo (id) {
      if (this.$store.state.visibleAffix) {
        this.toggle()
      }
      if (id !== this.$route.hash) {
        this.$router.push(this.$route.fullPath.split('#')[0] + id)
      }
      this.$nextTick(() => {
        const el = document.getElementById(id.slice(1))
        if (!el) { return }
        const to = el.offsetTop + 20
        const doc = document.documentElement
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        const diff = (to > top ? to - top : top - to) / 25
        let i = 0
        window.clearInterval(this.setInter)
        this.setInter = window.setInterval(() => {
          top = (to > top) ? top + diff : top - diff
          window.scrollTo(0, top)
          i++
          if (i === 25) {
            window.clearInterval(this.setInter)
          }
        }, 10)
      })
    }
  }
}
</script>

<style>
/* .aside {
  top: 6rem;
  height: calc(100vh - 6rem)
} */
</style>
