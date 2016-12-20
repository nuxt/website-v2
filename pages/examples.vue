<template>
  <div class="Examples">
    <nuxt-affix :list="list"></nuxt-affix>
    <div class="Examples__Content" :class="{'Examples__Content--hidden': visible}">
      <nuxt-child></nuxt-child>
    </div>
    <div class="Examples__Footer">
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
    list () { return this.$store.state.menu.examples }
  },
  components: {
    NuxtAffix,
    NuxtFooter
  }
}
</script>

<style lang="scss" scoped>
.Examples
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
