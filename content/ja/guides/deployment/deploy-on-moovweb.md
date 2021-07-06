---
title: Nuxt を Layer0 でデプロイする
description: Nuxt.js を Layer0 にデプロイする方法は?
menu: Layer0
target: Server
category: deployment
position: 110
---

Layer0 はユニバーサル（SSR）な Nuxt.js アプリケーションに対応しています。

[Layer0](https://www.layer0.co) はヘッドレス・フロントエンドの開発、デプロイ、プレビュー、実験、監視、実行のためのオールインワン・プラットフォームです。これは大規模のダイナミックな web サイトと、EdgeJS（JavaScript をベースにしたコンテンツ・デリバリー・ネットワーク）、プレディクティブ・プリフェッチ、パフォーマンス・モニタリングでのクラス最高のパフォーマンスに焦点を当てています。Layer0 は無料版を提供しています。

詳しい説明は [Layer0 Nuxt.js documentation](https://docs.layer0.co/guides/nuxt) を参照してください。

## はじめに

1. 無料アカウントで [Layer0's signup page](https://app.layer0.co/signup) にサインアップしてください。

2. [Layer0 CLI](https://docs.layer0.co/guides/cli) をインストールしてください。

<code-group>
  <code-block label="Yarn" active>

```bash
yarn global add @layer0/cli
```

  </code-block>
  <code-block label="npm">

```bash
npm i -g @layer0/cli
```

  </code-block>

</code-group>

## プロジェクトの設定

3. [サーバーサイドレンダリングが有効になっていること](/docs/2.x/configuration-glossary/configuration-ssr)を確認し、`nuxt.config.js` を `@layer0/nuxt` モジュールに追加してください:

```js
// nuxt.config.js

module.exports = {
  modules: ['@layer0/nuxt/module']
}
```

4. Layer0 用にプロジェクトを設定する `layer0 init` を実行してください。

## プロジェクトの実行とデプロイ

5. ローカルでアプリケーションのテストをするため、プロジェクト・ディレクトリで以下を実行してください:

```js
layer0 run
```

6. アプリケーションをデプロイするため、プロジェクト・ディレクトリで以下を実行してください:

```js
layer0 deploy
```

## アプリケーションのパフォーマンスを最適化する

- （オプション）Nuxt.js のサーバーサイドレンダリングのパフォーマンスを最適化するため、Layer0 は Layer0 Nuxt.js ガイドの[modules vs buildModules section](https://docs.layer0.co/guides/nuxt#section_modules_vs_buildmodules)でも説明されているように、ほとんどのモジュールを `buildModules` に移行することを推奨しています。
- （オプション）Layer0 は Nuxt.js の組み込みルーティングスキーマに自動で対応しています。しかし Layer0 Nuxt.js ガイドの[Routing section](https://docs.layer0.co/guides/nuxt#section_routing) にあるように、EdgeJS 経由でルーティング、キャッシュ、プリフェッチをカスタマイズすることでパフォーマンスを最適化できます。

## ヘルプ

問題が発生した時は、ガイドの [Troubleshooting section](https://docs.layer0.co/guides/nuxt#section_troubleshooting) をチェックするか、[forums](https://forum.layer0.co) でチケットを作成してください。
