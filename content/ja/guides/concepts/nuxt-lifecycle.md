---
title: Nuxt Lifecycle
description: No matter which tool you use, you will always feel more confident when you understand how the tool works under the hood. The same applies to Nuxt.js.
position: 5
category: concepts
img: /docs/2.x/nuxt-lifecycle.svg
imgAlt: understanding-nuxt-2-12-lifecycle-hooks
questions:
  - question: When does the Nuxt.js lifecycle start?
    answers:
      - When the response will be sent to the client
      - After the build phase
      - When running nuxt dev
    correctAnswer: After the build phase
  - question: On which main factors does the content of the lifecycle depend?
    answers:
      - Which time and date we have when starting the server
      - If server side rendering is enabled and if so, which type is used
      - What type of OS the Nuxt.js application is running on
    correctAnswer: If server side rendering is enabled and if so, which type is used
  - question: When is nuxtServerInit called?
    answers:
      - Server-side and client-side
      - After the Vue hydration
      - Only on the server side
    correctAnswer: Only on the server side
  - question: What are the three types of middleware?
    answers:
      - Global, Layout, Route
      - Global, Layout, Page
      - Global, Group, Route
    correctAnswer: Global, Layout, Route
  - question: What step can only happen on the client side?
    answers:
      - Vue Hydration
      - Middleware execution
      - Calling the fetch function
    correctAnswer: Vue Hydration
  - question: Which step never happens on the client side?
    answers:
      - Executing asyncData
      - Executing serverMiddleware
      - Executing fetch
    correctAnswer: Executing serverMiddleware
  - question: Which Vue methods are called on both, server and client side?
    answers:
      - mounted and beforeMount
      - beforeDestroy and destroyed
      - created and beforeCreate
    correctAnswer: created and beforeCreate
  - question: What step does not happen after navigating via <NuxtLink>?
    answers:
      - Calling fetch
      - Executing client-side Nuxt.js plugins
      - Calling beforeCreate
    correctAnswer: Executing client-side Nuxt.js plugins
  - question: What is the special difference between asyncData and fetch after navigating via <NuxtLink>?
    answers:
      - asyncData is faster than fetch
      - asyncData is called after fetch
      - asyncData is blocking while fetch is not
    correctAnswer: asyncData is blocking while fetch is not
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

No matter which tool you use, you will always feel more confident when you understand how the tool works under the hood. The same applies to Nuxt.js. The goal of this chapter is to give you a high-level overview of the different parts of the framework, their order of execution and how they work together.

The Nuxt.js lifecycle describes what happens after the build phase, where your application is bundled, chunked and minified. What happens after this phase depends on whether you have server-side rendering enabled or not. If you have, it furthermore depends on the type of server-side rendering you have chosen:

Dynamic SSR (`nuxt start`)

or Static Site Generation (`nuxt generate`).

## Lifecycle

### Server

For SSR, these steps will be executed for every initial request to your app

- The server starts (`nuxt start`)

When using static site generation, the server steps are only executed on build time, but once for every page that will be generated

- The generation process starts (`nuxt generate`)

- Nuxt hooks
- serverMiddleware
- Server-side Nuxt plugins
  - in order as defined in nuxt.config.js
- nuxtServerInit
  - Vuex action that is called only on server-side to pre-populate the store
  - First argument is the **Vuex context**, second argument is the **Nuxt.js context**
    - Dispatch other actions from here → only "entry point" for subsequent store actions on server-side
  - can only be defined in `store/index.js`
- Middleware
  - Global middleware
  - Layout middleware
  - Route middleware
- asyncData
- beforeCreate (Vue lifecycle method)
- created (Vue lifecycle method)
- The new fetch (top to bottom, siblings = parallel)
- Serialization of state (`render:routeContext` Nuxt.js hook)

- the HTML rendering happens (`render:route` Nuxt.js hook)

- `render:routeDone` hook when HTML has been sent to the browser

- `generate:before` Nuxt.js hook
- HTML files are generated
  - **Full static generation**
    - e.g. static payloads are extracted
  - `generate:page` (HTML editable)
  - `generate:routeCreated` (Route generated)
- `generate:done` when all HTML files have been generated

### Client

This part of the lifecycle is fully executed in the browser, no matter which Nuxt.js mode you've chosen.

- Receives the HTML
- Loading assets (e.g. Javascript)
- Vue Hydration
- Middleware
  - Global middleware
  - Layout middleware
  - Route middleware
- asyncData (blocking)
- client-side Nuxt.js plugin
  - in order as defined in nuxt.config.js
- beforeCreate (Vue lifecycle method)
- created (Vue lifecycle method)
- The new fetch (top to bottom, siblings = parallel) (non-blocking)
- beforeMount (Vue lifecycle method)
- mounted (Vue lifecycle method)

### Navigate using the NuxtLink component

Same as for the _client_ part, everything is happening in the browser but only when navigating via `<NuxtLink>`. Furthermore, no page content is displayed until all _blocking_ tasks are fulfilled.

<base-alert type="info">

Check out the component chapter to see more info on [`<NuxtLink>`](/docs/2.x/features/nuxt-components#the-nuxtlink-component)

</base-alert>

- middleware (blocking)
  - Global middleware
  - Layout middleware
  - Route middleware
- asyncData (blocking)
- asyncData (blocking) [or full static payload loading]
- beforeCreate & created (Vue lifecycle methods)
- fetch (non-blocking)
- beforeMount & mounted

### What's next

<base-alert type="next">

Check out the [Features book](/docs/2.x/features/rendering-modes)

</base-alert>

<quiz :questions="questions"></quiz>
