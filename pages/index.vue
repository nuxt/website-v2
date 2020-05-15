<template>
  <div>
    <HomeWelcome />
    <HomeWhy />
    <HomeCompanies />
    <HomeModes />
    <!-- <home-targets/>
    <home-features/> -->
    <HomeSponsors />
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: this.$store.state.lang.homepage.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.$store.state.lang.homepage.meta.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description }
      ]
    }
  }
  // async asyncData () {
  //   let sponsors = await fetch('https://opencollective.com/nuxtjs/members/organizations.json').then(res => res.json())
  //   return {
  //     sponsors
  //   }
}
</script>
