<template>
  <div class="page">
    <div class="page_article">
      <ContentDoc />
    </div>
    <div class="page_aside">
      <LayoutAside :links="[]"/>
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
