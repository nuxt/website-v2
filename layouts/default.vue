<template>
  <div>
    <navbar></navbar>
    <div :class="{'App--hidden': visible}">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~components/Header.vue'

export default {
  watch: {
    $route: 'setStore'
  },
  computed: {
    visible () { return this.$store.state.visibleHeader }
  },
  methods: {
    setStore () {
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
    }
  },
  head () {
    let canonical = `https://nuxtjs.org${this.$route.path}`
    if (this.$store.state._lang !== 'en') {
      canonical = `https://${this.$store.state._lang}.nuxtjs.org${this.$route.path}`
    }
    if (canonical.slice(-1) !== '/') {
      canonical = canonical + '/'
    }
    return {
      htmlAttrs: { lang: this.$store.state._lang },
      link: [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'cn', href: `https://cn.nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'ru', href: `https://ru.nuxtjs.org${this.$route.path}` }
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.App
{
  &--hidden
  {
    display: none;
    @media (min-width: 992px)
    {
      display: block;
    }
  }
}
</style>
