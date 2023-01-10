---
title: 'The head Property'
description: Nuxt.js let you define all default meta for your application inside nuxt.config.js.
menu: head
category: configuration
position: 112
---

> Nuxt.js let you define all default meta for your application inside `nuxt.config.js`, use the same `head` property

- Type: `Object` or `Function`

An example `nuxt.config.js`:

```js
export default {
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
```

To know the list of options you can give to `head`, take a look at [vue-meta documentation](https://vue-meta.nuxtjs.org/api/#metainfo-properties).

You can also use `head` as a function in your components to access the component data through `this` ([read more](/api/pages-head)).

<div class="Alert Alert--teal">

<b>Info:</b> To avoid duplicated meta tags when used in child component, set up a unique identifier with the `hid` key for your meta elements ([read more](https://vue-meta.nuxtjs.org/api/#tagidkeyname)).

</div>
