---
title: 'The Nuxt Class'
description: Nuxt Core Class
menu: Nuxt
category: internals
position: 302
---

- Source: **[core/nuxt.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/core/src/nuxt.js)**

This is the core container which allows all modules and classes communicate with each other. All modules have access to Nuxt instance using `this.nuxt`.

## Hooks

We can register hooks on certain life cycle events.

```js
nuxt.hook('ready', async nuxt => {
  // Your custom code here
})
```

| Plugin   | Arguments              | When                                                                           |
| -------- | ---------------------- | ------------------------------------------------------------------------------ |
| `ready`  | (nuxt)                 | Nuxt is ready to work (`ModuleContainer` and `Renderer` ready).                |
| `error`  | (error)                | An unhandled error when calling hooks.                                         |
| `close`  | (nuxt)                 | Nuxt instance is gracefully closing.                                           |
| `listen` | (server, {host, port}) | Nuxt **internal** server starts listening. (Using `nuxt start` or `nuxt dev`). |
