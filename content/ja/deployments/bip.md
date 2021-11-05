---
template: guide
title: Bip
description: Nuxt アプリケーションで Bip でどうやってデプロイするのか？
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/bip.png"
  dark: "/img/companies/square/dark/bip.png"
---
# Bip で Nuxt をデプロイする

Nuxt アプリケーションで Bip でどうやってデプロイするのか？

---

[Bip](https://bip.sh) はダウンタイムのないデプロイ、グローバル CDN、SSL、無制限の帯域幅などを Nuxt の静的 Web サイトに提供する商業ホスティングサービスです。プランはドメインごとの従量制で利用できます。

以下のガイドではほんの数ステップで Nuxt の静的 Web サイトを Bip にデプロイする方法を説明します。

## 前提条件

- [Yarn](https://yarnpkg.com/getting-started/install) がインストールされていること。
- Bip CLI がインストールされていること、加えて Bip アカウントとドメインが使える状態になっていること。詳しい説明は [Bip Get Started guide](https://bip.sh/getstarted) を見てください。

## ステップ 1: 初期設定

はじめに Nuxt プロジェクトをデプロイして、世界にシェアできる状態にする必要があります。プロジェクトが必要な場合は、[create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を使用してください：

Yarn を使用して新しいプロジェクトを作成してください：

```bash
yarn create nuxt-app <project-name>
```

画面の指示に従って Nuxt プロジェクトの設定をします。'Deployment target' では、'Static (Static/JAMstack hosting)' が選択されていることを確認してください。

完了後、新しいディレクトリに移動してください：

```bash
cd <project-name>
```

次に、Bip でプロジェクトを初期化する必要があります。この作業は一度だけで済みます。

```bash
bip init
```

画面の指示に従うと、どのドメインにデプロイしたいか尋ねられます。Bip は Nuxt を使用しているのを検出し、ソースファイルのディレクトリなどのプロジェクトの設定を自動的にセットします。

## ステップ 2: デプロイ

Web サイトのデプロイをする準備ができました。以下を実行してください：

```bash
yarn generate && bip deploy
```

これでおしまいです！　少しすれば Web サイトはデプロイされているでしょう。
