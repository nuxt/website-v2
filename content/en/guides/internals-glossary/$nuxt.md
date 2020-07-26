---
title: '$nuxt: The Nuxt.js helper'
description: $nuxt is a helper designed to improve user experience.
category: internals-glossary
position: 2
---

`$nuxt` is a helper designed to improve user experience.

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
