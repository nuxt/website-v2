<template>
  <div class="app">
    <LayoutHeader />
    <LayoutHero />
    <LayoutMain>
      <nav>
        Nav
      </nav>
      <article>
        <slot/>
      </article>
      <aside>
        TOC
      </aside>
    </LayoutMain>
    <LayoutFooter />
  </div>
</template>

<style lang="ts">
css({
  'html': {
    antialiased: true,
    bg: 'base',
    text: 'base'
  },
  '.container': {
    container: true
  },
  '.app': {
    fontFamily: '{font.sans}',
    '&-main': {
      zIndex: 0,
      minHeight: '100vh',
    }
  }
})
</style>
