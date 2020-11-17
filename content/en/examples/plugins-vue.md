---
title: Vue Plugins
description: In this example we show how to add a vue plugin to your application
position: 401
category: plugins
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_vue
---

<example-intro></example-intro>

`plugins/vue-toolitp.js` registers our plugin so we can use it.

`pages/index.vue` imports our tooltip and tells Vue to use.

`nuxt.config.js` contains the `plugins` property to register our plugin and the `css` property to add our tooltip css.

`package.json` show our tooltip package has been installed.

<base-alert type="next">

Learn more in the Directory Structure book in the [plugins](/docs/2.x/directory-structure/plugins#vue-plugins) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
