<template>
  <nav class="Nav" :class="{'Nav--hidden': !visible}">
    <div class="Nav__Search">
      <nuxt-header-nav-search/>
    </div>
    <div class="Nav__Menu">
      <nuxt-header-nav-menu/>
    </div>
    <div class="Nav__Lang">
      <nuxt-header-nav-menu-dropdown :dropdownList="langList" :dropdownLabel="$store.state.lang.iso.toUpperCase()" />
    </div>
  </nav>
</template>

<script>
import NuxtHeaderNavSearch from '~/components/HeaderNavSearch.vue'
import NuxtHeaderNavMenu from '~/components/HeaderNavMenu.vue'
import NuxtHeaderNavMenuDropdown from '~/components/HeaderNavMenuDropdown.vue'

export default {
  computed: {
    visible() { return this.$store.state.visibleHeader },
    langList() {
      return [
        { name: 'English', path: 'https://nuxtjs.org' + this.$route.path },
        { name: 'Français', path: 'https://fr.nuxtjs.org' + this.$route.path },
        { name: '简体中文', path: 'https://zh.nuxtjs.org' + this.$route.path },
        { name: '日本語', path: 'https://ja.nuxtjs.org' + this.$route.path },
        { name: '한국어', path: 'https://ko.nuxtjs.org' + this.$route.path },
        { name: 'Русский', path: 'https://ru.nuxtjs.org' + this.$route.path },
        { name: 'Indonesian', path: 'https://id.nuxtjs.org' + this.$route.path }
      ]
    }
  },
  components: {
    NuxtHeaderNavSearch,
    NuxtHeaderNavMenu,
    NuxtHeaderNavMenuDropdown
  }
}
</script>

<style lang="scss" scoped>
.Nav {
  display: block;
  position: fixed;
  z-index: 995;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: #fff;
  @media (min-width: 991px) {
    display: flex;
    flex: 1;
    top: 0;
    flex-wrap: nowrap;
    overflow-y: visible;
    position: relative;
  }
  &--hidden {
    display: none;
    @media (min-width: 991px) {
      display: flex;
    }
  }
  &__Search {
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px) {
      flex: 3;
      order: 1;
      height: 79px;
      border-bottom: none;
    }
  }
  &__Lang {
    width: 100%;
    display: flex;
    @media (min-width: 991px) {
      width: 80px;
      height: 79px;
    }
  }
  &__Menu {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px) {
      flex: 4;
      order: 2;
      height: 79px;
      border-bottom: none;
    }
  }
}
</style>
