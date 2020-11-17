---
title: asyncData Hook
description: In this example we use asyncData and fetch to show you the differences between both methods.
position: 1
category: dataFetching
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/data-fetching/async-data-hook
---

<example-intro></example-intro>

- `pages/index.vue` and `pages/posts/_id` uses the `asyncData` hook and the `$http` module to fetch our list of posts from our API.
- `nuxt.config.js` shows how to register the `$http` module
- `package.json` shows that the `$http` module is installed

<base-alert type="next">

Learn more about the [http module](https://http.nuxtjs.org/).

</base-alert>

<base-alert type="next">

Learn more about the asyncData hook the Features book in the [Data Fetching](/docs/2.x/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
