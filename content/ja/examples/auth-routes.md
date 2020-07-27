---
title: 認証ルート
description: Nuxt.js を使った認証ルートの例
github: auth-routes
livedemo: https://nuxt-auth-routes.gomix.me
liveedit: https://gomix.com/#!/project/nuxt-auth-routes
category: advanced
position: 302
---

# ドキュメント

> Nuxt.js を使うと認証が必要なルートを簡単に作成できます。

## 公式の `auth-module`

OAuth2 などの複雑な認証フローを実装したい場合は、公式の `auth-module` を使用することをお勧めします。

## express とセッションを使う

アプリケーションにセッション機能を追加するために `express` と `express-session` を使います。そのために Nuxt.js をプログラムで使う必要があります。

まず依存パッケージをインストールします:

```bash
yarn add express express-session body-parser whatwg-fetch
```

_`whatwg-fetch` については後ほど述べます。_

それから `server.js` ファイルを作成します:

```js
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

// `req.body` へアクセスするための Body parser
app.use(bodyParser.json())

// `req.session` を作るためのセッション
app.use(
  session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })
)

// POST `/api/login` でログイン、`req.session.authUser` に追加
app.post('/api/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// POST `/api/logout` でログアウト、`req.session` から削除
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

// オプションと併せて Nuxt.js をインスタンス化
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')
```

また `package.json` scripts を更新します:

```json
// ...
"scripts": {
  "dev": "node server.js",
  "build": "nuxt build",
  "start": "cross-env NODE_ENV=production node server.js"
}
// ...
```

情報: 上の例を動かすためには `npm install --save-dev cross-env` を実行する必要があります。もし Windows で開発しているの _でない_ ならば、`start` スクリプトから cross-env を削除して、直接 `NODE_ENV` をセットすることもできます。

## ストアを使う

アプリケーションが、ユーザーが認証されているか否かを **ページをまたいで** 知るためには、グローバルなステート（状態）が必要です。

Nuxt.js が Vuex を使うよう `store/index.js` ファイルを作成します:

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// `window.fetch()` 用のポリフィル
require('whatwg-fetch')

const store = () =>
  new Vuex.Store({
    state: () => ({
      authUser: null
    }),

    mutations: {
      SET_USER(state, user) {
        state.authUser = user
      }
    },

    actions: {
      // ...
    }
  })

export default store
```

1. `Vue` と `Vuex`（Nuxt.js に含まれる）をインポートし、コンポーネントで `$store` を使うために Vuex を使うことを Vue に伝えます。
2. すべてのブラウザで `fetch()` メソッドをポリフィルするために、`require('whatwg-fetch')` が必要です（[fetch リポジトリ](https://github.com/github/fetch)を参照してください）。
3. 接続したユーザーに `state.authUser` を設定する `SET_USER` ミューテーションを作成します。
4. メインアプリケーションにインジェクションできるように、ストアインスタンスを Nuxt.js にエクスポートします。

### nuxtServerInit() アクション

Nuxt.js は `nuxtServerInit` と呼ばれる特定のアクションを、引数でコンテキストを渡して呼び出します。したがって、アプリケーションがロードされたとき、サーバーから取得できるデータがストアに既には入れられています。

`store/index.js` 内に `nuxtServerInit` アクションを追加できます:

```js
nuxtServerInit ({ commit }, { req }) {
  if (req.session && req.session.authUser) {
    commit('SET_USER', req.session.authUser)
  }
}
```

data メソッドを非同期にするために、Nuxt.js はいくつか異なる方法を用意しています。よく知っている方法を選んでください：

1. `Promise` を返却する。Nuxt.js はコンポーネントをレンダリングする前に、プロミスが解決されるのを待ちます。
2. [`async`/`await` プロポーサル](https://github.com/lukehoban/ecmascript-asyncawait) を使う。（[詳しくはこちらを参照してください](https://zeit.co/blog/async-and-await)）。

### login() アクション

`login` アクションを追加できます。このアクションはログインするためにページコンポーネントから呼び出されます:

```js
login ({ commit }, { username, password }) {
  return fetch('/api/login', {
    // クライアントのクッキーをサーバーに送信
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then((res) => {
    if (res.status === 401) {
      throw new Error('Bad credentials')
    } else {
      return res.json()
    }
  })
  .then((authUser) => {
    commit('SET_USER', authUser)
  })
}
```

### logout() メソッド

```js
logout ({ commit }) {
  return fetch('/api/logout', {
    // クライアントのクッキーをサーバーに送信
    credentials: 'same-origin',
    method: 'POST'
  })
  .then(() => {
    commit('SET_USER', null)
  })
}
```

## ページコンポーネント

ユーザーがアプリケーションで認証されているか否かをチェックするために、ページコンポーネント内で `$store.state.authUser` を使うことができます。

### ユーザーが認証されていないときはリダイレクトする

認証されたユーザーのみがコンテンツを閲覧できる `/secret` ルートを追加してみましょう:

```html
<template>
  <div>
    <h1>Super secret page</h1>
    <router-link to="/">Back to the home page</router-link>
  </div>
</template>

<script>
  export default {
    // データをこのコンポーネントにセットする必要がないため fetch() を使う
    fetch({ store, redirect }) {
      if (!store.state.authUser) {
        return redirect('/')
      }
    }
  }
</script>
```

ユーザーが認証されていなかったときは `fetch` メソッド内で `redirect('/')` が呼び出されます。
