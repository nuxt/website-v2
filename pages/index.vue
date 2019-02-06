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
