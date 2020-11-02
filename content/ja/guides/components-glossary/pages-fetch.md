---
title: 'fetch メソッド'
description: '`fetch` メソッドは、ページがレンダリングされる前に、データをストアに入れるために使われます。コンポーネントのデータをセットしないという点を除いては `asyncData`メソッドとよく似ています。'
menu: fetch メソッド
category: components-glossary
position: 0
---

## Nuxt >= 2.12

Nuxt.js `v2.12` から、**すべての Vue コンポーネントに対して** `fetch` という新しいフックが導入されています。

<base-alert>

`fetch(context)` メソッドは非推奨となりましたが、代わりに[無名ミドルウェア](/docs/2.x/components-glossary/pages-middleware#無名ミドルウェア)をページコンポーネント内の `middleware(context)` で使うことできます。

</base-alert>

### fetch を使うタイミングは？

データを **非同期で** 取得するニーズが発生したときにはいつでも使って構いません。`fetch` メソッドはサーバーサイドではルートをレンダリングするときに呼び出され、クライアントサイドでは遷移するときに呼び出されます。

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

<div class="Alert Alert--green">

`fetchOnServer` がファルシー（`false` または `false` を返す）な場合、`fetch` はクライアントサイドでのみ呼び出され、サーバーでコンポーネントをレンダリングする際には `$fetchState.pending` は `true` を返します。

</div>

```html
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await this.$http.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
    },
    fetchOnServer: false
  }
</script>
```
