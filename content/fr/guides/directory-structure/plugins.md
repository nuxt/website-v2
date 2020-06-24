---
title: plugins
description: The `plugins` directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application.
position: 11
category: Directory Structure
categoryPosition: 4
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
      - ?
    correctAnswer: $
  - question: To change the order of your plugins what property do you use?
    answers:
      - orderPlugins
      - extendPlugins
      - plugins
    correctAnswer: extendPlugins
---

![modules-servermiddleware-plugins-in-nuxt-js](https://user-images.githubusercontent.com/13063165/83777478-c390d280-a689-11ea-90cf-17d93bcda23a.jpg)

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
  <code-block label="NPM" >

  ```bash
  npm install @nuxtjs/axios
  ```

  </code-block>
</code-group>

You can configure for example the axios interceptors to react on possible errors from our API calls across the application. In this example we redirect the user to a custom error page called sorry when we get a 500 status error from our API.

`plugins/axios.js`

```js
export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if(error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
```

Last but not least, add the module and the newly created plugin to the project configuration.

`nuxt.config.js`

```js
module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '@/plugins/axios.js'
  ]
}
```

Then we can use it directly in your page components:

`pages/index.vue`

```js
<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
	async asyncData ({ $axios, params }) {
	    const  posts  = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
	    return { posts }
	  }
}
</script>
```

## Vue Plugins

If we want to use Vue plugins, like [v-tooltip](https://akryum.github.io/v-tooltip) to display tooltips in our application, we need to setup the plugin before launching the app.

First we need to install it

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add v-tooltip
  ```

  </code-block>
  <code-block label="NPM" >

  ```bash
  npm install v-tooltip
  ```

  </code-block>
</code-group>

The we create the file `plugins/vue-notifications.js`

```js
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

## The plugins Property

Then we add the file path inside the `plugins` key of our `nuxt.config.js`. The plugins property lets you add vue.js plugins easily to your main application. All the paths defined in the `plugins` property will be imported before initializing the main application.

```js
export default {
  plugins: ['@/plugins/vue-tooltip.js']
}
```

### ES6 Plugins

If the plugin is located in `node_modules` and exports an ES6 module, you may need to add it to the `transpile` build option:

```js
module.exports = {
  build: {
    transpile: ['vue-tooltip']
  }
}
```

You can refer to the [configuration build](https://nuxtjs.org/api/configuration-build/#transpile) docs for more build options.

## Client or server side only

Some plugins might work only in the browser because they lack SSR support.

### Name conventional plugin

If a plugin is assumed to be run only on client or server side,  `.client.js`  or `.server.js` can be applied as an extension of the plugin file. The file will be automatically included only on the respective (client or server) side.

`nuxt.config.js`

```js
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

`nuxt.config.js`

```js
export default {
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side
    { src: '~/plugins/server-only.js', mode: 'server' } // only on server side
  ]
}
```

## Inject in $root & context

Sometimes you want to make functions or values available across your app. You can inject those variables into Vue instances (client side), the context (server side) and even in the Vuex store. It is a convention to prefix those functions with a `$`.

Nuxt.js provides you with an `inject(key, value)` method to do this easily. Inject is given as the second parameter when exporting a function. The `$` will be prepended automatically to the key.

<base-alert type="info">

It is important to know that in any Vue [instance lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram), only  `beforeCreate` and `created` hooks are called both, from client-side and server-side. All other hooks are called only from the client-side.

</base-alert>

`plugins/hello.js`

```js
export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', (msg) => console.log(`Hello ${msg}!`))
}
```

`nuxt.config.js`

```js
export default {
  plugins: ['~/plugins/hello.js']
}
```

Now `$hello(msg)` can be used from `context`, via `this` in Vue instances and via `this` in store `actions`/`mutations`.

`example-component.vue`

```js
export default {
  mounted () {
    this.$hello('mounted')
    // will console.log 'Hello mounted!'
  },
  asyncData (context) {
    context.$hello('asyncData')
    // If using Nuxt <= 2.12, use 👇
    context.app.$hello('asyncData')
  }
}
```

`store/index.js`:

```js
export const state = () => ({
  someValue: ''
})

export const mutations = {
  changeSomeValue (state, newValue) {
    this.$hello('store mutation')
    state.someValue = newValue
  }
}

export const actions = {
  setSomeValueToWhatever ({ commit }) {
    this.$hello('store action')
    const newValue = 'whatever'
    commit('changeSomeValue', newValue)
  }
}
```

## The extendPlugins Property

You may want to extend plugins or change the plugins order created by Nuxt.js. This function accepts an array of [plugin](https://nuxtjs.org/api/configuration-plugins) objects and should return an array of plugin objects.

Example of changing plugins order (`nuxt.config.js`)

```js
export default {
  extendPlugins (plugins) {
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

Global mixins can be easily added with [Nuxt plugins] but can cause trouble and memory leaks when not handled correctly. Whenever you add a global mixin to your application, you should use a flag to avoid registering it multiple times:

`plugins/my-mixin-plugin.js`

```js
if (!Vue.__my_mixin__) { 
	Vue.__my__mixin__ = true
  Vue.mixin({ ... }) // Set up your mixin then
}
```



<quiz :questions="questions"></quiz>
