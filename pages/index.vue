<template>
  <div class="home">
    <s-welcome/>
    <s-why/>
    <s-modes/>
    <s-codesandbox/>
    <s-backers/>
    <nuxt-footer/>
  </div>
</template>

<script>
import sWelcome from '@/partials/home/welcome'
import sWhy from '@/partials/home/why'

export default {
  components: {
    sWelcome,
    sWhy,
    sModes: () => import('@/partials/home/modes'),
    sCodesandbox: () => import('@/partials/home/codesandbox'),
    sBackers: () => import('@/partials/home/backers'),
    NuxtFooter: () => import('@/components/Footer.vue')
  },
  head() {
    return {
      title: this.$store.state.lang.homepage.meta.title,
      meta: [
        { name: 'description', hid: 'description', content: this.$store.state.lang.homepage.meta.description },
        // Open Graph
        { name: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://nuxtjs.org' },
        { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png' },
        { name: 'twitter:image:alt', content: 'Nuxt.js Logo' }
      ]
    }
  }
}
</script>

<style lang="scss">
.home .container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 $font-size-xs;
  margin: 0 auto;
  @media (min-width: $--xs) {
    padding: 0 $font-size-sm;
    max-width: $--xs;
  }
  @media (min-width: $--sm) {
    padding: 0 $font-size-base;
    max-width: $--sm;
  }
  @media (min-width: $--md) {
    padding: 0 $font-size-lg;
    max-width: $--md;
  }
  @media (min-width: $--lg) {
    padding: 0 $font-size-xl;
    max-width: $--lg;
  }
}

.home .row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: stretch;
  @media (min-width: $--md) {
    flex-direction: row;
  }
}
</style>
