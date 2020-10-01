---
title: NuxtLink Classes
description: Change the default NuxtLink classes and style the active and exact active classes as well as disable prefetch for a specific link
position: 40
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt-link
---

This example shows you how to change the name of the `linkActiveClass`, `linkExactActiveClass` and `linkPrefecthedClass` which you can see in the `router` property in the `nuxt.config.js` file. You will also see how to add a custom class name instead of the default one.

We then add styles for these classes in the `main.css` file. We add a bold weight to the active class and the primary color to the exact active class. We also add an underline to all the prefetched link which means the No prefetch page will never have an underline as it is never prefetched. In this example we have called the class `nuxt-link-prefetched` but you can name it anything you like.

In the `<Navigation>` component you can see how we add `no-prefetch` to the `<NuxtLink>` for the No Prefetch page.

<base-alert type="next">

Learn more in the Features book in the [Nuxt Components](/guides/features/nuxt-components#link-classes) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
