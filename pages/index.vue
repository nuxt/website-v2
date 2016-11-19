<template>
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
      </div>
    </div>
  </div>
</template>

<script>
import NuxtHeader from '~components/Header.vue'

export default {
  components: {
    NuxtHeader
  }
}
</script>

<style lang="scss" scoped>
.Landscape
{
  &__Content
  {
    padding: 100px 0;
    text-align: center;
    &__Image
    {
      max-width: 100%;
      display: inline-block;
    }
    &__Title
    {
      font-weight: 300;
      font-size: 2em;
      letter-spacing: 1px;
      margin: 40px 0;
      color: #2e2f30;
    }
    &__List
    {
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
            border-color: #00BCD4;
            background-color: #00BCD4;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
