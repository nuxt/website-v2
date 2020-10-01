---
title: Custom Plugins
description: In this example we show how you how you can create your own plugin
position: 65
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_custom_plugin
---

In the first example we show how to create a simple plugin that logs a message to the console using the `inject()` method which you can see in `plugins/hello.js`. We can then use this plugin by first registering it in the plugins property in the `nuxt.config.js` file. In our `hello-plugin.vue` page we first use a the `mounted()` function to log to the console our hello plugin with the value of mounted which shows how simple it is to use.

We then show another example using the store. In our store we have a `changeHelloValue()` function which allows us to store new values of the hello message. Then in our `hello-plugin.vue` page we use a `method()` to change the value and commit the new value to the store. We then call this method from our input when the user presses enter. Every time a user enters some text in the input it will be shown below the input as well as saved to the store. Then in the console a new message will be logged with 'Hello' followed by the text the user entered in the text field.

In the second example we show how to use a plugin to store the url of your API so you can easily make calls to your API to retrieve data without having to add it's URL each time. In the `plugins/nuxt-api.js` we use a function that awaits a fetch call to our API followed by a dynamic path returning the value in JSON format. We then use the `inject()` method to make this function available throughout our app.

We can see this in use in the `api-plugin.vue` page where we use asyncData passing in app to our context so we can then access our plugin through `app` followed by the name of our plugin and passing in the the path which in this case is 'posts'. We then return this value and can use it in our template to print out a list of posts.

<base-alert type="next">

Learn more in the Directory Structure book in the [plugins](/guides/directory-structure/plugins#inject-in-root--context) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
