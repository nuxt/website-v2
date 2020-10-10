---
title: 'layout プロパティ'
description: '`layouts` ディレクトリの（第一階層の）ファイルはカスタムレイアウトになります。これらはページコンポーネントの layout プロパティで指定して利用できます'
menu: layout プロパティ
category: components-glossary
---

> Every file (first level) in the layouts directory will create a custom layout accessible with the layout property in the page component.

> layouts ディレクトリの（第一階層の）ファイルはカスタムレイアウトになります。これらはページコンポーネントの layout プロパティで指定して利用できます

- **型:** `String` または `Function`（デフォルト: `'default'`）

どのレイアウトを使うか指定するために、ページコンポーネントで `layout` キーを使ってください:

```js
export default {
  layout: 'blog',
  // または
  layout(context) {
    return 'blog'
  }
}
```
