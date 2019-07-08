<template>
  <div>
    <section class="Landscape">
      <img src="~static/triangles.png" alt="Logo nuxt" class="Landscape__Image"/>
      <h1 class="Landscape__Title">
        {{ error.statusCode }}
      </h1>
      <h2 class="Landscape__SubTitle">
        {{ error.message }}
      </h2>
      <ul class="Landscape__List">
        <li class="Landscape__List__Item">
          <nuxt-link v-if="error.statusCode === 404" class="button button--green" to="/">
            {{ $store.state.lang.links.homepage }}
          </nuxt-link>
        </li>
      </ul>
    </section>
    <nuxt-footer></nuxt-footer>
  </div>
</template>

<script>
import NuxtFooter from '@/components/partials/Footer.vue'

export default {
  props: ['error'],
  components: {
    NuxtFooter
  }
}
</script>

<style lang="scss" scoped>
.Landscape
{
  $footer-height: 50px;

  min-height: calc(100vh - #{$footer-height});
  background-color: #fff;
  padding: 50px 15px;
  padding-top: 120px;
  text-align: center;
  @media (min-width: 991px)
  {
    padding: 100px 30px;
    padding-top: 180px;
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
    letter-spacing: 1px;
    margin: 20px 0;
    color: #35495e;
    font-size: 128px;
    line-height: 100px;
  }
  &__SubTitle
  {
    letter-spacing: 1px;
    line-height: normal;
    margin: 20px 0;
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
