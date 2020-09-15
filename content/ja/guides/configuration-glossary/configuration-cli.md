---
title: 'cli プロパティ'
description: 'Nuxt.js では CLI の設定をカスタマイズできます。'
menu: cli
category: configuration-glossary
position: 3
---

> Nuxt.js では CLI の設定をカスタマイズできます。

## bannerColor

- 型: `String`
  - デフォルト: `'green'`

CLI バナーの「Nuxt.js」タイトルの色を変更します。

**利用可能な色:**

`black`、`red`、`green`、`yellow`、`blue`、`magenta`、`cyan`、`white`、`gray`、`redBright`、`greenBright`、`yellowBright`、`blueBright`、`magentaBright`、`cyanBright`、そして `whiteBright`

```js{}[nuxt.config.js]
export default {
  cli: {
    bannerColor: 'yellow'
  }
}
```
