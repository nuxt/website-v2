---
title: サーバーサイドレンダリング
description: サーバーサイドレンダリング(SSR)はウェブページのレンダリングをブラウザの代わりにサーバー上で行う，画面の表示において有用なアプリケーションの機能です。
position: 3
category: concepts
questions:
  - question: サーバーサイドレンダリングを行うために必要なサーバーは？
    answers:
      - PHP サーバー
      - JavaScript サーバー
      - Node.js サーバー
    correctAnswer: Node.js サーバー
  - question: サーバーを拡張し制御するために使うのは？
    answers:
      - Middleware
      - ServerMiddleware
      - サーバーを制御することはできません
    correctAnswer: ServerMiddleware
  - question: サーバーレスホスティングプロバイダー上でサーバーサイドレンダリングされたアプリをホスティングすることは可能です
    answers:
      - true
      - false
    correctAnswer: false
  - question: サーバーサイドのドキュメントにアクセスすることは？
    answers:
      - 常に可能です
      - ブラウザーに帰属するオブジェクトにのみ可能でありサーバー側のオブジェクトにはできません
    correctAnswer: ブラウザーに帰属するオブジェクトにのみ可能でありサーバー側のオブジェクトにはできません
  - question: ページがインタラクティブになるのは？
    answers:
      - サーバーからレンダリングされた HTML を受け取った時
      - Vue.js のハイドレーションが効き始めた時
      - ブラウザーが最初のリクエストを送った時
    correctAnswer: Vue.js のハイドレーションが効き始めた時
  - question: <NuxtLink> を用いたページ遷移が行われるのは？
    answers:
      - クライアント側
      - サーバー側
    correctAnswer: クライアント側
  - question: 正しいステップは？
    answers:
      - ブラウザー → サーバー, サーバー → ブラウザー, ブラウザー → ブラウザー
      - サーバー → ブラウザー, ブラウザー → サーバー, サーバー → サーバー
      - ブラウザー → サーバー, サーバー → ブラウザー, ブラウザー → サーバー
    correctAnswer: ブラウザー → サーバー, サーバー → ブラウザー, ブラウザー → ブラウザー
---

サーバーサイドレンダリング(SSR)はウェブページのレンダリングをブラウザの代わりにサーバー上で行う，画面の表示において有用なアプリケーションの機能です。

サーバーサイドは完全にレンダリングされたページをクライアントに送信します。クライアントの JavaScript バンドルが引継ぎ Vue.js のアプリが [ハイドレーション](https://ssr.vuejs.org/guide/hydration.html) できるようにします。

## Node.js サーバー環境必須

ウェブページをレンダリングするためには JavaScript の環境が必要です。

Vue.js のアプリケーションを実行するには Node.js サーバーの環境構築が必要です。

## サーバーの拡張と制御

serverMiddleware でサーバーを拡張しルートを middleware で制御することができます。

```js{}[middleware/api/logger.js]
export default function (req, res, next) {
  console.log(req.url)
  next()
}
```

```js{}[nuxt.config.js]
export default {
  serverMiddleware: ['~/middleware/api/logger']
}
```

サーバーのミドルウェアが関数のリストで構成されている場合，パスを割り当てます:

## サーバー環境とブラウザー環境

Node.js の環境を利用するため `req` や `res` といった Node.js のオブジェクトにアクセス可能です。また `window` や `document` といったブラウザー環境のオブジェクトは利用できません。ただし `beforeMount` や `mounted` などのフックでは`window` や `document` は使えます。

```js
beforeMount{
  window.alert('hello');
}
mounted{
  window.alert('hello');
}
```

## Nuxt.js でのサーバーサイドレンダリングのステップ

### ステップ 1: ブラウザーからサーバーへ

ブラウザーが最初のリクエストを送ると Node.js の内部サーバーへ到達します。Nuxt.js は HTML を生成し `asyncData`, `nuxtServerInit`, `fetch` といった関数を実行した結果と共にブラウザーへ送り返します。フック関数も同様に実行されます。

### ステップ 2: サーバーからブラウザーへ

サーバーによって生成された HTML と共にレンダリングされたページをブラウザーが受け取ります。その内容が表示され Vue.js の hydration が作用し始めます。この工程の後，ページがインタラクティブになります。

### ステップ 3: ブラウザーからブラウザーへ

[`<NuxtLink>`](/docs/2.x/features/nuxt-components#the-nuxtlink-component) によるページ間の遷移はクライアント側で行われるためブラウザーをハード再読み込みをしない限りサーバーへリクエストを送りません。

<quiz :questions="questions"></quiz>
