---
title: File System Routing
description: Nuxt.js automatically generates the vue-router configuration based on your file tree of Vue files inside the pages directory. When you create a .vue file in your pages directory you will have basic routing working with no extra configuration needed.
position: 3
category: Features
categoryPosition: 3
questions:
  - question: What is the name of the component you use to navigate between pages?
    answers:
      - "<a>"
      - "<NuxtLink>"
      - "<Nuxt>"
    correctAnswer: "<NuxtLink>"
  - question: What do you need to do to generate an automatic router configuration?
    answers:
      - add a .vue file to the pages directory
      - create a router.config file
      - "add a <NuxtLink> to your page"
    correctAnswer: add a .vue file to the pages directory
  - question: Which of the following will not create a dynamic route?
    answers:
      - dynamic.vue
      - _slug.vue
      - _slug/index.vue
    correctAnswer: dynamic.vue
  - question: Dynamic routes are ignored by the nuxt build && nuxt export command?
    answers:
      - True
      - False
    correctAnswer: False
  - question: How do you access the route params for a dynamic page such as users/_id.vue?
    answers:
      - $route.params.id
      - $route.id
      - $route.params.users.id
    correctAnswer: $route.params.id
  - question: How do you define the parent component of a nested route?
    answers:
      - create a Vue file called parent inside the directory which contains the children views
      - create a Vue file with a different name as the directory which contains the children views
      - create a Vue file with the same name as the directory which contains the children views
    correctAnswer: create a Vue file with the same name as the directory which contains the children views
  - question: If you do not know the depth of your URL structure, you can use which file to dynamically match nested paths?
    answers:
      - _.vue
      - _index.vue
      - _id.vue
    correctAnswer: _.vue
  - question: Which components can you use to render named views?
    answers:
      - "<Nuxt> and <Child>"
      - "<Nuxt> and <NuxtChild>"
      - "<NuxtChild> and <NuxtLink>"
    correctAnswer: "<Nuxt> and <NuxtChild>"
  - question: In Nuxt.js which file can you create to force the scroll position to the top for every route?
    answers:
      - app/router.scrollBehavior.js
      - app/scrollBehavior.js
      - app/router.js
    correctAnswer: app/router.scrollBehavior.js
  - question: In Nuxt.js you can add trailing slashes which will be appended to every route?
    answers:
      - true
      - false
    correctAnswer: true
---

Nuxt.js automatically generates the vue-router configuration based on your file tree of Vue files inside the pages directory. When you create a .vue file in your pages directory you will have basic routing working with no extra configuration needed. 

However sometimes you might need to create dynamic routes or nested routes or you might need to further configure the router property. This chapter will go through everything you need to know in order to get the best out of your router.

<base-alert type="info">

Nuxt.js gives you automatic code splitting for your routes, no configuration is needed

</base-alert>

<base-alert type="info">

Use the `[<nuxt-link>](https://nuxtjs.org/api/components-nuxt-link)` component to navigate between pages

</base-alert>

For example:

```html
<template>
  <nuxt-link to="/">Home page</nuxt-link>
</template>
```

## Basic Routes

This file tree:

```
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

will automatically generate:

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

## Dynamic Routes

Sometimes it is not possible to know the name of the route such as when we make a call to an api to get a list of users or blog posts. We call these dynamic routes. To create a dynamic route you need to add an underscore before the .vue file name or before the name of the directory. You can name the file or directory anything you want but you must prefix it with an underscore.

📺[Watch a free lesson about dynamic routes on Vue School](https://vueschool.io/lessons/nuxtjs-dynamic-routes?friend=nuxt)

This file tree:

```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

will automatically generate:

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

<base-alert type="info">

As you can see the route named `users-id` has the path `:id?` which makes it optional, if you want to make it required, create an `index.vue` file in the `users/_id` directory instead.

</base-alert>

<base-alert> 

Dynamic routes are ignored by the `generate` command. 

</base-alert>

➡️Generate dynamic routes for static sites

### Locally Accessing Route Params

You can access the current route parameters within your local page or component by referencing `this.$route.params.{parameterName}`. For example, if you had a dynamic users page (`users\_id.vue`) and wanted to access the `id` parameter to load the user or process information, you could access the variable like this: `this.$route.params.id`.

## Nested Routes

Nuxt.js lets you create nested routes by using the children routes of vue-router. To define the parent component of a nested route, you need to create a Vue file with the same name as the directory which contains your children views.

<base-alert> 

Don't forget to include the `<nuxt-child/>` component inside the parent component (`.vue` file).

</base-alert>

This file tree:

