<template>
<<<<<<< HEAD
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
=======
  <div class="relative">
    <nui-container v-if="error.statusCode === 404" class="pt-20">
      <div class="flex flex-wrap items-center justify-between">
        <h1 class="w-full text-3xl xl:text-4xl text-nuxt-gray text-center font-medium leading-normal -mb-6 z-10">
          {{ error.message }}
        </h1>
        <div class="w-full lg:w-2/3 mx-auto">
          <img src="/img/illustrations/404.png" alt="404">
        </div>
      </div>
    </nui-container>
    <nui-container v-else class="flex flex-wrap items-center justify-between">
      <div class="lg:w-1/2 text-center lg:text-left pl-8">
        <h1 class="text-6xl font-medium leading-normal text-nuxt-lightgreen">
          {{ error.statusCode }}
        </h1>
        <h3 class="text-4xl text-nuxt-gray font-medium leading-relaxed mb-6">
          {{ error.message }}
        </h3>
      </div>
      <div class="hidden lg:block lg:w-5/12 xl:w-4/12">
        <mountains-globe />
      </div>
    </nui-container>
>>>>>>> c7763d43 (New design with illustrations)
  </div>
</template>

<script>
<<<<<<< HEAD
import NuxtFooter from '~components/Footer.vue'
=======
import NuxtFooter from '@/components/partials/Footer.vue'
>>>>>>> cdec9baa (clean useless components)

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
  min-height: 100vh;
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
