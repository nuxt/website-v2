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

Shared middleware should be placed in the  `middleware/`  directory. The filename will be the name of the middleware (`middleware/auth.js` will be the `auth` middleware). You can also define page-specific middleware by using a function directly, see [anonymous middleware](/guides/components-glossary/pages-middleware#anonymous-middleware).

A middleware receives [the context](/guides/internals-glossary/context) as the first argument.

```js{}[middleware/user-agent.js]
export default function (context) {
  // Add the userAgent property to the context
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
```

In universal mode, middlewares will be called once on server-side (on the first request to the Nuxt app, e.g. when directly accessing the app or refreshing the page) and on the client-side when navigating to further routes. In SPA mode, middlewares will be called on the client-side in both situations.

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

### Example

In this example we use the router middleware to set a class before we enter the route. In the store we have a `class.js` file which sets a class to the body. In the middleware folder, in the `class.js` file, we commit the name of the route to our `setClass` function from the store. We can then add a style for these routes which you can see in the Navigation component where we change the font size for the route with the name of `router-middleware`. The middleware is activated in the `nuxt.config` file using the `router` property.

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

### Example

In this example we use named middleware which gets called before we enter the route. In the `named-middleware.vue` file we have a middleware property with the value of 'auth'. When a user tries to access the Named Middleware route it will first activate the `auth.js` file located in the middleware folder. This file checks to see if the user is authenticated and if they aren't it redirects them to the auth page.

The `auth.vue` page contains a simple example which uses the store to authenticate the user. The `auth.js` file located in the store simply sets the the user and password values. When the form is filled in the login button is activated and when clicked calls the `login()` method which commits the user and password values to the store and sends you to the Named Middleware page using `$router.push`.

The logout button located in the `named-middleware.vue` page calls a `logout()` method which resets the user and password values and sends you back to the home page.

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

### Example

In this example we use anonymous middleware to show how many visits a page has received. In the `anonymous-middleware.vue` file there is a middleware function which uses the store to call the increment mutation. This page also displays the page visits from the store. The store contains an `analytics.js` file which sets the `pageVisits` to 0 and increments the visits every time the increment function is called. Every time we visit the Anonymous Middleware page you will see the visits increment.

<app-modal>
  <code-sandbox  :src="csb_link_anonymous"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
