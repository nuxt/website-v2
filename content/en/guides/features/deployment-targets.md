---
title: Deployment Targets
description: Deployment Targets
position: 2
category: features
---

## Static Hosting

For static hosting (hosting where no server is needed) the target of static needs to be added to your nuxt.config file.

```js{}[nuxt.config.js]
export default {
  target: 'static' // default: 'server'
}
```

Running nuxt dev with the static target will improve the developer experience:

- Remove req & res from context
- Fallback to client-side rendering on 404, errors and redirects (see SPA fallback)
- `$route.query` will always be equal to {} on server-side rendering
- process.static is true

<base-alert type="info">
We are also exposing process.target for module authors to add logic depending on the user target.
</base-alert>

## Server Hosting

For server hosting the target of server is used which is the default value.

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```
