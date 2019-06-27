<template>
  <div class="font-sans font-medium bg-gray-100 text-nuxt-gray">
    <nui-header/>
    <main class="App" :class="{'App--hidden': visible}">
      <!-- <event-info/> -->
      <nuxt/>
    </main>
    <nui-footer/>
  </div>
</template>

<script>
import nuiHeader from '@/components/nui/partials/Header'
import nuiFooter from '@/components/nui/partials/Footer'
import EventInfo from '~/components/EventInfo.vue'

export default {
  watch: {
    $route: 'setStore'
  },
  computed: {
    visible() { return this.$store.state.visibleHeader }
  },
  methods: {
    setStore() {
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
    }
  },
  head() {
    let canonical = `https://nuxtjs.org${this.$route.path}`
    if (this.$store.state.locale !== 'en') {
      canonical = `https://${this.$store.state.locale}.nuxtjs.org${this.$route.path}`
    }
    let link = [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'zh', href: `https://zh.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ru', href: `https://ru.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ja', href: `https://ja.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ko', href: `https://ko.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'fr', href: `https://fr.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'id', href: `https://id.nuxtjs.org${this.$route.path}` }
    ]
    link.forEach((l) => {
      if (l.href.slice(-1) !== '/') {
        l.href = l.href + '/'
      }
    })
    return {
      htmlAttrs: { lang: this.$store.state.locale },
      link
    }
  },
  components: {
    nuiHeader,
    nuiFooter,
    EventInfo
  }
}
</script>

<style lang="scss">
.App {
  position: relative;
  z-index: 0;
  // margin-top: 60px;
  // @media (min-width: 991px) {
  //   margin-top: 80px;
  // }
  &--hidden {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}
.logos-enter-active, .logos-leave-active {
  transition: opacity .3s;
}
.logos-enter, .logos-leave-to {
  opacity: 0;
}
</style>
