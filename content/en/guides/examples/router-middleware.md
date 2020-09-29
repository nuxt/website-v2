---
title: Router Middleware
description: Using router middleware to set a class to the body so we can then style differently depending on the route
position: 57
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_router
---

In this example we use the router middleware to set a class before we enter the route. In the store we have a `class.js` file which sets a class to the body. In the middleware folder, in the `class.js` file, we commit the name of the route to our `setClass` function from the store. We can then add a style for these routes which you can see in the Navigation component where we change the font size for the route with the name of `router-middleware`. The middleware is activated in the `nuxt.config` file using the `router` property.

<base-alert type="next">

Learn more in the Directory Structure book in the [middleware](/guides/directory-structure/middleware#router-middleware) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
