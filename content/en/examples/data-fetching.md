---
title: Data Fetching
description: In this example we use asyncData and fetch to show you the differences between both methods.
position: 34
category: essentials
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetching?
---

<example-intro></example-intro>

`pages/posts/index.vue` uses `asyncData` and the `$http` module to fetch our list of posts from our API.

`pages/posts/_id.vue` and `components/BlogPosts.vue` use the `fetch` method to fetch data from our API using:

- `$fetchState.pending` to show a loading text when the data is loading
- `$fetchState.error` to show an error message when we can't retrieve the posts.
- `$fetch` to fetch the data again when clicked.

<base-alert type="next">

Learn more in the Features book in the [Data Fetching](/guides/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
