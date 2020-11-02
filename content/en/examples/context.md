---
title: The Context
description: Using the context with asyncData to retrieve data from an API and middleware to check authentication using the store.
position: 22
category: essentials
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
---

<example-intro></example-intro>

`pages/posts/_id.vue` is a dynamic page that prints the title and description from the API response based on the `id` parameter. If no post exists we catch the error show the error page.

`pages/admin.vue` uses `middleware` and the `store`, to check if the user is authenticated, if not we redirect to the the home page.

<base-alert type="next">

Learn more in the Concepts book in the [Context and Helpers](/guides/concepts/context-helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
