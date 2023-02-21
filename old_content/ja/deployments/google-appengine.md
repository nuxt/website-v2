---
template: guide
title: Google App Engine
description: Nuxt を Google App Engine にどうやってデプロイするのか？
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Google_engine_app.svg"
  dark: "/img/companies/square/dark/Google_engine_app.svg"
---
# Nuxt を Google App Engine へデプロイする

Nuxt を Google App Engine にどうやってデプロイするのか？

---

[Google App Engine](https://cloud.google.com/appengine/) へのデプロイは Google のクラウドサービスで一般的な Nuxt アプリケーションをホストするための迅速で簡単な解決策です。

このガイドでは、アプリケーションをローカルに構築し、かつプロジェクトフォルダ全体を Google App Engine に簡単にアップロードするまでを行います。アップロード後、Google App Engine は自動的に package.json の `start` スクリプトを起動し、アプリケーションはすぐに利用可能になります。

## はじめに

Google Cloud アカウントがあるか、プロジェクトと空の Google App Engine を [Google App Engine](https://cloud.google.com/appengine/) にセットアップしているか確認して下さい。さらに[こちら](https://cloud.google.com/sdk/)で説明されているように、Google から Cloud SDK (CLI) をダウンロードしてインストールし、Google Cloud Account でログインして下さい。

## アプリケーションの設定

一般的な Nuxt アプリーションを App Engine へデプロイするために追加する必要があるのは `app.yaml` と呼ばれるファイルだけです。ルートプロジェクトディレクトリにその名前の新しいファイルを作成し、以下の内容を追加してください：

```yaml
runtime: nodejs10

instance_class: F2

handlers:
  - url: /_nuxt
    static_dir: .nuxt/dist/client
    secure: always

  - url: /(.*\.(gif|png|jpg|ico|txt))$
    static_files: static/\1
    upload: static/.*\.(gif|png|jpg|ico|txt)$
    secure: always

  - url: /.*
    script: auto
    secure: always

env_variables:
  HOST: '0.0.0.0'
```

またフレキシブルな環境の場合、最小構成は以下になります：

```yaml
runtime: nodejs
env: flex
```

## アプリケーションのビルドとデプロイ

次にアプリケーションを `npm run build` か `yarn build` でビルドします。

現時点で、アプリケーションは Google App Engine にアップロードされる準備ができています。以下のコマンドを実行してください：

```
gcloud app deploy app.yaml --project [project-id]
```

ほら！今 Nuxt アプリケーションは Google App Engine にホストされています！

## さらなる詳細情報

- app.yaml ファイルの `instance_class` 属性はアプリケーションインスタンスのクラスをセットします。F2 インスタンスは完全に無料ではなく、しかし Nuxt アプリケーションの実行に必要な最小のメモリを備えています。
- package.json の `start` はデプロイ後に実行するコマンドであることを確認してください。もし普段 `start:prod`、もしくは他のコマンドで実行しているなら、アプリケーションは期待していたように働かないでしょう。

deploy コマンドには `project-name` ではなく `project-id` を指定しているか確認してください。これら 2 つは異なるものですが混合しやすいです。
