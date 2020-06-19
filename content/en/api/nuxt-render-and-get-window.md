---
title: "API: nuxt.renderAndGetWindow(url, options)"
description: Get the `window` from a given URL of a Nuxt.js Application.
---

- Type: `Function`
- Argument: `String`
  1. `String`: URL to render
  2. *Optional*, `Object`: options
    - virtualConsole: `Boolean` (default: `true`)
- Returns: `Promise`
  - Returns: `window`

> Get the window from a given url of a Nuxt.js application.

<div class="Alert Alert--orange">

This method is made for [test purposes](/guide/development-tools#end-to-end-testing).

</div>

To use this function, you have to install `jsdom`:

```bash
npm install --save-dev jsdom
```

Example:

```js
const { Nuxt, Builder } = require('nuxt')

const config = require('./nuxt.config.js')
config.dev = false

const nuxt = new Nuxt(config)

nuxt.renderAndGetWindow('http://localhost:3000')
  .then((window) => {
  // Display the head `<title>`
    console.log(window.document.title)
  })
```
