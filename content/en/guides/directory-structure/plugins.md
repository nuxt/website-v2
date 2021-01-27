---
title: plugins
description: The `plugins` directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application.
position: 11
category: directory-structure
csb_link_plugins_client: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_client?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_external: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_external?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_custom: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_custom_plugin?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_vue: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_vue?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/plugins.svg
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

The `plugins` directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to `plugins` in `nuxt.config.js`.

## External Packages

You may want to use external packages/modules in your application (one great example is [axios](https://axios.nuxtjs.org/)) for making HTTP requests for both server and client.

First, install it via npm or Yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxtjs/axios
```

  </code-block>
  <code-block label="npm">

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

Another way to use `axios` without installing the module is by importing `axios` direct in the `<script>` tag.

```js{}[pages/index.vue]
<script>
import axios from 'axios'

export default {
	async asyncData ({ params }) {
	  const { data: post }  = await axios.get(`https://api.nuxtjs.dev/posts/${params.id}`)
	  return { post }
	}
}
</script>
```

<base-alert type="info">

If you get an _Cannot use import statement outside a module_ error, you may need to add your package to the `build` > `transpile` option in `nuxt.config.js` for webpack loader to make your plugin available.

</base-alert>

```js{}[nuxt.config.js]
build: {
  // You can extend webpack config here
  transpile: ['npm-package-name'],
},
```

## Vue Plugins

If we want to use Vue plugins, like [v-tooltip](https://akryum.github.io/v-tooltip) to display tooltips in your application, we need to setup the plugin before launching the app.

First we need to install it

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add v-tooltip
```

  </code-block>
  <code-block label="npm">

```bash
npm install v-tooltip
```

  </code-block>
</code-group>

Then we create the file `plugins/vue-tooltip.js`

```js{}[plugins/vue-tooltip.js]
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

### The plugins Property

Then we add the file path inside the `plugins` key of our `nuxt.config.js`. The plugins property lets you add Vue.js plugins easily to your main application. All the paths defined in the `plugins` property will be imported before initializing the main application.

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

You can refer to the [configuration build](/docs/2.x/configuration-glossary/configuration-build#transpile) docs for more build options.

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

## The extendPlugins Property

You may want to extend plugins or change the plugins order created by Nuxt.js. This function accepts an array of [plugin](/docs/2.x/configuration-glossary/configuration-plugins) objects and should return an array of plugin objects.

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

## Global mixins

Global mixins can be easily added with Nuxt plugins but can cause trouble and memory leaks when not handled correctly. Whenever you add a global mixin to your application, you should use a flag to avoid registering it multiple times:

```js{}[plugins/my-mixin-plugin.js]
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({ ... }) // Set up your mixin then
}
```

<quiz :questions="questions"></quiz>
