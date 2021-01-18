---
title: 'The alias Property'
description: Provide alias for javascript, template, and style
menu: alias
category: configuration-glossary
position: 0
---

- Type: `Object`
- Default:
  ```js
  {
    '~~': `<rootDir>`,
    '@@': `<rootDir>`,
    '~': `<srcDir>`,
    '@': `<srcDir>`,
    // (unless you have set a custom `dir.assets`)
    'assets': `<srcDir>/assets`,
    // (unless you have set a custom `dir.static`)
    'static': `<srcDir>/static`,
  }
  ```

This option lets you define aliases that will be available within your JavaScript and CSS (in addition to the ones above).

```js{}[nuxt.config.js]
import { resolve } from 'path'
export default {
  alias: {
    'images': resolve(__dirname, './assets/images'),
    'style': resolve(__dirname, './assets/style'),
    'data': resolve(__dirname, './assets/other/data)'
  }
}
```

```html{}[components/example.vue]
<template>
  <img src="~images/main-bg.jpg">
</template>

<script>
import data from 'data/test.json'

// etc.
</script>

<style>
@import '~style/variables.scss';
@import '~style/utils.scss';
@import '~style/base.scss';

body {
  background-image: url('~images/main-bg.jpg');
}
</style>
```
