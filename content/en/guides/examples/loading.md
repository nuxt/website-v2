---
title: Loading
description: Create a custom loading component, modify the default loader as well as the spinner for spas
position: 38
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/08_loading
---

`components/LoadingBar.vue` shows a custom loading spinner to use instead of the default loading bar.

`nuxt.config.js` contains the:

- `loading` property to import the loading component or modify the default loader
- `loadingIndicator` property to modify the spinner for Single Page applications

<base-alert type="next">

Learn more in the Features book in the [Loading](/guides/features/loading) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
