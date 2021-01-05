---
title: Контекст и Хелперы
description: Контекст предоставляет *дополнительную* и часто необязательную информацию о текущем запросе к приложению.
position: 2
category: concepts
csb_link_context: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
csb_link_helpers: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-helpers?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/context.svg
imgAlt: nuxt-js-context-keys
questions:
  - question: Для чего нужен контекст?
    answers:
      - Отрисовка на стороне сервера
      - Глобальное управление состоянием
      - Лень
    correctAnswer: Отрисовка на стороне сервера
  - question: Какой ключ не доступен в контексте?
    answers:
      - env
      - isDev
      - $store
    correctAnswer: $store
  - question: Какой ключ контекста доступен только на *серверной* стороне?
    answers:
      - from
      - app
      - req
    correctAnswer: req
  - question: Какой ключ контекста доступен только на *клиентской* стороне?
    answers:
      - from
      - res
      - app
    correctAnswer: from
  - question: Что может хелпер `$nuxt` и чего *не* может?
    answers:
      - Отобразить версию Nuxt
      - Предоставить информацию о статусе интернет-соединения пользователей
      - Доступ к открытым функциям модуля
    correctAnswer: Отобразить версию Nuxt
  - question: Какие имена у хелперов процесса?
    answers:
      - global, client и server
      - server, client и static
      - ssr, spa и static
    correctAnswer: server, client и static
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

Объект `context` доступен в специфических для Nuxt функциях, таких как [asyncData](/docs/2.x/features/data-fetching#async-data), [plugins](/docs/2.x/directory-structure/plugins), [middleware](/docs/2.x/directory-structure/middleware) и [nuxtServerInit](/docs/2.x/directory-structure/store#the-nuxtserverinit-action). Это предоставляет *дополнительную* и часто необязательную информацию о текущем запросе к приложению.

Прежде всего контекст используется для предоставления доступа к другим частям Nuxt.js приложения, например, к Vuex или к экземпляру `connect`. Таким образом, у нас в контексте есть объекты `req` и `res`, доступные на стороне сервера и `store`, доступный всегда. Со временем контекст был дополнен многими другими полезными переменными и сокращениями. Теперь
у нас есть доступ к функционалу HMR в режиме разработки, к текущему `route`, `params` и `query` страницы, а также доступ к переменным среды. Кроме того, функции модулей и хелперы могут быть доступны в контексте, как на стороне сервера, так и на стороне клиента.

**Все ключи контекста, доступные по умолчанию**

```js
function (context) { // Может быть asyncData, nuxtServerInit, ...
  // Всегда доступны
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
   $config
  } = context

  // Доступны только на стороне сервера
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }

  // Доступны только на стороне клиента
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

<base-alert>

Не путайте _Контекст_, на который мы тут ссылаемся с объектом `context`, доступным в [Действиях Vuex](https://vuex.vuejs.org/ru/guide/actions.html) или доступным в функции `build.extend` вашего `nuxt.config.js`. Все это не связно друг с другом.

</base-alert>

Подробнее о различных ключах контекста читайте в разделе [Голосарий](/docs/2.x/internals-glossary/context)

### Используйте параметры страницы для запроса данных из API

The context directly exposes possible dynamic parameters of the route via `context.params`. In the following example, we call an API via the `nuxt/http` module using a dynamic page parameter as part of the URL. Modules, like the [nuxt/http](https://http.nuxtjs.org/) module, can expose own functions which are then available through the [context.app](http://context.app) object.

Also, we wrap the API call in a `try/catch` statement to handle potential errors. With the `context.error` function, we can directly show Nuxt's error page and pass in the occurred error.

```js{}[pages/posts/_id.vue]
export default {
  async asyncData(context) {
    const id = context.params.id
    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await context.app.$http.$get(
        `https://api.nuxtjs.dev/posts/${id}`
      )
      return { post }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  }
}
```

With [ES6](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) you can use this syntax to destructure your context object. You can pass in the objects you want to have access to and then you can use them in the code without using the word context.

```js{}[pages/posts/_id.vue]
export default {
  async asyncData({ params, $http, error }) {
    const id = params.id

    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
      return { post }
    } catch (e) {
      error(e) // Show the nuxt error page with the thrown error
    }
  }
}
```

Want to use query parameters instead? You then use [context.query.id](/docs/2.x/internals-glossary/context#query) then.

### Redirecting users & accessing the store

Accessing the Vuex store (when you have it set up through the `store` directory) is also possible through the context. It provides a `store` object which can be treated as `this.$store` in Vue components. In addition, we use the `redirect` method, an exposed helper through the context, to redirect the user in case the `authenticated` state is falsy.

```js
export default {
  middleware({ store, redirect }) {
    // retrieving keys via object destructuring
    const isAuthenticated = store.state.authenticated
    if (!isAuthenticated) {
      return redirect('/login')
    }
  }
}
```

<base-alert type="next">

Check out the Internals Glossary book for more examples of the [redirect method](/docs/2.x/internals-glossary/context#redirect)

</base-alert>

## Helpers

Besides the shortcuts in the context, there are also other tiny helpers present in your Nuxt.js application.

## `$nuxt`: The Nuxt.js helper

`$nuxt` is a helper designed to improve the user experience and to be an escape hatch in some situations. It is accessible via `this.$nuxt` in Vue components and via `window.$nuxt` otherwise on the client side.

### Connection checker

The `$nuxt` helper provides a quick way to find out whether the internet connection of a user is present or not: It exposes the boolean values `isOffline` and `isOnline`. We can use these to show a message as soon as the user is offline (for example).

```html{}[layouts/default.vue]
<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <Nuxt />
  </div>
