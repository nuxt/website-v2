---
title: Custom Loading Component
description: Create a custom loading component, modify the default loader as well as the spinner for spas
position: 3
category: loading
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/miscellaneous/custom-loading-component
---

<example-intro></example-intro>

`components/LoadingBar.vue` shows a custom loading spinner to use instead of the default loading bar.

`nuxt.config.js` contains the `loading` property which imports the loading component

`pages/loading.vue` programmatically starts the loader so we force the page to take 2 seconds to load

<base-alert type="next">

Learn more in the Features book in the [Loading](/docs/2.x/features/loading) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
