---
title: Helpers de Nuxt
description: Usando los helpers de $nuxt con $nuxt.isOnline, renderingOn, refresh(), onNuxtReady
position: 8
category: miscellaneous
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/miscellaneous/nuxt-helpers?fontsize=14&hidenavigation=1&theme=dark&view=editor
---

<example-intro></example-intro>

`pages/index.vue` muestra:

- `$nuxt.isOnline` y `$nuxt.isOffline` - le dice al usuario si está conectado o desconectado.
- `renderedOn` - imprime un mensaje que nos dice si la página se procesa en el servidor o en el cliente.
- `$nuxt.refresh()` - actualiza los datos sin actualizar la página.

`plugins/nuxt-ready.client.js` muestra:

- `window.onNuxtReady` - registra un mensaje en la consola cuando Nuxt es listo.

<base-alert type="next">

Aprende más en el libro Conceptos en [Contexto y Helpers].(/docs/2.x/concepts/context-helpers#helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
