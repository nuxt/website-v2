<template>
  <div class="Home">
    <home-welcome/>
    <home-why/>
    <partial-partners/>
    <br>
    <!-- <s-modes/>
    <s-codesandbox/>
    <s-backers/> -->
    <!-- <nuxt-footer/> -->
  </div>
</template>

<script>
import nuiHero from '@/components/ui/Hero'
import nuiContainer from '@/components/ui/Container'
import nuiRow from '@/components/ui/Row'
import nuiMedia from '@/components/ui/Media.vue'
import nuiButton from '@/components/ui/Button.vue'
import nuiSvgPlay from '@/components/svg/Play.vue'
import nuiSvgGh from '@/components/svg/Github.vue'

import homeWelcome from '@/partials/home/welcome'
import homeWhy from '@/partials/home/why'
import partialPartners from '@/components/partials/Partners'

export default {
  components: {
    nuiHero,
    nuiContainer,
    nuiRow,
    nuiMedia,
    nuiButton,
    nuiSvgPlay,
    nuiSvgGh,
    homeWelcome,
    homeWhy,
    partialPartners,
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
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;
$light_grey: #F1F5F8;

.Home {
  background-color: $light_grey;
}
</style>
