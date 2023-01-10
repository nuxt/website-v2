---
title: 'Using Nuxt.js Programmatically'
description: You can use Nuxt.js programmatically to use it as a middleware giving you the freedom of creating your own server for rendering your web applications.
menu: Using Nuxt Programmatically
category: internals-glossary
position: 9
---

You might want to use your own server with your middleware and your API. That's why you can use Nuxt.js programmatically.

## Nuxt Constructor

To see the list of options to give to Nuxt.js, see the configuration section.

```js
const { loadNuxt, build } = require('nuxt')

// Check if we need to run Nuxt in development mode
const isDev = process.env.NODE_ENV !== 'production'

// Get a ready to use Nuxt instance
const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

// Enable live build & reloading on dev
if (isDev) {
  build(nuxt)
}

// We can use `nuxt.render(req, res)` or `nuxt.renderRoute(route, context)`
```

You can take a look at the [nuxt-express](https://github.com/nuxt/express) and [adonuxt](https://github.com/nuxt/adonuxt) starters to get started quickly.

### Debug logs

If you want to display Nuxt.js logs, you can add the following to the top of your file:

```js
process.env.DEBUG = 'nuxt:*'
```
