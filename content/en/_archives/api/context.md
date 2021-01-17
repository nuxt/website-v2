---
title: 'The Context'
description: The `context` provides additional objects/params from Nuxt not traditionally available to Vue components. The `context` is available in special nuxt lifecycle areas like `asyncData`, `plugins`, `middlewares`, `modules`, and `store/nuxtServerInit`.
menu: context
category: essential
position: 1
---

The `context` provides additional objects/params from Nuxt to Vue components and is available in special nuxt lifecycle areas like [`asyncData`](/api), [`fetch`](/api/pages-fetch), [`plugins`](/guide/plugins), [`middleware`](/guide/routing#middleware) and [`nuxtServerInit`](/guide/vuex-store#the-nuxtserverinit-action).

> _Note: "The Context" we refer to here is not to be confused with the `context` object available in [`Vuex Actions`](https://vuex.vuejs.org/guide/actions.html). The two are unrelated._

```js
function (context) {
  // Universal keys
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
  // Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }
  // Client-side
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

## Universal keys

These keys are available both on client-side and server-side.

### app

`app` (_NuxtAppOptions_)

The root Vue instance options that includes all your plugins. For example, when using `i18n`, you can get access to `$i18n` through `context.app.i18n`.

### store

`store` ([_Vuex Store_](https://vuex.vuejs.org/api/#vuex-store-instance-properties))

Vuex Store instance. **Available only if the [vuex store](/guide/vuex-store) is set**.

### route

`route` ([_Vue Router Route_](https://router.vuejs.org/api/#the-route-object))

Vue Router route instance.

### params

`params` (_Object_)

Alias of `route.params`.

### query

`query` (_Object_)

Alias of `route.query`.

### env

`env` (_Object_)

Environment variables set in `nuxt.config.js`, see [env api](/api/configuration-env).

### isDev

`isDev` (_Boolean_)

Boolean to let you know if you're in dev mode, can be useful for caching some data in production.

### isHMR

`isHMR` (_Boolean_)

Boolean to let you know if the method/middleware is called from webpack hot module replacement (_true only on client-side in dev mode_).

### redirect

`redirect` (_Function_)

Use this method to redirect the user to another route, the status code is used on the server-side, defaults to `302`. `redirect([status,] path [, query])`.

### error

`error` (_Function_)

Use this method to show the error page: `error(params)`. The `params` should have the properties `statusCode` and `message`.

### \$config

`$config` (_Object_)

The actual [runtime config](/guide/runtime-config).

## Server-side keys

These keys are available only on the server-side.

### req

`req` ([_http.Request_](https://nodejs.org/api/http.html#http_class_http_incomingmessage))

Request from the Node.js server. If Nuxt is used as a middleware, the request object might be different depending on the framework you're using.<br>**Not available with [static target](/docs/2.x/features/deployment-targets#static-hosting)**.

### res

`res` ([_http.Response_](https://nodejs.org/api/http.html#http_class_http_serverresponse))

Response from the Node.js server. If Nuxt is used as a middleware, the res object might be different depending on the framework you're using.<br>**Not available with [static target](/docs/2.x/features/deployment-targets#static-hosting)**.

### beforeNuxtRender

`beforeNuxtRender(fn)` (_Function_)

Use this method to update `__NUXT__` variable rendered on client-side, the `fn` (can be asynchronous) is called with `{ Components, nuxtState }`, see [example](https://github.com/nuxt/nuxt.js/blob/cf6b0df45f678c5ac35535d49710c606ab34787d/test/fixtures/basic/pages/special-state.vue).

## Client-side keys

These keys are available only on client-side.

### from

`from` ([_Vue Router Route_](https://router.vuejs.org/api/#the-route-object))

The route navigated from.

### nuxtState

`nuxtState` _(Object)_

Nuxt state, useful for plugins which uses `beforeNuxtRender` to get the nuxt state on client-side before hydration. **Available only in `universal` mode**.
