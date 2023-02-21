---
template: guide
title: Koyeb
description: Nuxt を Docker を使って Koyeb Serverless Platform にデプロイします
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Koyeb.svg"
  dark: "/img/companies/square/dark/Koyeb.svg"
---
# Nuxt を Koyeb Serverless Platform へデプロイする

Nuxt を Docker を使って Koyeb Serverless Platform にデプロイします

---

[Koyeb](https://www.koyeb.com)は、アプリケーションをグローバルに展開するための開発者向けサーバーレスプラットフォームです。このプラットフォームでは、Docker コンテナ、Web アプリケーション、API をシームレスに実行することができ、git ベースのデプロイメント、ネイティブなオートスケーリング、グローバルエッジネットワーク、ビルトインのサービスメッシュとディスカバリーを備えています。

このガイドでは、Koyeb プラットフォーム上で Nuxt アプリケーションを dockerize してデプロイする方法を紹介します。

> Koyeb は、お好みのレジストリから Docker コンテナをデプロイすることができます。このガイドでは Docker Hub を使ってイメージを保存していますが、[GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) や [GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/) など、他のコンテナレジストリプロバイダーを自由に使うことができます。

## 前提条件

このガイドをうまくフォローして完成させるために必要なのは：

1. デプロイする Nuxt プロジェクト。[create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を使って Nuxt プロジェクトを作成し、スタートすることができます。
2. docker 化された Nuxt アプリケーションをデプロイして実行するための [Koyebアカウント](https://app.koyeb.com)
3. Docker イメージをプッシュして Koyeb にデプロイするための [Docker Hub](https://hub.docker.com/) アカウント

## はじめに

Nuxt アプリケーションのディレクトリで以下のコマンドを実行し、依存関係をインストールします：

```bash
yarn
```

依存関係のインストールが完了したら、アプリケーションを起動し、すべてが正常に動作していることを確認します：

```bash
yarn dev
```

## Docker 化されたアプリケーション

Nuxt アプリケーションを Docker 化するには、プロジェクトディレクトリに以下の内容の `Dockerfile` を作成する必要があります：

```dockerfile
FROM node:lts as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]
```

以下のコマンドを実行して、Docker イメージを構築します：

```bash
docker build . -t <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

このコマンドを実行すると、<YOUR_DOCKER_HUB>/my-nuxt-project という名前の Docker イメージがビルドされます。ビルドが終わったら、そのイメージを使ったコンテナをローカルで実行して、すべてが期待通りに動いていることを確認できます。

```bash
docker run -p 3000:3000 <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

ブラウザを開き、http://localhost:3000 に移動して、プロジェクトのランディングページを表示します。

## Docker イメージをコンテナレジストリにプッシュする

テストで Docker イメージがビルドされて機能しているので、今度はコンテナレジストリにアップロードしてみましょう。このドキュメントでは、Docker Hub にイメージを保存することにします。ターミナルで以下のコマンドを実行し、image をプッシュします：

```bash
docker push <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

## Koyeb 上で Nuxt アプリケーションを本番環境にデプロイする

Koyeb Control Panel で、**Create App** ボタンをクリックします。

フォームの `Docker image` フィールドには、先ほど作成した image の名前を入力します。 このイメージは `<YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project`のようになります。

`Use a private registry` にチェックを入れて、選択欄で **Create Registry Secret** をクリックします。

以下を求めるモーダルな画面が開きます：

- 作成されるシークレットの名前で、例えば `docker-hub-secret` とすることができます。
- レジストリプロバイダが、プライベートレジストリの認証情報を含む秘密を生成するために、ここでは Docker Hub を使用します。
- Docker Hub の場合はユーザー名とパスワードを入力します。パスワードの代わりに Docker Hub から[アクセストークンの生成](https://hub.docker.com/settings/security)を行うことを推奨します。
  すべてのフィールドに入力したら、**Create** ボタンをクリックします。

_Path_ を変更する必要はありません。私たちのアプリケーションは、ドメインのルート `/` を利用できます。

アプリの名前を `nuxt-app` とし、**Create App** をクリックします。

_また、アプリケーションを配置するリージョンを増やしたり、環境変数を設定したり、必要に応じて水平方向のスケーリングを定義することができます。_

自動的に Koyeb App のページに移動しますので、Nuxt アプリケーションのデプロイメントの進捗状況を確認することができます。数秒後にアプリがデプロイされたら、`koyeb.app` で終わる _Public URL_ をクリックしてください。

お客様の Nuxt アプリケーションは Koyeb 上で実行され、ネイティブオートスケーリング、自動 HTTPS（SSL）、オートヒーリング、およびエッジネットワークを介したグローバルロードバランシングの恩恵を受けます。
