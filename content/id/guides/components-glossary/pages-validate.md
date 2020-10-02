---
title: 'Metode Validasi'
description: Nuxt.js memungkinkan Anda menentukan metode validator di dalam komponen rute dinamis Anda.
menu: Metode Validasi
category: komponen-glosarium
---

> Nuxt.js memungkinkan Anda menentukan metode validator di dalam komponen rute dinamis Anda.

- **Type:** `Function` atau `Async Function`

`validate` dipanggil setiap kali sebelum menavigasi ke rute baru. Ini akan disebut sisi server sekali (pada permintaan pertama ke aplikasi Nuxt) dan sisi klien saat menavigasi ke rute lebih lanjut. Metode ini mengambil [`konteks`](/guides/internals-glossary/context) object as an argument.

```js
validate({ params, query, store }) {
  return true // if the params are valid
  return false // will stop Nuxt.js to render the route and display the error page
}
```

```js
async validate({ params, query, store }) {
  // await operations
  return true // if the params are valid
  return false // will stop Nuxt.js to render the route and display the error page
}
```

Anda juga dapat mengembalikan izin:

```js
validate({ params, query, store }) {
  return new Promise((resolve) => setTimeout(() => resolve()))
}
```

Nuxt.js memungkinkan Anda menentukan metode validator di dalam komponen rute dinamis (Contoh: `pages/users/_id.vue`).

Jika metode validasi tidak mengembalikan `true`, Nuxt.js akan secara otomatis memuat halaman kesalahan 404.

```js
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
```

Anda juga dapat memeriksa beberapa data di berkas [store](/guides/directory-structure/store) misalnya (diisi oleh [`nuxtServerInit`](/guides/directory-structure/store#the-nuxtserverinit-action) Sebelum tindakan):

```js
export default {
  validate({ params, store }) {
    // Check if `params.id` is an existing category
    return store.state.categories.some(category => category.id === params.id)
  }
}
```

Anda juga dapat menampilkan galat yang diharapkan atau tidak terduga selama eksekusi fungsi validasi:

```js
export default {
  async validate({ params, store }) {
    // Throws a 500 internal server error with custom message
    throw new Error('Under Construction!')
  }
}
```
