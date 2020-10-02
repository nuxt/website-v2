---
title: 'Properti watchQuery'
description: Perhatikan query string dan jalankan metode komponen pada perubahan (asyncData, fetch, validate, layout, ...)
menu: Properti watchQuery
category: komponen-glosarium
---

> Perhatikan query string dan jalankan metode komponen saat ada perubahan (asyncData, fetch(context), validate, layout, ...)

- **Jenis:** `Boolean` atau `Array` atau `Function` (default: `[]`)

Gunakan kata kunci `watchQuery` untuk menyiapkan pengamat untuk query string. Jika string yang ditentukan berubah, semua metode komponen (asyncData, fetch (konteks), validate, layout, ...) akan dipanggil. Pengamatan dinonaktifkan secara default untuk meningkatkan kinerja.

Jika Anda ingin menyiapkan pengamat untuk semua query string, Tentukan `watchQuery: true`.

```js
export default {
  watchQuery: ['page']
}
```

Anda juga dapat menggunakan fungsi tersebut `watchQuery(newQuery, oldQuery)` untuk memiliki pengamat yang lebih baik.

```js
export default {
  watchQuery(newQuery, oldQuery) {
    // Only execute component methods if the old query string contained `bar`
    // and the new query string contains `foo`
    return newQuery.foo && oldQuery.bar
  }
}
```

<base-alert>

**Peringatan**: Hook `fetch` baru yang diperkenalkan di 2.12 tidak terpengaruh oleh `watchQuery`. Untuk informasi lebih lanjut, lihat [disini.](/guides/features/data-fetching#the-fetch-hook).

</base-alert>
