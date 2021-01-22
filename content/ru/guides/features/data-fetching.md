---
title: Получение данных
description: В Nuxt.js у нас есть 2 способа получения данных из API. Мы можем использовать метод `fetch` или `asyncData`.
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
  - question: Which allows you to display a placeholder when `fetch` is being called *on client-side?*
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

Nuxt.js поддерживает традиционные методы Vue для загрузки данных в приложение на стороне клиента, такие как например хук `mounted()` - для получения данных в компоненте. Универсальные приложения, тем не менее, должны использовать специфичные хуки в Nuxt.js, чтобы иметь возможность отрисовать данные во время рендеринга на стороне сервера. Это позволяет отрендерить вашу страницу со всеми запрошенными данными.
 
В Nuxt есть два хука для асинхронной загрузки данных:

- хук `fetch` (Nuxt 2.12+). Этот хук может использоваться в любом компоненте, and provides shortcuts for rendering loading states (и предоставляет быстрый доступ для отображения загружаемого стейта (состояния)) (во время рендеринга на стороне клиента) и ошибок.
- хук `asyncData`. Этот хук может использоваться только на _страницах_ комопнентов. В отличие от `fetch`, этот хук не отображает загрузчик во время рендеринга на стороне клиента: вместо этого, этот хук болкирует навигацию по роутам пока не завершиться загрузка, или не отобразится страница с текстом ошибки, если при загрузке та самая ошибка произошла.

<base-alert>

В версиях Nuxt до версии 2.12, хук `fetch` работал так же, как хук `asyncData` сегодня. Этот функционал до сих пор поддерживается для обратной совместимости в проектах: если вы используете аргумент `context` в хуке `fetch`, это будет считаться "легаси" fetch хуком.  Этот функционал уже устарел, и вы должны заменить его на `asyncData(context)` или на [анонимный middleware](/docs/2.x/directory-structure/middleware#anonymous-middleware) используя `middleware(context)`.

</base-alert>

These hooks can be used with _any data fetching library_ you choose. We recommend using [@nuxt/http](https://http.nuxtjs.org/) or [@nuxt/axios](https://axios.nuxtjs.org/) for making requests to HTTP APIs. More information about these libraries, such as guides for configuring authentication headers, can be found in their respective documentation.

## The fetch hook

<base-alert type="info">

This hook is only available for Nuxt 2.12 and later.

</base-alert>

`fetch` is a hook called during server-side rendering after the component instance is created, and on the client when navigating. The fetch hook should return a promise (whether explicitly, or implicitly using `async/await`) that will be resolved:

- On the server before the initial page is rendered
- On the client some time after the component is mounted

It exposes `$fetchState` at the component level with the following properties:

- `pending` is a `Boolean` that allows you to display a placeholder when `fetch` is being called _on client-side_.
- `error` is either `null` or an `Error` thrown by the fetch hook
- `timestamp` is a timestamp of the last fetch, useful for [caching with `keep-alive`](#caching)

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

You can access the Nuxt [context](/docs/2.x/concepts/context-helpers) within the fetch hook using `this.$nuxt.context`.

</base-alert>

### Options

`fetchOnServer`: `Boolean` or `Function` (default: `true`), call `fetch()` when server-rendering the page

`fetchDelay`: `Integer` (default: `200`), set the minimum executing time in milliseconds (to avoid quick flashes)

When `fetchOnServer` is falsy (`false` or returns `false`), `fetch` will be called only on client-side and `$fetchState.pending` will return `true` when server-rendering the component.

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

The `fetch` hook is not called on query string changes by default. To watch for query changes you can add a watcher on `$route.query` and call `$fetch`:

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

You can use `keep-alive` directive in `<nuxt/>` and `<nuxt-child/>` component to save `fetch` calls on pages you already visited:

```html{}[layouts/default.vue]
<template>
  <nuxt keep-alive />
</template>
```

You can also specify the [props](https://vuejs.org/v2/api/#keep-alive) passed to `<keep-alive>` by passing a prop `keep-alive-props` to the `<nuxt>` component.

```html{}[layouts/default.vue]
<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
```

Keeps only 10 page components in memory.

### Using `activated` hook

Nuxt will directly fill `this.$fetchState.timestamp` (timestamp) of the last `fetch` call (ssr included). You can use this property combined with `activated` hook to add a 30 seconds cache to `fetch`:

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

The navigation to the same page will not call `fetch` if last `fetch` call was before 30 sec ago.

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

This hook can only be used for page-level components. Unlike `fetch`, `asyncData` cannot access the component instance (`this`). Instead, it receives [the context](/docs/2.x/concepts/context-helpers) as its argument. You can use it to fetch some data and Nuxt.js will automatically merge the returned object with the component data.

In the upcoming examples, we are using [@nuxt/http](https://http.nuxtjs.org/) which we recommend for fetching data from an API.

### Listening to query changes

The `asyncData` method is not called on query string changes by default. If you want to change this behavior, for example when building a pagination component, you can set up parameters that should be listened to with the `watchQuery` property of your page component.

<base-alert type="next">

Learn more about the [watchQuery property](/docs/2.x/components-glossary/pages-watchquery) and see the list of available [keys in context](/docs/2.x/concepts/context-helpers).

</base-alert>

<quiz :questions="questions"></quiz>
