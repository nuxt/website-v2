---
title: Konten
description: Berdayakan aplikasi Nuxt.js Anda dengan modul `@nuxtjs/content` di mana Anda dapat menulis di direktori `content/` dan mengambil berkas Markdown, JSON, YAML dan CSV Anda melalui API seperti MongoDB, yang bertindak sebagai **berbasis Git CMS tanpa kepala**.
position: 4
category: directory-structure
img: /guides/nuxt-content.svg
imgAlt: modul content nuxt
questions:
  - question: Apa nama direktori bawaan dari direktori tempat Anda menambahkan berkas markdown Anda?
    answers:
      - markdown
      - content
      - pages
    correctAnswer: content
  - question: Komponen apa yang Anda gunakan dalam templat Anda untuk menampilkan badan halaman markdown Anda?
    answers:
      - <markdown>
      - <nuxt>
      - <nuxt-content>
    correctAnswer: <nuxt-content>
  - question: Kelas apa yang ditambahkan secara otomatis sehingga Anda dapat mengatur gaya markdown Anda?
    answers:
      - .content
      - .nuxt-content
      - .markdown
    correctAnswer: .nuxt-content
  - question: Modul content dapat menangani berkas markdown, csv, yaml dan json
    answers:
      - true
      - false
    correctAnswer: true
  - question: Anda dapat menambahkan komponen vue ke berkas markdown Anda
    answers:
      - true
      - false
    correctAnswer: true
  - question: Yang Anda gunakan untuk mendaftar, memfilter, dan mencari konten Anda?
    answers:
      - $nuxt-content()
      - $content()
      - $nuxt()
    correctAnswer: $content()
  - question: Apa yang Anda gunakan untuk mendapatkan artikel sebelumnya dan selanjutnya?
    answers:
      - .surround(slug)
      - .prev-next(slug)
      - .slug()
    correctAnswer: .surround(slug)
  - question: Apakah kelas PrismJS diterapkan ke blok kode secara bawaan?
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
      - h1 dan h2
      - h2 dan h3
      - h1 dan h2 dan h3
    correctAnswer: h2 dan h3
  - question: Anda dapat menggunakan modul content dengan pembuatan situs statis
    answers:
      - true
      - false
    correctAnswer: true
---

Berdayakan aplikasi Nuxt.js Anda dengan modul `@nuxtjs/content` di mana Anda dapat menulis di direktori `content/` dan mengambil berkas Markdown, JSON, YAML dan CSV Anda melalui API seperti MongoDB, yang bertindak sebagai **berbasis Git CMS tanpa kepala**.

<app-modal :src="img" :alt="imgAlt"></app-modal>

### Memuat panas dalam pengembangan

Modul _content_ sangat cepat dalam hal _hot reload_ dalam pengembangan karena tidak harus melalui webpack saat Anda membuat perubahan pada berkas markdown Anda. Anda juga dapat mendengarkan peristiwa `content:update` dan membuat _plugin_ sehingga setiap kali Anda memperbarui berkas di direktori `content` Anda, metode _fetchCategories_ akan dikirim misalnya.

<base-alert type="next">

