---
title: 'The ssr Property'
description: Change default nuxt ssr value
menu: ssr
category: configuration-glossary
position: 28.1
---

- Type: `boolean`
- Default: `true`
- Possible values:
  - `true`: Server-side rendering enabled
  - `false`: No server-side rendering (only client-side rendering)

> You can set this option to `false` when you want **only client side rendering**

```js{}[nuxt.config.js]
export default {
  ssr: false // Disable Server Side rendering
}
```

<base-alert type="next">

Previously, `mode` was used to disable or enable server-side rendering. Here is the [`mode` documentation](/docs/2.x/configuration-glossary/configuration-mode).

</base-alert>
