---
title: Named Middleware
description: Using named middleware to authenticate a user using the store and allow them to visit a page once authenticated
position: 602
category: middleware
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_named
---

<example-intro></example-intro>

`pages/named-middleware.vue` contains a `middleware` property with the value of `auth` which is called before a user enters the route.

`middleware/auth.js` checks to see if the user is authenticated and if they aren't it redirects them to the auth page.

`pages/auth.vue` uses the store to authenticate the user.

`store/auth.js` sets the the user and password values and redirects the user.

<base-alert type="next">

Learn more in the Directory Structure book in the [middleware](/docs/2.x/directory-structure/middleware#named-middleware) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