[Lihat dokumen modul _content_ untuk lebih jelasnya](https://content.nuxtjs.org/advanced#handling-hot-reload)

</base-alert>

### Menampilkan konten

Anda dapat menggunakan komponen `<nuxt-content>` langsung di templat Anda untuk menampilkan badan halaman.

```html{}[pages/blog/_slug.vue]
<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>
```

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/displaying#component) untuk lebih jelasnya.

</base-alert>

### Menata konten Anda

Bergantung pada apa yang Anda gunakan untuk mendesain aplikasi, Anda mungkin perlu menulis beberapa gaya untuk menampilkan markdown dengan benar.

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

Lihat dokumen [modul _content_](https://content.nuxtjs.org/displaying#style) untuk lebih jelasnya.

</base-alert>

### Menangani Markdown, CSV, YAML, JSON(5)

Modul ini mengonversi berkas `.md` Anda menjadi struktur pohon _JSON AST_, disimpan dalam variabel _body_. Anda juga dapat menambahkan blok materi depan YAML ke berkas markdown atau berkas `.yaml` yang akan dimasukkan ke dalam dokumen. Anda juga dapat menambahkan berkas _json_ atau _json5_ yang juga dapat dimasukkan ke dalam dokumen. Dan Anda dapat menggunakan berkas `.csv` di mana baris akan ditetapkan ke variabel _body_.

```md
---
title: Posting Blog pertama saya
description: Mempelajari cara menggunakan @nuxt/content untuk membuat blog
---
```

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/displaying#markdown) untuk lebih jelasnya.

</base-alert>

### Komponen Vue dalam markdown

Anda dapat menggunakan komponen Vue secara langsung di berkas markdown Anda. Namun Anda perlu menggunakan komponen Anda sebagai wadah kebab dan tidak dapat menggunakan tag penutup sendiri.

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
    Ini adalah komponen vue di dalam markdown menggunakan slot
  </template>
</info-box>
```

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/writing#vue-components) untuk lebih jelasnya.

</base-alert>

### API Sepenuhnya Dapat Dicari

You can use `$content()` to list, filter and search your content easily.

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

Lihat dokumen [modul _content_](https://content.nuxtjs.org/fetching#methods) untuk lebih jelasnya.

</base-alert>

### Artikel Sebelumnya dan Berikutnya

The content module includes a `.surround(slug)` so that you get previous and next articles easily.

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

Lihat dokumen [modul _content_](https://content.nuxtjs.org/fetching#surroundslug-options) untuk lebih jelasnya.

</base-alert>

### Pencarian teks lengkap

The content module comes with a full text search so you can easily search across your markdown files without having to install anything.

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

Lihat dokumen [modul _content_](https://content.nuxtjs.org/fetching#searchfield-value) untuk lebih jelasnya.

</base-alert>

### Penyorotan sintaks

This module automatically wraps codeblocks and applies [PrismJS](https://prismjs.com/) classes. You can also add a different PrismJS theme or disable it altogether.

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

Lihat dokumen [modul _content_](https://content.nuxtjs.org/writing#syntax-highlighting) untuk lebih jelasnya.

</base-alert>

### Perpanjang Parsing Markdown

Originally markdown does not support highlighting lines inside codeblock nor filenames. The content module allows it with its own custom syntax. Line numbers are added to the `pre` tag in data-line attributes and the filename will be converted to a `span` with a `filename` class, so you can style it.

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/writing#codeblocks) untuk lebih jelasnya.

</base-alert>

### Pembuatan daftar isi

A toc(Table of Contents) array property will be injected into your document, listing all the headings with their titles and ids, so you can link to them.

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

Lihat dokumen [modul _content_](https://content.nuxtjs.org/writing#table-of-contents) untuk lebih jelasnya.

</base-alert>

### API QueryBuilder yang Kuat (seperti MongoDB)

The content module comes with a powerful QueryBuilder API similar to MongoDB which allows you to easily see the JSON of each directory at `http://localhost:3000/_content/`. The endpoint is accessible on GET and POST request, so you can use query params.

`http://localhost:3000/_content/articles?only=title&only=description&limit=10`

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/fetching#api) untuk lebih jelasnya.

</base-alert>

### Perpanjang dengan _hooks_

You can use hooks to extend the module so you can add data to a document before it is stored.

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/advanced#hooks) untuk lebih jelasnya.

</base-alert>

### Integrasi dengan @nuxtjs/feed

In the case of articles, the content can be used to generate news feeds using [@nuxtjs/feed](https://www.npmjs.com/package/@nuxtjs/feed) module.

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/advanced#integration-with-nuxtjsfeed) untuk lebih jelasnya.

</base-alert>

### Mendukung pembuatan situs statis

The content module works with static site generation using the `nuxt generate`. All routes will be automatically generated thanks to the nuxt crawler feature.

<base-alert>

Jika menggunakan Nuxt `<2.13` dan Anda perlu menentukan rute dinamis, Anda dapat melakukannya menggunakan properti generate dan menggunakan `@nuxt/content` secara terprogram.

</base-alert>

<base-alert type="next">

Lihat dokumen [modul _content_](https://content.nuxtjs.org/advanced#programmatic-usage) untuk lebih jelasnya.

</base-alert>

<base-alert type="next">

To see the full [documentation for the content module](https://content.nuxtjs.org/)

</base-alert>

<quiz :questions="questions"></quiz>
