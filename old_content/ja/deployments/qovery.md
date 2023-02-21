---
template: guide
title: Qovery
description: Nuxt を Qovery にどうやってデプロイするのか？
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Qovery.svg"
  dark: "/img/companies/square/dark/Qovery.svg"
---
# Nuxt を Qovery にデプロイする

Nuxt を Qovery にどうやってデプロイするのか？

---

[Qovery](https://qovery.com)は、AWS、GCP、Azure、Digital Ocean のアカウント上で動作するフルマネージドクラウドプラットフォームで、静的サイト、バックエンド API、データベース、cron ジョブ、その他すべてのアプリを一か所でホストすることができます。

静的サイトは、Qovery では**完全に無料**で、以下のようなものがあります：

- GitHub や GitLab からの継続的な自動ビルド＆デプロイ。
- [Let's Encrypt](https://letsencrypt.org)による自動 SSL 証明書。
- 無料の PostgreSQL 管理
- 無料の SSD ストレージ
- 無制限の共同作業者
- 無制限の[カスタムドメイン](https://docs.qovery.com/guides/getting-started/setting-custom-domain/)

## 前提条件

このガイドでは、デプロイする Nuxt プロジェクトがすでにあることを前提としています。プロジェクトが必要な場合は、[はじめる](/docs/get-started/installation)ガイドに従ってください。

## セットアップ

以下の手順で、Qovery に Nuxt をセットアップしてください：

### 1. Qovery アカウントを作成する

アカウントをお持ちでない方は、[Qovery ダッシュボード](https://console.qovery.com)にアクセスし、アカウントを作成してください。

### 2. プロジェクトを作成する

"Create a new project" をクリックし、プロジェクトに名前をつけます。

"Next" をクリックします。

### 3. アプリケーションを追加する

"Create an application" をクリックし、"I have an application" を選択し、Nuxt サイトが置かれているリポジトリを選択します。

"Next" をクリックします。

静的なウェブサイトのためのサービス追加をスキップします。

"Deploy" をクリックします。

## デプロイ

アプリケーションがデプロイされるはずです。デプロイメントログをクリックすると、リアルタイムで状況を確認することができます。

## 継続的デプロイ

これで Qovery があなたのリポジトリに接続されたことになり、git にプッシュするといつでも**自動的にサイトを構築して公開**します。

## カスタムドメイン

Qovery の[カスタムドメイン](https://docs.qovery.com/guides/getting-started/setting-custom-domain/)ガイドを使って、独自のドメインを簡単にサイトに追加しましょう。

## サポート

ヘルプが必要な場合は、[Discord](https://discord.qovery.com) で Qovery の開発者とチャットしてください。
