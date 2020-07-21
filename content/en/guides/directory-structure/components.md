---
title: components
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

The components directory contains your Vue.js components. Components are what makes up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

### Fetching Data

To access asynchronous data from an API in your components you can use Nuxt [`fetch()` hook](http://localhost:3000/guides/features/data-fetching#the-fetch-method).

Using `$fetchState.pending` we can show a message when the data is waiting to be loaded and using `$fetchState.error` we can show an error message if there is an error fetching the data. When using fetch we must declare the data in the data property. This then gets filled with the data that comes from the fetch.

```html{}[components/MountainsList.vue]
<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index.id">
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

See the chapter on [fetch()](/guides/features/data-fetching#the-fetch-method) for more details on how fetch works

</base-alert>

## Components Discovery

Starting from `v2.13`, Nuxt can auto import your components when used in your templates, to activate this feature, set `components: true` in your configuration:

```js{}[nuxt.config.js]
export default {
  components: true
}
```

Once you create your components in the components directory they will then be available to be auto imported.

```html
components/ TheHeader.vue TheFooter.vue
```

```html{}[layouts/default.vue]
<template>
  <TheHeader />
  <Nuxt />
  <TheFooter />
</template>
```

### Dynamic Imports

To dynamically import a component also known, as lazy loading a component, all you need to do is add the `Lazy` prefix in your templates.

```html{}[layouts.default.vue]
<template>
  <TheHeader />
  <Nuxt />
  <LazyTheFooter />
</template>
```

Using the lazy prefix you can also dynamically import a component when an event is triggered.

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

### Nested Directories

If you have components in nested directories such as:

```bash
components/
  base/
    Button.vue
```

The component name will be based on its own filename. Therefore the component will be:

```html
<button />
```

We recommend you use the directory name in the filename for clarity

```bash
components/
  base/
    BaseButton.vue
```

However if you want to keep the filename as Button.vue then you can use the prefix option in the nuxt config to add a prefix to all components in a specific folder.

```bash
components/
  base/
   Button.vue
```

```bash{}[nuxt.config.js]
components: {
  dirs: [
    '~/components',
      {
        path: '~/components/base/',
        prefix: 'Base'
      }
  ]
}
```

And now in your template you can use the BaseButton instead of Button without having to make changes to the name of your `Button.vue` file.

```html{}[pages/index.vue]
<BaseButton />
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<base-alert type="next">

To learn more about the [components module](/blog/improve-your-developer-experience-with-nuxt-components)

</base-alert>
