---
title: Components
description: Use fetch in your components to fetch data from an API as well as auto importing and lazy loading components
position: 53
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/03_components
---

In this example we show a MountainsList component which can be seen in the components folder. This component uses fetch to fetch data from an API and takes advantage of `$fetchState.pending` to show a loading message when waiting for the data to load and `$fetchState.error` to show an error message if the component does not load.

We also show how to lazy load a component by prefixing it with the world lazy as can be seen in the `components.vue` page. This component will only be shown and loaded when the button is clicked. Note that no import statements are needed to show this component which can be achieved by setting `components: true` in the `nuxt.config.js` file.

<base-alert type="next">

Learn more in the Directory Structure book in the [Components](/guides/directory-structure/components) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
