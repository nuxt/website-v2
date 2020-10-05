---
title: The Context
description: Using the context with asyncData to retrieve data from an API and middleware to check authentication using the store.
position: 22
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
---

`pages/posts/_id` is a dynamic page that prints out the title and description coming from the API based on the id of the params. If no post exists we catch the error and return the error message.

`pages/admin.vue` uses `middleware` and the `store`, to check if our user is authenticated and if not we redirect them to the the home page.

<base-alert type="next">

Learn more in the Concepts book in the [Context and Helpers](/guides/concepts/context-helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
