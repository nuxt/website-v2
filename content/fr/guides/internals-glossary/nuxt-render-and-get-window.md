---
title: 'nuxt.renderAndGetWindow(url, options)'
description: Récupère la `window` d'une URL donnée de l'application Nuxt.js.
menu: nuxt.renderAndGetWindow
category: internals-glossary
position: 12
---

- Type: `Function`
- Argument: `String`
  1. `String`: URL to render
  2. _Optional_, `Object`: options
  - virtualConsole: `Boolean` (default: `true`)
- Returns: `Promise`
  - Returns: `window`

> Récupère la `window` d'une URL donnée de l'application Nuxt.js.

<base-alert>

Cette méthode est faite à des fins de test.

</base-alert>

Pour utiliser cette fonction, vous devez installer `jsdom` :

```bash
npm install --save-dev jsdom
```

Example:

```js
const { Nuxt, Builder } = require('nuxt')

const config = require('./nuxt.config.js')
config.dev = false

const nuxt = new Nuxt(config)

nuxt.renderAndGetWindow('http://localhost:3000').then(window => {
  // Affiche l'en-tête `<title>`
  console.log(window.document.title)
})
```
