---
title: Nuxt transitions
description: Adding default and custom transitions to your pages and layouts
position: 201
category: transitions
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/05_transitions?
---

<example-intro></example-intro>

`pages/home.vue` shows the `transition` property with a bounce transition and `pages/fun.vue` with a slide-bottom transition.

`assets/main.css` has the classes for the bounce and slide-bottom transition as well as the default page and layout transitions which are applied to pages that do not have the transition property set.

<base-alert type="next">

Learn more in the Features book in the [Transitions](/docs/2.x/features/transitions) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
