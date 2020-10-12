---
title: 'La propriété watchers'
description: La propriété watchers vous permet d'écraser la configuration de watchers.
menu: watchers
category: configuration-glossary
position: 34
---

- Type: `Object`
- Default: `{}`

> La propriété watchers vous permet d'écraser la configuration de watchers dans votre nuxt.config.js.

## chokidar

- Type: `Object`
- Default: `{}`

Pour en savoir plus sur les options de chokidar, voir l'[API chokidar](https://github.com/paulmillr/chokidar#api).

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

Pour en savoir plus sur les options webpack de surveillance, voir la [documentation webpack](https://webpack.js.org/configuration/watch/#watchoptions).

### Prochaine étape

<base-alert type="next">

Consultez le [Glossaire interne](/guides/internals-glossary/$nuxt)

</base-alert>
