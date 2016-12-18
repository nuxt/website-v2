<template>
  <div class="Homepage">
    <section class="Landscape">
      <img src="/logo_home_mobile.png" alt="Logo nuxt" class="Landscape__Image Landscape__Image--mobile"/>
      <img src="/logo_home.png" alt="Logo nuxt" class="Landscape__Image Landscape__Image--desktop"/>
      <h2 class="Landscape__Title">
        Universal Vue.js Applications
      </h2>
      <ul class="Landscape__List">
        <li class="Landscape__List__Item">
          <router-link class="button button--green" to="/guide/installation">
            GET STARTED
          </router-link>
        </li>
        <li class="Landscape__List__Item">
          <a class="button" href="https://github.com/nuxt/nuxt.js" target="_blank">
            GITHUB
          </a>
        </li>
      </ul>
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
  background-color: #fff;
  padding: 70px 15px;
  text-align: center;
  @media (min-width: 991px)
  {
    padding: 140px 30px;
  }
  &__Image
  {
    &--mobile
    {
      display: inline-block;
      @media (min-width: 991px)
      {
        display: none;
      }
    }
    &--desktop
    {
      display: none;
      @media (min-width: 991px)
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
    @media (min-width: 991px)
    {
      font-size: 56px;
      margin: 40px 0;
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
