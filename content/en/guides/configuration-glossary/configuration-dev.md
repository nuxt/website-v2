---
title: 'The dev Property'
description: Define the development or production mode.
menu: dev
category: configuration-glossary
position: 6
---

- Type: `Boolean`
- Default: `true`

> Define the development or production mode of Nuxt.js.

This property is overwritten by the nuxt commands:

- `dev` is forced to `true` with `nuxt`
- `dev` is forced to `false` with `nuxt build`, `nuxt start` and `nuxt generate`

This property should be used when using [Nuxt.js programmatically](/docs/2.x/internals-glossary/nuxt):

```js{}[nuxt.config.js]
export default {
  dev: process.env.NODE_ENV !== 'production'
}
```

```js{}[server.js]
const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
}

// Listen the server
app.listen(port, '0.0.0.0').then(() => {
  console.log(`Server is listening on port: ${port}`)
})
```

```json{}[package.json]
{
  "scripts": {
    "dev": "node server.js",
    "build": "nuxt build",
    "start": "NODE_ENV=production node server.js"
  }
}
```
