---
title: Data Fetching
description: In Nuxt.js we have 2 ways of getting data from an api. We can use the fetch method or the asyncData method.
position: 4
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetching?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Where can you use the Nuxt.js fetch hook?
    answers:
      - pages and components
      - only in pages
      - only in components
    correctAnswer: pages and components
  - question: You have access to this when you use the Nuxt.js fetch hook
    answers:
      - true
      - false
    correctAnswer: true
  - question: When is the Nuxt.js fetch hook is called?
    answers:
      - after the component instance
      - before the component instance
      - during the component instance
    correctAnswer: after the component instance
  - question: Which allows you to display a placeholder when `fetch` is being called *on client-side?*
    answers:
      - $fetchState.timestamp
      - $fetchState.error
      - $fetchState.pending
    correctAnswer: $fetchState.pending
  - question: How do you save fetch calls on pages you have already visited?
    answers:
      - keep-alive
      - save-fetch
      - cache-fetch
    correctAnswer: keep-alive
  - question: In the activated hook which property do you use to add a 30 second cache to fetch?
    answers:
      - $fetchState.pending
      - $fetchState.timestamp
      - $fetchState.cache
    correctAnswer: $fetchState.timestamp
  - question: When is `asyncData` called?
    answers:
      - after loading the page component
      - during loading the page component
      - before loading the page component
    correctAnswer: before loading the page component
  - question: You have access to `this` inside asyncData
    answers:
      - true
      - false
    correctAnswer: false
  - question: With asyncData you can use the `context` parameter to access dynamic route data
    answers:
      - true
      - false
    correctAnswer: true
  - question: You have access to the error statusCode in asyncData
    answers:
      - true
      - false
    correctAnswer: true
---

In Nuxt.js we have 2 ways of getting data from an api. We can use the fetch method or the asyncData method.

## The fetch hook

<base-alert type="info">

This hook is only available for Nuxt `2.12+`.

</base-alert>

The Nuxt.js `fetch` hook is called after the component instance is created on the server-side: `this` is available inside it.

```js
export default {
  async fetch() {
    console.log(this)
  }
}
```

<base-alert>

`fetch(context)` has been deprecated, instead you can use an [anonymous middleware](/guides/directory-structure/middleware#anonymous-middleware) in your page:  `middleware(context)`

</base-alert>

### When to use fetch?

Every time you need to get asynchronous data. `fetch` is called on server-side when rendering the route, and on client-side when navigating.

It exposes `$fetchState` at the component level with the following properties:

- `pending` is a `Boolean`, allows you to display a placeholder when `fetch` is being called *on client-side*.
- `error` is either `null` or `Error` and allows you to display an error message
- `timestamp` is a timestamp of the last fetch, useful for [caching with `keep-alive`](#caching)

You also have access to `this.$fetch()`, useful if you want to call the `fetch` hook in your component.

```html{}[components/NuxtMountains.vue]
<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occured :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul v-for="mountain of mountains">
      <li>{{ mountain.name }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
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

<base-alert type="info">

You can access the Nuxt [context](/guides/concepts/context-helpers) within the fetch hook using `this.$nuxt.context`.

</base-alert>

### Options

`fetchOnServer`: `Boolean` or `Function` (default: `true`), call `fetch()` when server-rendering the page

`fetchDelay`: `Integer` (default: `200`), set the minimum executing time in milliseconds (to avoid quick flashes)

When `fetchOnServer` is falsy (`false` or returns `false`), `fetch` will be called only on client-side and `$fetchState.pending` will return `true` when server-rendering the component.

```js
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
  },
  // call fetch only on client-side
  fetchOnServer: false
}
```

### Listening to query string changes

The `fetch` hook is not called on query string changes by default. To watch for query changes you can add a watcher on `$route.query` and call `$fetch`:

```js
export default {
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    // Called also on query changes
  }
}
```

### Caching

You can use `keep-alive` directive in `<nuxt/>` and `<nuxt-child/>` component to save `fetch` calls on pages you already visited:

```html{}[layouts/default.vue]
<template>
  <nuxt keep-alive />
</template>
```

You can also specify the [props](https://vuejs.org/v2/api/#keep-alive) passed to `<keep-alive>` by passing a prop `keep-alive-props` to the `<nuxt>`  component.

```html{}[layouts/default.vue]
<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
```

Keeps only 10 page components in memory.

### Using `activated` hook

Nuxt will directly fill  `this.$fetchState.timestamp`  (timestamp) of the last `fetch` call (ssr included). You can use this property combined with `activated` hook to add a 30 seconds cache to `fetch`:

```html{}[pages/posts/_id.vue]
<template>
  ...
</template>

<script>
  export default {
    data() {
      return {
        post: {}
      }
    },
    activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
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

The navigation to the same page will not call `fetch` if last `fetch` call was before 30 sec ago.

## Async Data

<base-alert>

`asyncData` is only available for [pages](/guides/directory-structure/pages) and you don't have access to `this` inside the hook.

</base-alert>

The main difference with `fetch` is that you don't have to handle any pending state or error. Nuxt will wait for the `asyncData` hook to be finished before navigating to the next page or display the [error page](/guides/directory-structure/layouts#error-page))

This hook receives [the context](/guides/concepts/context-helpers) as first argument. You can use it to fetch some data and Nuxt.js will automatically merge the returned object with the component data.

```html{}[pages/index.vue]
<template>
  <h1>{{ project }}</h1>
</template>

<script>
  export default {
    async asyncData(context) {
      return {
        project: 'nuxt'
      }
    }
  }
</script>
```

In the upcoming examples, we are using [@nuxt/http](https://http.nuxtjs.org/) which we recommend for fetching data from an API.

First, we need install it:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxt/http
```

  </code-block>
  <code-block label="NPM">

```bash
npm install @nuxt/http
```

  </code-block>
</code-group>

Then, adding it to our `modules` section of `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxt/http']
}
```

```html{}[pages/posts/_id.vue]
<template>
  <div>
    <h1>{{ post.title }</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $http }) {
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      return { post }
    }
  }
</script>
```

### Listening to query changes

The `asyncData` method is not called on query string changes by default. If you want to change this behavior, for example when building a pagination component, you can set up parameters that should be listened to with the `watchQuery` property of your page component.

<base-alert type="next">

Learn more about the [watchQuery property](/guides/components-glossary/pages-watchquery) and see the list of available [keys in context](/guides/concepts/context-helpers).

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
