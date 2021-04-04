---
title: asyncData Hook
description: In this example we use asyncData to fetch our data from our API.
position: 1
category: dataFetching
csb_link: https://codesandbox.io/embed/github/nuxtlabs/examples/tree/master/data-fetching/async-data-hook?fontsize=14&hidenavigation=1&theme=dark&view=editor
---

<example-intro></example-intro>

`pages/index.vue` and `pages/posts/_id` use the `asyncData` hook and the `$http` module to fetch our list of mountains from our API.

<base-alert type="next">

Learn more about the [http module](https://http.nuxtjs.org/).

</base-alert>

<base-alert type="next">

Learn more about the asyncData hook the Features book in the [Data Fetching](/docs/2.x/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
