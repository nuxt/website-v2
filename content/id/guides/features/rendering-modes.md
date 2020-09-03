---
title: Mode Render
description: Mode Render
position: 1
category: features
---

## Universal

`mode: 'universal'`: Aplikasi isomorfis (untuk website yang di-_render_ pada sisi _server_ ataupun website statis).

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // default universal
}
```

<base-alert type="info">
Anda tidak harus menambahkan ini pada konfigurasi nuxt anda untuk menerapkan mode universal, karena mode universal sudah diterapkan sebagai mode default.
</base-alert>

## SPA

`mode: 'spa'`: Tidak di-_render_ di sisi _server_ (hanya di-_render_ ketika navigasi pada sisi klien)

Anda bisa menggunakan properti `mode` untuk mengubah mode default nuxt untuk proyek anda:

```js{}[nuxt.config.js]
export default {
  mode: 'spa' // default universal
}
```

<base-alert type="next">

[Properti mode](/guides/configuration-glossary/configuration-mode)

</base-alert>
