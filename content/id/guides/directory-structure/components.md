---
title: components
description: Direktori `components` berisi komponen Vue.js Anda. Komponen adalah apa yang biasanya membentuk berbagai bagian pada halaman Anda dan dapat digunakan kembali serta diimpor ke halaman, tata letak, dan bahkan komponen lainnya.
position: 3
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/03_components?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/components.png
imgAlt: nuxt components module
questions:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
---

Direktori `components` berisi komponen Vue.js Anda. Komponen adalah apa yang biasanya membentuk berbagai bagian pada halaman Anda dan dapat digunakan kembali serta diimpor ke halaman, tata letak, dan bahkan komponen lainnya.

### Pengambilan Data (_Fetching Data_)

Untuk mengakses data asynchronous dari API di komponen Anda, Anda dapat menggunakan Nuxt [`fetch()` hook](/docs/2.x/features/data-fetching#the-fetch-method).

Dengan menggunakan `$ fetchState.pending` kita dapat menampilkan pesan ketika data sedang menunggu untuk dimuat dan dengan menggunakan` $ fetchState.error` kita dapat menampilkan pesan kesalahan jika ada kesalahan saat proses pengambilan data. Saat menggunakan fetch, kita harus mendeklarasikan data pada properti data. Ini kemudian diisi dengan data yang berasal dari pengambilan.

```html{}[components/MountainsList.vue]
<template>
  <div>
    <p v-if="$fetchState.pending">Mengambil gunung...</p>
    <p v-else-if="$fetchState.error">Terjadi galat saat mengambil gunung</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```

<base-alert type="next">

Lihat bab [fetch()](/docs/2.x/features/data-fetching#the-fetch-method) untuk detail lebih lanjut tentang cara kerja pengambilan

</base-alert>

## Menemukan Komponen

<app-modal :src="img" :alt="imgAlt"></app-modal>

Mulai dari `v2.13`, Nuxt dapat mengimpor komponen Anda secara otomatis saat digunakan di template Anda, untuk mengaktifkan fitur ini, setel `components: true` dalam konfigurasi Anda:

```js{}[nuxt.config.js]
export default {
  components: true
}
```

Setelah Anda membuat komponen di dalam direktori `components`, mereka akan tersedia untuk diimpor secara otomatis.

```bash
components/
  TheHeader.vue
  TheFooter.vue
```

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

### Impor Dinamis

Untuk mengimpor komponen secara dinamis yang juga dikenal sebagai _lazy loading_ sebuah komponen, yang perlu Anda lakukan hanyalah menambahkan awalan `Lazy` di template Anda.

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <LazyTheFooter />
  </div>
</template>
```

Dengan menggunakan awalan _Lazy_, Anda juga dapat mengimpor komponen secara dinamis saat sebuah peristiwa dipicu.

```html{}[pages/index.vue]
<template>
  <div>
    <h1>Daftar Gunung</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="showList">Munculkan List</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      showList() {
        this.show = true
      }
    }
  }
</script>
```

### Direktori Bersarang (_Nested Directories_)

Jika Anda memiliki komponen dalam direktori bersarang seperti:

```bash
components/
  base/
    Button.vue
```

Nama komponen akan didasarkan pada nama berkasnya sendiri. Oleh karena itu komponennya adalah:

```html
<button />
```

Kami menyarankan Anda menggunakan nama direktori di nama berkas untuk kejelasan

```bash
components/
  base/
    BaseButton.vue
```

Namun jika Anda ingin mempertahankan nama berkas sebagai Tombol.vue maka Anda dapat menggunakan opsi prefiks di konfigurasi nuxt untuk menambahkan prefiks ke semua komponen di folder tertentu.

```bash
components/
  base/
   Button.vue
```

```bash{}[nuxt.config.js]
components: {
  dirs: [
    '~/components',
      {
        path: '~/components/base/',
        prefix: 'Base'
      }
  ]
}
```

Dan sekarang dalam template Anda, Anda dapat menggunakan BaseButton sebagai ganti Button tanpa harus mengubah nama berkas `Button.vue` Anda.

```html{}[pages/index.vue]
<BaseButton />
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<base-alert type="next">

Untuk mempelajari lebih lanjut tentang [komponen modul](/blog/improve-your-developer-experience-with-nuxt-components)

</base-alert>
