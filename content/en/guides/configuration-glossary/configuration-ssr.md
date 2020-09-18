---
title: 'The ssr Property'
description: Change default nuxt ssr value
menu: mode
category: configuration-glossary
position: 28.1
---

- Type: `boolean`
  - Default: `true`
  - Possible values:
    - `false`: No server-side rendering (only client-side rendering)

> You need to set this option when working with single page applications

```js{}[nuxt.config.js]
export default {
  ssr: false // for SPA's
}
```

<base-alert type="next">

Previously, `mode` was used to disable or enable server-side rendering. Here is the [`mode` documentation](/guides/configuration-glossary/configuration-mode).

</base-alert>
