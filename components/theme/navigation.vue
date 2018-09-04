<template>
  <nav class="nNavigation" :class="{'nNavigation--row': isRow }">
    <slot/>
  </nav>
</template>

<script>
// import nLogo from '@/components/svg/nuxt'

export default {
  props: {
    isRow: Boolean
  }
  // components: {
  //   nLogo
  // }
}
</script>

<style lang="scss">
.nNavigation {
  display: flex;
  color: $color-text-regular;
  &--row {
    align-items: stretch;
  }
}
</style>
