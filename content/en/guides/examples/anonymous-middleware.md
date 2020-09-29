---
title: Anonymous Middleware
description: Using anonymous middleware to show the analytics of how many times a user visits a page.
position: 59
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_anonymous
---

In this example we use anonymous middleware to show how many visits a page has received. In the `anonymous-middleware.vue` file there is a middleware function which uses the store to call the increment mutation. This page also displays the page visits from the store. The store contains an `analytics.js` file which sets the `pageVisits` to 0 and increments the visits every time the increment function is called. Every time we visit the Anonymous Middleware page you will see the visits increment.

<base-alert type="next">

Learn more in the Directory Structure book in the [middleware](/guides/directory-structure/middleware#anonymous-middleware) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
