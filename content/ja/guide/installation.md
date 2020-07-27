---
title: インストール
description: Nuxt.js はとても簡単に始められます。シンプルなプロジェクトでは必要な依存パッケージは `nuxt` だけです。
category: getting-started
position: 101
---

> Nuxt.js はとても簡単に始められます。シンプルなプロジェクトでは必要な依存パッケージは `nuxt` だけです。

<div>
  <a href="https://vueschool.io/courses/nuxtjs-fundamentals/?friend=nuxt" target="_blank" class="Promote">
    <img src="/nuxt-fundamentals.png" srcset="/nuxt-fundamentals-2x.png 2x" alt="Nuxt Fundamentals by vueschool"/>
    <div class="Promote__Content">
      <h4 class="Promote__Content__Title">Nuxt.js の基礎</h4>
      <p class="Promote__Content__Description">ビデオで Nuxt.js をすぐに使い始める方法を学ぶ。</p>
      <p class="Promote__Content__Signature">Nuxt.js の開発をサポートするために、VueSchool がビデオコースを作りました。</p>
    </div>
  </a>
</div>

## `create-nuxt-app` を使用する

素早くスタートできるようにするため、Nuxt.js チームは足場ツール [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を作成しました。

[npx](https://www.npmjs.com/package/npx) がインストールされていることを確認してください。（`npx` は NPM `5.2.0` からデフォルトでバンドルされています）

```bash
$ npx create-nuxt-app <project-name>
```

もしくは [yarn](https://yarnpkg.com/ja/) を使ってください:

```bash
$ yarn create nuxt-app <project-name>
```

いくつか質問されます:

1. サーバーサイドのフレームワークを選択します:

- None (Nuxt default server)
- [Express](https://github.com/expressjs/express)
- [Koa](https://github.com/koajs/koa)
- [Hapi](https://github.com/hapijs/hapi)
- [Feathers](https://github.com/feathersjs/feathers)
- [Micro](https://github.com/zeit/micro)
- [Fastify](https://github.com/fastify/fastify)
- [Adonis](https://github.com/adonisjs/adonis-framework) (WIP)

2. 好きな UI フレームワークを選択します:

- None（後からでも追加できます）
- [Bootstrap](https://github.com/bootstrap-vue/bootstrap-vue)
- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [Bulma](https://github.com/jgthms/bulma)
- [Tailwind](https://github.com/tailwindcss/tailwindcss)
- [Element UI](https://github.com/ElemeFE/element)
- [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
- [Buefy](https://github.com/buefy/buefy)
- [iView](https://github.com/iview/iview)
- [Tachyons](https://github.com/tachyons-css/tachyons)
- [Vuesax](https://github.com/lusaxweb/vuesax)

3. 好きなテスティングフレームワークを選択します:

- None (後からでも追加できます）
- [Jest](https://github.com/facebook/jest)
- [AVA](https://github.com/avajs/ava)

4. [Nuxt のモードを選択します。(`Universal` または `SPA`)](https://ja.nuxtjs.org/guide#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3-spa-)
5. HTTP リクエストを簡単に行うために [axios module](https://github.com/nuxt-community/axios-module) を追加します。
6. 保存時にコードをチェックするために [EsLint](https://eslint.org/) を追加します。
7. 保存時にコードを整形するために [Prettier](https://prettier.io/) を追加します。

回答が終わり次第、全ての依存関係がインストールされ、プロジェクトを開始する次のステップへ進めます:

```bash
$ npm run dev
```

するとアプリケーションは http://localhost:3000 で動いています。

<div class="Alert">

Nuxt.js は `pages` ディレクトリ内のファイルの更新を監視します。そのため、新しいページを追加したときにアプリケーションを再起動する必要はありません。

</div>

プロジェクトのディレクトリ構造についてより深く理解するには [ディレクトリ構造のドキュメント](/guide/directory-structure) を参照してください。

## スクラッチから始める

Nuxt.js プロジェクトをスクラッチから作ることも簡単で、必要なのは _1 つのファイルと 1 つのディレクトリ_ だけです。まずは空のディレクトリを作りましょう:

```bash
$ mkdir <project-name>
$ cd <project-name>
```

<div class="Alert Alert--nuxt-green">

<b>情報:</b> `<project-name>` の箇所はプロジェクト名に置き換えてください。

</div>

### package.json

それぞれのプロジェクトには、 `nuxt` を起動するために `package.json` ファイルが必要です。下記の json を package.json にコピーをして、 npm install を実行する前に保存してください:

```json
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt"
  }
}
```

上のように書いておけば `npm run dev` で Nuxt.js を起動できます。

### `nuxt` のインストール

`package.json` を作成したら `nuxt` を npm でプロジェクトに追加しましょう:

```bash
$ npm install --save nuxt
```

### `pages` ディレクトリ

Nuxt.js は `pages` ディレクトリ内の `*.vue` ファイルについて、各ファイルがアプリケーションのひとつのルートに対応するものとして変換します。

`pages` ディレクトリを作ります:

```bash
$ mkdir pages
```

それから最初のページを `pages/index.vue` に作ります:

```html
<template>
  <h1>Hello world!</h1>
</template>
```

そして、プロジェクトを起動します:

```bash
$ npm run dev
```

すると、アプリケーションは http://localhost:3000 で動いています。

<div class="Alert">

Nuxt.js は `pages` ディレクトリ内のファイルの更新を監視します。そのため新しいページを追加した場合にアプリケーションを再起動する必要はありません。

</div>

プロジェクトのディレクトリ構造についてより深く理解するには [ディレクトリ構造のドキュメント](/guide/directory-structure) を参照してください。
