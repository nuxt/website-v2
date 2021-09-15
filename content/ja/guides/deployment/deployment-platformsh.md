---
title: Nuxt を Platform.sh へデプロイする
description: Platform.sh へ Nuxt.js をデプロイするには?
menu: Platform.sh
target: Static & Server
category: deployment
position: 113.5
---

[Platform.sh](https://platform.sh/) はステージング、本番環境両方に対応した、フル機能を備えたエンドツーエンドの継続的デプロイメント・クラウドホスティングシステムです。こちらは様々な言語で書かれた静的、動的アプリケーションの両方をホストすることができます。

Platform.sh には以下の機能があります:

- アプリケーションのビルド、デプロイ、管理、スケーリングをします。
- 任意のブランチをステージング環境にでき、簡単に環境の作成と削除ができます。
- 選択したバージョン、または組み合わせの、ほとんど全ての Node.js、PHP、Python、Ruby、Go、また Java アプリケーションをサポートしています。
- 自動で TLS 証明書を作成します。
- 統合されたビルドパイプラインによって、アプリケーションのビルドプロセスを必要に応じてカスタマイズできます。
- インフラストラクチャ・アズ・コード: 3 つの YAML ファイルを定義すれば、必要に応じてクラスター全体が作成されます。また簡単にサービスの追加や削除もできます。
- GitHub と GitLab リポジトリから直接コードをデプロイできます。

## 設定方法

Platform.sh は Nuxt.js 用のテンプレートがあらかじめあります。以下のリンクをクリックすると、新しい Platform.sh プロジェクトが作成され、Nuxt.js のサンプルアプリケーションが用意されています。

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/nuxtjs/.platform.template.yaml&utm_content=nuxtjs&utm_source=nuxtjs_orgb&utm_medium=button&utm_campaign=deploy_on_platform">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" height="40px" width="180px" />
</a>
</p>

`README.md` ファイルには提供されているデフォルトの設定の詳細が含まれています。新しい Platform.sh アカウントは最初の 30 日間は無料です。
