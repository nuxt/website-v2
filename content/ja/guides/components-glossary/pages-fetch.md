---
title: 'The fetch Method'
description: The `fetch` method is used to fill the store before rendering the page, it's like the `asyncData` method except it doesn't set the component data.
menu: Fetch Method
category: components-glossary
---

## Nuxt >= 2.12

Nuxt.js `v2.12` introduces a new hook called `fetch` **in any of your Vue components**.

<base-alert>

`fetch(context)` has been deprecated, instead you can use an [anonymous middleware](/guides/components-glossary/pages-middleware#anonymous-middleware) in your page: `middleware(context)`

</base-alert>

### When to use fetch?

Every time you need to get **asynchronous** data. `fetch` is called on server-side when rendering the route, and on client-side when navigating.

It exposes `$fetchState` at the component level:

- `$fetchState.pending`: `Boolean`, allows you to display a placeholder when `fetch` is being called _on client-side_.
- `$fetchState.error`: `null` or `Error`, allows you to display an error message
- `$fetchState.timestamp`: `Integer`, is a timestamp of the last fetch, useful for caching with `keep-alive`

If you want to call the `fetch` hook from your template use:

```html
<button @click="$fetch">Refresh</button>
```

or component method:

```javascript
// from component methods in script section
export default {
  methods: {
    refresh() {
      this.$fetch()
    }
  }
}
```

You can access the Nuxt [context](/guides/internals-glossary/context) within the fetch hook using `this.$nuxt.context`.

### Options

- `fetchOnServer`: `Boolean` or `Function` (default: `true`), call `fetch()` when server-rendering the page
- `fetchDelay`: `Integer` (default: `200`), set the minimum executing time in milliseconds (to avoid quick flashes)

<div class="Alert Alert--green">
  
When `fetchOnServer` is falsy (`false` or returns `false`), `fetch` will be called only on client-side and `$fetchState.pending` will return `true` when server-rendering the component.

</div>

```html
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await this.$http.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
    },
    fetchOnServer: false
  }
</script>
```
