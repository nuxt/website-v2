---
title: Internal Module
description: Internal and external modules to fetch data from an API
position: 501
category: modules
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/10_modules
---

<example-intro></example-intro>

- `modules/nuxt-api/plugin.js` shows how the function `nuxtApi` works.
- `modules/nuxt-api/index.js` adds our plugin so we can use it.
- `pages/index.vue` uses `$app.$nuxtApi` to call our API.
- `nuxt.config.js` registers our modules using the `buildModules` property.

<base-alert type="next">

Learn more in the Directory Structure book in the [modules](/guides/directory-structure/modules) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
