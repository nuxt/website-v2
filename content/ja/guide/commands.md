---
title: コマンド
description: Nuxt.js は便利コマンドのセットを備えています。開発時に役立つものも、プロダクション用途のものもあります。
category: getting-started
position: 113
---

> Nuxt.js は便利コマンドのセットを備えています。開発時に役立つものも、プロダクション用途のものもあります。

## コマンド一覧

| コマンド | 説明 |
| --- | --- |
| nuxt | 開発サーバーを [localhost:3000](http://localhost:3000) で起動します。このサーバーはホットリローディングします |
| nuxt build | アプリケーションを Webpack でビルドし、JS と CSS をプロダクション向けにミニファイします |
| nuxt start | プロダクションモードでサーバーを起動します（`nuxt build` 後に実行してください） |
| nuxt generate | アプリケーションをビルドして、ルートごとに HTML ファイルを生成します（静的ファイルのホスティングに用います） |

#### 引数

各コマンドに対して `--help` を使うと詳細な使用方法を入手できます。共通の引数は下記の通りです:

- **`--config-file` または `-c`:** `nuxt.config.js` ファイルへのパスを明記します。
- **`--spa` または `-s`:** サーバサイドレンダリングモードを不可にし、 SPA モードでコマンドを実行します。
- **`--unix-socket` または `-n`:** UNIX ソケットへのパスを明記します。

#### フック

| フック | 目的 |
| --- | --- |
| `cli:buildError` | 開発モードでビルドエラーをキャプチャし、読み込み画面に表示します。 |

#### package.json で使用する

これらのコマンドを `package.json` に書いておくと良いでしょう:

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate"
}
```

そうすれば、`npm run <command>` 経由で Nuxt.js のコマンドを実行することができます（例: `npm run dev`）

<div class="Alert Alert--nuxt-green">

<b>上級者用の Tips:</b> npm コマンドへ引数を渡すためには <code>--</code> スクリプト名を付ける必要があります（例: <code>npm run dev -- --spa</code>）

</div>

## 開発環境

ホットリローディング有りの開発モードで Nuxt を起動するには:

```bash
nuxt
// または
npm run dev
```

## プロダクションのデプロイ

Nuxt.js では 3 つのモードからアプリケーションのデプロイを選択できます。 SSR 、SPA 、そして静的生成です。

### サーバーサイドレンダリングモードのデプロイ（ユニバーサル SSR）

デプロイするために、nuxt コマンドを実行するのではなく、前もってビルドしておきたいと思われるでしょう。そのような理由から、ビルドコマンドとサーバー起動のコマンドは分かれています:

```bash
nuxt build
nuxt start
```

Nuxt.js を HTTPS モードで提供することを選択した場合、 [`https.createServer`](https://nodejs.org/api/https.html) に渡されるオプションと同じオプションを使って `nuxt.config.js` に `server.https`を設定することもできます。 `nuxt.config.js`に `server.socket` オプションを設定（または [CLI](https://ja.nuxtjs.org/guide/commands/#%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E4%B8%80%E8%A6%A7) の `-n` 引数を使用）すると、 Unix ソケットも利用できます。 [Unix ソケット](https://en.wikipedia.org/wiki/Berkeley_sockets)を利用する場合は、 `host` パラメータと `port` パラメータを設定しないでください。設定した場合、 `socket` パラメータは無視されます。

`package.json` では下記のように記述することが推奨されています:

```json
{
  "name": "my-app",
  "dependencies": {
    "nuxt": "latest"
  },
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start"
  }
}
```

メモ: `.npmignore` または `.gitignore` 内に `.nuxt` を書いておくと良いでしょう。

### 静的に生成されたファイルのデプロイ

Nuxt.js を使用すると、どの静的ホスティングサービスでもウェブアプリケーションをホストすることができます。

アプリケーションから静的ファイルを生成するには:

```bash
npm run generate
```

静的なホスティングサイトにデプロイする準備が整ったものが全て入った `dist` フォルダが作成されます。

ページエラーが発生した際に 0 以外のステータスコードを返し、CI/CD によるデプロイまたはビルドを失敗させるには、 `--fail-on-error` 引数を使用することができます。

```bash
npm run generate --fail-on-error

// または

yarn generate --fail-on-error
```

プロジェクトで [動的なルーティング](/guide/routing#dynamic-routes) を使っている場合は、Nuxt.js に動的なルーティングを生成させるために [generate 設定](/api/configuration-generate) に目を通してください。

<div class="Alert">

`nuxt generate` でウェブアプリケーションを生成するときは、[asyncData](/guide/async-data) に渡される [context](/api/context) と [fetch](/guide/vuex-store#the-fetch-method) は `req` 及び `res` を持たなくなります。

</div>

### シングルページアプリケーションデプロイ（SPA）

`nuxt generate` は、すべてのページをプレレンダリングし、高い SEO とページロードスコアを持つという利点を持つ一方で、ビルド/生成時には SSR エンジンを必要とします。 コンテンツは*ビルド時*に生成されます。 たとえば、コンテンツが（少なくとも初回ロード時）ユーザ認証またはリアルタイム API に依存するようなアプリケーションでは使用できません。

SPA のアイデアは簡単です！ `mode: 'spa'` または `--spa` フラグを使用して SPA モードを有効にし、ビルドを実行すると、ビルド後に自動的に生成が開始されます。 この生成には、共通のメタとリソースリンクが含まれますが、ページコンテンツは含まれません。

したがって、SPA のデプロイでは、以下の手順を行う必要があります:

- `nuxt.config.js` 内の `mode` を `spa` に変更する
- `npm run build` を実行する
- 生成された `dist/` フォルダを、surge、GitHub Pages、あるいは nginx のような静的ファイルのホスティングサービスにデプロイする

他に取り得る方法としては、`spa` モードの間、 Nuxt をフレームワークのミドルウェアとして使用することができます。 これによりサーバの負荷を軽減し、SSR が不可能なプロジェクトで Nuxt を使用することができます。

<div class="Alert">

私たちの [FAQ](/faq) を読んで、ポピュラーなホストへデプロイするための気の利いた例を見つけてください。

</div>
