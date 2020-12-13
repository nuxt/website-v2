---
title: content
description: Berdayakan aplikasi Nuxt.js Anda dengan modul `@nuxtjs/content` dimana Anda dapat menulis di dalam direktori `content/` dan mengambil berkas Markdown, JSON, YAML, dan CSV melalui API mirip MongoDB, yang bertindak sebagai **Git-based Headless CMS**.
position: 4
category: directory-structure
img: /docs/2.x/nuxt-content.svg
imgAlt: nuxt content module
questions:
  - question: Apa nama direktori bawaan dari direktori tempat Anda menambahkan berkas _markdown_?
    answers:
      - markdown
      - content
      - pages
    correctAnswer: content
  - question: Komponen apa yang Anda gunakan dalam template Anda untuk menampilkan badan pada halaman _markdown_ Anda?
    answers:
      - <markdown>
      - <nuxt>
      - <nuxt-content>
    correctAnswer: <nuxt-content>
  - question: Kelas apa yang ditambahkan secara otomatis sehingga Anda dapat mengatur gaya pada berkas _markdown_ Anda?
    answers:
      - .content
      - .nuxt-content
      - .markdown
    correctAnswer: .nuxt-content
  - question: Modul konten dapat menangani berkas markdown, csv, yaml dan json
    answers:
      - true
      - false
    correctAnswer: true
  - question: Anda dapat menambahkan komponen vue ke berkas _markdown_ Anda
    answers:
      - true
      - false
    correctAnswer: true
  - question: Manakah yang Anda gunakan untuk mendaftar, memfilter, dan mencari konten Anda?
    answers:
      - $nuxt-content()
      - $content()
      - $nuxt()
    correctAnswer: $content()
  - question: Apa yang Anda gunakan untuk mendapatkan artikel sebelumnya dan berikutnya?
    answers:
      - .surround(slug)
      - .prev-next(slug)
      - .slug()
    correctAnswer: .surround(slug)
  - question: Kelas PrismJS diterapkan ke blok kode secara bawaan?
    answers:
      - true
      - false
    correctAnswer: true
  - question: Apa URL bawaan yang Anda gunakan untuk mengakses API untuk melihat JSON Anda?
    answers:
      - http://localhost:3000/content
      - http://localhost:3000/_content
      - http://localhost:3000/api
    correctAnswer: http://localhost:3000/_content
  - question: Tag judul mana yang digunakan untuk membuat Daftar Isi
    answers:
      - h1 and h2
      - h2 and h3
      - h1 and h2 and h3
    correctAnswer: h2 and h3
  - question: Anda dapat menggunakan modul konten dengan mode pembuatan situs statis
    answers:
      - true
      - false
    correctAnswer: true
---

Berdayakan aplikasi Nuxt.js Anda dengan modul `@nuxtjs/content` dimana Anda dapat menulis di dalam direktori `content/` dan mengambil berkas Markdown, JSON, YAML, dan CSV melalui API mirip MongoDB, yang bertindak sebagai **Git-based Headless CMS**.

<app-modal :src="img" :alt="imgAlt"></app-modal>

### Memuat ulang secara langsung dalam pengembangan (_Hot reload_)

Modul konten sangat cepat dalam hal memuat ulang secara langsung dalam pengembangan karena tidak harus melalui webpack saat Anda membuat perubahan pada berkas _markdown_ Anda. Anda juga dapat mendengarkan peristiwa `content: update` dan membuat _plugin_ sehingga setiap kali Anda memperbarui berkas di dalam direktori konten Anda, sebagai contoh, metode _fetchCategories_ akan dikirim.

<base-alert type="next">

