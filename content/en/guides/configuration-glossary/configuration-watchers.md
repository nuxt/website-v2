---
title: 'The watchers Property'
description: The watchers property lets you overwrite watchers configuration.
menu: watchers
category: configuration-glossary
position: 34
---

- Type: `Object`
- Default: `{}`

> The watchers property lets you overwrite watchers configuration in your nuxt.config.js.

## chokidar

- Type: `Object`
- Default: `{}`

To learn more about chokidar options, see the [chokidar API](https://github.com/paulmillr/chokidar#api).

## webpack

- Type: `Object`
- Default:

```js
watchers: {
  webpack: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
```

To learn more about webpack watchoptions, see the [webpack documentation](https://webpack.js.org/configuration/watch/#watchoptions).

### What's next

<base-alert type="next">

Check out the [Internals Glossary book](/docs/2.x/internals-glossary/$nuxt)

</base-alert>
