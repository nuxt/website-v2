<template>
  <div class="Category">
    <nuxt-affix :list="list" category="guide"></nuxt-affix>
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
  computed: {
    visible () { return this.$store.state.visibleAffix },
    list () { return this.$store.state.menu.guide }
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
    @media (min-width: 992px)
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
