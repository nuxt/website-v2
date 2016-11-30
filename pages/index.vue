<template>
  <div>
    <section class="Landscape">
      <div class="Landscape__Content">
        <div class="container content">
          <img src="~static/logo.png" alt="Logo nuxt" class="Landscape__Content__Image"/>
          <h2 class="Landscape__Content__Title">
            A minimalistic framework <br>for server-rendered Vue.js applications
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
      </div>
    </section>
    <nuxt-footer></nuxt-footer>
  </div>
</template>

<script>
import NuxtFooter from '~components/Footer.vue'

export default {
  components: {
    NuxtFooter
  }
}
</script>

<style lang="scss" scoped>
.Landscape
{
  background-color: #fcfcfc;
  &__Content
  {
    padding: 50px 0;
    text-align: center;
    @media (min-width: 576px)
    {
      padding: 100px 0;
    }
    &__Image
    {
      max-width: 100%;
      display: inline-block;
    }
    &__Title
    {
      font-weight: 300;
      font-size: 2.5em;
      letter-spacing: 1px;
      margin: 40px 0;
      margin-bottom: 20px;
      color: #35495e;
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
      }
    }
  }
}
</style>
