---
title: plugins
description: The `plugins` directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application.
position: 11
category: directory-structure
csb_link_plugins_client: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_client?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_external: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_external?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_custom: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_custom_plugin?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_vue: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_vue?fontsize=14&hidenavigation=1&theme=dark
img: /guides/plugins.svg
imgAlt: modules-servermiddleware-plugins-in-nuxt-js
questions:
  - question: The `plugins` directory contains your Javascript plugins that you want to run
    answers:
      - before instantiating the root Vue.js Application
      - while instantiating the root Vue.js Application
      - after instantiating the root Vue.js Application
    correctAnswer: before instantiating the root Vue.js Application
  - question: The Vue.js hooks beforeCreate and created are called
    answers:
      - only from client side
      - only from server side
      - from both client side and server side
    correctAnswer: from both client side and server side
  - question: Every time you want to use use Vue.use() you should create a file in which directory?
    answers:
      - vue
      - plugins
      - vuePlugins
    correctAnswer: plugins
  - question: Where do you add the plugin so it is imported to your main application?
    answers:
      - in your layouts page
      - in the nuxt.config.js file
      - you don't have to, it is automatically imported
    correctAnswer: in the nuxt.config.js file
  - question: Some plugins might work only in the browser?
    answers:
      - true
      - false
    correctAnswer: true
  - question: What extension can you apply if you want your plugin to only run on the server?
    answers:
      - .serverside.js
      - .ssr.js
      - .server.js
    correctAnswer: .server.js
  - question: What two modes can you use for your plugins?
    answers:
      - server and client
      - ssr and client
      - server-side and client-side
    correctAnswer: server and client
  - question: What do you do to make functions or values available across your app?
    answers:
      - create a plugin
      - use the inject method
      - create a module
    correctAnswer: use the inject method
  - question: As a convention what should you prefix your inject functions with?
    answers:
      - $
      - _
      - ':'
    correctAnswer: $
  - question: To change the order of your plugins what property do you use?
    answers:
      - orderPlugins
      - extendPlugins
      - plugins
    correctAnswer: extendPlugins
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

The `plugins` directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to `plugins` in `nuxt.config.js`.

## External Packages

