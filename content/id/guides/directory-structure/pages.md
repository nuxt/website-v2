---
title: pages
description: The `pages` directory contains your Application Views and Routes. Nuxt.js reads all the `.vue` files inside this directory and automatically creates the  router configuration for you.
position: 10
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/11_pages?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: In which directory do you put your page components?
    answers:
      - views
      - pages
      - vues
    correctAnswer: pages
  - question: To create routes you need to manually configure a router.js file
    answers:
      - true
      - false
    correctAnswer:
  - question: You can create routes with .js files and .ts files
    answers:
      - true
      - false
    correctAnswer: true
  - question: When is asyncData called?
    answers:
      - before loading the component
      - while loading the component
      - after loading the component
    correctAnswer: before loading the component
  - question: In what property do you add your meta tags?
    answers:
      - head
      - meta
      - metaTags
    correctAnswer: head
  - question: Which property do you use to add a different layout to your page?
    answers:
      - layouts
      - page
      - layout
    correctAnswer: layout
  - question: How do you set the scrollToTop property if you want to tell Nuxt.js to scroll to the top when rendering your child route?
    answers:
      - "scrollToTop: 'scroll'"
      - 'scrollToTop: true'
      - "scroll: 'top'"
    correctAnswer: 'scrollToTop: true'
  - question: How do you add the middleware/auth.js to your page?
    answers:
      - 'middleware: true'
      - "middleware: 'auth'"
      - "import auth from 'middleware/auth.js'"
    correctAnswer: "middleware: 'auth'"
  - question: To set up a watcher for query strings what property do you use?
    answers:
      - watcher
      - queryWatcher
      - watchQuery
    correctAnswer: watchQuery
  - question: Watching is disabled by default.
    answers:
      - true
      - false
    correctAnswer: true
---

Direktori `pages` berisikan semua halaman dan jalur aplikasi Anda. Nuxt.js membaca semua berkas `.vue` dalam direktori ini dan secara otomatis membuat konfigurasi jalur (_router_) untuk Anda.

<base-alert type="info">

Anda juga dapat membuat jalur (_routes_) dengan berkas .js dan berkas .ts.

</base-alert>

Setiap komponen halaman (_Page component_) merupakan komponen Vue, tetapi Nuxt.js menambahkan atribut dan fungsi-fungsi khusus yang dapat membantu Anda dalam pengembangan aplikasi _universal_ Anda semudah mungkin.

```html{}[pages
<template>
  <h1 class="red">Halo {{ nama }}!</h1>
</template>

<script>
  export default {
    // properti halaman berada disini
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
```

## Halaman-halaman dinamis

Halaman-halaman dinamis dapat dibuat ketika Anda tidak tahu nama halaman tersebut karena nama halaman tersebut datang dari antarmuka pemrograman aplikasi (API) atau Anda tidak ingin membuat halaman yang sama secara berulang. Untuk membuat halaman dinamis, Anda dapat menambahkan simbol garis bawah (_underscore_) sebelum nama berkas .vue Anda atau sebelum nama direktori Anda jika Anda ingin direktori Anda menjadi dinamis. Anda dapat memberi nama berkas atau direktori Anda dengan apapun yang Anda inginkan, tetapi Anda harus memberi awalan nama tersebut dengan garis bawah (_underscore_).

Jika Anda memberi nama salah satu berkas `_slug.vue` dalam direktori `pages` Anda, Anda dapat mengakses nilai tersebut menggunakan konteks (_context_) dengan `params.slug`

```html{}[pages/_slug.vue]
<template>
  <h1>{{ this.slug }}</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // Ketika memanggil /abc maka slug akan menjadi "abc"
      return { slug }
    }
  }
</script>
```

Jika Anda memberi nama sebuah berkas bernama \_slug.vue di dalam direktori \_book.vue, Anda dapat mengakses nilai tersebut menggunakan konteks (_context_) dengan `params.slug` dan `params.book`

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

## Properti

### asyncData

AsyncData dipanggil setiap kali sebelum pemuatan (_loading_) komponen terjadi. Properti ini dapat menjadi _asynchronous_ dan menerima konteks (_context_) menjadi argumen. Objek yang dikembalikan akan digabung (_merged_) dengan objek data Anda.

```js{}[pages/index.vue]
export default {
  asyncData (context) {
    return { name: 'World' }
  }
```

<base-alert type="next">

