<template>
  <div>
    <section class="Landscape">
      <img src="/logo_home_mobile.png" alt="Logo nuxt" class="Landscape__Image Landscape__Image--mobile"/>
      <img src="/logo_home.png" alt="Logo nuxt" class="Landscape__Image Landscape__Image--desktop"/>
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
          <a class="button" href="https://github.com/nuxt/nuxt.js" target="_blank">
            {{ $store.state.lang.links.github }}
          </a>
        </li>
      </ul>
    </section>
    <nuxt-footer/>
  </div>
</template>

<script>
import NuxtFooter from '~components/Footer.vue'

export default {
  components: {
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
  padding-top: 130px;
  text-align: center;
  @media (min-width: 992px)
  {
    padding: 140px 30px;
    padding-top: 220px;
  }
  &__Image
  {
    &--mobile
    {
      display: inline-block;
      @media (min-width: 992px)
      {
        display: none;
      }
    }
    &--desktop
    {
      display: none;
      @media (min-width: 992px)
      {
        display: inline-block;
      }
    }
  }
  &__Title
  {
    font-weight: 300;
    font-size: 40px;
    line-height: 45px;
    letter-spacing: 1px;
    margin: 20px 0;
    color: #35495e;
    @media (min-width: 992px)
    {
      font-size: 52px;
      margin: 30px 0;
      margin-bottom: 50px;
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
      padding: 20px 15px;
      padding-bottom: 0;
      .button
      {
        font-size: 16px;
      }
    }
  }
}
</style>
