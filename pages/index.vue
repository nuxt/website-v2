<template>
  <div>
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
import sModes from '@/partials/home/modes'
import sCodesandbox from '@/partials/home/codesandbox'
import sBackers from '@/partials/home/backers'
import NuxtFooter from '@/components/Footer.vue'

export default {
  components: {
    sWelcome,
    sWhy,
    sModes,
    sCodesandbox,
    sBackers,
    NuxtFooter
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
        { name: 'og:image', content: 'https://i.imgur.com/PzEm5j2.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'twitter:image', content: 'https://i.imgur.com/PzEm5j2.png' },
        { name: 'twitter:image:alt', content: 'Nuxt.js Logo' }
      ]
    }
  }
}
</script>
