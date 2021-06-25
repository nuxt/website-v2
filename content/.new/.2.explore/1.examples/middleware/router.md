---
title: Router Middleware
description: Using router middleware to set a class to the body so we can then style differently depending on the route
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/middleware/router-middleware?fontsize=14&hidenavigation=1&module=%2Fnuxt.config.js&theme=dark&view=editor
---

<example-intro></example-intro>

`store/class.js` sets a class to the body.

`middleware/class.js` uses router middleware to set a class before we enter the route.

`components/Navigation.vue` changes the font size for the route with the name of `router-middleware`.

`nuxt.config.js` contains the `router` property to activate the middleware.

<alert type="next">

Learn more in the Directory Structure book in the [middleware](/docs/directory-structure/middleware#router-middleware) chapter.

</alert>

<code-sandbox :src="csb_link"></code-sandbox>
