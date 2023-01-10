---
title: 'The layout Property'
description: Every file (first level) in the `layouts` directory will create a custom layout accessible with the layout property in the page component.
menu: Layout Property
category: components-glossary
position: 0
---

> Every file (first level) in the layouts directory will create a custom layout accessible with the layout property in the page component.

- **Type:** `String` or `Function` (default: `'default'`)

Use the `layout` key in your pages components to define which layout to use:

```js
export default {
  layout: 'blog',
  // OR
  layout(context) {
    return 'blog'
  }
}
```
