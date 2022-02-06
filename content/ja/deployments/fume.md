---
template: guide
title: Fume
description: Fume への Nuxt のデプロイの仕方
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Fume.svg"
  dark: "/img/companies/square/dark/Fume.svg"
---
# Fume で Nuxt をデプロイする

Fume への Nuxt のデプロイの仕方

---

[Fume](https://fume.app/) は、AWS を利用した運用管理プラットフォームです。

Fume には以下の機能があります：

- Lambda と CloudFront で Server と Static の両方をサポートするサーバーレス構造。
- ボタンをクリックするだけでロールバックできる[自動化された](https://github.com/marketplace/actions/fume-deployment)デプロイメント
- 環境ごとのメトリクスとコスト予測
- ドメイン制御 - ホストのインポート、証明書の発行、環境への記録のマッピング
- Slack、Discord、その他のコラボレーションプラットフォームへの統合された通知機能

## セットアップ

以下の手順で、2 分で本番用の URL を取得できます：

- [Fume](https://fume.app) に向かい、AWS アカウントに接続し、プラグインします
- チームと Nuxt プロジェクトの作成
- プロジェクトのルートフォルダ内で以下のコマンドを実行

::code-group
```bash [Yarn]
yarn global add fume-cli
fume deploy
```
```bash [NPM]
npm install -g fume-cli
fume deploy
```
::
