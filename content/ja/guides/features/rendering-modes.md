---
title: レンダリングモード
description: レンダリングモード
position: 1
category: features
---

## ユニバーサル

`mode: 'universal'`: アイソモーフィックなアプリケーション (サーバーサイドレンダリング、または静的なサイト)

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // デフォルトは universal
}
```

<base-alert type="info">
デフォルトのモードはユニバーサルなので、ユニバーサルモードを適用するために nuxt の設定ファイルにこれを追加する必要はありません。
</base-alert>

## SPA

`mode: 'spa'`: サーバーサイドレンダリングを行わない (クライアントでのナビゲーションのみ)

`mode` プロパティを利用することで、あなたのプロジェクトのデフォルトの nuxt のモードを変更することができます:

```js{}[nuxt.config.js]
export default {
  mode: 'spa' // デフォルトは universal
}
```

<base-alert type="next">

[mode プロパティ](/docs/2.x/configuration-glossary/configuration-mode)

</base-alert>
