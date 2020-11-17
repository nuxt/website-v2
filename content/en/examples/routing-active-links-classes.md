---
title: Active Link Classes
description: Change the default NuxtLink classes and style the active and exact active classes as well as disable prefetch for a specific link
position: 103
category: routing
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt-link
---

<example-intro></example-intro>

`nuxt.config.js` shows the `router` property for changing the name of the `linkActiveClass`, `linkExactActiveClass` and `linkPrefecthedClass`.

`main.css` add styles for `nuxt-link-active`, `nuxt-link-exact-active` and `nuxt-link-prefetched`

`components/navigation.vue` adds `no-prefetch` to the `<NuxtLink>` for the No Prefetch page.

<base-alert type="next">

Learn more in the Features book in the [Nuxt Components](/docs/2.x/features/nuxt-components#link-classes) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
