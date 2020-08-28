---
title: レンダリングモード
description: レンダリングモード
position: 1
category: features
---

## ユニバーサル

`mode: 'universal'`: アイソモーフィックなアプリケーション (サーバーサイドレンダリング、または静的なサイト).

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // default universal
}
```

<base-alert type="info">
デフォルトのモードはユニバーサルなので、ユニバーサルモードを適用するために nuxt の設定ファイルにこれを追加する必要はありません。
</base-alert>

## SPA

`mode: 'spa'`: サーバーサイドレンダリングを行わない (クライアントでのナビゲーションのみ)

`mode` プロパティを利用することで、あなたのプロジェクトのデフォルトの nuxt のモードを変更することができます。

```js{}[nuxt.config.js]
export default {
  mode: 'spa' // default universal
}
```

<base-alert type="next">

[mode プロパティ](/guides/configuration-glossary/configuration-mode)

</base-alert>
