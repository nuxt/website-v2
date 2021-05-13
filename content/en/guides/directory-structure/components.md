---
title: Components directory
menuTitle: components
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

The components directory contains your Vue.js components. Components are what makes up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

### Fetching Data

To access asynchronous data from an API in your components you can use Nuxt [`fetch()` hook](/docs/2.x/features/data-fetching#the-fetch-method).

By checking `$fetchState.pending`, we can show a message when data is waiting to be loaded. We can also check `$fetchState.error` and show an error message if there is an error fetching the data. When using `fetch()`, we must declare the appropriate properties in `data()`. The data that comes from the fetch can then be assigned to these properties.

```html{}[components/MountainsList.vue]
<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```

<base-alert type="next">

See the chapter on [fetch()](/docs/2.x/features/data-fetching#the-fetch-method) for more details on how fetch works.

</base-alert>

## Components Discovery

<app-modal :src="img" :alt="imgAlt"></app-modal>

Starting from `v2.13`, Nuxt can auto import your components when used in your templates. To activate this feature, set `components: true` in your configuration:

```js{}[nuxt.config.js]
export default {
  components: true
}
```

Once you create your components in the components directory they will then be available to be auto imported.

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

### Dynamic Imports

To dynamically import a component, also known as lazy loading a component, all you need to do is add the `Lazy` prefix in your templates.

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <LazyTheFooter />
  </div>
</template>
```

Using the lazy prefix you can also dynamically import a component when an event is triggered.

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

### Nested Directories

If you have components in nested directories such as:

```bash
components/
  base/
      foo/
         Button.vue
```

The component name will be based on its own path directory and filename. Therefore, the component will be:

```html
<BaseFooButton />
```

However, if you want to use a custom directory structure that should not be part of the component name, you can explicitly specify these directories:

```bash
components/
  base/
      foo/
         Button.vue
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

<base-alert type="next">Learn more about the [components module](/blog/improve-your-developer-experience-with-nuxt-components).</base-alert>
