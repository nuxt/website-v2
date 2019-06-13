<template>
  <header class="nui-header">
    <nui-container>
      <nui-row class="nui-header-row">
        <div class="nui-header-logo">
          <a class="nui-header-logo-link" href="/" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push('/design')">
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
      </nui-row>
    </nui-container>
  </header>
</template>

<script>
import nuiContainer from '@/components/ui/Container'
import nuiRow from '@/components/ui/Row'
import nuiLogo from '@/components/svg/Nuxtjs'
import nuiLinks from '@/components/partials/HeaderLinks'
import nuiSearch from '@/components/partials/HeaderSearch'

export default {
  components: {
    nuiContainer,
    nuiRow,
    nuiLogo,
    nuiLinks,
    nuiSearch
  }
}
</script>

<style lang="scss">
.nui-header {
  padding: 2rem 0;
  position: relative;
  z-index: 10;
  background-color: #fff;
  &-row {
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
