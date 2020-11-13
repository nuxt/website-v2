---
title: Fetch Hook
description: In this example we use asyncData and fetch to show you the differences between both methods.
position: 2
category: dataFetching
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetchin-fetch-hook?fontsize=14&hidenavigation=1&theme=dark
---

<example-intro></example-intro>

`pages/index.vue` imports `components/BlogPosts.vue` which uses the `fetch hook` and the `$http` module to fetch our data at component level while `pages/posts/_id` fetches the data at page level. Both use:

- `$fetchState.pending` to show a loading text when the data is loading
- `$fetchState.error` to show an error message when we can't retrieve the posts.
- `$fetch` to fetch the data again when clicked.

<base-alert type="next">

Learn more in the Features book in the [Data Fetching](/guides/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
