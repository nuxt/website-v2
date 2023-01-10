---
title: Local Module
description: Local Module for setting up a tunnel using ngrok
position: 501
category: modules
csb_link: https://codesandbox.io/embed/github/nuxtlabs/examples/tree/master/modules/local-module?fontsize=14&hidenavigation=1&module=%2Fmodules%2Fngrok%2Findex.js&theme=dark&view=editor
---

<example-intro></example-intro>

- `modules/ngrok/index.js` adds a public URL from ngrok to the Nuxt CLI when in dev mode.
- `pages/index.vue` shows the public URL from ngrok.
- `nuxt.config.js` registers our module using the `buildModules` property.

<base-alert type="next">

Learn more in the Directory Structure book in the [modules](/docs/2.x/directory-structure/modules) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
