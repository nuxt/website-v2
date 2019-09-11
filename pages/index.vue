<template>
  <div>
    <home-welcome />
    <home-why />
    <home-companies />
    <home-modes />
    <!-- <home-targets/>
    <home-features/> -->
    <home-sponsors />
  </div>
</template>

<script>
import homeWelcome from '@/components/partials/home/welcome'
import homeWhy from '@/components/partials/home/why'
import homeCompanies from '@/components/partials/home/companies'
// import homeFeatures from '@/components/partials/home/features'
// import homeTargets from '@/components/partials/home/targets'
import homeSponsors from '@/components/partials/home/sponsors'
import homeModes from '@/components/partials/home/modes'

export default {
  components: {
    homeWelcome,
    homeWhy,
    homeCompanies,
    // homeFeatures,
    // homeTargets,
    homeSponsors,
    homeModes
  },
  head () {
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
        { name: 'twitter:image:alt', content: 'NuxtJS Logo' }
      ]
    }
  // },
  // async asyncData () {
  //   let sponsors = await fetch('https://opencollective.com/nuxtjs/members/organizations.json').then(res => res.json())
  //   return {
  //     sponsors
  //   }
  }
}
</script>
