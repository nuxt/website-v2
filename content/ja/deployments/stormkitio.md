---
template: guide
title: Stormkit.io
description: Nuxt を Stormkit.io にどうやってデプロイするのか？
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Stormkit.svg"
  dark: "/img/companies/square/dark/Stormkit.svg"
---
# Deploy with Stormkit

How to deploy Nuxt with Stormkit.io?

---

[Stormkit.io](https://www.stormkit.io) を使って、Nuxt アプリケーションを簡単に構築、デプロイ、スケーリングすることができます。インスタントロールバック、サーバーレスサイドロジック、スニペットインジェクション、複数の開発環境など...をサポートしています。

## 前提条件

このガイドでは、デプロイする Nuxt プロジェクトがすでにあることを前提としています。プロジェクトが必要な場合は、[create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を使用して開始するか、Stormkitの[Nuxt Example](https://github.com/stormkit-dev/hackernews-nuxt)をフォークしてから続行してください。

## セットアップ

1. [app.stormkit.io](https://app.stormkit.io)にアクセスし、git プロバイダを選択してログインします。
2. ログインすると、コードベースがどのプロバイダーに置かれているかをストームキットが尋ねてきます。もう一度プロバイダをクリックします。
3. GitHub の場合、'Connect more repositories' をクリックし、Stormkit のアクセスを許可します。
4. 次に、リポジトリを選択します。これで Stormkit 上にアプリケーションが作成されます。
5. アプリケーションのページで、**本番**環境を見つけて、それをクリックします。
6. 編集をクリックして、アプリケーションを設定します。この画面では、ビルドコマンドと環境変数を指定します。
   環境変数の設定を行いますが、この画面では

## 静的サイト

静的なウェブサイトでは何もする必要はありません。`nuxt generate` で構築されたアプリケーションは、すぐに処理されます。

## シングルページアプリケーション

シングルページアプリケーションの場合は、すべてのリクエストを `index.html` にリダイレクトする `stormkit.config.yml` を用意するだけでよいでしょう。
すべてのリクエストを `index.html` にリダイレクトします。そのためには、プロジェクトのトップレベルに `stormkit.config.yml` ファイルを作成し、以下のルールを指定します：

```
app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
```

## ハイブリッドアプリケーション

ハイブリッドアプリケーションの場合は、ビルド設定ページで `Serverless` のトグルをオンにする必要があります。これにより、Stormkit は CDN ではなく lamdas からリクエストを処理するようになります。ハイブリッドサーバーレスアプリケーションの設定については、[こちらのガイド](https://www.stormkit.io/docs/deployments/configuration/nuxt#hybrid)で詳しく説明しています。

## Stormkit を使ったホスティング

Stormkit は、各デプロイメントに固有の URL を生成します。これらのリンクを使用して、アプリケーションをプレビューすることができます。その後、ドメインに接続して任意のデプロイメントを公開すると、ユーザーにそのバージョンのアプリケーションが表示されるようになります。また、複数のバージョンを同時に公開することで、段階的なロールアウトやA/Bテストを行うことができます。

## サポート

さらにサポートが必要な場合は、[Discord](https://discord.gg/6yQWhyY)で Stormkit の開発者や他のコミュニティメンバーとチャットすることができます。
