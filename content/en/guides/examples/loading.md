---
title: Loading
description: Create a custom loading component, modify the default loader as well as the spinner for spas
position: 38
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/08_loading
---

This example shows how to create a custom loading component to use instead of the default loading bar. We have added a timeout to the loading page so that we can see the loading in action. When you open the loading page you will see a loading spinner at the top right of the page. The LoadingBar component can be found in the components folder. It is imported using the loading key in the `nuxt.config.js` file and not imported the same way you would import and use normal components.

In the `nuxt.config.js` file you will also see how you can modify the default loader to show a different color, height etc. We also show how to modify the loadingIndicator for Single Page applications using a different colour and background as well as modifying the default spinner. In order to see this in action you will need to uncomment `ssr: false` to activate the spa mode.

<base-alert type="next">

Learn more in the Features book in the [Loading](/guides/features/loading) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
