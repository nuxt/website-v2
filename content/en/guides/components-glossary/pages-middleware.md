---
title: 'The middleware Property'
description: Set the middleware for a specific page of the application.
menu: Middleware Property
category: components-glossary
position: 0
---

- Type: `String` or `Array` or `Function`
  - Items: `String` or `Function`

Set the middleware for a specific page of the application.

## Named middleware

You can create named middleware by creating a file inside the `middleware/` directory, the file name will be the middleware name.

```js{[middleware/authenticated.js]}
export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
```

```html{}[pages/secret.vue]
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware: 'authenticated'
  }
</script>
```

## Anonymous middleware

If you need to use a middleware only for a specific page, you can directly use a function for it (or an array of functions):

```html{[pages/secret.vue]}
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      // If the user is not authenticated
      if (!store.state.authenticated) {
        return redirect('/login')
      }
    }
  }
</script>
```
