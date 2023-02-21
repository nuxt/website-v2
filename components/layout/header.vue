<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="header_logo">
        <LogoNuxt />
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="ts">
css({
  '.header': {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderB: 'base',
    bg: 'base',
    '.container': {
      height: '{space.16}',
      flexBetween: true
    },
    '&_logo': {
      inlineFlex: true,
      text: 'accent',
      '.logo-nuxt': {
        height: '{space.6}'
      }
    }
  }
})
</style>
