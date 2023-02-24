<template>
  <footer class="footer">
    <div class="row">
      <div class="row_start">
        <select id="color-mode" v-model="$colorMode.preference">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">System</option>
        </select>
      </div>
      <div class="row_center">
        <p>Copyright © 2022 Nuxt - MIT License</p>
      </div>
      <div class="row_end">
        <select>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>
    </div>
  </footer>
</template>

<style lang="ts">
css({
  '.footer': {
    height: '{space.16}',
    uiBorderT: 'base',
    uiBg: 'base',
    '.row': {
      height: '100%',
      '&_start': {
        uiFlexStart: true,
      },
      '&_center': {
        uiFlexCenter: true,
        uiText: 'info',
        fontSize: '{font.size.sm}',
        padding: '0 {space.5}',
      },
      '&_end': {
        uiFlexEnd: true,
        gap: '{space.3}'
      }
    },
    'select': {
      uiBorder: 'base',
      uiBg: 'base',
      uiText: 'info',
      height: '{space.9}',
      padding: '0 {space.2}',
      borderRadius: '{space.5}',
      fontSize: '{font.size.sm}',
    }
  }
})
</style>
