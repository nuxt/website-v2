---
title: Component Discovery
description: By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.
position: 9.5
category: features
img: /docs/2.x/components.png
imgAlt: nuxt components module
---

## Enabling Auto-Discovery

Starting from `v2.13`, Nuxt can auto import your components when used in your templates. To activate this feature, set `components: true` in your configuration:

```js{}[nuxt.config.js]
export default {
  components: true
}
```

<base-alert type="info">Check out [how to configure component auto-discovery](/docs/2.x/configuration-glossary/configuration-components#advanced).</base-alert>

## Using Components

Once you create your components in the components directory they will then be available throughout your app without the need to import them.

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

<base-alert type="info">See [live demo](https://codesandbox.io/s/nuxt-components-cou9k) or [video example](https://www.youtube.com/watch?v=lQ8OBrgVVr8).</base-alert>

## Component Names

If you have components in nested directories such as:

```bash
| components/
--| base/
----| foo/
------| Button.vue
```

The component name will be based on its own path directory and filename. Therefore, the component will be:

```html
<BaseFooButton />
```

<base-alert>
For clarity, it is recommend that the component file name matches its name. (So, in the example above, you could rename `Button.vue` to be `BaseFooButton.vue`.)
</base-alert>

If you want to use a custom directory structure that should not be part of the component name, you can explicitly specify these directories:

```bash
| components/
--| base/
----| foo/
------| Button.vue
```

```bash{}[nuxt.config.js]
components: {
  dirs: [
    '~/components',
    '~/components/base'
  ]
}
```

And now in your template you can use `FooButton` instead of `BaseFooButton`.

```html{}[pages/index.vue]
<FooButton />
```

<base-alert type="info">eConsider naming your components and directories following the [Vue Style Guide](https://vuejs.org/v2/style-guide/).</base-alert>

## Dynamic Imports

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
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

## Cheatsheet

<app-modal :src="img" :alt="imgAlt"></app-modal>
