<template>
  <div>
    <home-welcome/>
    <home-why/>
    <home-showcase/>
    <home-modes/>
    <home-targets/>
    <home-features/>
    <home-nuxters/>
  </div>
</template>

<script>
import homeWelcome from '@/partials/home/welcome'
import homeWhy from '@/partials/home/why'
import homeShowcase from '@/partials/home/showcase'
import homeFeatures from '@/partials/home/features'
import homeTargets from '@/partials/home/targets'
import homeNuxters from '@/partials/home/nuxters'
import homeModes from '@/partials/home/modes'

export default {
  components: {
    homeWelcome,
    homeWhy,
    homeShowcase,
    homeFeatures,
    homeTargets,
    homeNuxters,
    homeModes
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
