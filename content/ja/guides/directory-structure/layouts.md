---
title: layouts
description: Layouts are a great help when you want to change the look and feel of your Nuxt.js app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.
position: 7
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/07_layouts?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: You can easily rename the layouts directory without any configuration
    answers:
      - true
      - false
    correctAnswer: false
  - question: What is the default layout page called?
    answers:
      - layout.vue
      - default.vue
      - defaultLayout.vue
    correctAnswer: default.vue
  - question: What component must you include in your layouts?
    answers:
      - <Nuxt />
      - <NuxtLink />
      - <RouterView />
    correctAnswer: <Nuxt />
  - question: You can add any other component to your layout
    answers:
      - true
      - false
    correctAnswer: true
  - question: To add a custom layout you create a `.vue` file and add it to what folder?
    answers:
      - layout
      - layouts
      - page
    correctAnswer: layouts
  - question: How do you tell the a page to use the blog layout?
    answers:
      - "layout: 'blog'"
      - "name: 'blog'"
      - 'blog: true'
    correctAnswer: "layout: 'blog'"
  - question: In which directory do you add an error page?
    answers:
      - pages
      - layouts
      - errors
    correctAnswer: layouts
  - question: You should add the `<Nuxt>` component to the error page?
    answers:
      - true
      - false
    correctAnswer: false
  - question: You can set a custom layout for your error page
    answers:
      - true
      - false
    correctAnswer: true
  - question: The error page is displayed when an error occurs while server side rendering?
    answers:
      - true
      - false
    correctAnswer: false
---

Layouts are a great help when you want to change the look and feel of your Nuxt.js app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.

<base-alert>

_This directory cannot be renamed without extra configuration._

</base-alert>

## Default Layout

You can extend the main layout by adding a `layouts/default.vue` file. It will be used for all pages that don't have a layout specified. Make sure to add the `<Nuxt>` component when creating a layout to actually include the page component.

All you need in your layout is three lines of code which will render the page component.

```html{}[layouts/default.vue]
<template>
  <Nuxt />
</template>
```

You can add more components here such as Navigation, Header, Footer etc.

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

<base-alert type="info">

If you have [components set to true](/docs/2.x/directory-structure/components) then there is no need to add any import statements for your components.

</base-alert>

## Custom Layout

Every file (_top-level_) in the `layouts` directory will create a custom layout accessible with the `layout` property in the page components.

Let's say we want to create a blog layout and save it to `layouts/blog.vue`:

```html{}[layouts/blog.vue]
<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
```

Then you have to tell the pages to use your custom layout

```js{}[pages/posts.vue]
<script>
export default {
  layout: 'blog',
  // OR
  layout (context) {
    return 'blog'
  }
}
</script>
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## Error Page

The error page is a *page component* which is always displayed when an error occurs (that is not thrown on the server-side).

<base-alert>

Though this file is placed in the `layouts` folder, it should be treated as a page.

</base-alert>

As mentioned above, this layout is special and you should not include `<Nuxt>` inside its template. You must see this layout as a component displayed when an error occurs (`404`, `500`, etc.). Similar to other page components, you can set a custom layout for the error page as well in the usual way.

You can customize the error page by adding a `layouts/error.vue` file:

```js{}[layouts/error.vue]
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
```

<base-alert type="info">

The default error page source code is [available on GitHub](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-app/template/components/nuxt-error.vue).

</base-alert>

<quiz :questions="questions"></quiz>
