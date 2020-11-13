---
title: External Module
description: Internal and external modules to fetch data from an API
position: 502
category: modules
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/10_modules
---

<example-intro></example-intro>

External Module (normally an npm package):

- `myModule/lib/plugin.js` shows how the functions `nuxtHello` and `nuxtApiExternal` work.
- `myModule/lib/moudle.js` exports the module and adds the plugin.

`pages/index.vue` uses:

- `app.nuxtHello` to print a hello message.
- `$app.$nuxtApi` and `$app.$nuxtApiExternal` to call our API.

`nuxt.config.js` registers our modules using the `buildModules` and `modules` property.

<base-alert type="next">

Learn more in the Directory Structure book in the [modules](/guides/directory-structure/modules) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
