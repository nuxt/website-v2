---
title: Views
description: The Views section describes all you need to know to configure data and views for a specific route in your Nuxt.js Application. Views consist of an app template, a layout, and the actual page.
position: 1
category: concepts
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/01_views?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: What is the composition order of a Nuxt view (top-down)?
    answers:
      - Layout → Page → Document
      - Page → Layout → Document
      - Document → Layout → Page
    correctAnswer: Document → Layout → Page
  - question: What is the default layout called?
    answers:
      - default.vue
      - layout.vue
      - defaultLayout.vue
    correctAnswer: default.vue
  - question: How do you create a custom layout?
    answers:
      - add a .vue file to the pages folder
      - add a .vue file to the layouts folder
      - add a .vue file to the components folder
    correctAnswer: add a .vue file to the layouts folder
  - question: How do you activate your custom layout called 'blog' on your page?
    answers:
      - "layout: 'blog'"
      - "layout: 'default'"
      - "blog: 'blog'"
    correctAnswer: "layout: 'blog'"
  - question: Where do you put your error.vue file that creates a customized error page
    answers:
      - in the pages folder
      - in the errors folder
      - in the layouts folder
    correctAnswer: in the layouts folder
---

The Views section describes all you need to know to configure data and views for a specific route in your Nuxt.js Application. Views consist of an app template, a layout, and the actual page. In addition, you can define custom meta tags for the head section of each page which are important for SEO (Search Engine Optimization).

![Composition of a View in Nuxt.js](/docs/2.x/views.png)

Composition of a View in Nuxt.js

## Pages

Every Page component is a Vue component but Nuxt.js adds special attributes and functions to make the development of your application as easy as possible.

```html{}[pages/index.vue]
<template>
  <h1 class="red">Hello World</h1>
</template>

<script>
  export default {
    head() {
      // Set Meta Tags for this Page
    }
    // ...
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
```

## Properties of a page component

There are many properties of the page component such as the head property in the example above.

<base-alert type="next">

See the [Directory Structure book](/docs/2.x/directory-structure/nuxt) to learn more about all the properties can use on your page

</base-alert>

## Layouts

Layouts are a great help when you want to change the look and feel of your Nuxt.js app. For example you want to include a sidebar or have distinct layouts for mobile and desktop.

### Default Layout

You can define a default layout by adding a `default.vue` file inside the layouts directory. This will be used for all pages that don't have a layout specified. The only thing you need to include in the layout is the `<Nuxt />` component which renders the page component.

```html{}[layouts/default.vue]
<template>
  <Nuxt />
</template>
```

<base-alert type="next">

Learn more about the [Nuxt component](/docs/2.x/features/nuxt-components) in the components chapter

</base-alert>

### Custom Layout

You can create custom layouts by adding a `.vue` file to the layouts directory. In order to use the custom layout you need to set the `layout` property in the page component where you want to use that layout. The value will be the name of the custom layout that you have created.

To create a blog layout add a `blog.vue` file to your layouts directory `layouts/blog.vue`:

```html{}[layouts/blog.vue]
<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
```

<base-alert>

Make sure to add the `<Nuxt/>` component when creating a layout to actually include the page component.

</base-alert>

We then use the layout property with the value of 'blog' in the page where we want that layout to be used.

```html{}[pages/posts.vue]
<template>
  <!-- Your template -->
</template>
<script>
  export default {
    layout: 'blog'
    // page component definitions
  }
</script>
```

<base-alert type="info">

If you don't add a layout property to your page, eg `layout: 'blog'` then the `default.vue` layout will be used.

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

### Error Page

The error page is a *page component* which is always displayed when an error occurs (that does not happen while server-side rendering).

<base-alert>

Although this file is placed in the `layouts` folder, it should be treated as a page.

</base-alert>

As mentioned above, this layout is special, since you should not include the `<Nuxt/>`  component inside its template. You must see this layout as a component displayed when an error occurs (`404`, `500`, etc.). Similar to other page components, you can set a custom layout for the error page as well in the usual way.

You can customize the error page by adding a `layouts/error.vue` file:

```html{}[layouts/error.vue]
<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
```

## Document: App.html

The app template is used to create the actual HTML frame of your document for your Nuxt.js application which injects the content as well as variables for the head and body. This file is created automatically for you and in general rarely needs to be modified. You can customize the HTML app template used by Nuxt.js to include scripts or conditional CSS classes by creating an `app.html` file in the source directory of your project which by default is the root directory.

The default template used by Nuxt.js is:

```html{}[app.html]
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

One use case of using a custom app template is to add conditional CSS classes for IE:

```html{}[app.html]
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

<base-alert type="info">

While you can add JavaScript and CSS files in the `app.html`, it is recommended to use the `nuxt.config.js` for these tasks instead!

</base-alert>

<quiz :questions="questions"></quiz>
