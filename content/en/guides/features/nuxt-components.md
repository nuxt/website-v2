---
title: Nuxt Components
description: Nuxt.js comes with a few important components included out of the box, which will be helpful when building your application.
position: 9
category: Features
categoryPosition: 3
csb_link_nuxt_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt-link?fontsize=14&hidenavigation=1&theme=dark
csb_link_nuxt: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: What component do you use to display your page components?
    answers:
      - "<Nuxt>"
      - "<Page>"
      - "<Views>"
    correctAnswer: "<Nuxt>"
  - question: The `<Nuxt>` component can be used in?
    answers:
      - components
      - pages
      - layouts
    correctAnswer: layouts
  - question: Which component is used for displaying the children components in a nested route?
    answers:
      - "<Nuxt>"
      - "<NuxtChild>"
      - "<Children>"
    correctAnswer: "<NuxtChild>"
  - question: Where do you insert the `<NuxtChild>` component?
    answers:
      - pages/child.vue
      - pages/parent.vue
      - layouts/parent.vue
    correctAnswer: pages/parent.vue
  - question: "`keep-alive` can be used in"
    answers:
      - "<Nuxt> component only"
      - "<Nuxt> and <NuxtChild> component"
      - "<NuxtChild> component only"
    correctAnswer: "<Nuxt> and <NuxtChild> component"
  - question: What component do we use to link to internal pages?
    answers:
      - "<NuxtLink>"
      - "<RouterLink>"
      - "<a>"
    correctAnswer: "<NuxtLink>"
  - question: "How do we link to the about page of our app using <NuxtLink>?"
    answers:
      - to="/about"
      - href="/about"
      - link="/about"
    correctAnswer: to="/about"
  - question: What key do you use to disable prefetching for certain pages?
    answers:
      - no-prefetch 
      - :prefetch="false"
      - no-prefetch and :prefetch="false"
    correctAnswer: no-prefetch and :prefetch="false"
  - question: What is the default class you can use to add styles for active links
    answers:
      - nuxt-link-active
      - link-active
      - router-link-active
    correctAnswer: nuxt-link-active
  - question: What is the default class you can use to add styles for exact active links
    answers:
      - nuxt-link-exact-active
      - link-exact-active
      - nuxt-exact-active-link
    correctAnswer: nuxt-link-exact-active
  - question: In Nuxt ≥ 2.9.0 which component do you use so that your component is only rendered on client side?
    answers:
      - "<client-only>"
      - "<no-ssr>"
      - "<client>"
    correctAnswer: "<client-only>"
---

Nuxt.js comes with a few important components included out of the box, which will be helpful when building your application. The components are globally available, which means that you don't need to import them in order to use them.

In the following paragraphs, each of the included components is explained.

## The Nuxt Component

The `<Nuxt>` component is the component you use to display your page components. Basically, this component gets replaced by what is inside your page components depending on the page that is being shown. Therefore it is important that you add the `<Nuxt>` component to your layouts.

`layouts/default.vue`

```html
<template>
  <div>
    <div>My nav bar</div>
    <Nuxt />
    <div>My footer</div>
  </div>
</template>
```

<base-alert> 

The `<Nuxt>` component can only be used inside layouts

</base-alert>

The `<Nuxt>` component can take the prop of `nuxt-child-key`. This prop will be passed to `<RouterView>` so that your transitions will work correctly inside dynamic pages.

There are 2 ways to handle the internal `key` prop of `<RouterView>`.

1) Use a `nuxtChildKey` prop on your `<Nuxt>` component

```html
<template>
  <div>
    <Nuxt :nuxt-child-key="someKey" />
  </div>
</template>
```

2) Add the `key` option in *page* components as `string` or `function`

```js
export default {
 key(route) {
   return route.fullPath
 }
}
```

## The NuxtChild Component

This component is used for displaying the children components in a nested route.

Example:

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

This file tree will generate these routes:

```js
[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child'
      }
    ]
  }
]
```

To display the `child.vue` component, you have to insert the `<NuxtChild>` component inside `pages/parent.vue`:

```html
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtChild :foobar="123" />
  </div>
</template>
```

## keep-alive

Both, the `<Nuxt>` component and the `<NuxtChild/>` component, accept `keep-alive` and `keep-alive-props.`

