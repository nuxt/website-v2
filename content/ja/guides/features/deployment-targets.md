---
title: デプロイターゲット
description: デプロイターゲット
position: 2
category: features
---

## 静的ホスティング

静的ホスティング(サーバーが必要ないホスティング)のためには、nuxt.config ファイルで target を static に設定する必要があります。

```js{}[nuxt.config.js]
export default {
  target: 'static' // デフォルトは 'server'
}
```

target を static にした状態で nuxt dev を実行すると、開発者の体験は向上するでしょう:

- `context` から `req` と `res` を削除します
- クライアントサイドレンダリングの 404、エラー、リダイレクトをフォールバックします [SPA フォールバックを参照](/guides/concepts/static-site-generation#spa-fallback)
- サーバーサイドレンダリングでは常に `$route.query` と `{}` は等しくなります
- `process.static` は true になります

<base-alert type="info">
また、モジュールの製作者がユーザーターゲットに応じてロジックを追加するために `process.target` を公開しています。
</base-alert>

## サーバーホスティング

サーバーホスティングのためには target を server にします。これはデフォルトの値です。

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```
