---
title: Data Fetching
description: In this example we use asyncData and fetch to show you the differences between both methods.
position: 2
category: essentials
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetching?
---

<example-intro></example-intro>

`pages/asyncdata/index.vue` and `pages/posts/_id` uses the `asyncData hook` and the `$http` module to fetch our list of posts from our API.

`pages/fetch/index.vue` imports `components/BlogPosts.vue` which uses the `fetch hook` and the `$http` module to fetch our data using:

- `$fetchState.pending` to show a loading text when the data is loading
- `$fetchState.error` to show an error message when we can't retrieve the posts.
- `$fetch` to fetch the data again when clicked.

<base-alert type="next">

Learn more in the Features book in the [Data Fetching](/guides/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
