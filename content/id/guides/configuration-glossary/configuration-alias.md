---
title: 'Properti alias'
description: Nuxt.js memungkinkan kamu menggunakan alias untuk mengakses direktori kustom di dalam JavaScript dan CSS.
menu: alias
category: configuration-glossary
position: 0
---

> Nuxt.js memungkinkan kamu menggunakan alias untuk mengakses direktori kustom di dalam JavaScript dan CSS.

- Tipe: `Object`
- Nilai bawaan:
  ```js
  {
    '~~': `<rootDir>`,
    '@@': `<rootDir>`,
    '~': `<srcDir>`,
    '@': `<srcDir>`,
    'assets': `<srcDir>/assets`, // (kecuali kamu telah mengatur `dir.assets` kustom)
    'static': `<srcDir>/static`, // (kecuali kamu telah mengatur `dir.static` kustom)
  }
  ```

Opsi ini memungkinkan kamu menentukan alias ke direktori di dalam proyek kamu (selain yang ada di atas). Alias ini dapat digunakan di dalam JavaScript dan CSS.

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

<base-alert type="warning">Di dalam konteks Webpack (sumber gambar, CSS - tetapi _bukan_ JavaScript) kamu harus mengawali alias dengan `~` (seperti pada contoh di atas).</base-alert>

<base-alert type="info">Jika kamu menggunakan TypeScript dan ingin menggunakan alias yang telah kamu tentukan dalam file TypeScript, kamu perlu menambahkan alias ke objek `paths` kamu di dalam `tsconfig.json`.</base-alert>
