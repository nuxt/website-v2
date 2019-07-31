<template>
  <div>
    <home-welcome/>
    <home-why/>
    <!-- <partial-partners/> -->
    <home-features/>
    <home-showcase/>
    <home-modes/>
  </div>
</template>

<script>
import homeWelcome from '@/partials/home/welcome'
import homeWhy from '@/partials/home/why'
// import partialPartners from '@/components/partials/Partners'
import homeFeatures from '@/partials/home/features'
import homeShowcase from '@/partials/home/showcase'
import homeModes from '@/partials/home/modes'

export default {
  components: {
    homeWelcome,
    homeWhy,
    // partialPartners,
    homeFeatures,
    homeShowcase,
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
