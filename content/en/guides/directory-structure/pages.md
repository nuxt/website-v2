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

The `pages` directory contains your application views and routes. Nuxt.js reads all the `.vue` files inside this directory and automatically creates the router configuration for you.

<base-alert type="info">

You can also create routes with .js files and .ts files

</base-alert>

Every Page component is a Vue component but Nuxt.js adds special attributes and functions to make the development of your universal application as easy as possible.

```html{}[pages
<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
  export default {
    // page properties go here
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
```

## Dynamic Pages

Dynamic pages can be created when you don't know the name of the page due to it coming from an API or you don't want to have to create the same page over and over again. To create a dynamic page you need to add an underscore before the .vue file name or before the the name of the directory, if you want the directory to be dynamic. You can name the file or directory anything you want but you must prefix it with an underscore.

If you've defined a file named `_slug.vue` in your pages folder, you can access the value using the context with params.slug

```html{}[pages/_slug.vue]
<template>
  <h1>{{ this.slug }}</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>
```

If you've defined a file named \_slug.vue inside a folder called \_book you can access the value using the context with params.slug and params.book

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

AsyncData is called every time before loading the component. It can be asynchronous and receives the context as an argument. The returned object will be merged with your data object.

```js{}[pages/index.vue]
export default {
  asyncData(context) {
    return { name: 'World' }
  }
}
```

<base-alert type="next">

See more on how asyncData works in our [Data Fetching](/docs/2.x/features/data-fetching#async-data) chapter

</base-alert>

### fetch

Every time you need to get asynchronous data you can use fetch. Fetch is called on server-side when rendering the route, and on client-side when navigating.

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

See more on how fetch works in our [Data Fetching](/docs/2.x/features/data-fetching) chapter

</base-alert>

### head

Set specific <meta> tags for the current page. Nuxt.js uses `vue-meta` to update the document head and meta attributes of your application.

```js{}[pages/index.vue]
export default {
  head() {
    // Set Meta Tags for this Page
  }
}
```

<base-alert type="next">

See more in our [Meta Tags and SEO](/docs/2.x/features/meta-tags-seo) chapter

</base-alert>

### layout

Specify a layout defined in the layouts directory.

```js{}[pages/index.vue]
export default {
  layout: 'blog'
}
```

<base-alert type="next">

See more on layouts in our [Views](/docs/2.x/concepts/views#layouts) chapter.

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

See more in our [Loading](/docs/2.x/features/loading) chapter.

</base-alert>

### transition

Defines a specific transition for the page.

```js{}[pages/index.vue]
export default {
  transition: 'fade'
}
```

<base-alert type="next">

See more on transitions in our [Transitions](/docs/2.x/features/transitions) chapter

</base-alert>

### scrollToTop

The `scrollToTop` property lets you tell Nuxt.js to scroll to the top before rendering the page. By default, Nuxt.js scrolls to the top when you go to another page, but with child routes, Nuxt.js keeps the scroll position. If you want to tell Nuxt.js to scroll to the top when rendering your child route, set `scrollToTop` to `true`

```js{}[pages/index.vue]
export default {
  scrollToTop: true
}
```

Conversely, you can manually set `scrollToTop` to `false` on parent routes as well.

If you want to overwrite the default scroll behavior of Nuxt.js, take a look at the [scrollBehavior option](/docs/2.x/configuration-glossary/configuration-router#scrollbehavior).

### middleware

Defines middleware for this page. The middleware will be called before rendering the page.

```js{}[pages/index.vue]
export default {
  middleware: 'auth'
}
```

<base-alert type="next">

See more on middleware in our [Middleware](/docs/2.x/directory-structure/middleware) chapter

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

See more on the watch query property in our [Data Fetching](/docs/2.x/features/data-fetching) chapter

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

## Ignoring pages

If you want to ignore pages so that they are not included in the generated `router.js` file then you can ignore them by prefixing them with a `-`.

For example, `pages/-about.vue` will be ignored.

<base-alert type="next">

Checkout the [ignore option](/docs/2.x/configuration-glossary/configuration-ignore) to learn more about it.

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

Checkout the [dir option](/docs/2.x/configuration-glossary/configuration-dir) to learn more about it.

</base-alert>

<quiz :questions="questions"></quiz>
