---
title: loading プロパティ
description: '`loading` プロパティは特定のページに対してデフォルトの loading プログレスバーを無効にするオプションを提供します。'
menu: loading プロパティ
category: components-glossary
---

> loading プロパティは特定のページに対してデフォルトの loading プログレスバーを無効にするオプションを提供します。

- **型:** `boolean` (デフォルト: `true`)

デフォルトでは、Nuxt.js はルート間の遷移の際に自身で持っているコンポーネントでプログレスバーを表示します。

You can disable or customize it globally through the , but also disable it for specific pages by setting the `loading` property to `false` :

[loading オプションの設定](/guides/configuration-glossary/configuration-loading) でグローバルに無効化やカスタマイズできるだけでなく、特定のページに対しても `loading` プロパティを `false` に設定することで無効化できます:

```html
<template>
  <h1>My page</h1>
</template>

<script>
  export default {
    loading: false
  }
</script>
```