Lihat informasi lebih lanjut mengenai bagaimana asyncData bekerja, pada bab [Data Fetching](/guides/features/data-fetching#async-data)

</base-alert>

### _fetch_ (pengambilan)

Setiap kali anda ingin mendapatkan data _asynchronous_ anda dapat menggunakan fungsi _fetch_. _Fetch_ dipanggil pada _server-side_ ketika me-_render_ jalur (_route_), dan pada _client-side_ ketika bernavigasi.

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

Lihat lebih lanjut bagaimana _fetch_ bekerja pada bab [Data Fetching](/guides/features/data-fetching)

</base-alert>

### _head_ (kepala)

Menetapkan label <meta> yang spesifik untuk halaman sekarang, Nuxt.js menggunakan `vue-meta` untuk memperbarui dokumen _head_ dan atribut-atribut meta pada aplikasi Anda.

```js{}[pages/index.vue]
export default {
  head() {
    // Tetapkan _Meta Tags_ untuk halaman ini
  }
}
```

<base-alert type="next">

Lihat lebih lanjut pada bab [Meta Tags and SEO](/guides/features/meta-tags-seo)

</base-alert>

### _layout_ (penampilan)

Specify a layout defined in the layouts directory.

```js{}[pages/index.vue]
export default {
  layout: 'blog'
}
```

<base-alert type="next">

See more on layouts in our [Views](/guides/concepts/views#layouts) chapter.

</base-alert>

### loading

If set to false, prevents a page from automatically calling `this.$nuxt.$loading.finish()` as you enter it and `this.$nuxt.$loading.start()` as you leave it, allowing you to manually control the behavior, as [this example](https://nuxtjs.org/examples/custom-page-loading) shows.

```js{}[pages/index.vue]
export default {
  loading: false
}
```

<base-alert type="info">

Only applies if loading is also set in nuxt.config.js.

</base-alert>

<base-alert type="next">

See more in our [Loading](/guides/features/loading) chapter.

</base-alert>

### transition

Defines a specific transition for the page.

```js{}[pages/index.vue]
export default {
  transition: 'fade'
}
```

<base-alert type="next">

See more on transitions in our [Transitions](/guides/features/transitions) chapter

</base-alert>

### scrollToTop

The `scrollToTop` property lets you tell Nuxt.js to scroll to the top before rendering the page. By default, Nuxt.js scrolls to the top when you go to another page, but with child routes, Nuxt.js keeps the scroll position. If you want to tell Nuxt.js to scroll to the top when rendering your child route, set `scrollToTop` to `true`

```js{}[pages/index.vue]
export default {
  scrollToTop: true
}
```

Conversely, you can manually set `scrollToTop` to `false` on parent routes as well.

If you want to overwrite the default scroll behavior of Nuxt.js, take a look at the [scrollBehavior option](/guides/configuration-glossary/configuration-router#scrollbehavior).

### middleware

Defines middleware for this page. The middleware will be called before rendering the page.

```js{}[pages/index.vue]
export default {
  middleware: 'auth'
}
```

<base-alert type="next">

See more on middleware in our [Middleware](/guides/directory-structure/middleware) chapter

</base-alert>

### The watchQuery Property

Use the `watchQuery` key to set up a watcher for query strings. If the defined strings change, all component methods (asyncData, fetch, validate, layout, ...) will be called. Watching is disabled by default to improve performance.

```js{}[pages/index.vue]
export default {
  watchQuery: ['page']
}
```

<base-alert type="info">

If you want to set up a watcher for all query strings, set `watchQuery` to `true`.

</base-alert>

```js{}[pages/index.vue]
export default {
  watchQuery: true
}
```

You can also use the function `watchQuery(newQuery, oldQuery)` to have more refined watchers.

```js{}[pages/index.vue]
export default {
  watchQuery(newQuery, oldQuery) {
    // Only execute component methods if the old query string contained `bar`
    // and the new query string contains `foo`
    return newQuery.foo && oldQuery.bar
  }
}
```

<base-alert type="next">

See more on the watch query property in our [Data Fetching](/guides/features/data-fetching) chapter

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

## Ignoring pages

If you want to ignore pages so that they are not included in the generated `router.js` file then you can ignore them by prefixing them with a `-`.

For example, `pages/-about.vue` will be ignored.

<base-alert type="next">

Checkout the [ignore option](/guides/configuration-glossary/configuration-ignore) to learn more about it.

</base-alert>

## Configuration

You can rename the `pages/` directory to something different by setting `dir.pages` option:

```js{}[nuxt.config.js]
export default {
  dir: {
    // Rename `pages` directory to `routes`
    pages: 'routes'
  }
}
```

<base-alert type="next">

Checkout the [dir option](/guides/configuration-glossary/configuration-dir) to learn more about it.

</base-alert>

<quiz :questions="questions"></quiz>
