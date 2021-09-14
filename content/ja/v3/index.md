---
template: blank
layout:
  fluid: true
navigation: false
layout.asideClass: 'block lg:hidden'
layout.aside: true
title: Nuxt3 は準備できていますか？
head.titleTemplate: null
---

::nuxt3-hero
---
primary: false
---

#title
[まもなく]{.text-primary} Nuxt3 がやってきます

#description
モダンな Web のために一から作り直しました。<br>
ハイブリットスタティック & サーバーレンダリング、API ルート、そしてネイティブサーバーレス。

#body
Nuxt3 がパブリックベータがリリースされたときお知らせを取得する。
::

::home-features
---
category: 発見
---
#title
新機能を搭載
#description
Nuxt3 はより小さなコアで再設計されており、より速いパフォーマンスとより良い開発体験のために最適化されています。
#default
  ::section-content-item
  ---
  title: より軽量
  description: '標準で Nuxt3 は Nuxt2 より 20% 小さい (ちょうど 13kb) です。'
  image: IconFeather
  imageClass: w-10 h-10
  ---
  :icon-nuxt
  ::
  ::section-content-item
  ---
  title: より速い
  description: 'h3 によるダイナミック SSR コードスプリッティングで最適化されたコールドスタートを提供します。'
  image: IconRabbit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: ハイブリッド
  description: 'インクリメンタル静的生成そして他の高度なモードは可能です。'
  image: IconHybrid
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Suspense
  description: 'ナビゲート前・後において、任意のコンポーネント内でデータを Fetch することができます。'
  image: IconSuspense
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Composition API
  description: "真のコード再利用のため、Composition API と Nuxt3 composables を使用します。"
  image: IconCAPI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt CLI
  description: '簡単な scaffolding とモジュール統合のための新しい zero-dependency 体験を提供します。'
  image: IconCLI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Devtools
  description: 'ブラウザ上での情報や素早い修正によりより速く作業することができます。'
  image: IconDevtools
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Kit
  description: 'Nuxt2 と Nuxt3 の両方で動作するモジュールを簡単に作成することができます。'
  image: IconKit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Webpack 5
  description: '設定なしに、より速いビルド時間とより小さいバンドルサイズを提供します。'
  image: IconWebpack
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vite (ベータ)
  description: 'バンドラに Vite を使用することで、光のように速い HMR を体験できます。'
  image: IconVite
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vue 3
  description: 'Vue 3は、次世代 Web アプリケーション向けの強固な基盤です。'
  image: IconVue
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: TypeScript
  description: 'ネイティブな TypeScript と ES Modules で構築されます。余分な手順は必要ありません。'
  image: IconTypeScript
  imageClass: w-10 h-10
  ---
  ::
::

::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-lg}
  ::nuxt-container{.text-justify}
    :icon-nuxt-nitro{.h-32}
    :headline[Nitro Engine]

    私たちは9ヶ月間、Nuxt の新しいサーバーエンジンの開発に取り組みました。**Nitro (ナイトロ)** です。それは Nuxt サーバーとさらに先に向けた新しい **フルスタック能力** を提供します。

    開発においては、あなたのサーバーと context isolation に Hot Module Replacement を提供するために rollup と Node.js ワーカーを使います。また、`server/api/` でファイル読み込みことによって  **サーバー API を生成**し、そして `server/functions/` から **server functions** を提供します。

    本番環境においては、アプリケーションとサーバーを1つのユニバーサルな `.output` ディレクトリにビルドします。それは minify され、(ポリフィルを除く) あらゆる node モジュールから取り除かれているため、 このビルドの **出力は軽量です**。Node.js、サーバーレス、ワーカー、エッジサイドレンダリングまたは pure な静的生成など、JavaScript をサポートするあらゆるシステムにデプロイすることができます。

    その出力は、ランタイムコードと組み合わせることで、Nuxt サーバーをあらゆる環境（ブラウザの Service Workers、実験的なものを含む）で実行したり、静的ファイルを提供したりすることができ、JAMStack 向けの**真のハイブリッドフレームワーク**となっています。さらに、ネイティブストレージレイヤーが実装されており、複数のソース、ドライバ、ローカルのアセットをサポートしています。

    Nitro サーバーの基盤は、高いパフォーマンスと移植性のためにビルトされた [h3](https://github.com/unjs/h3) です。
  ::
::

::nuxt-container{.pt-20 .text-justify}
:icon-nuxt-bridge{.h-32}
:headline[Nuxt Bridge]

私たちは Vue 3に移行し、4年間の開発期間を経て Nuxt を書き直し、将来に向けた強力な基盤としました。

### Nuxt3 へのスムーズなアップグレード

私たちは Nuxt2 と Nuxt3 との間でできるだけ簡単にアップグレードできるようにしました。

- レガシープラグインとモジュール動作
- Nuxt2 設定ファイルの互換性
- 部分ページでオプション API のサポート

### 既存の Nuxt2 プロジェクトに Nuxt3 体験を持ってくる

Nuxt3 の新機能を開発するにあたり、その一部を Nuxt2 にバックポートしました。

- Nuxt2 で Nitro の使用
- Nuxt2 で Composition API の使用
- Nuxt2 で 新しい CLI と Devtools の使用
- Nuxt3 への段階的アップグレード
- Nuxt2 モジュールエコシステムでの互換性
- 部分ごとのアップグレード (Nitro、Composition API、Nuxt Kit)
::

::nuxt-container{.text-center .text-xl .pt-10}
おまたせしました。私たちは早く公開して皆さんにフィードバックしていただきたいと思っています - [Nuxt チーム]{.font-serif} -
::
