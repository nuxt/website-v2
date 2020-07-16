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

## The fetch Method

## Nuxt >= 2.12

Nuxt.js `v2.12` introduced a new hook called `fetch` which you can use in any of your Vue components.

In terms of Nuxt lifecycle hooks, fetch sits within Vue lifecycle after created hook. As we already know that, all Vue lifecycle hooks are called with their this context. The same applies to fetch hook as well.

The Nuxt.js fetch hook is called after the component instance is created on the server-side. That makes `this` context available inside the `fetch`.

```js
export default {
  fetch() {
    console.log(this)
  }
}
```

<base-alert>

`fetch(context)` has been deprecated, instead you can use an [anonymous middleware](/guides/directory-structure/middleware#anonymous-middleware) in your page:  `middleware(context)`

</base-alert>

### When to use fetch?

Every time you need to get asynchronous data. `fetch` is called on server-side when rendering the route, and on client-side when navigating.

It exposes `$fetchState` at the component level:

- `$fetchState.pending`: `Boolean`, allows you to display a placeholder when `fetch` is being called *on client-side*.
- `$fetchState.error`: `null` or `Error`, allows you to display an error message
- `$fetchState.timestamp`: `Integer`, is a timestamp of the last fetch, useful for caching with `keep-alive`

If you want to call the `fetch` hook from your component methods or template use:

```html
<button @click="$fetch">Refresh</button>
```

You can access the Nuxt [context](/guides/concepts/context-helpers) within the fetch hook using `this.$nuxt.context`.

### Options

`fetchOnServer`: `Boolean` or `Function` (default: `true`), call `fetch()` when server-rendering the page

`fetchDelay`: `Integer` (default: `200`), set the minimum executing time in milliseconds (to avoid quick flashes)

When `fetchOnServer` is falsy (`false` or returns `false`), `fetch` will be called only on client-side and `$fetchState.pending` will return `true` when server-rendering the component.

```js
<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
      this.posts = await fetch('https://api.nuxtjs.dev/posts')
      .then(res => res.json())
  },
  fetchOnServer: false
}
</script>
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

```js{}[pages/posts/_id.vue]
<template>
  ...
</template>

<script>
export default {
  data () {
    return {
      post: {}
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch () {
      this.posts = await fetch('https://api.nuxtjs.dev/posts')
      .then(res => res.json())
  },
}
</script>
```

The navigation to the same page will not call `fetch` if last `fetch` call was before 30 sec ago.

## Async Data

Sometimes you want to fetch data and pre-render it on the server without using a store.

`asyncData` is called every time before loading the page component. It will be called server-side once (on the first request to the Nuxt app) and client-side when navigating to further routes. This method receives [the context](/guides/concepts/context-helpers) as the first argument. You can use it to fetch some data and Nuxt.js will automatically merge the returned object with the component data.

```js
export default {
  asyncData(context) {
    return { project: 'nuxt' }
  }
}
```

### Displaying the data

You can display the data inside your template like you're used to doing:

```html
<template>
  <h1>{{ project }}</h1>
</template>
```

Nuxt.js offers you different ways to use `asyncData`. Choose the one you're most familiar with:

1. Returning a `Promise`. Nuxt.js will wait for the promise to be resolved before rendering the component.
2. Using the [async/await](https://javascript.info/async-await) ([learn more about it](https://zeit.co/blog/async-and-await))

<base-alert>

You do NOT have access to the component instance through `this` inside `asyncData` because it is called before initialising the component.

</base-alert>

<base-alert type="info">

In the upcoming examples, we are using our [http module](https://http.nuxtjs.org/) which we recommend you use for all your applications. You will need to install it first in order to use and also add it to your modules section of your nuxt config.

</base-alert>

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

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxt/http']
}
```

### Returning a Promise

```js
export default {
  asyncData({ params, $http }) {
    return $http
      .$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      .then(data => {
        return { title: data.title }
      })
  }
}
```

### Using async/await

```js
export default {
  async asyncData({ params, $http }) {
    const { title } = await $http.$get(
      `https://api.nuxtjs.dev/posts/${params.id}`
    )
    return { title }
  }
}
```

### Listening to query changes

The `asyncData` method is not called on query string changes by default. If you want to change this behavior, for example when building a pagination component, you can set up parameters that should be listened to with the `watchQuery` property of your page component.

➡️ Learn more about the [watchQuery property](/api/pages-watchquery)

➡️ To see the list of available [keys in context](/guides/concepts/context-helpers)

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
