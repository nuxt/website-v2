<template>
  <div class="Category">
    <nuxt-affix :list="list"></nuxt-affix>
    <div class="Category__Content" :class="{'Category__Content--hidden': visible}">
      <nuxt-child></nuxt-child>
    </div>
    <div class="Category__Footer">
      <nuxt-footer></nuxt-footer>
    </div>
  </div>
</template>

<script>
import NuxtAffix from '~components/Affix.vue'
import NuxtFooter from '~components/Footer.vue'

export default {
  validate ({ params }) {
    let categories = ['guide', 'api', 'examples']
    return categories.indexOf(params.category) !== -1
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    list () { return this.$store.state.menu[this.$route.params.category] }
  },
  components: {
    NuxtAffix,
    NuxtFooter
  }
}
</script>

<style lang="scss" scoped>
.Category
{
  &__Content
  {
    position: relative;
    z-index: 10;
    padding: 15px;
    margin-top: 60px;
    height: 100%;
    @media (min-width: 990px)
    {
      padding: 30px;
      margin-top: 80px;
      margin-left: 300px;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 990px)
      {
        display: block;
      }
    }
  }
  &__Footer
  {
    display: block;
    @media (min-width: 990px)
    {
      display: none;
    }
  }
}
</style>
