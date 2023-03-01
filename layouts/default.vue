<script setup>
const { navDirFromPath } = useContentHelpers()

// const basePath = `/${locale.value}/docs/${route.params.version}`
const basePath = `/`
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(queryContent(basePath)))
// const nav = navDirFromPath(basePath, navigation.value)

</script>

<template>
  <div class="app">
    <LayoutHeader />
    <!-- <LayoutHero /> -->
    <div class="app_container">
      <div class="app_container_nav">
        <LayoutNav :list="navigation" />
      </div>
      <div class="app_container_page">
        <slot/>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="ts">
css({
  'body': {
    fontFamily: '{font.family.sans}',
    uiAntialiased: true,
    uiBg: 'base',
    uiText: 'base'
  },
  '.row': {
    uiContainer: true,
    display: 'grid',
    gridTemplateColumns: '240px 1fr 240px',
  },
  '.app_container': {
    uiContainer: true,
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
    '&_nav': {
      uiBorderR: 'base',
      paddingRight: '{space.5}'
    }
  }
})
</style>
