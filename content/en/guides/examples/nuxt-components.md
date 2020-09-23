---
title: Nuxt Child Component
description: How to use the Nuxt Child component to create parent and child pages.
position: 39
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt
---

In this example we show a parent page which you see as `parent.vue` that contains the Child links as well as the `<NuxtChild>` component. Everything on this page will be seen on both the parent and child pages.

We then have a parent folder which contains an `index.vue` page with some text that will be replaced when the child links are clicked as they are only visible on the parent route. The parent folder also contains the two child pages that when clicked will show the parent view with the child view below it and the route path which shows the parent route with the child page after it.

<base-alert type="next">

Learn more in the Features book in the [Nuxt Components](/guides/features/loading) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
