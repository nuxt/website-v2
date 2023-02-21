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
    '.row': {
      minHeight: 'calc(100vh - {space.16})',
      '&_start': {
        display: 'sticky',
        top: '{space.16}',
        padding: '{space.5}',
        paddingLeft: 0
      },
      '&_center': {
        uiBorderX: 'base',
        padding: '{space.5} {space.10}',
      },
      '&_end': {
        padding: '{space.5}',
        paddingRight: 0
      }
    }
  }
})
</style>
