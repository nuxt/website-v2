---
title: Internal Module
description: Internal and external modules to fetch data from an API
position: 501
category: modules
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/10_modules-internal?fontsize=14&hidenavigation=1&module=%2Fmodules%2FgetUrl%2Findex.js&theme=dark
---

<example-intro></example-intro>

- `modules/getUrl/index.js` adds a public URL from ngrok to the Nuxt CLI when in dev mode.
- `pages/index.vue` shows the public URL from ngrok.
- `nuxt.config.js` registers our module using the `buildModules` property.

<base-alert type="next">

Learn more in the Directory Structure book in the [modules](/guides/directory-structure/modules) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