```
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

will automatically generate:

```js
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```

📦[https://nuxtjs.org/examples/nested-routes](https://nuxtjs.org/examples/nested-routes)

## Dynamic Nested Routes

This scenario should not often happen, but it is possible with Nuxt.js to have dynamic children inside dynamic parents.

This file tree:

```
pages/
--| _category/
-----| _subCategory/
--------| _id.vue
--------| index.vue
-----| _subCategory.vue
-----| index.vue
--| _category.vue
--| index.vue
```

will automatically generate:

```js
router: {
  routes: [
    {
      path: '/',
      component: 'pages/index.vue',
      name: 'index'
    },
    {
      path: '/:category',
      component: 'pages/_category.vue',
      children: [
        {
          path: '',
          component: 'pages/_category/index.vue',
          name: 'category'
        },
        {
          path: ':subCategory',
          component: 'pages/_category/_subCategory.vue',
          children: [
            {
              path: '',
              component: 'pages/_category/_subCategory/index.vue',
              name: 'category-subCategory'
            },
            {
              path: ':id',
              component: 'pages/_category/_subCategory/_id.vue',
              name: 'category-subCategory-id'
            }
          ]
        }
      ]
    }
  ]
}
```

## Unknown Dynamic Nested Routes

If you do not know the depth of your URL structure, you can use `_.vue` to dynamically match nested paths. This will handle requests that do not match a *more specific* request.

This file tree:

```
pages/
--| people/
-----| _id.vue
-----| index.vue
--| _.vue
--| index.vue
```

Will handle requests like this:

[Copy of Untitled](https://www.notion.so/1214a50fbe0740f7bb3966b97264bb76)

<base-alert type="info">

Handling 404 pages is now up to the logic of the `_.vue` page. 

</base-alert>

➡️[More on 404 redirecting can be found here](https://nuxtjs.org/guide/async-data#handling-errors).

## Extending the router

There are multiple ways to extend the routing with Nuxt:

- [router-extras-module](https://github.com/nuxt-community/router-extras-module) to customise the route parameters in the page
- component[@nuxtjs/router](https://github.com/nuxt-community/router-module) to overwrite the Nuxt router and write your own `router.js` file
- Use the [router.extendRoutes](https://nuxtjs.org/api/configuration-router#extendroutes) property in your `nuxt.config.js`

## The router Property

The router property lets you customise the Nuxt.js router (vue-router).

nuxt.config.js

```js
export default {
	router: {
    // customise the Nuxt.js router
  },
}
```

### Base:

The base URL of the app. For example, if the entire single page application is served under `/app/`, then base should use the value `'/app/'`.

➡️Router Base Property

### extendRoutes

You may want to extend the routes created by Nuxt.js. You can do so via the `extendRoutes` option.

Example of adding a custom route:

`nuxt.config.js`

```js
export default {
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
```

If you want to sort your routes, you can use the  `sortRoutes(routes)`  function from `@nuxt/utils`:

`nuxt.config.js`

```js
import { sortRoutes } from '@nuxt/utils'
export default {
  router: {
    extendRoutes (routes, resolve) {
      // Add some routes here ...

      // and then sort them
      sortRoutes(routes)
    }
  }
}
```

<base-alert> 

The schema of the route should respect the [vue-router](https://router.vuejs.org/en/) schema.

</base-alert>

<base-alert> 

When adding routes that use [Named Views](https://nuxtjs.org/guide/routing#named-views), don't forget to add the corresponding `chunkNames` of named `components`.

</base-alert>

`nuxt.config.js`

```js
export default {
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/users/:id',
        components: {
          default: resolve(__dirname, 'pages/users'), // or routes[index].component
          modal: resolve(__dirname, 'components/modal.vue')
        },
        chunkNames: {
          modal: 'components/modal'
        }
      })
    }
  }
}
```

➡️extendRoutes Property

### fallback

Controls whether the router should fallback to hash mode when the browser does not support history.pushState but mode is set to history.

➡️fallback Property

### mode

Configure the router mode, it is not recommended to change it due to server-side rendering.

➡️mode Property

### parseQuery / stringifyQuery

Provide custom query string parse / stringify functions. 

➡️parseQuery / stringifyQuery Property

### routeNameSplitter

You may want to change the separator between route names that Nuxt.js uses. You can do so via the `routeNameSplitter` option in your configuration file. Imagine we have the page file `pages/posts/_id.vue`. Nuxt.js will generate the route name programmatically, in this case `posts-id`. Changing the `routeNameSplitter` config to `/` the name will therefore change to `posts/id`.

Example (`nuxt.config.js`):

```js
export default {
  router: {
    routeNameSplitter: '/'
  }
}
```

### scrollBehavior

The `scrollBehavior` option lets you define a custom behavior for the scroll position between the routes. This method is called every time a page is rendered. 

🎓To learn more about it, see [vue-router scrollBehavior documentation](https://router.vuejs.org/guide/advanced/scroll-behavior.html).

Available since:v2.9.0,

In Nuxt.js you can use a file to overwrite the router scrollBehavior. This file should be placed in a folder called app.  

`~/app/router.scrollBehavior.js`.

Example of forcing the scroll position to the top for every route:

`app/router.scrollBehavior.js`

```js
export default function (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

🎓[Nuxt.js default `router.scrollBehavior.js` file.](packages/vue-app/template/router.scrollBehavior.js)

➡️scrollBehavior Property

### trailingSlash

Available since: v2.10

If this option is set to true, trailing slashes will be appended to every route. If set to false, they'll be removed.

`nuxt.config.js`

```js
export default {
	router: {
    trailingSlash: true,
  },
}
```

<base-alert> 

This option should not be set without preparation and has to be tested thoroughly. When setting `router.trailingSlash` to something else other than `undefined`(which is the default value), the opposite route will stop working. Thus 301 redirects should be in place and your *internal linking* has to be adapted correctly. If you set `trailingSlash` to `true`, then only `example.com/abc/` will work but not `example.com/abc`. On false, it's vice-versa.

</base-alert>

➡️trailingSlash Property

#

<quiz :questions="questions"></quiz>
