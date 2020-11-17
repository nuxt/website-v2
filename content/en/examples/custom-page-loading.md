---
title: Customize Nuxt Loading
description: Create a custom loading component, modify the default loader as well as the spinner for spas
position: 5
category: miscellaneous
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/08_loading
---

<example-intro></example-intro>

`components/LoadingBar.vue` shows a custom loading spinner to use instead of the default loading bar.

`nuxt.config.js` contains the:

- `loading` property to import the loading component or modify the default loader
- `loadingIndicator` property to modify the spinner for Single Page applications

<base-alert type="next">

Learn more in the Features book in the [Loading](/docs/2.x/features/loading) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
