<template>
  <aside :class="{ 'opacity-25': $store.state.focusMode }" class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block">
    <div class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24">
      <a v-if="breadcrumb" class="block text-left p-4 lg:hidden" href="#nav" @click.prevent="showNav = !showNav">
        <nui-times v-if="showNav" class="float-right mt-1 mr-1 h-5" />
        <nui-caret-down v-else class="float-right mt-2 mr-1" />
        <span class="uppercase text-gray-500 ml-1">{{ breadcrumb.group }} :</span> {{ breadcrumb.title }}
      </a>
      <nav class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)" :class="{ hidden: !showNav }">
        <p class="uppercase font-bold pb-6">
          {{ $store.state.lang.text.version }} <span class="text-nuxt-lightgreen">{{ $store.state.docVersion }}</span>
        </p>
        <template v-for="(group, index) in list">
          <h3 :key="`title-${index}`" class="uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear">
            {{ group.title }}
          </h3>
          <ul :key="`list-${index}`" class="pb-8">
            <li v-for="link in group.links" :key="link.to" class="py-2">
              <nuxt-link class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear" :class="{'current-link': path === menu + link.to}" :to="menu + link.to" exact>
                {{ link.name }}
              </nuxt-link>
              <ul v-if="path === menu + link.to && link.contents" class="pl-2 py-1">
                <li v-for="(content, i) in link.contents" :key="content.to" class="py-1 text-sm">
                  <a :href="menu + link.to + content.to" class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear" :class="{'current-link': current === i}" @click.prevent="scrollTo(content.to)">
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
import nuiCaretDown from '@/components/svg/CaretDown'
import nuiTimes from '@/components/svg/Times'

export default {
  components: {
    nuiCaretDown,
    nuiTimes
  },
  data () {
    return { current: 0, setInter: null, showNav: false }
  },
  computed: {
    list () {
      return this.$store.state.menu[this.$route.params.section] || []
    },
    visible () { return this.$store.state.visibleAffix },
    path () { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    menu () { return '/' + this.$route.params.section },
    breadcrumb () {
      let breadcrumb = null
      this.list.forEach((group) => {
        group.links.forEach((link) => {
          if ((this.$route.params.slug && link.to === '/' + this.$route.params.slug) || (!this.$route.params.slug && (link.to === '' || link.to === '/'))) {
            breadcrumb = { group: group.title, title: link.name }
          }
        })
      })
      return breadcrumb
    },
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
      this.showNav = false
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
      if (this._scrolling) {
        return
      }
      this._scrolling = true
      if (this.$store.state.visibleAffix) {
        this.toggle()
      }
      if (id !== this.$route.hash) {
        this.$router.push(this.$route.fullPath.split('#')[0] + id)
      }
      this.$nextTick(() => {
        const el = document.getElementById(id.slice(1))
        if (!el) {
          this._scrolling = false
          return
        }
        const to = el.offsetTop - (window.outerWidth < 1024 ? 90 : 120)
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
            this._scrolling = false
            window.clearInterval(this.setInter)
          }
        }, 10)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.current-link {
  color: theme('colors.primary.base');
}
</style>
