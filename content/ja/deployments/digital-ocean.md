---
template: guide
title: Digital Ocean
description: Nuxt を DigitalOcean App Platform でどうやってデプロイするのか？
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Digital_Ocean.svg"
  dark: "/img/companies/square/dark/Digital_Ocean.svg"
---
# Nuxt を DigitalOcean App Platform でデプロイする

Nuxt を DigitalOcean App Platform でどうやってデプロイするのか？

---

[DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/) はシンプルで完全なマネージド・ソリューションを使用して、アプリケーションのビルド、デプロイ、また迅速なスケールを行うことができます。またインフラストラクチャー、アプリケーションのランタイム、依存関係を管理してくれるため、数回のクリックでコードを本番環境にプッシュできます。

App Platform には以下の機能があります：

- アプリケーションのビルド、デプロイ、管理、スケール。
- 自動でアプリケーションを保護。SSL 証明書の作成、管理、更新、さらに DDoS 攻撃からアプリケーションを保護。
- Node.js、静的サイト、Python、Django、Go、PHP、Laravel、React、Ruby、Ruby on Rails、Gatsby、Hugo、コンテナイメージに対応。
- GitHub と GitLab リポジトリからコードを直接デプロイ。更新したソースコードをプッシュすると、アプリケーションを自動で再デプロイ。
- ゼロ・インフラストラクチャー管理。App Platform はオープンな、クラウドネイティブ規格を使用し、コードを自動的に解析してコンテナを作成し、Kubernetes クラスター上で実行します。
- 高いスケーラビリティ。水平・垂直方向にスケールする。

## 前提条件

このガイドではデプロイする Nuxt プロジェクトがあることを前提とします。もしプロジェクトが必要なら、[create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を使用して開始してください。

## セットアップ

1. リポジトリにリンク: DigitalOcean に新しいアカウントを作成し、GitHub か Gitlab アカウントに接続してください。その後デプロイしたいリポジトリを選択してください。
2. リポジトリのブランチと、デプロイするサイトのリージョンを選択してください。
3. あなたの web サイトに合ったサービスを選択してください。

   | タイプ      | 設定                                                                    |
   | ---------- | ---------------------------------------------------------------------- |
   | **Server** | Web サービス - Build コマンド `yarn build` & 実行コマンド   `yarn start --hostname 0.0.0.0`    |
   | **Static** | 静的サイト - Build コマンド `yarn generate` & 出力先ディレクトリ `dist`      |

   ::alert{type="warning"}
   <b>警告：</b>サーバータイプについては、Web サービスの設定で、**HTTP ポート**を 8080 から **3000** に変更する必要があります。<br />より詳細は[この記事](https://dev.to/tillsanders/deploy-nuxt-js-on-digitalocean-app-platform-in-5-minutes-or-less-2dij)参照ください。
   ::

   ![DO App platform Web Service Nuxt configuration](https://i.imgur.com/BhBu49J.png)
4. 環境変数がある場合、キー/値ペアの入力を手動で行います。

プロセスが一度通って、デプロイボタンを押すとビルドが完了すると同時に、自動的に作成された URL でサイトが公開されます。

## 継続的デプロイメント （CD）

今　App Platform はリポジトリに接続されており、新しい変更をプッシュするたびに自動的にサイトをビルドして公開します。

## カスタム・ドメインの追加

独自のドメインを簡単にサイトに追加するには Settings > Domains > Add domain を行うかガイド [How to Manage Domains in App Platform](https://www.digitalocean.com/docs/app-platform/how-to/manage-domains/) を参照してください。

## Deploy to DigitalOcean ボタン

Deploy to DigitalOcean ボタンは App Platform 上でアプリケーションを起動できるようにします。このボタンは GitHub リポジトリの README ファイルに埋め込むことができ、リポジトリを閲覧しているユーザーがワンクリックで .yaml ファイルを追加してコードをデプロイできるようになります。[How to Add a "Deploy to DigitalOcean" Button to Your Repository](https://www.digitalocean.com/docs/app-platform/how-to/add-deploy-do-button/) をチェックしてください。
