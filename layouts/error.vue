<template>
  <div>
    <section class="Landscape">
      <div class="Landscape__Content">
        <div class="container content">
          <img src="~static/triangles.png" alt="Logo nuxt" class="Landscape__Content__Image"/>
          <h1 class="Landscape__Content__Title">
            {{ error.statusCode }}
          </h1>
          <h2 class="Landscape__Content__SubTitle">
            {{ error.message }}
          </h2>
          <ul class="Landscape__Content__List">
            <li class="Landscape__Content__List__Item">
              <nuxt-link v-if="error.statusCode === 404" class="button button--green" to="/">
                Homepage
              </nuxt-link>
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
  props: ['error'],
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
      font-size: 8em;
      letter-spacing: 1px;
      margin: 0;
      color: #35495e;
    }
    &__SubTitle
    {
      font-weight: 300;
      font-size: 2.5em;
      letter-spacing: 1px;
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
