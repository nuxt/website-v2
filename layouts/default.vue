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
    <LayoutMain>
      <template #start>
        <nav>
          {{ navigation }}
        </nav>
      </template>
      <template #center>
        <article>
          <slot/>
        </article>
      </template>
      <template #end>
        <aside>
          TOC
        </aside>
      </template>
    </LayoutMain>
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
  }
})
</style>
