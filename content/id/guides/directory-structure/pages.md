---
title: pages
description: Direktori `pages` merupakan tempat bagi View dan Route dari aplikasimu. Nuxt.js membaca seluruh file `.vue` di dalam direktori ini dan membuat konfigurasi router secara otomatis untukmu. 
position: 10
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/11_pages?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Pada direktori manakah page components ditempatkan?
    answers:
      - views
      - pages
      - vues
    correctAnswer: pages
  - question: Untuk membuat route, kamu perlu mengonfigurasi file router.js file secara manual
    answers:
      - true
      - false
    correctAnswer:
  - question: Kamu dapat membuat route dengan file .js dan .ts
    answers:
      - true
      - false
    correctAnswer: true
  - question: Kapan asyncData dipanggil?
    answers:
      - sebelum memuat komponen
      - ketika memuat komponen
      - setelah memuat komponen
    correctAnswer: sebelum memuat komponen
  - question: Di properti manakah kamu akan menempatkan meta tags?
    answers:
      - head
      - meta
      - metaTags
    correctAnswer: head
  - question: Properti apa yang kamu gunakan untuk menambah sebuah layout berbeda pada halaman yang kamu buat?
    answers:
      - layouts
      - page
      - layout
    correctAnswer: layout
  - question: Bagaimana kamu menempatkan properti scrollToTop apabila kamu ingin memberitahu Nuxt.js untuk melakukan scrolling ke atas saat merender child route?
    answers:
      - "scrollToTop: 'scroll'"
      - 'scrollToTop: true'
      - "scroll: 'top'"
    correctAnswer: 'scrollToTop: true'
  - question: Bagaimana cara menambahkan middleware/auth.js ke dalam suatu halaman?
    answers:
      - 'middleware: true'
      - "middleware: 'auth'"
      - "import auth from 'middleware/auth.js'"
    correctAnswer: "middleware: 'auth'"
  - question: Dalam rangka mengatur sebuah watcher untuk kueri string, properti apa yang akan kamu gunakan?
    answers:
      - watcher
      - queryWatcher
      - watchQuery
    correctAnswer: watchQuery
  - question: Secara default, Watching dinonaktifkan.
    answers:
      - true
      - false
    correctAnswer: true
---

Direktori `pages` merupakan tempat bagi View dan Route dari aplikasimu. Nuxt.js membaca seluruh file `.vue` di dalam direktori ini dan membuat konfigurasi router secara otomatis untukmu. 

<base-alert type="info">

Kamu dapat membuat route dengan file .js dan .ts

</base-alert>

Setiap komponen halaman merupakan sebuah komponen Vue, namun Nuxt.js menambahkan atribut-atribut dan fungsi-fungsi spesial sehingga memudahkan pengembangan aplikasi universal kamu.

```html{}[pages
<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
  export default {
    // tempatkan properti-properti halaman disini
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
```

## Halaman dinamis

Halaman dinamis dapat dibuat ketika kamu tidak mengetahui nama halaman yang datang dari API atay kamu tidak ingin membuat halaman yang sama secara berulang-ulang. Untuk membuat halaman dinamis, kamu perlu menambahkan sebuah underscore sebelum nama file .vue ataupun sebelum nama direktorinya apabila kamu ingin menjadikan direktori tersebut dinamis. Kamu dapat menamai file ataupun direktori sesuai keinginanmu, namun kamu harus mengawalinya dengan sebuah underscore.

Apabila kamu mendefinisikan nama sebuah file `_slug.vue` dalam folder pages, kamu dapat mengakses nilainya menggunakan konteks dengan params.slug

```html{}[pages/_slug.vue]
<template>
  <h1>{{ this.slug }}</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // Ketika memanggil /abc, maka slug-nya akan menjadi "abc"
      return { slug }
    }
  }
</script>
```

Jika kamu mendefinisikan sebuah file bernama \_slug.vue di dalam sebuah folder bernama \_book kamu dapat mengakses nilainya dengan menggunakan konteks dengan params.slug dan params.book

```html{}[pages/_book/_slug.vue]
<template>
  <h1>{{ this.book }} / {{ this.slug }}</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const book = params.book
      const slug = params.slug
      return { book, slug }
    }
  }
</script>
```

## Properties

### asyncData

AsyncData dipanggil setiap sebelum memuat komponen. Itu bisa saja terjadi secara tidak sinkron (asynchronous) dan menerima konteks sebagai argumen. Objek kembalian akan digabungkan dengan data objekmu.

```js{}[pages/index.vue]
export default {
  asyncData (context) {
    return { name: 'World' }
  }
```

<base-alert type="next">

