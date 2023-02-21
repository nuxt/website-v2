<template>
  <div class="app">
    <LayoutHeader />
    <!-- <LayoutHero /> -->
    <LayoutMain>
      <template #start>
        <nav>
          Nav
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
