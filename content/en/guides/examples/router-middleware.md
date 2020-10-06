---
title: Router Middleware
description: Using router middleware to set a class to the body so we can then style differently depending on the route
position: 57
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_router
---

- `store/class.js` sets a class to the body.
- `middleware/class.js` uses router middleware to set a class before we enter the route.
- `components/Navigation.vue` changes the font size for the route with the name of `router-middleware`.
- `nuxt.config.js` contains the `router` property to activate the middleware.

<base-alert type="next">

Learn more in the Directory Structure book in the [middleware](/guides/directory-structure/middleware#router-middleware) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
