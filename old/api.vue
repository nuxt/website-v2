<template>
  <div class="API">
    <nuxt-affix :list="$store.state.apiMenu" menu="/api"></nuxt-affix>
    <div class="API__Content" :class="{'API__Content--hidden': visible}">
      <nuxt-child></nuxt-child>
      <p class="API__Contribute">Caught a mistake or want to contribute to the documentation?
        <a :href="'https://github.com/nuxt/docs/blob/master/api/'+path+'.md'" target="_blank">
          Edit this page on Github!
        </a>
      </p>
    </div>
    <div class="API__Footer">
      <nuxt-footer></nuxt-footer>
    </div>
  </div>
</template>

<script>
import NuxtAffix from '~components/Affix.vue'
import NuxtFooter from '~components/Footer.vue'

export default {
  computed: {
    visible () { return this.$store.state.visibleAffix },
    path () { return this.$route.params.slug || 'index' }
  },
  components: {
    NuxtAffix,
    NuxtFooter
  }
}
</script>

<style lang="scss" scoped>
.API
{
  &__Content
  {
    position: relative;
    z-index: 10;
    padding: 15px;
    margin-top: 60px;
    height: 100%;
    @media (min-width: 991px)
    {
      padding: 30px;
      margin-top: 80px;
      margin-left: 300px;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 992px)
      {
        display: block;
      }
    }
  }
  &__Contribute {
    border-top: 1px #dbdfe1 solid;
    padding-top: 20px;
    color: #7f8c8d;
  }
  &__Footer
  {
    display: block;
    @media (min-width: 992px)
    {
      display: none;
    }
  }
}
</style>
