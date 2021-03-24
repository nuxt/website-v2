---
title: components
description: The components directory contains your Vue.js Components. Components are what makes up the different parts of your page and can be reused and imported into your pages, layouts and even other components.
position: 3
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/03_components?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/components.png
imgAlt: nuxt components module
questions:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
---

The `components` directory contains your Vue.js components. Components make up the different parts of your page and can be reused throughout your pages, layouts and even other components.

## Auto-Importing Components

Starting from `v2.13`, Nuxt can auto-import the components you use. To activate this feature, set `components: true` in your configuration:

```js{}[nuxt.config.js]
export default {
  components: true
}
```

Any components in the components directory can then be used throughout your pages, layouts (and other components) without needing to explicitly import them.

```bash
components/
  TheHeader.vue
  TheFooter.vue
```

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

### Component Names

The component name will be based on the full path (directory and filename).

If you have components in nested directories, this will affect the component name. Consider this directory structure:

```bash
components/
  base/
      foo/
         Button.vue
```

In this case the component can be auto-imported with:

```html
<BaseFooButton />
```

If you don't want to include your directory in the component name, it's possible to specify the prefix you want (or even disable it completely using `pathPrefix: false`): 

```bash{}[nuxt.config.js]
components: {
  dirs: [
    '~/components',
    { path: '~/components/base/foo/', prefix: 'custom' },
  ]
}
```

And now in your template you can use `CustomButton` instead of `BaseButton`.

```html{}[pages/index.vue]
<CustomButton />
```

### Dynamic Imports

To dynamically import a component (also known as lazy-loading a component) all you need to do is add the `Lazy` prefix to the component name.

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <LazyTheFooter />
  </div>
</template>
```

This is particularly useful if the component is not always needed. By using the `Lazy` prefix you can delay delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size.

```html{}[pages/index.vue]
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="showList">Show List</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      showList() {
        this.show = true
      }
    }
  }
</script>
```

### Cheat Sheet

<app-modal :src="img" :alt="imgAlt"></app-modal>

<base-alert type="next">For more information check out the [@nuxt/components documentation](https://github.com/nuxt/components/).</base-alert>

## Fetching Data

To access asynchronous data from an API in your components you can use the [`fetch()` hook](/docs/2.x/features/data-fetching#the-fetch-method).

<base-alert type="next">

See the chapter on [fetch()](/docs/2.x/features/data-fetching#the-fetch-method) for more details on how fetch works.

</base-alert>
