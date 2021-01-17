---
title: 'nuxt.renderAndGetWindow(url, options)'
description: Récupère la `window` d'une URL donnée de l'application Nuxt.js.
menu: nuxt.renderAndGetWindow
category: internals-glossary
position: 12
---

- Type : `Function`
- Argument : `String`
  1. `String` : URL à afficher
  2. _Optional_, `Object` : options
  - virtualConsole: `Boolean` (par défaut : `true`)
- Renvois : `Promise`
  - Renvois : `window`

> Récupère la `window` d'une URL donnée de l'application Nuxt.js.

<base-alert>

Cette méthode est faite à des fins de test.

</base-alert>

Pour utiliser cette fonction, vous devez installer `jsdom` :

```bash
npm install --save-dev jsdom
```

Exemple :

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
