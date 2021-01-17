---
title: '$nuxt: The Nuxt.js helper'
description: $nuxt is a helper designed to improve user experience.
category: internals-glossary
position: 2
---

`$nuxt` is a helper designed to improve user experience.
For more info on the Nuxt.js helper check out the [context and helpers chapter in the Concepts book](/docs/2.x/concepts/context-helpers#nuxt-the-nuxtjs-helper)

## Connection checker

- `isOffline`
  - Type: `Boolean`
  - Description: `true` when the user's internet connection becomes offline
- `isOnline`
  - Type: `Boolean`
  - Description: Opposite of `isOffline`

```html{}[layouts/default.vue]
<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <nuxt />
  </div>
</template>
```

## Refreshing page data

- `refresh()`
  - When you want to only refresh the data provided by asyncData or fetch

```html{}[example.vue]
<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
  export default {
    asyncData() {
      return { content: 'Created at: ' + new Date() }
    },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>
```

## Controlling the loading bar

- `$loading`
  - When you want to control Nuxt's loading bar programmatically

```js{}[]
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```
