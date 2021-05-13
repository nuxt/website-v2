---
title: Components directory
menuTitle: components
description: The components directory contains your Vue.js Components. Components are what makes up the different parts of your page and can be reused and imported into your pages, layouts and even other components.
position: 3
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/03_components?fontsize=14&hidenavigation=1&theme=dark
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

## Components Discovery

Starting from `v2.13`, Nuxt can auto-import the components you use. To activate this feature, set `components: true` in your configuration:

```js{}[nuxt.config.js]
export default {
  components: true
}
```

Any components in the `~/components` directory can then be used throughout your pages, layouts (and other components) without needing to explicitly import them.

```bash
| components/
--| TheHeader.vue
--| TheFooter.vue
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

<base-alert type="next">Learn more about the components module [in the component discovery documentation](/docs/2.x/features/component-discovery) and [in this announcement article](/blog/improve-your-developer-experience-with-nuxt-components).</base-alert>

## Other Features

<base-alert type="info">

You may also want to check out [the special hooks in the Components Glossary](http://localhost:3000/docs/2.x/components-glossary/pages-fetch) and find out more about [the built-in Nuxt Data Fetching features](http://localhost:3000/docs/2.x/features/data-fetching).

</base-alert>
