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
    let link = [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'zh', href: `https://cn.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ru', href: `https://ru.nuxtjs.org${this.$route.path}` }
    ]
    link.forEach((l) => {
      if (l.href.slice(-1) !== '/') {
        l.href = l.href + '/'
      }
    })
    return {
      htmlAttrs: { lang: this.$store.state._lang },
      link
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
