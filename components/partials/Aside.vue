<template>
<<<<<<< HEAD:components/partials/Aside.vue
<<<<<<< HEAD
<<<<<<< HEAD
  <aside class="font-medium">
=======
  <aside class="aside font-medium fixed hidden lg:block overflow-y-scroll bottom-0 pt-8 pr-4">
    <p class="uppercase font-bold pb-6">
      {{ $store.state.lang.text.version }} <span class="text-nuxt-lightgreen">{{ $store.state.docVersion }}</span>
    </p>
>>>>>>> 9b732a8c (add doc version)
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
=======
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
=======
  <aside
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <nav
        class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)"
        :class="{ hidden: !showNav }"
      >
        <p class="uppercase font-bold mb-6">
          <NuxtLink
            to="/guide/release-notes"
            class="text-sm"
            active-class=""
            exact-active-class=""
          >
            {{ $t('common.version') }}
            <span class="text-nuxt-lightgreen">{{ $config.nuxtVersion }}</span>
          </NuxtLink>
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/TheAsideNav.vue
        </p>
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`">
          <h3
            :key="`title-${group}`"
            class="uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"
          >
            {{ $t(`content.${section}.${group}`) }}
          </h3>
<<<<<<< HEAD:components/partials/Aside.vue
          <ul :key="`list-${index}`" class="pb-8">
            <li v-for="link in group.links" :key="link.to" class="py-2">
              <nuxt-link class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear" :class="{'current-link': path === menu + link.to}" :to="menu + link.to" exact>
                {{ link.name }}
              </nuxt-link>
              <ul v-if="path === menu + link.to && link.contents" class="pl-2 py-1">
                <li v-for="(content, i) in link.contents" :key="content.to" class="py-1 text-sm">
                  <a :href="menu + link.to + content.to" class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear" :class="{'current-link': current === i}" @click.prevent="scrollTo(content.to)">
                    {{ content.name }}
                  </a>
                </li>
              </ul>
>>>>>>> 1b87907b (feat: dark mode (#303))
            </li>
          </ul>
        </li>
      </ul>
    </template>
=======
          <ul class="pb-8">
            <li
              v-for="(link, index) in sublinks"
              :key="index"
              class="py-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
            >
              <NuxtLink
                class="hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
                active-class
                exact
                exact-active-class="text-nuxt-lightgreen"
                :to="toLink(link)"
              >
                <template v-if="link.menu">
                  {{ link.menu }}
                </template>
                <template v-else>
                  {{ link.title }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/TheAsideNav.vue
  </aside>
</template>

<script>
<<<<<<< HEAD:components/partials/Aside.vue
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
    menu() { return '/' + this.$route.params.section },
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
=======
import sortBy from 'lodash.sortby'

export default {
  props: {
    links: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      current: 0,
      setInter: null,
      showNav: false,
      section: this.$route.params.section
    }
  },
  computed: {
    visible() {
      return this.$store.state.visibleAffix
    },
    path() {
      return this.$route.path.slice(-1) === '/'
        ? this.$route.path.slice(0, -1)
        : this.$route.path
    },
    menu() {
      return '/' + this.$route.params.section
    },
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t(`content.${this.section}`)).indexOf(
          link
        )
      }).forEach(key => {
        links[key] = this.links[key]
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/TheAsideNav.vue
      })
      return links
    }
  },
<<<<<<< HEAD:components/partials/Aside.vue
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
=======
  methods: {
    toLink(link) {
      const slug = link.slug === 'index' ? undefined : link.slug
      return this.localePath({
        name: 'section-slug',
        params: { section: this.section, slug }
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/TheAsideNav.vue
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
