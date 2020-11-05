---
title: store
description: The `store` directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an `index.js`  file in this directory enables the store.
position: 13
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/14_store?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: How do you enable the store?
    answers:
      - It is enabled by default
      - create a js file in the store folder
      - 'add store: true to your nuxt.config.js file'
    correctAnswer: create an js file in the store folder
  - question: Every .js file in the store directory is transformed to a
    answers:
      - plugin
      - module
      - function
    correctAnswer: module
  - question: In the store you should export the state as
    answers:
      - a function
      - an object
      - a string
    correctAnswer: a function
  - question: In the store you should export the mutations and actions as
    answers:
      - a function
      - an object
      - a string
    correctAnswer: an object
  - question: You can add plugins to the store
    answers:
      - true
      - false
    correctAnswer: true
  - question: The fetch method is used to fill the store
    answers:
      - before rendering the page
      - while rendering the page
      - after rendering the page
    correctAnswer: before rendering the page
  - question: What can you use when you have some data on the server that you want to give directly to the client side?
    answers:
      - nuxtServerInit
      - fetch
      - asyncData
    correctAnswer: nuxtServerInit
  - question: In asyncData the context is given to the nuxtServerInit as the
    answers:
      - first argument
      - second argument
      - third argument
    correctAnswer: second argument
---

The `store` directory contains your [Vuex Store](http://vuex.vuejs.org/en/) files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an  `index.js`  file in this directory enables the store.

<base-alert>

_This directory cannot be renamed without extra configuration._

</base-alert>

Using a store to manage the state is important for every big application. That's why Nuxt.js implements Vuex in its core.

## Activate the Store

Nuxt.js will look for the `store` directory. If it contains a file, that isn't a hidden file or a `README.md` file, then the store will be activated. This means that Nuxt will:

1. Import Vuex,
2. Add the `store` option to the root Vue instance.

## Modules

Every `.js` file inside the `store` directory is transformed as a [namespaced module](http://vuex.vuejs.org/en/modules.html) (`index` being the root module). Your `state` value should always be a `function` to avoid unwanted *shared* state on the server side.

To get started, export the state as a function, and the mutations and actions as objects.

```js{}[store/index.js]
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
```

Then, you can have a `store/todos.js` file:

```js{}[store/todos.js]
export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(todo) {
    todo.done = !todo.done
  }
}
```

The store will be created as such:

```js
new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      namespaced: true,
      state: () => ({
        list: []
      }),
      mutations: {
        add(state, { text }) {
          state.list.push({
            text,
            done: false
          })
        },
        remove(state, { todo }) {
          state.list.splice(state.list.indexOf(todo), 1)
        },
        toggle(state, { todo }) {
          todo.done = !todo.done
        }
      }
    }
  }
})
```

And in your `pages/todos.vue`, using the `todos` module:

```js{}[pages/todos.vue]
<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
```

The module method also works for top-level definitions without implementing a sub-directory in the store directory.

Example for state: you create a file `store/state.js` and add the following.

```js
export default () => ({
  counter: 0
})
```

And the corresponding mutations can be in the file  `store/mutations.js`

```js{}[store/mutations.js]
export default {
  increment(state) {
    state.counter++
  }
}
```

## Plugins in the Store

You can add additional plugins to the store by putting them into the `store/index.js` file:

```js{}[store/index.js]
import myPlugin from 'myPlugin'

export const plugins = [myPlugin]

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
```

More information about the plugins: [Vuex documentation](https://vuex.vuejs.org/en/plugins.html).

## The nuxtServerInit Action

If the action `nuxtServerInit` is defined in the store and the mode is `universal`, Nuxt.js will call it with the context (only from the server-side). It's useful when we have some data on the server we want to give directly to the client-side.

For example, let's say we have sessions on the server-side and we can access the connected user through `req.session.user`. To give the authenticated user to our store, we update our `store/index.js` to the following:

```js{}[store/index.js]
actions: {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}
```

<base-alert>

Only the primary module (in `store/index.js`) will receive this action. You'll need to chain your module actions from there.

</base-alert>

The [context](/docs/2.x/concepts/context-helpers) is given to `nuxtServerInit` as the 2nd argument in the `asyncData` method.

If `nuxt generate` is ran, `nuxtServerInit` will be executed for every dynamic route generated.

<base-alert type="info">

Asynchronous `nuxtServerInit` actions must return a Promise or leverage async/await to allow the nuxt server to wait on them.

</base-alert>

```js{}[store/index.js]
actions: {
  async nuxtServerInit({ dispatch }) {
    await dispatch('core/load')
  }
}
```

## Vuex Strict Mode

Strict mode is enabled by default on dev mode and turned off in production mode. To disable strict mode in dev, follow the below example in `store/index.js`:

```js
export const strict = false
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
