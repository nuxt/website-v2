---
title: 'Properti cli'
description: Nuxt.js memungkinkan Anda menyesuaikan konfigurasi CLI.
menu: cli
category: configuration-glossary
position: 3
---

> Nuxt.js memungkinkan Anda menyesuaikan konfigurasi CLI.

## bannerColor

- Tipe: `String`
- Default: `'green'`

Ubah warna judul 'Nuxt.js' di spanduk CLI.

**Warna yang tersedia:**

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`, `redBright`, `greenBright`, `yellowBright`, `blueBright`, `magentaBright`, `cyanBright`, `whiteBright`

```js{}[nuxt.config.js]
export default {
  cli: {
    bannerColor: 'yellow'
  }
}
```
