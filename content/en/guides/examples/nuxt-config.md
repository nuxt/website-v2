---
title: nuxt.config
description: In the first example we show how to use the env property in our `nuxt.config.js` file to add the URL of our API so that we can then easily make calls to it without having to use the URL on our page
position: 68
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/15_nuxt-config
---

In the first example we show how to use the env property in our `nuxt.config.js` file to add the URL of our API so that we can then easily make calls to it without having to use the URL on our page. In the `nuxt-config.vue` page we use pass in `$axios` and `env` into our `asyncData()` function so that we can access it from our context. We can then use `env.apiUrl` to access our API and add to it the path we want to retrieve. We can then print our returned value in the template.

As we are using axios in this example you can see that it has been installed which you can see in our `package.json` and it has been added to the modules property of our `nuxt.config.js` file so we can use it throughout our application.

<base-alert type="next">

Learn more in the Directory Structure book in the [nuxt-config](/guides/directory-structure/nuxt-config) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
