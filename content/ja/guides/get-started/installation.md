---
title: インストール
description: "ここでは、Nuxt.js プロジェクトの設定と実行について 4 ステップで紹介します。"
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## 前提条件

ここでは、Nuxt.js プロジェクトの設定と実行について 4 ステップで紹介します。

<base-alert type="info">

Nuxt.js を始める別の方法は [CodeSandbox](https://template.nuxtjs.org) を使うことです。CodeSandbox は Nuxt.js を素早く試したり、自分のコードを他の人にシェアしたりするのに最適な方法です。

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - v8.9.0 以上を使ってください。

_最新のバージョンをインストールすることをおすすめします。_

### テキストエディタ

お好みのエディタで構いませんが、[VSCode](https://code.visualstudio.com/) をおすすめします。

### ターミナル

お好みのターミナルで構いませんが、VSCode に[統合されたターミナル](https://code.visualstudio.com/docs/editor/integrated-terminal)をおすすめします。

## スクラッチで始める

1 つのファイルと 1 つのディレクトリを用意するだけで Nuxt.js プロジェクトをスクラッチで作れます。

今回の例では、ターミナルを使ってディレクトリとファイルを作成しますが、お好みのエディタで作成して構いません。

### プロジェクトのセットアップ

始めるにはプロジェクトの名前をつけた空のディレクトリを作成し、作成したディレクトリに移動します:

```bash
mkdir <project-name>
cd <project-name>
```

_`<project-name>` はご自身のプロジェクト名に置き換えてください。_

そして、`package.json` という名前のファイルを作成します:

```bash
touch package.json
```

package.json ファイルをお好みのエディタで開き、以下の JSON の内容を入力します:

```json{}[package.json]
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```

`scripts` に `npm run <command>` コマンドで起動される Nuxt.js コマンドを定義します。

#### **package.json ファイルとは？**

`package.json` はプロジェクトにおける ID カードのようなものです。もし `package.json` ファイルがどんなものかご存知ない場合は [NPM のドキュメント](https://docs.npmjs.com/creating-a-package-json-file)を一読することをおすすめします。

### nuxt のインストール

`package.json` を作成後、以下のように `npm` または `yarn` 経由で `nuxt` を追加します:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt
```

  </code-block>
</code-group>

このコマンドは `nuxt` を依存関係としてプロジェクトに追加します。`package.json` にも自動的に追加します。また、`node_modules` ディレクトリが作成され、インストールしたパッケージと依存関係が保存されます。

<base-alert type="info">

`yarn.lock` または `package-lock.json` も作成され、プロジェクトにインストールされたパッケージの一貫したインストールと互換性のある依存関係を保証します。

</base-alert>

### 最初のページを作成

Nuxt.js は `pages` ディレクトリ内にある全ての `*.vue` ファイルをアプリケーションのルートとして変換します。

プロジェクトに `pages` ディレクトリを作成します:

```bash
mkdir pages
```

そして、`pages` ディレクトリ内に `index.vue` ファイルを作成します:

```bash
touch pages/index.vue
```

このページを `index.vue` と名づけることが重要です。これはアプリケーションが開いた際に Nuxt がデフォルトで表示するページになります。これがホームページであり、index と名づけなればなりません。

`index.vue` ファイルをエディタで開き、次の内容を追加します:

```html{}[pages/index.vue]
<template>
  <h1>Hello world!</h1>
</template>
```

### プロジェクトの開始

ターミナルで以下のコマンドのどちらかを入力してプロジェクトを実行します:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
npm run dev
```

  </code-block>
</code-group>

<base-alert type="info">

アプリケーションを開発モードで起動する場合は、dev コマンドを使用します。

</base-alert>

今、アプリケーションは **[http://localhost:3000](http://localhost:3000/)** で実行されています。

ターミナルのリンクをクリックしてブラウザを開くと、前のステップでコピーした「Hello World」のテキストが表示されます。

<base-alert type="info">

Nuxt.js を開発モードで起動すると、ほとんどのディレクトリでファイルの変更をリッスンするので、新しいページを追加する際などにアプリケーションを再起動する必要はありません。

</base-alert>

<base-alert type="warning">

dev コマンドを実行すると、.nuxt フォルダが作成されます。このフォルダはバージョン管理の ignore 対象にしてください。ルートレベルで .gitignore ファイルを作成し、.nuxt を追加することで .nuxt フォルダ内にあるファイルを無視することができます。

</base-alert>

### ボーナスステップ

`pages` ディレクトリに `fun.vue` という名前のページを作成しましょう。

`<template></template>` を追加し、タグ内におもしろい文章を入れた見出しを入れます。

そして、ブラウザで新しいページ **[http://localhost:3000/fun](http://localhost:3000/fun)** にアクセスします。

<base-alert type="info">

`more-fun` という名前のディレクトリを作成し、その中に `index.vue` ファイルを入れます。これで、`more-fun.vue` ファイルを作成したのと同じ結果が得られます。

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## create-nuxt-app を使う

すぐ始めるには、[create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を使うことができます。

npx（npx は NPM 5.2.0 以降だとデフォルトで同梱されています）か、v6.1 の npm か yarn がインストールされていることを確認してください。

<code-group>
  <code-block label="Yarn" active>

```bash
yarn create nuxt-app <project-name>
```

  </code-block>
  <code-block label="NPX">

```bash
npx create-nuxt-app <project-name>
```

  </code-block>
    <code-block label="NPM">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

いくつかの質問（名前、Nuxt オプション、UI フレームワーク、TypeScript、linter、テストフレームワークなど）に答えると、すべての依存関係をインストールします。次のステップは、プロジェクトフォルダに移動して起動します:

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

アプリケーションは [http://localhost:3000](http://localhost:3000) で実行されています。おつかれさまでした！
