---
title: Server Side Rendering
description: Server-side rendering (SSR), is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser.
position: 3
category: concepts
questions:
  - question: What kinda of server do you need for Server Side Rendering?
    answers:
      - PHP server
      - JavaScript server
      - Node.js server
    correctAnswer: Node.js server
  - question: What do you use to extend and control the server?
    answers:
      - Middleware
      - ServerMiddleware
      - It is not possible to control the server
    correctAnswer: ServerMiddleware
  - question: You can host a server side rendered application on a serverless hosting provider
    answers:
      - true
      - false
    correctAnswer: false
  - question: Do we have access to  document on the server-side?
    answers:
      - yes, it is always available
      - No, The object belongs to the browser and is not available on the server
    correctAnswer: No, The object belongs to the browser and is not available on the server
  - question: When does your page become interactive?
    answers:
      - When the browser receives the rendered HTML from the server
      - When the Vue.js hydration kicks in
      - When a browser sends the initial request
    correctAnswer: When the Vue.js hydration kicks in
  - question: Navigating between pages using <NuxtLink> is done
    answers:
      - Client side
      - Server side
    correctAnswer: Client side
  - question: What are the correct steps?
    answers:
      - browser → server, server → browser, browser → browser
      - server → browser, browser → server, server → server
      - browser → server, server → browser, browser → server
    correctAnswer: browser → server, server → browser, browser → browser
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