You may want to use external packages/modules in your application (one great example is [axios](https://axios.nuxtjs.org/)) for making HTTP requests for both server and client.

First, install it via NPM or Yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxtjs/axios
```

  </code-block>
  <code-block label="NPM">

```bash
npm install @nuxtjs/axios
```

  </code-block>
</code-group>

You can configure for example the axios interceptors to react on possible errors from your API calls across the application. In this example we redirect the user to a custom error page called sorry when we get a 500 status error from our API.

```js{}[plugins/axios.js]
export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
```

Last but not least, add the module and the newly created plugin to the project configuration.

```js{}[nuxt.config.js]
module.exports = {
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/axios.js']
}
```

Then we can use it directly in your page components:

```js{}[pages/index.vue]
<template>
  <h1>{{ post.title }}</h1>
</template>

<script>
export default {
	async asyncData ({ $axios, params }) {
	    const  post  = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
	    return { post }
	  }
}
</script>
```

### Example

In this example we show how to use a plugin with an external package using axios. In the `package.json` file you can see that `@nuxtjs/axios` has been installed. This is then added to the `modules` property of our `nuxt.config` file. You will also see we have registered our plugin which is located in the plugin folder and is called `axios.js`

Our plugin is a function that passes in `$axios` and redirect to the context. This intercepts the `$axios` call using the `onError()` function and if there is an error with the response status of '404' we redirect the user to the no-posts page.

In the `external-plugins.vue` file we have created a link to a page with a post id that doesn't exist in our API. Therefore the interceptor will be called instead of us going to the `posts/_id.vue` page. If there is no error then the route will work as normal and our data will be fetched using `$axios`.

<app-modal>
  <code-sandbox :src="csb_link_plugins_external"></code-sandbox>
</app-modal>

## Vue Plugins

If we want to use Vue plugins, like [v-tooltip](https://akryum.github.io/v-tooltip) to display tooltips in your application, we need to setup the plugin before launching the app.

First we need to install it

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add v-tooltip
```

  </code-block>
  <code-block label="NPM">

```bash
npm install v-tooltip
```

  </code-block>
</code-group>

The we create the file `plugins/vue-tooltip.js`

```js{}[plugins/vue-tooltip.js]
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

### The plugins Property

Then we add the file path inside the `plugins` key of our `nuxt.config.js`. The plugins property lets you add vue.js plugins easily to your main application. All the paths defined in the `plugins` property will be imported before initializing the main application.

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/vue-tooltip.js']
}
```

### ES6 Plugins

If the plugin is located in `node_modules` and exports an ES6 module, you may need to add it to the `transpile` build option:

```js{}[nuxt.config.js]
module.exports = {
  build: {
    transpile: ['vue-tooltip']
  }
}
```

You can refer to the [configuration build](/guides/configuration-glossary/configuration-build#transpile) docs for more build options.

### Example

In this example we show how to add a vue plugin to your application. In the plugins folder you will find a `vue-toolitp.js` file which will import Vue and the tooltip and then tell Vue to use it. You will see in the `package.json` file that the v-tooltip package has been installed. In our nuxt.config file we add our plugin to the plugins property as well as the css file that we want to use for the tooltip. This is a reduced version of the css file that this plugin provides you with.

In our `vue-plugins.vue` page we have a have a button where we pass in the v-tooltip directive with a message that comes from our data property and we add to it the value of top-center so it is positioned at the top.

<app-modal>
  <code-sandbox  :src="csb_link_plugins_vue"></code-sandbox>
</app-modal>

## Client or server side only

Some plugins might work only in the browser because they lack SSR support.

### Name conventional plugin

If a plugin is assumed to be run only on client or server side,  `.client.js`  or `.server.js` can be applied as an extension of the plugin file. The file will be automatically included only on the respective (client or server) side.

```js{}[nuxt.config.js]
export default {
  plugins: [
    '~/plugins/foo.client.js', // only in client side
    '~/plugins/bar.server.js', // only in server side
    '~/plugins/baz.js' // both client & server
  ]
}
```

### Object syntax

You can also use the object syntax with the `mode` property (`'client'`  or `'server'`) in `plugins`.

```js{}[nuxt.config.js]
export default {
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side
    { src: '~/plugins/server-only.js', mode: 'server' } // only on server side
  ]
}
```

### Example

In this example we register a plugin so that it is only available on the client side. In the plugins folder we have a file called `client-only.js` which uses the `window.alert()` function to send an alert message. You will see this message before the page is initialized which is how plugins work. As we do not have access to the window property on server side we must register this plugin only on the client. You can see in the nuxt.config.js file that we register the plugin with `.client.js` as its extension.

<app-modal>
  <code-sandbox  :src="csb_link_plugins_client"></code-sandbox>
</app-modal>

## Inject in `$root` & context

Sometimes you want to make functions or values available across your app. You can inject those variables into Vue instances (client side), the context (server side) and even in the Vuex store. It is a convention to prefix those functions with a `$`.

Nuxt.js provides you with an `inject(key, value)` method to do this easily. Inject is given as the second parameter when exporting a function. The `$` will be prepended automatically to the key.

<base-alert type="info">

It is important to know that in any Vue [instance lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram), only  `beforeCreate` and `created` hooks are called both, from client-side and server-side. All other hooks are called only from the client-side.

</base-alert>

```js{}[plugins/hello.js]
export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', msg => console.log(`Hello ${msg}!`))
}
```

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/hello.js']
}
```

Now `$hello` service can be accessed from `context` and `this` in pages, components, plugins, and store actions.

```js{}[example-component.vue]
export default {
  mounted() {
    this.$hello('mounted')
    // will console.log 'Hello mounted!'
  },
  asyncData({ app, $hello }) {
    $hello('asyncData')
    // If using Nuxt <= 2.12, use 👇
    app.$hello('asyncData')
  }
}
```

```js{}[store/index.js]
export const state = () => ({
  someValue: ''
})

export const actions = {
  setSomeValueToWhatever({ commit }) {
    this.$hello('store action')
    const newValue = 'whatever'
    commit('changeSomeValue', newValue)
  }
}
```

<base-alert>

Don't use `Vue.use()`, `Vue.component()`, and globally, don't plug anything in Vue **inside** this function, dedicated to Nuxt injection. It will cause memory leak on server-side.

</base-alert>

### Example

In the first example we show how to create a simple plugin that logs a message to the console using the `inject()` method which you can see in `plugins/hello.js`. We can then use this plugin by first registering it in the plugins property in the `nuxt.config` file. In our `hello-plugin.vue` page we first use a the `mounted()` function to log to the console our hello plugin with the value of mounted which shows how simple it is to use.

We then show another example using the store. In our store we have a `changeHelloValue()` function which allows us to store new values of the hello message. Then in our `hello-plugin.vue` page we use a `method()` to change the value and commit the new value to the store. We then call this method from our input when the user presses enter. Every time a user enters some text in the input it will be shown below the input as well as saved to the store. Then in the console a new message will be logged with 'Hello' followed by the text the user entered in the text field.

In the second example we show how to use a plugin to store the url of your API so you can easily make calls to your API to retrieve data without having to add it's URL each time. In the `plugins/nuxt-api.js` we use a function that awaits a fetch call to our API followed by a dynamic path returning the value in JSON format. We then use the `inject()` method to make this function available throughout our app.

We can see this in use in the `api-plugin.vue` page where we use asyncData passing in app to our context so we can then access our plugin through `app` followed by the name of our plugin and passing in the the path which in this case is 'posts'. We then return this value and can use it in our template to print out a list of posts.

<app-modal>
  <code-sandbox  :src="csb_link_plugins_custom"></code-sandbox>
</app-modal>

## The extendPlugins Property

You may want to extend plugins or change the plugins order created by Nuxt.js. This function accepts an array of [plugin](/guides/configuration-glossary/configuration-plugins) objects and should return an array of plugin objects.

Example of changing plugins order:

```js{}[nuxt.config.js]
export default {
  extendPlugins(plugins) {
    const pluginIndex = plugins.findIndex(
      ({ src }) => src === '~/plugins/shouldBeFirst.js'
    )
    const shouldBeFirstPlugin = plugins[pluginIndex]

    plugins.splice(pluginIndex, 1)
    plugins.unshift(shouldBeFirstPlugin)

    return plugins
  }
}
```

### Global mixins

Global mixins can be easily added with Nuxt plugins but can cause trouble and memory leaks when not handled correctly. Whenever you add a global mixin to your application, you should use a flag to avoid registering it multiple times:

```js{}[plugins/my-mixin-plugin.js]
if (!Vue.__my_mixin__) {
	Vue.__my__mixin__ = true
  Vue.mixin({ ... }) // Set up your mixin then
}
```

<quiz :questions="questions"></quiz>
