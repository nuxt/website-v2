---
title: 'The key Property'
description: Set the `key` property of internal `<router-view>` component
menu: key
category: pages
position: 24
---

> Set the `key` property of internal `<router-view>` component

- **Type:** `String` or `Function`

The `key` property is propagated into `<router-view>`, which is useful to make transitions inside a dynamic page and different route. Different keys result in rerendering of page components.

There are several ways to set the key. For more details, please refer to the `nuxtChildKey` prop in [the nuxt component](/api/components-nuxt).

```js
export default {
  key(route) {
    return route.fullPath
  }
}
```
