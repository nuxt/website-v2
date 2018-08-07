<template>
  <nav class="Nav">
    <slot/>
  </nav>
</template>

<style lang="scss">
$nav-height-lg: 72px;
$nav-height-sm: 64px;
$nav-height-xs: 56px;

.Nav {
  height: $nav-height-xs;
  color: $color-white;
}
</style>
