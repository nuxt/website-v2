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
        { hid: 'og:title', name: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: 'https://nuxtjs.org' },
        { hid: 'og:image', name: 'og:image', content: 'https://nuxtjs.org/nuxt-card.png' },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://nuxtjs.org/nuxt-card.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'The NuxtJS Framework' }
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
