---
title: middleware
description: The `middleware` directory contains your application middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout).
position: 8
category: directory-structure
csb_link_anonymous: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_anonymous?fontsize=14&hidenavigation=1&theme=dark
csb_link_named: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_named?fontsize=14&hidenavigation=1&theme=dark
csb_link_router: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_router?fontsize=14&hidenavigation=1&theme=dark
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
  - question: When SSR is set to false when is middleware called?
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
      - 'middleware: authenticated'
      - 'middleware: true'
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

Shared middleware should be placed in the  `middleware/`  directory. The filename will be the name of the middleware (`middleware/auth.js` will be the `auth` middleware). You can also define page-specific middleware by using a function directly, see [anonymous middleware](/docs/2.x/components-glossary/pages-middleware#anonymous-middleware).

A middleware receives [the context](/docs/2.x/internals-glossary/context) as the first argument.

```js{}[middleware/user-agent.js]
export default function (context) {
  // Add the userAgent property to the context
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
```

In universal mode, middlewares will be called once on server-side (on the first request to the Nuxt app, e.g. when directly accessing the app or refreshing the page) and on the client-side when navigating to further routes. With `ssr: false`, middlewares will be called on the client-side in both situations.

The middleware will be executed in series in this order:

1. `nuxt.config.js` (in the order within the file)
2. Matched layouts
3. Matched pages

## Router Middleware

A middleware can be asynchronous. To do this return a  `Promise` or use async/await.

```js{}[middleware/stats.js]
import http from 'http'

export default function ({ route }) {
  return http.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
```

Then, in your `nuxt.config.js`, use the `router.middleware` key.

```js{}[nuxt.config.js]
export default {
  router: {
    middleware: 'stats'
  }
}
```

Now the `stats` middleware will be called for every route change.

You can add your middleware (even multiple) to a specific layout or page as well.

```js{}[pages/index.vue / layouts/default.vue]
export default {
  middleware: ['auth', 'stats']
}
```

<app-modal>
  <code-sandbox  :src="csb_link_router"></code-sandbox>
</app-modal>

## Named middleware

You can create named middleware by creating a file inside the  `middleware/` directory, the file name will be the middleware name.

```js{}[middleware/authenticated.js]
export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
```

```html{}[pages/secret.vue]
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware: 'authenticated'
  }
</script>
```

<app-modal>
  <code-sandbox  :src="csb_link_named"></code-sandbox>
</app-modal>

## Anonymous middleware

If you need to use a middleware only for a specific page, you can directly use a function for it (or an array of functions):

```html{}[pages/secret.vue]
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      // If the user is not authenticated
      if (!store.state.authenticated) {
        return redirect('/login')
      }
    }
  }
</script>
```

<app-modal>
  <code-sandbox  :src="csb_link_anonymous"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
