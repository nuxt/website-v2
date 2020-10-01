---
title: Modules
description: Internal and external modules to fetch data from an API
position: 60
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/10_modules
---

In this example we show two different ways of using a module. We have an internal module which can be used only inside your project and an external module which for this example is in a folder called `myModule` but normally would be published as an npm package so that it can be shared across other applications or with the community.

In the `modules.vue` page inside our `asyncData` call we use `app` to call `app.nuxtHello` passing in the value of 'Nuxters'. We also await `$app.$nuxtApi` and `$app.$nuxtApiExternal` passing in the value of 'mountains'. Returning these values allows us to then use them in the template above so we can print out a list of mountains onto our page. We can now or API across our application and if our API url changes we only have to change it in the module.

Our first mountains API call is coming from our modules folder. Inside the `nuxt-api` folder we have a `plugin.js` file which creates a const of `NuxtApi` and awaits a fetch call to our API followed by the path that is passed into the function and returns a json. We then use the `inject()` method to inject the key and value into context so we have access to it throughout our app. The `index.js` file adds our Plugin so we can use it. We then register the module in our nuxt config in the `buildModules` property.

Our second mountains API call and our `nuxtHello()` function is coming from our external module which can be found in the `myModule` folder. This folder contains everything you need for creating a module. Inside the lib folder we will see a `plugin.js` file which will contain our functions. The `nuxtHello` function returns a message to console with the value of 'Hello' followed by the value that is passed into it when calling the function. The const of `nuxtApiExternal` works exactly the same as the internal module using the `inject()` method so that we have access to it. The `module.js` file uses `this.options` where we pass in the name of the module and we use the `addPlugin()` method to add our plugin. As it is an external module we use the `module.exports` to export it. We can then use this module by adding it to the `modules` property in the `nuxt.config.js` file.

<base-alert type="next">

Learn more in the Directory Structure book in the [modules](/guides/directory-structure/modules) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
