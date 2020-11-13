---
title: '$nuxt: The Nuxt.js helper'
description: $nuxt is a helper designed to improve user experience.
category: internals-glossary
position: 2
---

`$nuxt` is a helper designed to improve user experience.
<<<<<<< HEAD
=======
For more info on the Nuxt.js helper check out the [context and helpers chapter in the Concepts book](/docs/2.x/concepts/context-helpers#nuxt-the-nuxtjs-helper)

## Connection checker
>>>>>>> 32390dfa (fix: missing URLs and release-notes)

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
