<template>
  <div>
    <section class="Landscape">
      <div class="Landscape__Logo">
        <nuxt-logo/>
        <h1 class="Landscape__Logo__Title">NUXT</h1>
      </div>
      <h2 class="Landscape__Title">
        {{ $store.state.lang.homepage.title }}
      </h2>
      <ul class="Landscape__List">
        <li class="Landscape__List__Item">
          <nuxt-link class="button button--green" to="/guide/installation">
            {{ $store.state.lang.links.get_started }}
          </nuxt-link>
        </li>
        <li class="Landscape__List__Item">
          <a class="button button--grey" href="https://github.com/nuxt/nuxt.js" target="_blank">
            {{ $store.state.lang.links.github }} ({{ $store.state.ghVersion }})
          </a>
        </li>
      </ul>
    </section>
    <nuxt-footer/>
  </div>
</template>

<script>
import NuxtLogo from '~components/VueToNuxtLogo.vue'
import NuxtFooter from '~components/Footer.vue'

export default {
  components: {
    NuxtLogo,
    NuxtFooter
  },
  head () {
    return {
      title: this.$store.state.lang.homepage.meta.title,
      meta: [
        { name: 'description', hid: 'description', content: this.$store.state.lang.homepage.meta.description },
        // Open Grapg
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

<style lang="scss" scoped>
.Landscape
{
  min-height: 100vh;
  background-color: #fff;
  padding: 70px 15px;
  padding-top: 100px;
  text-align: center;
  @media (min-width: 992px)
  {
    padding: 140px 30px;
    padding-top: 200px;
  }
  &__Logo
  {
    &__Title
    {
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
      padding: 25px 15px;
      @media (min-width: 992px)
      {
        font-size: 120px;
        display: inline-block;
        padding: 0;
        padding-left: 30px;
      }
    }
  }
  &__Title
  {
    font-weight: 300;
    font-size: 45px;
    line-height: normal;
    margin: 30px 0;
    color: #526488;
    word-spacing: 5px;
    @media (min-width: 992px)
    {
      font-size: 60px;
    }
  }
  &__List
  {
    list-style: none;
    margin: 0;
    padding: 0;
    &__Item
    {
      display: inline-block;
      padding: 15px;
      padding-bottom: 0;
    }
  }
}
</style>
