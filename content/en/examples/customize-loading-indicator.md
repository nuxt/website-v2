---
title: Customize Nuxt Loading Indicator
description: Customize the Nuxt Loading Indicator for when ssr is set to false
position: 2
category: loading
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/loading/customize-loading-indicator?fontsize=14&hidenavigation=1&module=%2Fnuxt.config.js&theme=dark&view=editor
---

<example-intro></example-intro>

`nuxt.config.js` contains:

- `ssr: false` so we only have client side rendering
- `loadingIndicator` property to modify the default spinner

<base-alert type="next">

Learn more in the Features book in the [Loading](/docs/2.x/features/loading) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
