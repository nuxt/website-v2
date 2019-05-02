<template>
  <header class="nui-header">
    <nui-container class="nui-header-container">
      <div class="nui-header-logo">
        <a class="nui-header-logo-link" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
          <h1>NUXTJS</h1>
          <nui-logo/>
        </a>
      </div>
      <nav class="nui-header-nav">
        <nui-links/>
      </nav>
      <div class="nui-header-search">
        <nui-search/>
      </div>
    </nui-container>
  </header>
</template>

<script>
import nuiContainer from '@/components/ui/Container'
import nuiLogo from '@/components/svg/Nuxtjs'
import nuiLinks from '@/components/partials/HeaderLinks'
import nuiSearch from '@/components/partials/HeaderSearch'

export default {
  components: {
    nuiContainer,
    nuiLogo,
    nuiLinks,
    nuiSearch
  }
}
</script>

<style lang="scss">
.nui-header {
  padding: 2rem 0;
  z-index: 10;
  // box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  &-container {
    align-items: center;
  }
  &-logo {
    display: block;
    &-link {
      display: block;
      h1 {
        margin: 0;
        width: 0;
        height: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
