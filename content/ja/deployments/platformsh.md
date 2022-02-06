---
template: guide
title: Platform.sh
description: Nuxt を Platform.sh にどうやってデプロイするのか？
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Platformsh.svg"
  dark: "/img/companies/square/dark/Platformsh.svg"
---
# Nuxt を Platform.sh にデプロイする

Nuxt を Platform.sh にどうやってデプロイするのか？

---

[Platform.sh](https://platform.sh/)は、ステージング環境と本番環境の両方に対応した、フル機能を備えたエンドツーエンドの継続的デプロイメントクラウドホスティングシステムです。様々な言語で書かれた静的なアプリケーションと動的なアプリケーションの両方をホスティングすることができます。

Platform.shには以下のような機能があります：

- アプリケーションの構築、デプロイ、管理、拡張が可能です。
- どのブランチもステージング環境とすることができ、簡単に環境を作成、削除することができます。
- Node.js、PHP、Python、Ruby、Go、または Java アプリケーションといったほとんどサポートしており、任意のバージョンを選択できます。
- 自動 TLS 証明書
- 統合されたビルドパイプラインにより、アプリケーションのビルドプロセスを必要に応じてカスタマイズできます。
- Infrastructure-as-code：3つの YAML ファイルを定義するだけで、必要に応じてクラスター全体が作成されます。サービスの追加と削除が簡単にできます。
- GitHub や GitLab のリポジトリから直接コードをデプロイできます。

## セットアップ

Platform.sh には、Nuxt 用のテンプレートがあらかじめ用意されています。以下のリンクをクリックすると、新しい Platform.sh プロジェクトが作成され、Nuxt のサンプルアプリケーションがあらかじめ用意されています。それをカスタマイズしてみてください。

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/nuxtjs/.platform.template.yaml&utm_content=nuxtjs&utm_source=nuxtjs_orgb&utm_medium=button&utm_campaign=deploy_on_platform" target="_blank">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" height="40px" width="180px" />
</a>
</p>

`README.md`ファイルには、提供されたデフォルト設定の詳細が含まれています。Platform.sh の新規アカウントは、最初の 30 日間は無料です。
