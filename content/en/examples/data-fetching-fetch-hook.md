---
title: fetch Hook
description: In this example we use the fetch hook to fetch data from components and from pages
position: 2
category: dataFetching
csb_link: https://codesandbox.io/embed/github/nuxtlabs/examples/tree/master/data-fetching/fetch-hook?fontsize=14&hidenavigation=1&module=%2Fcomponents%2FMountains.vue&theme=dark&view=editor
---

<example-intro></example-intro>

`pages/index.vue` imports `components/Mountains.vue` which uses the `fetch` hook and the `$http` module to fetch our data at component level while `pages/mountains/_slug` fetches the data at page level and include:

- `$fetchState.pending` to show a loading text when the data is loading.
- `$fetchState.error` to show an error message when we can't retrieve the data.
- `$fetch` to fetch the data again when clicked.

<base-alert type="next">

Learn more about the [http module](https://http.nuxtjs.org/).

</base-alert>

<base-alert type="next">

Learn more about the fetch hook in the Features book in the [Data Fetching](/docs/2.x/features/data-fetching) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
