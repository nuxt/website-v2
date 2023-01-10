---
title: 'The cli Property'
description: Nuxt.js lets you customize the CLI configuration.
menu: cli
category: configuration-glossary
position: 3
---

> Nuxt.js lets you customize the CLI configuration.

## badgeMessages

- Type `Array`

Add a message to the CLI banner.

```js{}[nuxt.config.js]
cli: {
  badgeMessages: ['Hello World!']
}
```

<img src="/docs/2.x/cli-badge.png" />

## bannerColor

- Type: `String`
  - Default: `'green'`

Change the color of the 'Nuxt.js' title in the CLI banner.

**Available colors:**

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`, `redBright`, `greenBright`, `yellowBright`, `blueBright`, `magentaBright`, `cyanBright`, `whiteBright`

```js{}[nuxt.config.js]
export default {
  cli: {
    bannerColor: 'yellow'
  }
}
```