🎓To learn more about keep-alive and keep-alive-props see the [vue docs](https://vuejs.org/v2/api/#keep-alive) 

`layouts/default.vue`

```html
<template>
  <div>
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- will be converted into something like this -->
<div>
  <KeepAlive :exclude="['modal']">
    <RouterView />
  </KeepAlive>
</div>
```

`parent.vue`

```html
<template>
  <div>
    <NuxtChild keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- will be converted into something like this -->
<div>
  <KeepAlive  :exclude="['modal']">
    <RouterView />
  </KeepAlive >
</div>
```

`<NuxtChild>` components can also receive properties like a regular Vue component.

```html
<template>
  <div>
    <NuxtChild :key="$route.params.id" />
  </div>
</template>
```

To see an example, take a look at the [nested-routes example](https://nuxtjs.org/examples/nested-routes).

<app-modal>
  <code-sandbox  :src="csb_link_nuxt"></code-sandbox>
</app-modal>

## The NuxtLink Component

To navigate between pages of your app, you should use the  `<NuxtLink>` component. This component is included with Nuxt.js and therefore you don't have to import it like you do with other components. It is similar to the HTML `<a>` tag except that instead of using a `href="/about"` you use `to="/about"`. If you've used `vue-router` before, you can think of `<NuxtLink>` as a replacement of `<RouterLink>`

A simple link to the `index.vue` page in your `pages` folder:

```html
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

The `<NuxtLink>` component should be used for all internal links. That means for all links to the pages within your site you should use `<NuxtLink>`. The `<a>` tag should be used for all external links. That means if you have links to other websites you should use the `<a>` tag for those.

```html
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About (internal link that belongs to the Nuxt App)</NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </div>
</template>
```

🎓If you want to know more about `<RouterLink>`, feel free to read the [Vue Router documentation](https://router.vuejs.org/api/#router-link) for more information.

<base-alert type="info"> 

`<NuxtLink>` also comes with [smart prefetching](https://nuxtjs.org/api/components-nuxt-link/) out of the box.

</base-alert>

## prefetchLinks

Nuxt.js automatically includes smart prefetching. That means it detects when a link is visible, either in the viewport or when scrolling and prefetches the JavaScript for those pages so that they are ready when the user clicks the link. Nuxt.js only loads the resources when the browser isn't busy and skips prefetching if your connection is offline or if you only have 2g connection.

### Disable prefetching for specific links

However sometimes you may want to disable prefetching on some links if your page has a lot of JavaScript or you have a lot of different pages that would be prefetched or you have a lot of third party scripts that need to be loaded. To disable the prefetching on a specific link, you can use the `no-prefetch` prop. Since Nuxt.js v2.10.0, you can also use the `prefetch` prop set to `false`

```html
<NuxtLink to="/about" no-prefetch>About page not pre-fetched</NuxtLink>
<NuxtLink to="/about" :prefetch="false">About page not pre-fetched</NuxtLink>
```

### Disable prefetching globally

To disable the prefetching on all links, set the `prefetchLinks` to `false`:

`nuxt.config.js`

```js
export default {
  router: {
    prefetchLinks: false
  }
}
```

Since Nuxt.js v2.10.0, if you have set `prefetchLinks` to `false` but you want to prefetch a specific link, you can use the `prefetch` prop:

```html
<NuxtLink to="/about" prefetch>About page pre-fetched</NuxtLink>
```

## linkActiveClass

The `linkActiveClass` works the same as the `vue-router` class for active links. If we want to show which links are active all you have to do is create some css for the class `nuxt-link-active` . 

```css
.nuxt-link-active {
  color:red;
}
```

<base-alert> 

This css can be added to the navigation component or for a specific page or layout or in your main.css file.

</base-alert>

If you want to you can also configure the class name to be something else. You con do this by modifying the `linkActiveClass` in the router property in your `nuxt.config.js` file.

```js
export default {
  router: {
    linkActiveClass: 'my-custom-active-link'
  }
}
```

<base-alert type="info">

This option is given directly to the `vue-router` linkActiveClass. See the [vue-router docs](https://router.vuejs.org/api/#active-class) for more info.

</base-alert>

## linkExactActiveClass

The `linkExactActiveClass` works the same as the `vue-router` class for exact active links. If we want to show which links are active with an exact match all you have to do is create some css for the class `nuxt-link-exact-active` . 

```css
.nuxt-link-exact-active {
  color: green;
}
```

<base-alert type="info">

This css can be added to the navigation component or for a specific page or layout or in your main.css file.

</base-alert>

If you want to you can also configure the class name to be something else. You con do this by modifying the `linkActiveClass` in the router property in your `nuxt.config.js` file.

```js
export default {
  router: {
    linkExactActiveClass: 'my-custom-exact-active-link'
  }
}
```

<base-alert type="info">

This option is given directly to the `vue-router` linkExactActiveClass. See the [vue-router](https://router.vuejs.org/api/#active-class) [docs](https://router.vuejs.org/api/#exact-active-class) for more info

</base-alert>

## linkPrefetchedClass

The linkPrefetchedClass will allow you to add styles for all links that have been prefetched. This is great for testing which links are being prefetched after modifying the default behaviour. The linkPrefetchedClass is disabled by default. If you want to enable it you need to add it to the router property in your `nuxt-config.js` file.

```js
export default {
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched'
  },
}
```

Then you can add the styles for that class.

```js
.nuxt-link-prefetched {
  color: orangeRed;
}
```

<base-alert type="info">

In this example we have used the class `nuxt-link-prefetched` but you can name it anything you like

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link_nuxt_link"></code-sandbox>
</app-modal>

## The client-only Component

This component is used to purposely render a component only on client-side. To import a component only on the client, register the component in a client-side only plugin.

`pages/example.vue`

```html
<template>
  <div>
    <sidebar />
    <client-only placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      <comments />
    </client-only>
  </div>
</template>
```

Use a slot as placeholder until `<client-only />` is mounted on client-side.

`pages/example.vue`

```html
<template>
<div>
  <sidebar />
  <client-only>
    <!-- this component will only be rendered on client-side -->
    <comments />

    <!-- loading indicator, rendered on server-side -->
     <comments-placeholder slot="placeholder" />
  </client-only>
</div>
</template>
```

<base-alert> 

If you are using a version of Nuxt < v2.9.0, use `<no-ssr>` instead of `<client-only>`

</base-alert>



<quiz :questions="questions"></quiz>
