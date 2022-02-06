---
template: guide
title: Google Cloud Run
description: Nuxt を Google Cloud Run にどうやってデプロイするのか？
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Google_Cloud_run.svg"
  dark: "/img/companies/square/dark/Google_Cloud_run.svg"
---
# Nuxt を Google Cloud Run へデプロイする

Nuxt を Google Cloud Run にどうやってデプロイするのか？

---

[Google Cloud Run](https://cloud.google.com/run) はコンテナ化されたアプリケーションを迅速に安全にデプロイし、スケーリングするためのフルマネージド・コンピュータ・プラットフォームです。

このガイドでは、簡単にプロジェクトのフォルダ全体を Dockerfile で Google Cloud Build にアップロードします。アップロードした後、Cloud Build は自動でコンテナを生成します。そしてコンテナを package.json の `start` スクリプトで起動する、Google Cloud Run にデプロイします。
## はじめに

Google Cloud Account とプロジェクト、そしてエディターとして Cloud Build と Cloud Run にアクセス権があることを確認してください。さらに Google の[こちら](https://cloud.google.com/sdk/)で解説されている Cloud SDK (CLI) をダウンロードしてインストールし、Google Cloud Account でログインしてください。もし Cloud SDK をダウンロードしたくない場合、Google Cloud Console から gcloud CLI を使用することができます。

いくつかチェックをしましょう！

Cloud Build API と Cloud Run API が無効の場合、有効にします：

```bash
# Cloud Build を有効にする
$ gcloud services enable cloudbuild.googleapis.com

# Cloud Run を有効にする
$ gcloud services enable run.googleapis.com
```

Go in your application directory and install dependencies:

```bash
# yarn ユーザー向け
$ yarn

# npm ユーザー向け
$ npm install
```

Start the application locally:

```bash
# yarn ユーザー向け
$ yarn dev

# npm ユーザー向け
$ npm run dev
```

全ての動作を確認します。

## アプリケーションのコンテナ化

それでは、Cloud Build でコンテナを作成します。

Nuxt アプリケーションに `Dockerfile` を追加する必要があります。 プロジェクトのルートディレクトリに `Dockerfile` という名前の新しいファイルを作成し、以下の内容を追加してください：

yarn ユーザー向け：

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn build

CMD [ "yarn", "start" ]
```

npm ユーザー向け：

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN npm install

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN npm run build

CMD [ "npm", "run", "start" ]
```

ビルドプロセスを開始するため、以下のコマンドを実行してください：

`gcloud builds submit --tag gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 .`

!注意: もし継続的デリバリーや .env ファイルでの設定を実装したい場合、[Cloud Build 構成ファイル](https://cloud.google.com/cloud-build/docs/build-config) を使用する必要があります。

## Cloud Run へのアプリケーションのデプロイ

アプリケーションをデプロイするため以下のコマンドを実行してください：

`gcloud run deploy --image=gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --platform managed --port 3000`

パブリックアクセスの設定を行いたい場合、認証されていない起動を許可します。

Cloud Run アプリケーションのデフォルトの同時実行値は 80 であることに注意してください（各コンテナ・インスタンスは、一度に最大 80 のリクエストを処理します）。このようにして同時実行値を指定することができます：

`gcloud run deploy --image=gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --platform managed --port 3000 --concurrency <YOUR_CONCURRENCY_VALUE>`

デプロイメントの作成に成功しているか確認するため、以下のコマンドを実行してください：

`gcloud run services list --platform managed`

Cloud Run サービスのリストが表示されます。デプロイした URL をクリックし、結果をお楽しみください！
