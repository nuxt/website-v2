<template>
  <div>
    <navbar></navbar>
    <div class="App" :class="{'App--hidden': visible}">
      <nuxt/>
    </div>
    <div class="EventInfo">
      <a href="https://vuetoronto.com/tickets/?unii-discount-code=NUXTJS100" target="_blank" rel="noopener">{{ $store.state.lang.text.vue_toronto }}</a>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Header.vue'

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
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.App {
  &--hidden {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
  padding-bottom: 80px;
  @media (min-width: 516px) {
    padding-bottom: 60px;
  }
  @media (min-width: 1006px) {
    padding-bottom: 40px;
  }
}
.EventInfo {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 10px;
  text-align: center;
  background-color: #41b883;
  a {
    color: #fff;
    font-weight: 600;
  }
}
</style>
