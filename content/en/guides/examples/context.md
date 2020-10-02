---
title: The Context
description: Using the context with asyncData to retrieve data from an API and middleware to check authentication using the store.
position: 22
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
---

In this example we use `asyncData` passing in the `params`, `$http` and `error` so that we can access them from the context and return a post from our API based on the the id of the page. See the **posts/\_id** page which is a dynamic page that prints out the title and description coming from the API based on the id of the params.

The error link in the navigation links to a post that doesn't exist. In the **posts/\_id** file you will see how we catch the error and return the error message which will show us the default error message when a page is not found.

The admin page uses a `middleware()` function passing in the `store` and `redirect` so that we can access them from our context. We use the store to check if our user is authenticated and if not we redirect them to the the home page. To see how the authentication works see the **store/index.js** file. This is a basic example of authentication and you will never be able to access this page unless you set the authenticated value in the store to true.

<base-alert type="next">

Learn more in the Concepts book in the [Context and Helpers](/guides/concepts/context-helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
