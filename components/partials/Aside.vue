<template>
  <aside class="font-medium">
    <template v-for="(group, index) in list">
      <h3 class="uppercase text-gray-500 pb-2" :key="`title-${index}`">{{ group.title }}</h3>
      <ul class="pb-8" :key="`list-${index}`">
        <li class="py-2" v-for="(link, index) in group.links" :key="index">
          <nuxt-link class="text-gray-700 hover:text-nuxt-lightgreen" :class="{'nuxt-link-active': path === menu + link.to}" :to="menu + link.to" exact>
            {{ link.name }}
          </nuxt-link>
          <ul v-if="path === menu + link.to && link.contents" class="pl-2 py-1">
            <li v-for="(content, index) in link.contents" class="py-1 text-sm" :key="index">
              <a :href="menu + link.to + content.to" @click.prevent="scrollTo(content.to)" class="text-gray-600" :class="{'text-nuxt-gray': current === index}">
                {{ content.name }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </aside>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', throttle(() => this.scrolled(), 100))
      if (this.$route.hash.length) {
        this.scrollTo(this.$route.hash)
      }
      this.scrolled()
    })
  },
  data() {
    return { current: 0, setInter: null }
  },
  computed: {
    visible() { return this.$store.state.visibleAffix },
    path() { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    menu() { return (this.$i18n.locale !== 'en' ? '/' + this.$i18n.locale : '') + '/learn/' + this.$route.params.section },
    contents() {
      var c = []
      this.list.forEach((group) => {
        if (Array.isArray(group.links) && !c.length) {
          var l = group.links.find((link) => {
            return this.path === this.menu + link.to
          })
          if (l && l.contents) {
            l.contents.forEach((content) => {
              var el = document.getElementById(content.to.slice(1))
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
  methods: {
    hashChanged(toPath, fromPath) {
      toPath = toPath.split('#')
      fromPath = fromPath.split('#')
      this.$nextTick(() => this.scrollTo(this.$route.hash))
    },
    toggle() { this.$store.commit('toggle', 'visibleAffix') },
    scrolled() {
      var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      var doc = document.documentElement
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      var el = this.contents.find((pos) => {
        return pos > top + (h / 2)
      })
      this.current = (el ? this.contents.indexOf(el) : this.contents.length) - 1
    },
    scrollTo(id) {
      if (this.$store.state.visibleAffix) {
        this.toggle()
      }
      if (id !== this.$route.hash) {
        this.$router.push(this.$route.fullPath.split('#')[0] + id)
      }
      this.$nextTick(() => {
        var el = document.getElementById(id.slice(1))
        if (!el) return
        var to = el.offsetTop + 20
        var doc = document.documentElement
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        var diff = (to > top ? to - top : top - to) / 25
        var i = 0
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
