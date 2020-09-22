---
title: Data Fetching
description: In this example we use asyncData and fetch to show you the differences between both methods.
position: 34
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetching?
---

This example shows the two ways of fetching data, `asyncData` for page level components and the `fetch` method which can be called inside your components.

With `asyncData` we use the `$http` module to fetch our list of posts from our API. On clicking the title it will open a dynamic page using the params id and show us the detail page for that post.

In the main posts page we include a BlogPosts component which uses the `fetch` method to fetch the same data from our API. We use the `$fetchState.pending` to show a loading text when the data is loading and `$fetchState.error` to show an error message when we can't retrieve the posts. We also show a refresh button which fetches the data again when clicked.

<base-alert type="next">

Learn more in the Features book in the [Data Fetching](/guides/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
