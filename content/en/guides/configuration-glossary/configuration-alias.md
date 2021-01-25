---
title: 'The alias Property'
description: Nuxt.js allows you to use aliases to access custom directories within your JavaScript and CSS
menu: alias
category: configuration-glossary
position: 0
---

> Nuxt.js allows you to use aliases to access custom directories within your JavaScript and CSS.

- Type: `Object`
- Default:
  ```js
  {
    '~~': `<rootDir>`,
    '@@': `<rootDir>`,
    '~': `<srcDir>`,
    '@': `<srcDir>`,
    'assets': `<srcDir>/assets`, // (unless you have set a custom `dir.assets`)
    'static': `<srcDir>/static`, // (unless you have set a custom `dir.static`)
  }
  ```

This option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS.

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

<base-alert type="warning">Within a Webpack context (image sources, CSS - but _not_ JavaScript) you must prefix your alias with `~` (as in the example above).</base-alert>

<base-alert type="info">If you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your `paths` object within `tsconfig.json`.</base-alert>
