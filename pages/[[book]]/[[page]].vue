<script setup>
const route = useRoute()
// const { locale } = useI18n()
const { data } = await useAsyncData(route.fullPath, () => queryContent(route.params.book, route.params.page).findOne())

// TODO: handle when page not found

useContentHead(data.value)
</script>

<template>
  <div class="page">
    <div class="page_article">
      <ContentRenderer :value="data" />
    </div>
    <div class="page_aside">
      <LayoutAside :links="data.body.toc.links"/>
    </div>
  </div>
</template>

<style lang="ts">
css({
  '.page': {
    display: 'grid',
    gridTemplateColumns: '1fr 240px',
    '&_article': {
      padding: '{space.5} {space.10}',
    },
    '&_aside': {
      uiBorderL: 'base',
      paddingLeft: '{space.5}'
    }
  }
})
</style>
