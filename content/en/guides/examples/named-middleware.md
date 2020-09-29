---
title: Named Middleware
description: Using named middleware to authenticate a user using the store and allow them to visit a page once authenticated
position: 58
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/09_middleware_named
---

In this example we use named middleware which gets called before we enter the route. In the `named-middleware.vue` file we have a middleware property with the value of 'auth'. When a user tries to access the Named Middleware route it will first activate the `auth.js` file located in the middleware folder. This file checks to see if the user is authenticated and if they aren't it redirects them to the auth page.

The `auth.vue` page contains a simple example which uses the store to authenticate the user. The `auth.js` file located in the store simply sets the the user and password values. When the form is filled in the login button is activated and when clicked calls the `login()` method which commits the user and password values to the store and sends you to the Named Middleware page using `$router.push`.

The logout button located in the `named-middleware.vue` page calls a `logout()` method which resets the user and password values and sends you back to the home page.

<base-alert type="next">

Learn more in the Directory Structure book in the [middleware](/guides/directory-structure/middleware#named-middleware) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
