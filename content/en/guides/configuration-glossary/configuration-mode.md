---
title: 'The mode Property'
description: Change default nuxt mode
menu: mode
category: configuration-glossary
position: 17
---

- Type: `string`
  - Default: `universal`
  - Possible values:
    - `'universal'`: Isomorphic application (server-side rendering + client-side navigation)

> You can use this option to change default nuxt mode for your project using `nuxt.config.js`


<base-alert type="warning">

Deprecated: please use `ssr: false` instead of `mode: spa`

</base-alert>

<base-alert type="next">

To learn more about the `mode` option, checkout the [rendering modes section](https://nuxtjs.org/guides/features/rendering-modes).

</base-alert>
