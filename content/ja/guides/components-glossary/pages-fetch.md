---
title: 'fetch フック'
description: '`fetch` メソッドは、非同期でデータを取得するためのものです。サーバーサイドではルートをレンダリングするときに、クライアントサイドでは遷移するときに呼び出されます。'
menu: fetch メソッド
category: components-glossary
position: 0
---

## Nuxt >= 2.12

Nuxt.js `v2.12` から、**すべての Vue コンポーネントに対して** `fetch` という新しいフックが導入されています。**非同期**データを取得する必要があるたびに fetch を使います。`fetch` はサーバーサイドではルートをレンダリングするときに、クライアントサイドでは遷移するときに呼び出されます。

コンポーネントレベルで `$fetchState` を公開します:

- `$fetchState.pending`: `Boolean`。`fetch` が _クライアントサイドで_ 呼び出されているときにプレースホルダーを表示する用途などで使うことができます。
- `$fetchState.error`: `null` または `Error`。エラーメッセージを表示する用途で使うことができます。
- `$fetchState.timestamp`: `Integer`。最後に fetch したタイムスタンプです。`keep-alive` を用いたキャッシングに便利です。

テンプレートから `fetch` フックを呼び出すには、下記のように `$fetch()` を使います:

```html
<button @click="$fetch">Refresh</button>
```

コンポーネントメソッドでは下記のとおりです:

```javascript
// スクリプトセクションのコンポーネントメソッドより
export default {
  methods: {
    refresh() {
      this.$fetch()
    }
  }
}
```

fetch フック内では `this.$nuxt.context` を使用して、Nuxt [context](/docs/2.x/internals-glossary/context) にアクセスできます。

### オプション

- `fetchOnServer`: `Boolean` または `Function`（デフォルト: `true`）。サーバーがページをレンダリングする際に `fetch()` を呼び出します。
- `fetchDelay`: `Integer`（デフォルト: `200`）。最小実行時間をミリ秒単位で設定します（過剰実行を防ぐため）。

`fetchOnServer` がファルシー（`false` または `false` を返す）な場合、`fetch` はクライアントサイドでのみ呼び出され、サーバーでコンポーネントをレンダリングする際には `$fetchState.pending` は `true` を返します。

```html
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
    },
    fetchOnServer: false
  }
</script>
```

<base-alert type="next">

fetch フックチェックアウトの詳細については[データの取得](/docs/2.x/features/data-fetching)のドキュメントを参照してください

</base-alert>
