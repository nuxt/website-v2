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
          <a class="button" href="https://github.com/nuxt/nuxt.js" target="_blank">
            {{ $store.state.lang.links.github }}
          </a>
        </li>
      </ul>
    </section>
    <nuxt-footer></nuxt-footer>
>>>>>>> 2eed1dad (affix)
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
  &__Content
  {
    padding: 100px 0;
    text-align: center;
    &__Image
=======
  background-color: #fff;
  padding: 70px 15px;
  text-align: center;
  @media (min-width: 992px)
  {
    padding: 140px 30px;
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
>>>>>>> 2eed1dad (affix)
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
      padding: 20px 15px;
      padding-bottom: 0;
      .button
      {
        font-size: 16px;
>>>>>>> 2eed1dad (affix)
      }
    }
  }
  /*background-color: #171F26;*/
  /*background: url("../static/sunrise2.png") no-repeat fixed top;*/
}
</style>
