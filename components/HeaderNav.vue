<template>
  <nav class="Nav" :class="{'Nav--hidden': !visible}">
    <div class="Nav__Search">
      <nuxt-header-nav-search/>
    </div>
    <div class="Nav__Menu">
      <nuxt-header-nav-menu/>
    </div>
    <div class="Nav__Lang">
      <nuxt-header-nav-lang/>
    </div>
  </nav>
</template>

<script>
import NuxtHeaderNavSearch from '~components/HeaderNavSearch.vue'
import NuxtHeaderNavMenu from '~components/HeaderNavMenu.vue'
import NuxtHeaderNavLang from '~components/HeaderNavLang.vue'

export default {
  computed: {
    visible () { return this.$store.state.visibleHeader }
  },
  components: {
    NuxtHeaderNavSearch,
    NuxtHeaderNavMenu,
    NuxtHeaderNavLang
  }
}
</script>

<style lang="scss" scoped>
.Nav
{
  display: block;
  position: fixed;
  z-index: 995;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: #fff;
  @media (min-width: 991px)
  {
    display: flex;
    flex: 1;
    top: 0;
    flex-wrap: nowrap;
    overflow-y: visible;
    position: relative;
  }
  &--hidden
  {
    display: none;
    @media (min-width: 991px)
    {
      display: flex;
    }
  }
  &__Search
  {
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px)
    {
      flex: 3;
      order: 1;
      height: inherit;
      border-bottom: none;
    }
  }
  &__Lang
  {
    width: 100%;
    display: flex;
    @media (min-width: 991px)
    {
      width: 80px;
    }
  }
  &__Menu
  {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px)
    {
      flex: 4;
      order: 2;
      border-bottom: none;
    }
  }
}
</style>
