<template>
  <main class="main">
    <div class="row">
      <div class="row_start">
        <slot name="start">
          Start
        </slot>
      </div>
      <div class="row_center">
        <slot name="center">
          Center
        </slot>
      </div>
      <div class="row_end">
        <slot name="end">
          End
        </slot>
      </div>
    </div>
  </main>
</template>

<style lang="ts">
css({
  '.main': {
    zIndex: 0,
    minHeight: 'calc(100vh - {space.16})',
    '.row': {
      '&_start': {
        uiBorderR: 'base',
      },
      '&_end': {
        uiBorderL: 'base',
      }
    }
  }
})
</style>
