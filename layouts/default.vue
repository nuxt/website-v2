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
    return {
      htmlAttrs: { lang: this.$store.state._lang },
      link: [
        { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
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
