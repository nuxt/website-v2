<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div class="Landscape">
    <nuxt-header></nuxt-header>
    <div class="Landscape__Content">
      <div class="container">
        <img src="~static/logo_noir.png" alt="Logo nuxt" class="Landscape__Content__Image"/>
        <h2 class="Landscape__Content__Title">
          A minimalistic framework <br>for server-rendered Vue.js applications
        </h2>
        <ul class="Landscape__Content__List">
          <li class="Landscape__Content__List__Item">
            <router-link class="Landscape__Content__List__Item__Link" to="/guide">
              GUIDE
            </router-link>
          </li>
          <li class="Landscape__Content__List__Item">
            <router-link class="Landscape__Content__List__Item__Link" to="/examples">
              EXAMPLES
            </router-link>
          </li>
          <li class="Landscape__Content__List__Item">
            <a class="Landscape__Content__List__Item__Link" href="https://github.com/nuxt/nuxt.js" target="_blank">
              GITHUB
            </a>
          </li>
        </ul>
=======
  <div>
    <section class="Landscape">
<<<<<<< HEAD
      <div class="Landscape__Content">
        <div class="container content">
          <img src="~static/logo.png" alt="Logo nuxt" class="Landscape__Content__Image"/>
          <h2 class="Landscape__Content__Title">
            Universal Vue.js Applications
          </h2>
          <ul class="Landscape__Content__List">
            <li class="Landscape__Content__List__Item">
              <router-link class="button button--green" to="/guide/installation">
                GET STARTED
              </router-link>
            </li>
            <li class="Landscape__Content__List__Item">
              <a class="button" href="https://github.com/nuxt/nuxt.js" target="_blank">
                GITHUB
              </a>
            </li>
          </ul>
        </div>
>>>>>>> 925b7850 (navbar)
      </div>
    </div>
=======
  <div class="Homepage">
    <section class="Landscape">
      <img src="/logo_home_mobile.png" alt="Logo nuxt" class="Landscape__Image Landscape__Image--mobile"/>
      <img src="/logo_home.png" alt="Logo nuxt" class="Landscape__Image Landscape__Image--desktop"/>
=======
      <div class="Landscape__Logo">
        <nuxt-logo/>
        <h1 class="Landscape__Logo__Title">NUXT</h1>
      </div>
>>>>>>> 04981a67 (update homepage)
      <h2 class="Landscape__Title">
        {{ $store.state.lang.homepage.title }}
      </h2>
      <ul class="Landscape__List">
        <li class="Landscape__List__Item">
<<<<<<< HEAD
          <router-link class="button button--green" to="/guide/installation">
            GET STARTED
          </router-link>
=======
          <nuxt-link class="button button--green" to="/guide/installation">
            {{ $store.state.lang.links.get_started }}
          </nuxt-link>
>>>>>>> 3d1d3d02 (new architecture)
        </li>
        <li class="Landscape__List__Item">
          <a class="button button--grey" href="https://github.com/nuxt/nuxt.js" target="_blank">
            {{ $store.state.lang.links.github }} ({{ $store.state.version }})
          </a>
        </li>
      </ul>
    </section>
    <nuxt-footer></nuxt-footer>
>>>>>>> 2eed1dad (affix)
  </div>
</template>

<script>
<<<<<<< HEAD
import NuxtHeader from '~components/Header.vue'

export default {
  components: {
    NuxtHeader
=======
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
>>>>>>> 04981a67 (update homepage)
  }
}
</script>

<style lang="scss" scoped>
.Homepage
{
  padding-top: 60px;
  @media (min-width: 991px)
  {
    padding-top: 80px;
  }
}
.Landscape
{
<<<<<<< HEAD
<<<<<<< HEAD
  &__Content
  {
    padding: 100px 0;
    text-align: center;
    &__Image
=======
=======
  $footer-height: 120px;

  min-height: calc(100vh - #{$footer-height});
>>>>>>> 67a0d05a (docs: Add Shuttleworth funded logo)
  background-color: #fff;
  padding: 70px 15px;
<<<<<<< HEAD
=======
  padding-top: 100px;
>>>>>>> 04981a67 (update homepage)
  text-align: center;
  @media (min-width: 992px)
  {
    padding: 140px 30px;
<<<<<<< HEAD
=======
    padding-top: 200px;
>>>>>>> 04981a67 (update homepage)
  }
  &__Logo
  {
    &__Title
    {
<<<<<<< HEAD
      display: inline-block;
      @media (min-width: 992px)
      {
        display: none;
      }
    }
    &--desktop
>>>>>>> 2eed1dad (affix)
    {
      display: none;
=======
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
      padding: 25px 15px;
>>>>>>> 04981a67 (update homepage)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      font-weight: 300;
      font-size: 2em;
      letter-spacing: 1px;
      margin: 40px 0;
      color: #2e2f30;
=======
      font-size: 56px;
      margin: 40px 0;
>>>>>>> 2eed1dad (affix)
=======
      font-size: 52px;
      margin: 30px 0;
      margin-bottom: 50px;
>>>>>>> 2134651a (examples category)
=======
      font-size: 60px;
>>>>>>> 04981a67 (update homepage)
    }
  }
  &__List
  {
    list-style: none;
    margin: 0;
    padding: 0;
    &__Item
    {
<<<<<<< HEAD
      // float: right;
      list-style: none;
      margin: 0;
      padding: 0;
      &__Item
      {
        display: inline-block;
        padding: 15px;
        &__Link
        {
          display: block;
          color: #2e2f30;
          border: 2px solid #505153;
          height: 46px;
          line-height: 42px;
          width: 180px;
          text-align: center;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 1px;
          &:hover
          {
            background-color: #505153;
            color: #FFF;
          }
        }
=======
      display: inline-block;
      padding: 15px;
      padding-bottom: 0;
<<<<<<< HEAD
      .button
      {
        font-size: 16px;
>>>>>>> 2eed1dad (affix)
      }
=======
>>>>>>> 04981a67 (update homepage)
    }
  }
  /*background-color: #171F26;*/
  /*background: url("../static/sunrise2.png") no-repeat fixed top;*/
}
</style>