</template>
```

### Accessing the root instance

Besides providing DX/UX features, the `$nuxt` helper also provides a shortcut to the root instance of your application from every other component. But that's not everything — you can also access the `$nuxt` helper through `window.$nuxt` which can be used as an escape hatch to gain access to module methods like `$axios` from outside your Vue components. This should be used wisely and **only as last resort**.

### Refreshing page data

When you want to refresh the current page for the user, you don't want to fully reload the page because you might hit the server again and at least re-initialize the whole Nuxt.js application. Instead, you often only want to refresh the data, provided by `asyncData` or `fetch`.

You can do so, by using `this.$nuxt.refresh()`!

```html
<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
  export default {
    asyncData() {
      return { content: 'Created at: ' + new Date() }
    },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>
```

#### Controlling the loading bar

With `$nuxt`, you can also control Nuxt's loading bar programmatically via `this.$nuxt.$loading`.

```js
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```

Read more in the corresponding [loading feature chapter](../features/loading)

## onNuxtReady helper

If you want to run some scripts _after_ your Nuxt.js application has been loaded and is ready, you can use the `window.onNuxtReady` function. This can be useful when you want to execute a function on the client-side without increasing the time to interactive of your site.

```js
window.onNuxtReady(() => {
  console.log('Nuxt.js is ready and mounted')
})
```

## Process helpers

Nuxt.js injects three boolean values into the global `process` object which will help you to determine whether your app was rendered on the server or fully on the client, as well as checking for static site generation. These helpers are available across your application and are commonly used in `asyncData` userland code.

```html{}[pages/about.vue]
<template>
  <h1>I am rendered on the {{ renderedOn }} side</h1>
</template>

<script>
  export default {
    asyncData() {
      return { renderedOn: process.client ? 'client' : 'server' }
    }
  }
</script>
```

In the example, `renderedOn` will evaluate to `'server'` when using server-side rendering and a user accesses the page directly. When the user would navigate to the page from another part of the application, e.g. by click on a `<NuxtLink>`, it will evaluate to client.

<quiz :questions="questions"></quiz>
