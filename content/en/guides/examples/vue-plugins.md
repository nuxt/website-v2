---
title: Vue Plugins
description: In this example we show how to add a vue plugin to your application
position: 63
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_vue
---

In this example we show how to add a vue plugin to your application. In the plugins folder you will find a `vue-toolitp.js` file which will import Vue and the tooltip and then tell Vue to use it. You will see in the `package.json` file that the v-tooltip package has been installed. In our nuxt.config file we add our plugin to the plugins property as well as the css file that we want to use for the tooltip. This is a reduced version of the css file that this plugin provides you with.

In our `vue-plugins.vue` page we have a have a button where we pass in the v-tooltip directive with a message that comes from our data property and we add to it the value of top-center so it is positioned at the top.

<base-alert type="next">

Learn more in the Directory Structure book in the [plugins](/guides/directory-structure/plugins#vue-plugins) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
