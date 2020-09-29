---
title: External Packages Plugin
description: In this example we show how to use a plugin with an external package - axios
position: 62
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_external
---

In this example we show how to use a plugin with an external package - axios. In the `package.json` file you can see that `@nuxtjs/axios` has been installed. This is then added to the `modules` property of our `nuxt.config` file. You will also see we have registered our plugin which is located in the plugin folder and is called `axios.js`

Our plugin is a function that passes in `$axios` and redirect to the context. This intercepts the `$axios` call using the `onError()` function and if there is an error with the response status of '404' we redirect the user to the no-posts page.

In the `external-plugins.vue` file we have created a link to a page with a post id that doesn't exist in our API. Therefore the interceptor will be called instead of us going to the `posts/_id.vue` page. If there is no error then the route will work as normal and our data will be fetched using `$axios`.

<base-alert type="next">

Learn more in the Directory Structure book in the [plugins](/guides/directory-structure/plugins#external-packages) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
