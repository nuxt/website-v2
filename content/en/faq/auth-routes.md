---
title: Auth Routes
description: Authenticated routes example with Nuxt.js
github: auth-routes
csb_link: https://codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/auth-routes?fontsize=14&hidenavigation=1&theme=dark
livedemo: https://nuxt-auth-routes.gomix.me
liveedit: https://gomix.com/#!/project/nuxt-auth-routes
category: development
position: 302
---

> Nuxt.js can be used to create authenticated routes easily.

## `@nuxtjs/auth`

If you want to implement complex authentication flows, for example OAuth 2, we suggest using [`@nuxtjs/auth`](https://github.com/nuxt-community/auth-module)

## Using Express and Sessions

To add the sessions feature in our application, we will use `express` and `express-session`, for this, we need to use Nuxt.js programmatically.

First, we install the dependencies:

```bash
yarn add express express-session body-parser whatwg-fetch
```

_We will talk about `whatwg-fetch` later._

Then we create our `server.js`:

```js
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

// Body parser, to access `req.body`
app.use(bodyParser.json())

// Sessions to create `req.session`
app.use(
  session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })
)

// POST `/api/login` to log in the user and add him to the `req.session.authUser`
app.post('/api/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// POST `/api/logout` to log out the user and remove it from the `req.session`
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')
```

And we update our `package.json` scripts:

```json
// ...
"scripts": {
  "dev": "node server.js",
  "build": "nuxt build",
  "start": "NODE_ENV=production node server.js"
}
// ...
```

## Using the store

We need a global state to let our application know if the user is connected **across the pages**.

To let Nuxt.js use Vuex, we create a `store/index.js` file:

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Polyfill for `window.fetch()`
require('whatwg-fetch')

const store = () =>
  new Vuex.Store({
    state: () => ({
      authUser: null
    }),

    mutations: {
      SET_USER(state, user) {
        state.authUser = user
      }
    },

    actions: {
      // ...
    }
  })

export default store
```

1. We import `Vue` and `Vuex` (included in Nuxt.js) and we tell Vue to use Vuex to let us use `$store` in our components.
2. We `require('whatwg-fetch')` to polyfill the `fetch()` method across all browsers (see [fetch repo](https://github.com/github/fetch)).
3. We create our `SET_USER` mutation which will set the `state.authUser` to the connected user.
4. We export our store instance to Nuxt.js can inject it to our main application.

### nuxtServerInit() action

Nuxt.js will call a specific action called `nuxtServerInit` with the context in argument, so when the app will be loaded, the store will be already filled with some data we can get from the server.

In our `store/index.js`, we can add the `nuxtServerInit` action:

```js
nuxtServerInit ({ commit }, { req }) {
  if (req.session && req.session.authUser) {
    commit('SET_USER', req.session.authUser)
  }
}
```

To make the data method asynchronous, Nuxt.js offers you different ways, choose the one you're the most familiar with:

1. returning a `Promise`, Nuxt.js will wait for the promise to be resolved before rendering the component.
2. Using the [`async`/`await` proposal](https://github.com/lukehoban/ecmascript-asyncawait) ([learn more about it](https://zeit.co/blog/async-and-await)).

### login() action

We add a `login` action which will be called from our pages component to log in the user:

```js
login ({ commit }, { username, password }) {
  return fetch('/api/login', {
    // Send the client cookies to the server
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then((res) => {
    if (res.status === 401) {
      throw new Error('Bad credentials')
    } else {
      return res.json()
    }
  })
  .then((authUser) => {
    commit('SET_USER', authUser)
  })
}
```

### logout() method

```js
logout ({ commit }) {
  return fetch('/api/logout', {
    // Send the client cookies to the server
    credentials: 'same-origin',
    method: 'POST'
  })
  .then(() => {
    commit('SET_USER', null)
  })
}
```

## Pages components

Then we can use `$store.state.authUser` in our pages components to check if the user is connected in our application or not.

### Redirect user if not connected

Let's add a `/secret` route where only the connected user can see its content:

```html
<template>
  <div>
    <h1>Super secret page</h1>
    <router-link to="/">Back to the home page</router-link>
  </div>
</template>

<script>
  export default {
    // we use fetch() because we do not need to set data to this component
    fetch({ store, redirect }) {
      if (!store.state.authUser) {
        return redirect('/')
      }
    }
  }
</script>
```

We can see in the `fetch` method that we call `redirect('/')` when our user is not connected.

<code-sandbox :src="csb_link"></code-sandbox>
