---
title: The Context
description: Using the context with asyncData to retrieve data from an API and middleware to check authentication using the store.
position: 22
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
---

In this example we use asyncData passing in the `params`, `$http` and `error` into the context so we can return a post from our API based on the the id of the page. See the `posts/_id` page which is a dynamic page that prints out the title and description coming from the API based on the id of the params.

We also use middleware passing in the store and redirect into context so we can check to see if our user is authenticated and if not redirect them to the the home page. To see how the authentication works you will need to change `authenticated` to false in the `store/index.js` file.

<base-alert type="next">

Learn more in the Concepts book in the [Context and Helpers](/guides/concepts/context-helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