Ketahui lebih mendalam tentang bagaimana asyncData bekerja pada chapter berikut: [Data Fetching](/guides/features/data-fetching#async-data).

</base-alert>

### fetch

Setiap kamu perlu mengambil data asinkron, kamu dapat menggunakan *fetch*. *Fetch* dipanggil pada sisi server saat me-render route, dan pada sisi klien saat navigasi.

```html
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
        res.json()
      )
    }
  }
</script>
```

<base-alert type="next">

Ketahui lebih dalam tentang *fetch* pada chapter berikut: [Data Fetching](/guides/features/data-fetching).

</base-alert>

### head

Tetapkan tag-tag <meta> spesifik untuk halaman saat ini. Nuxt.js menggunakan `vue-meta` untuk memperbarui *document head* dan atribut-atribut meta dari aplikasimu.

```js{}[pages/index.vue]
export default {
  head() {
    // Set Meta Tags for this Page
  }
}
```

<base-alert type="next">

Ketahui lebih lanjutnya pada chapter: [Meta Tags and SEO](/guides/features/meta-tags-seo).

</base-alert>

### layout

Tentukan layout yang akan diterapkan pada halaman berdasarkan layout yang telah didefinisikan pada direktori layouts.

```js{}[pages/index.vue]
export default {
  layout: 'blog'
}
```

<base-alert type="next">

Ketahui lebih lanjut mengenai layout pada chapter: [Views](/guides/concepts/views#layouts).

</base-alert>

### loading

Jika nilainya diset **false**, maka sistem akan mencegah sebuah halaman memanggil `this.$nuxt.$loading.finish()` secara otomatis saat kamu memasukinya dan `this.$nuxt.$loading.start()` saat kamu meninggalkannya, serta mengizinkan kamu untuk mengontrol *behavior*-nya secara manual seperti ditunjukkan pada [contoh berikut](https://nuxtjs.org/examples/custom-page-loading).

```js{}[pages/index.vue]
export default {
  loading: false
}
```

<base-alert type="info">

Hanya berlaku jika loading di-*set* pada nuxt.config.js

</base-alert>

<base-alert type="next">

Lebih lanjutnya terdapat di chapter [Loading](/guides/features/loading).

</base-alert>

### transition

Mendefinisikan sebuah transisi secara spesifik untuk halaman tertentu.

```js{}[pages/index.vue]
export default {
  transition: 'fade'
}
```

<base-alert type="next">

Lebih lanjut tentang transitions terdapat di chapter [Transitions](/guides/features/transitions).

</base-alert>

### scrollToTop

Properti `scrollToTop` mengizinkan kamu memerintahkan Nuxt.js untuk melakukan *scrolling* menuju ke bagian atas sebelum proses render halaman. Pada umumnya, Nuxt.js melakukan ini ketika kamu mengunjungi halaman lain. Akan tetapi, pada rute-rute turunannya, Nuxt.js tetap menjaga posisi scroll. Apabila kamu ingin memerintahkan Nuxt.js untuk scroll ke atas ketika merender rute turunan (*child route*), set nilai `scrollToTop` menjadi `true`

```js{}[pages/index.vue]
export default {
  scrollToTop: true
}
```

Sebaliknya, kamu dapat secara manual mengatur nilai `scrollToTop` menjadi `false` pada parent routes.

Apabila kamu ingin mengubah kebiasaan default untuk scrolling pada Nuxt.js, silakan cek halaman berikut:[scrollBehavior option](/guides/configuration-glossary/configuration-router#scrollbehavior).

### middleware

Mendefinisikan middleware untuk halaman ini. Middleware akan dipanggil sebelum halaman di render.

```js{}[pages/index.vue]
export default {
  middleware: 'auth'
}
```

<base-alert type="next">

Cek lebih lanjut tentang middleware pada chapter [Middleware](/guides/directory-structure/middleware).

</base-alert>

### The watchQuery Property

Gunakan `watchQuery` untuk mengatur sebuah *watcher* untuk string-string kueri. Jika terdapat perubahan pada string-string yang telah didefinisikan, seluruh komponen method (asyncData, fetch, validate, layout, ...) akan dipanggil. Secara default, watching dinonaktifkan untuk meningkatkan kinerja. 

```js{}[pages/index.vue]
export default {
  watchQuery: ['page']
}
```

<base-alert type="info">

Apabila kamu ingin mengatur watcher untuk semua string kueri, set `watchQuery` menjadi `true`.

</base-alert>

```js{}[pages/index.vue]
export default {
  watchQuery: true
}
```

Kamu dapat pula menggunakan fungsi `watchQuery(newQuery, oldQuery)` untuk memperoleh watcher yang lebih baik.

```js{}[pages/index.vue]
export default {
  watchQuery(newQuery, oldQuery) {
    // Hanya mengeksekusi component methods apabila string kueri sebelumnya memiliki `bar`
    // dan string kueri baru memiliki `foo`
    return newQuery.foo && oldQuery.bar
  }
}
```

<base-alert type="next">

Ketahui lebih lanjut tentang properti watch pada chapter [Data Fetching](/guides/features/data-fetching).

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

## Ignoring pages

Apabila kamu ingin mengabaikan halaman-halaman tertentu sehingga halaman-halaman tersebut tidak akan dimasukkan ke dalam file `router.js`, kamu dapat melakukannya dengan memberikan prefiks `-`.

Contoh: `pages/-about.vue` akan diabaikan.

<base-alert type="next">

Pelajari lebih lanjut di [ignore option](/guides/configuration-glossary/configuration-ignore).

</base-alert>

## Configuration

Kamu bisa mengubah nama direktori `pages/` dengan mengatur opsi `dir.pages`:

```js{}[nuxt.config.js]
export default {
  dir: {
    // Mengubah nama direktori `pages` directory menjadi `routes`
    pages: 'routes'
  }
}
```

<base-alert type="next">

Pelajari lebih lanjut di [dir option](/guides/configuration-glossary/configuration-dir).

</base-alert>

<quiz :questions="questions"></quiz>
