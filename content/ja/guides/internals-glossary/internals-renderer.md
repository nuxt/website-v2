---
title: 'The Renderer Class'
description: Nuxt Renderer Class
menu: Renderer
category: internals-glossary
position: 5
---

- Source: **[vue-renderer/renderer.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-renderer/src/renderer.js)**

This class is exporting a connect middleware which handles and serves all SSR and asset requests.

## Hooks

We can register hooks on certain life cycle events.

| Hook                     | Arguments                | When                                                                                                                                                                                                               |
| ------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `render:before`          | (renderer, options)      | Before setting up middleware and resources for the Renderer class, useful to overload some methods or options.                                                                                                     |
| `render:setupMiddleware` | (app) _connect instance_ | Before Nuxt adds its middleware stack. We can use it to register custom server side middleware.                                                                                                                    |
| `render:errorMiddleware` | (app) _connect instance_ | Before adding Nuxt error middleware, useful to add your own middleware before using Nuxt's. See the [Sentry module](https://github.com/nuxt-community/sentry-module/blob/v4.0.3/lib/module.js#L151) for more info. |
| `render:resourcesLoaded` | (resources)              | Called after resources for renderer are loaded (client manifest, server bundle, etc).                                                                                                                              |
| `render:done`            | (renderer)               | SSR Middleware and all resources are ready (Renderer ready)                                                                                                                                                        |
| `render:routeContext`    | (context.nuxt)           | _Every time a route is server-rendered and before `render:route` hook_. Called before serializing Nuxt context into `window.__NUXT__`, useful to add some data that you can fetch on client-side.                  |
| `render:route`           | (url, result, context)   | _Every time a route is server-rendered_. Called before sending back the request to the browser.                                                                                                                    |
| `render:routeDone`       | (url, result, context)   | _Every time a route is server-rendered_. Called after the response has been sent to the browser.                                                                                                                   |
