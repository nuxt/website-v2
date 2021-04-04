---
title: Data Fetching
description: In Nuxt.js we have 2 ways of getting data from an API. We can use the fetch method or the asyncData method.
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

Nuxt.js supports traditional Vue patterns for loading data in your client-side app, such as fetching data in a component's `mounted()` hook. Universal apps, however, need to use Nuxt.js-specific hooks to be able to render data during server-side rendering. This allows your page to render with all of its required data present.

Nuxt has two hooks for asynchronous data loading:

- The `fetch` hook (Nuxt 2.12+). This hook can be placed on any component, and provides shortcuts for rendering loading states (during client-side rendering) and errors.
- The `asyncData` hook. This hook can only be placed on _page_ components. Unlike `fetch`, this hook does not display a loading placeholder during client-side rendering: instead, this hook blocks route navigation until it is resolved, displaying a page error if it fails.

<base-alert>

In versions of Nuxt before 2.12, the `fetch` hook worked much like `asyncData` does today. This functionality is still supported today for backwards-compatibility: if a `context` argument is accepted in your `fetch()`, it will be considered a "legacy" fetch hook. This functionality is deprecated, and should be replaced with either `asyncData(context)` or an [anonymous middleware](/docs/2.x/directory-structure/middleware#anonymous-middleware) using `middleware(context)`.

</base-alert>

These hooks can be used with _any data fetching library_ you choose. We recommend using [@nuxt/http](https://http.nuxtjs.org/) or [@nuxt/axios](https://axios.nuxtjs.org/) for making requests to HTTP APIs. More information about these libraries, such as guides for configuring authentication headers, can be found in their respective documentation.

<base-alert type="info">
  
If you define `fetch` or `asyncData` inside a mixin and also have it defined in a component/page, the mixin function will be overwritten instead of called.

</base-alert>

## The fetch hook

<base-alert type="info">

This hook is only available for Nuxt 2.12 and later.

</base-alert>

`fetch` is a hook called during server-side rendering after the component instance is created, and on the client when navigating. The fetch hook should return a promise (whether explicitly, or implicitly using `async/await`) that will be resolved:

- On the server before the initial page is rendered
- On the client some time after the component is mounted

It exposes `$fetchState` at the component level with the following properties:

- `pending` is a `Boolean` that allows you to display a placeholder when `fetch` is being called *on client-side*.
- `error` is either `null` or an `Error` thrown by the fetch hook
- `timestamp` is a timestamp of the last fetch, useful for [caching with `keep-alive`](#caching)

<base-alert type="info">

For [static hosting](/docs/2.x/features/deployment-targets#static-hosting), the fetch hook is only called during page generation, and the result is then cached for use on the client. To avoid cache conflicts, it may be necessary to specify a name for your component, or alternatively provide a unique [fetchKey](/docs/2.x/components-glossary/pages-fetch#options) implementation.

</base-alert>

In addition to fetch being called by Nuxt, you can manually call fetch in your component (to e.g. reload its async data) by calling `this.$fetch()`.

```html{}[components/NuxtMountains.vue]
<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
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

You can access the Nuxt [context](/docs/2.x/concepts/context-helpers) within the fetch hook using `this.$nuxt.context`.

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
<template> ... </template>

<script>
  export default {
    data() {
      return {
        posts: []
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

`asyncData` is only available for [pages](/docs/2.x/directory-structure/pages) and you don't have access to `this` inside the hook.

</base-alert>

`asyncData` is another hook for universal data fetching. Unlike `fetch`, which requires you to set properties on the component instance (or dispatch Vuex actions) to save your async state, `asyncData` simply merges its return value into your component's local state. Here's an example using the [@nuxt/http](https://http.nuxtjs.org/) library:

```html{}[pages/posts/_id.vue]
<template>
  <div>
    <h1>{{ post.title }}</h1>
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

Unlike `fetch`, the promise returned by the `asyncData` hook is resolved _during route transition_. This means that no "loading placeholder" is visible during client-side transitions (although the [loading bar](https://nuxtjs.org/guides/features/loading/) can be used to indicate a loading state to the user). Nuxt will instead wait for the `asyncData` hook to be finished before navigating to the next page or display the [error page](/docs/2.x/directory-structure/layouts#error-page)).

This hook can only be used for page-level components. Unlike `fetch`, `asyncData` cannot access the component instance (`this`). Instead, it receives [the context](/docs/2.x/concepts/context-helpers) as its argument. You can use it to fetch some data and Nuxt.js will automatically shallow merge the returned object with the component data.

In the upcoming examples, we are using [@nuxt/http](https://http.nuxtjs.org/) which we recommend for fetching data from an API.

### Async data in components?

Because components do not have an `asyncData` method, you cannot directly fetch async data server side within a component. In order to get around this limitation you have three basic options:

1. Use [the new `fetch` hook](#the-fetch-hook) that is available in Nuxt 2.12 and later versions.
2. Make the API call in the `mounted` hook and set data properties when loaded. _Downside: Won't work for server side rendering._
3. Make the API call in the `asyncData` method of the page component and pass the data as props to the sub components. Server rendering will work fine. _Downside: the `asyncData` of the page might be less readable because it's loading the data for other components_.

### Listening to query changes

The `asyncData` method is not called on query string changes by default. If you want to change this behavior, for example when building a pagination component, you can set up parameters that should be listened to with the `watchQuery` property of your page component.

<base-alert type="next">

Learn more about the [watchQuery property](/docs/2.x/components-glossary/pages-watchquery) and see the list of available [keys in context](/docs/2.x/concepts/context-helpers).

</base-alert>

<quiz :questions="questions"></quiz>