[Lihat dokumentasi modul konten untuk lebih jelasnya](https://content.nuxtjs.org/advanced#handling-hot-reload)

</base-alert>

### Menampilkan konten

Anda dapat menggunakan komponen `<nuxt-content>` langsung di template Anda untuk menampilkan badan halaman.

```html{}[pages/blog/_slug.vue]
<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/displaying#component) untuk lebih jelasnya

</base-alert>

### Menata gaya konten Anda

Bergantung pada apa yang Anda gunakan untuk mendesain aplikasi, Anda mungkin perlu menulis beberapa gaya untuk menampilkan _markdown_ dengan benar.

Komponen `<nuxt-content>` akan secara otomatis menambahkan kelas `.nuxt-content`, Anda dapat menggunakannya untuk menyesuaikan gaya Anda.

```html
<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/displaying#style) untuk lebih jelasnya

</base-alert>

### Menangani Markdown, CSV, YAML, JSON (5)

Modul ini mengonversi berkas .md Anda menjadi struktur pohon JSON AST, disimpan dalam variabel _body_. Anda juga dapat menambahkan blok materi depan YAML ke berkas _markdown_ atau berkas .yaml yang akan dimasukkan ke dalam dokumen. Anda juga dapat menambahkan berkas json/json5 yang juga dapat dimasukkan ke dalam dokumen. Dan Anda dapat menggunakan berkas .csv di mana baris akan ditetapkan ke variabel _body_.

```md
---
title: Postingan Blog Pertama Saya
description: Mempelajari cara menggunakan @nuxt/content untuk membuat blog
---
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/writing#markdown) untuk lebih jelasnya

</base-alert>

### Komponen Vue dalam _Markdown_

Anda dapat menggunakan komponen Vue secara langsung di dalam berkas _markdown_ Anda. Namun Anda perlu menggunakan komponen Anda dalam bentuk _kebab case_ dan tidak dapat menggunakan tag penutup sendiri.

```html{}[components/global/InfoBox.vue]
<template>
  <div class="bg-blue-500 text-white p-4 mb-4">
    <p><slot name="info-box">bawaan</slot></p>
  </div>
</template>
```

```html{}[content/articles/my-first-blog-post.md]
<info-box>
  <template #info-box>
    Ini adalah komponen vue di dalam _markdown_ menggunakan slot
  </template>
</info-box>
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/writing#vue-components) untuk lebih jelasnya

</base-alert>

### API yang Sepenuhnya Dapat Dicari

Anda dapat menggunakan `$content()` untuk membuat daftar, memfilter, dan mencari konten Anda dengan mudah.

```html{}[pages/blog/index.vue]
<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/fetching#methods) untuk mengetahui detail selengkapnya

</base-alert>

### Artikel Sebelumnya dan Berikutnya

Modul konten menyertakan `.surround(slug)` sehingga Anda dapat memperoleh artikel sebelumnya dan berikutnya dengan mudah.

```js
async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
```

```html
<prev-next :prev="prev" :next="next" />
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/fetching#surroundslug-options) untuk mengetahui detail selengkapnya

</base-alert>

### Pencarian teks lengkap (_Full-text_)

Modul konten hadir dengan pencarian teks lengkap sehingga Anda dapat dengan mudah mencari di seluruh berkas markdown Anda tanpa harus memasang apa pun.

```html{}[components/AppSearchInput.vue]
<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/fetching#searchfield-value) untuk mengetahui detail selengkapnya

</base-alert>

### Penyorotan sintaks

Modul ini secara otomatis menggabungkan blok kode dan menerapkan kelas [PrismJS](https://prismjs.com/). Anda juga dapat menambahkan tema PrismJS yang berbeda atau menonaktifkannya sama sekali.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add prism-themes
```

  </code-block>
  <code-block label="NPM">

```bash
npm install prism-themes
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
content: {
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-material-oceanic.css'
    }
  }
}
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/writing#syntax-highlighting) untuk mengetahui detail selengkapnya

</base-alert>

### Memperluas Penguraian Markdown (_Extend Markdown Parsing_)

Awalnya markdown tidak mendukung penyorotan baris di dalam blok kode atau nama berkas. Modul konten bisa memungkinkannya dengan sintaks kustomnya sendiri. Nomor baris ditambahkan ke tag `pre` di atribut data-line dan nama berkas akan diubah menjadi `span` dengan kelas `filename`, sehingga Anda dapat menatanya.

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/writing#codeblocks) untuk mengetahui detail selengkapnya

</base-alert>

### Pembuatan daftar isi

Properti array Daftar Isi akan dimasukkan ke dalam dokumen Anda, mencantumkan semua judul dengan judul dan idnya, sehingga Anda dapat menautkannya.

```html{}[pages/blog/_slug.vue]
<nav>
  <ul>
    <li v-for="link of article.toc" :key="link.id">
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</nav>
```

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/writing#table-of-contents) untuk mengetahui detail selengkapnya

</base-alert>

### API QueryBuilder yang Kuat (seperti MongoDB)

Modul konten hadir dengan _QueryBuilder API_ yang mirip dengan MongoDB yang memungkinkan Anda untuk dengan mudah melihat JSON dari setiap direktori di `http://localhost:3000/_content/`. _Endpoint_ dapat diakses pada permintaan GET dan POST, sehingga Anda dapat menggunakan parameter _query_.

`http://localhost:3000/_content/articles?only=title&only=description&limit=10`

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/fetching#api) untuk mengetahui detail selengkapnya

</base-alert>

### Memperluas dengan kait (_hooks_)

Anda dapat menggunakan kait untuk memperluas modul sehingga Anda dapat menambahkan data ke dokumen sebelum disimpan.

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/advanced#hooks) untuk mengetahui detail selengkapnya

</base-alert>

### Integrasi dengan @nuxtjs/feed

Untuk artikel, konten dapat digunakan untuk membuat feed berita menggunakan modul [@nuxtjs/feed](https://www.npmjs.com/package/@nuxtjs/feed).

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/advanced#integration-with-nuxtjsfeed) untuk mengetahui detail selengkapnya

</base-alert>

### Mendukung pembuatan situs statis

Modul konten bekerja dengan pembuatan situs statis menggunakan `nuxt generate`. Semua rute akan dibuat secara otomatis berkat fitur _crawler nuxt_.

<base-alert>

Jika menggunakan Nuxt <2.13 dan Anda perlu menentukan rute dinamis, Anda dapat melakukannya menggunakan properti generate dan menggunakan @nuxt/content secara terprogram.

</base-alert>

<base-alert type="next">

Lihat [dokumentasi modul konten](https://content.nuxtjs.org/advanced#programmatic-usage) untuk mengetahui detail selengkapnya

</base-alert>

<base-alert type="next">

Untuk melihat secara lengkap [dokumentasi untuk modul konten](https://content.nuxtjs.org/)

</base-alert>

<quiz :questions="questions"></quiz>
