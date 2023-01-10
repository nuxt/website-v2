---
title: 'The watchQuery Property'
description: Watch query strings and execute component methods on change (asyncData, fetch, validate, layout, ...)
menu: watchQuery
category: pages
position: 31
---

> Watch query strings and execute component methods on change (asyncData, fetch(context), validate, layout, ...)

- **Type:** `Boolean` or `Array` or `Function` (default: `[]`)

Use the `watchQuery` key to set up a watcher for query strings. If the defined strings change, all component methods (asyncData, fetch(context), validate, layout, ...) will be called. Watching is disabled by default to improve performance.

If you want to set up a watcher for all query strings, set `watchQuery: true`.

```js
export default {
  watchQuery: ['page']
}
```

You can also use the function `watchQuery(newQuery, oldQuery)` to have more refined watchers.

```js
export default {
  watchQuery(newQuery, oldQuery) {
    // Only execute component methods if the old query string contained `bar`
    // and the new query string contains `foo`
    return newQuery.foo && oldQuery.bar
  }
}
```

<div class="Alert Alert--orange">

**Warning**: The new `fetch` hook introduced in 2.12 is not affected by `watchQuery`. For more information see [listening to query string changes](/api/pages-fetch#listening-to-query-string-changes).

</div>
