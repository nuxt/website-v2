---
title: Rendering Modes
description: Rendering Modes
position: 1
category: features
---

## Universal

`mode: 'universal'`: Isomorphic application (server-side rendering or static sites).

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // default universal
}
```

<base-alert type="info">
You do not need to add this to your nuxt config in order for universal mode to be applied as the default mode is universal.
</base-alert>

## SPA

`mode: 'spa'`: No server-side rendering (only client-side navigation)

You can use the mode property to change the default nuxt mode for your project:

```js{}[nuxt.config.js]
export default {
  mode: 'spa' // default universal
}
```

<base-alert type="next">

[The mode property](/guides/configuration-glossary/configuration-mode)

</base-alert>
