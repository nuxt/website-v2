---
template: guide
title: Hostman
description: Nuxt を Hostman にどうやってデプロイするのか？
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Hostman.svg"
  dark: "/img/companies/square/dark/Hostman.svg"
---
# Nuxt を Hostman へデプロイする

Nuxt を Hostman にどうやってデプロイするのか？

---

[Hostman](https://hostman.com/)は、スタートアップや新規プロジェクト向けのクラウドホスティングプロバイダーです。ほとんどの日常的な DevOps オペレーションを取り除くことができ、開発者にとっては時間の節約、企業にとってはお金の節約になります。Hostman はサービスコンセプトを採用しており、複雑なアーキテクチャの開発を容易にし、ワンクリックでスケールアップすることができます。

Hostman は以下の機能を提供しています：

- 静的 Web サイト、Web アプリケーション、Docker コンテナ、データベースを構築し、デプロイすることができます。
- アプリケーションが動作している実際のハードウェアや実際のロードアベレージを見ることができるため、何か問題が発生してもそれらを評価することができ、すべてが非常に透明性の高いものとなっています。
- Docker コンテナに SSH で入ることができ、抽象化と透明化の完璧なバランスを提供します。
- Hostman は、すべてのドメインに SSL 証明書を自動的に設定し、コンテンツを可能な限り高速に配信するための CDN を設置します。
- Hostman は CI / CD を自動化し、あなたが新しいコミットをリポジトリにプッシュするとすぐにコードを引き出し、ビルドし、起動します。
- ベンダーロックインはありません。
- Hostman は 22 のフレームワークをサポートしています。

## 前提条件

このガイドでは、デプロイする Nuxt プロジェクトがすでにあることを前提としています。プロジェクトが必要な場合は、[create-nuxt-app](https://github.com/nuxt/create-nuxt-app)をご利用ください。

## セットアップ

---

<strong>ステップ 1. サービスの作成</strong>

Nuxt の静的ウェブサイトをデプロイするには、[ダッシュボード](https://dashboard.hostman.com/)の左上にある作成をクリックし、フロントエンドアプリまたは静的ウェブサイトを選択します。

![Hostman dashboard](https://i.imgur.com/bEePHDo.png)

<strong>ステップ 2. デプロイするプロジェクトを選択する</strong>

GitHub、GitLab、または Bitbucket のアカウントで Hostman にログインしている場合は、この時点で、プライベートなものも含めて、プロジェクトの入ったリポジトリが表示されます。

デプロイしたいプロジェクトを選択します。このプロジェクトには、yarn create-nuxt-appコマンドの実行後に自動的に作成されたNuxtアプリのディレクトリが含まれている必要があります。

別のリポジトリにアクセスするには、<strong>Connect another repository</strong>をクリックします。

もし Git アカウントの認証情報を使ってログインしていなければ、今すぐ必要なアカウントにアクセスして、プロジェクトを選択してみましょう。

<strong>ステップ 3. ビルド設定の構成</strong>

次に、Website customization 画面が表示されます。

![Build configuration](https://i.imgur.com/gIgl5EH.png)

フレームワークのリストから、<strong>Static website</strong>オプションを選択します。

<strong>Directory with app</strong>は、ビルド後にプロジェクトのファイルが格納されるディレクトリを指します。Nuxt の場合、ディレクトリは dist です。

標準の<strong>build コマンド</strong>になります：

`yarn build`

フレームワークのコマンド nuxt generate を起動して、プロジェクトのファイルを含む dist ディレクトリを作成します。

プロジェクトのビルドプロセスで必要な場合は、ここでコマンドを変更することができます。複数のコマンドを '&&'で区切って入力することができます。

<strong>ステップ 4. デプロイ</strong>

<strong>Deploy</strong> をクリックして、ビルドプロセスを開始します。

一度起動すると、デプロイログが入力されます。コードに問題があった場合、ログに警告やエラーメッセージが表示され、問題の原因が特定されます。

たいていログには必要なデバッグデータがすべて含まれていますが、問題解決のお手伝いもさせていただきますので、ご遠慮なくチャットでお問い合わせください。

デプロイが完了すると、電子メールで通知が届き、同様のログエントリも表示されます：

![Log entry](https://i.imgur.com/KwzMxTb.png)

<strong>すべて完了！</strong>

あなたのプロジェクトが立ち上がり、準備が整いました。
