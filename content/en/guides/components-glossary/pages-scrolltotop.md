---
title: 'The scrollToTop Property'
description: The `scrollToTop` property lets you tell Nuxt.js to scroll to the top before rendering the page.
menu: scrollToTop Property
category: components-glossary
position: 0
---

> The scrollToTop property lets you tell Nuxt.js to scroll to the top before rendering the page.

- **Type:** `Boolean` (default: `false`)

By default, Nuxt.js scrolls to the top when you go to another page, but with children routes, Nuxt.js keeps the scroll position. If you want to tell Nuxt.js to scroll to the top when rendering your child route, set `scrollToTop` to `true`:

```html
<template>
  <h1>My child component</h1>
</template>

<script>
  export default {
    scrollToTop: true
  }
</script>
```

Conversely, you can manually set `scrollToTop` to `false` on parent routes as well.

If you want to overwrite the default scroll behavior of Nuxt.js, take a look at the [scrollBehavior option](/docs/2.x/configuration-glossary/configuration-router#scrollbehavior).
