---
title: middleware
description: The `middleware` directory contains your application middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout).
position: 8
category: Directory Structure
categoryPosition: 4
questions:
  - question: Middleware lets you define functions that run
    answers:
      - before rendering a page
      - while rendering a page
      - after rendering a page
    correctAnswer: before rendering a page
  - question: In which directory do you put shared middleware?
    answers:
      - middleware
      - shared-middleware
      - shared
    correctAnswer: middleware
  - question: What argument does middleware receive as the first argument?
    answers:
      - req
      - res
      - context
    correctAnswer: 
  - question: In universal mode when is middleware called?
    answers:
      - server side on first request and server side when navigating
      - client side on first request and client side when navigating
      - server side on first request and client side when navigating
    correctAnswer: server side on first request and client side when navigating
  - question: In SPA mode when is middleware called?
    answers:
      - server side on first request and server side when navigating
      - client side on first request and client side when navigating
      - server side on first request and client side when navigating
    correctAnswer: client side on first request and client side when navigating
  - question: Middleware is executed in what order?
    answers:
      - matched pages ⇒  matched layouts ⇒ nuxt.config.js
      - nuxt.config.js ⇒ matched layouts ⇒ matched pages
      - matched layouts ⇒ matched pages ⇒ nuxt.config.js
    correctAnswer: nuxt.config.js ⇒ matched layouts ⇒ matched pages
  - question: What key do we use to add your middleware to every route?
    answers:
      - middleware.router
      - router.middleware
      - routes.middleware
    correctAnswer: router.middleware
  - question: You can add multiple middleware to a specific page or layout?
    answers:
      - true
      - false
    correctAnswer: true
  - question: How do you add this named middleware (`middleware/authenticated.js`) to your page?
    answers:
      - "middleware: authenticated"
      - "middleware: true"
      - "middleware: 'authenticated'"
    correctAnswer: "middleware: 'authenticated'"
  - question: How do you use anonymous middleware, middleware only for a specific page?
    answers:
      - create a named middleware and save it in the middleware directory
      - create a `middleware` function for it in the page component
      - add a _.vue file to the middleware directory
    correctAnswer: create a `middleware` function for it in the page component
---

The `middleware` directory contains your application middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout).

Shared middleware should be placed in the  `middleware/`  directory. The filename will be the name of the middleware (`middleware/auth.js` will be the `auth` middleware). You can also define page-specific middleware by using a function directly, see [anonymous middleware](https://nuxtjs.org/api/pages-middleware#anonymous-middleware).

A middleware receives [the context](https://nuxtjs.org/api/context) as the first argument.

Example: `middleware/user-agent.js`

```js
export default function (context) {
  // Add the userAgent property to the context
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
```

In universal mode, middlewares will be called once on server-side (on the first request to the Nuxt app, e.g. when directly accessing the app or refreshing the page) and on the client-side when navigating to further routes. In SPA mode, middlewares will be called on the client-side in both situations.

The middleware will be executed in series in this order:

1. `nuxt.config.js` (in the order within the file)
2. Matched layouts
3. Matched pages

A middleware can be asynchronous. To do this, simply return a  `Promise` or use async/await.

`middleware/stats.js`

```js
import http from 'http'

export default function ({ route }) {
  return http.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
```

Then, in your `nuxt.config.js`, use the `router.middleware` key.

`nuxt.config.js`

```js
export default {
  router: {
    middleware: 'stats'
  }
}
```

Now the `stats` middleware will be called for every route change. 

You can add your middleware (even multiple) to a specific layout or page as well.

`pages/index.vue` or `layouts/default.vue`

```js
export default {
  middleware: ['auth', 'stats']
}
```

## Named middleware

You can create named middleware by creating a file inside the  `middleware/` directory, the file name will be the middleware name.

`middleware/authenticated.js`

```js
export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
```

`pages/secret.vue`

```js
<template>
  <h1>Secret page</h1>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
```

## Anonymous middleware

If you need to use a middleware only for a specific page, you can directly use a function for it (or an array of functions):

`pages/secret.vue`

```js
<template>
  <h1>Secret page</h1>
</template>

<script>
export default {
  middleware ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.authenticated) {
      return redirect('/login')
    }
  }
}
</script>
```

➡️[https://nuxtjs.org/examples/middleware](https://nuxtjs.org/examples/middleware)

## Quiz

<quiz :questions="questions"></quiz>
