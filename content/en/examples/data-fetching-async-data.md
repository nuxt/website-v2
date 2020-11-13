---
title: AsyncData Hook
description: In this example we use asyncData and fetch to show you the differences between both methods.
position: 1
category: dataFetching
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetching-async-data?fontsize=14&hidenavigation=1&theme=dark
---

<example-intro></example-intro>

`pages/index.vue` and `pages/posts/_id` uses the `asyncData hook` and the `$http` module to fetch our list of posts from our API.

<base-alert type="next">

Learn more in the Features book in the [Data Fetching](/guides/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
