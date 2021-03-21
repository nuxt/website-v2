---
title: メタタグと SEO
description: Nuxt.js では、nuxt.config.js 内の head プロパティを利用することで、アプリケーションにおけるデフォルトの `<meta>` タグをすべて定義することができます。SEO のためのデフォルトの title と description タグの追加や、ビューポートのセット、ファビコンの追加が簡単にできます。
position: 6
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/06_meta_tags_seo?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Where do you set the title and meta descriptions globally?
    answers:
      - in the page component
      - in the nuxt.config.js
      - in the package.json
    correctAnswer: in the nuxt.config.js
  - question: Where do you set the title and meta descriptions locally?
    answers:
      - in the page component
      - in the nuxt.config.js
      - in the seo component
    correctAnswer: in the page component
  - question: In pages, to get access to your data in your title or meta description you use the
    answers:
      - meta function
      - head function
      - seo function
    correctAnswer: head function
  - question: You can load external resources only in the nuxt.config.js
    answers:
      - true
      - false
    correctAnswer: false
  - question: To include scripts before the closing body tag use
    answers:
      - 'body: true'
      - 'body: false'
      - 'scripts: true'
    correctAnswer: 'body: true'
---

Nuxt.js はアプリケーションにメタデータを追加するために 3 つの方法を用意しています:

1. nuxt.config.js を使用してグローバルに設定する
2. head をオブジェクトとして使用してローカルに設定する
3. data と computed プロパティにアクセスするために、head を関数として使用してローカルに設定する

### グローバルな設定

Nuxt.js では、nuxt.config.js 内の head プロパティを利用することで、アプリケーションにおけるデフォルトの `<meta>` タグをすべて定義することができます。SEO のためのデフォルトの title と description タグの追加や、ビューポートのセット、ファビコンの追加が簡単にできます。

```js{}[nuxt.config.js]
export default {
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
```

<base-alert type="info">

この設定により、すべてのページで共通のタイトルと説明が設定されます。

</base-alert>

### ローカルな設定

各ページのスクリプトタグ内で `head` メソッドを用いることで、ページ別のタイトルとメタデータを追加することもできます。

```js{}[pages/index.vue]
<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
}
</script>
```

<base-alert type="info">

`head` をオブジェクトとして使用して、ホームページのみに title と description を設定する例。

</base-alert>

```html{}[pages/index.vue]
<template>
  <h1>{{ title }}</h1>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Home page'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    }
  }
</script>
```

<base-alert type="info">

`head` を関数として使用して、ホームページのみに title と description を設定する例。関数を使用することで data と computed プロパティにアクセスすることができます。

</base-alert>

Nuxt.js はアプリケーションの document head とメタ要素を更新するために、[vue-meta](https://vue-meta.nuxtjs.org/) を利用しています。

<base-alert>

子コンポーネントを使用したときにメタタグの重複を避けるために、`hid` キーを利用してメタデータに一意な識別子を与えてください。こうすることで`vue-meta` は、デフォルトのタグを上書きすべきということを知ることができます。

</base-alert>

<base-alert type="next">

`head` の利用可能なプロパティについての詳細は、[vue-meta のドキュメント](https://vue-meta.nuxtjs.org/api/#metainfo-properties)を参照してください。

</base-alert>

## 外部リソース

スクリプトやフォントのような外部のリソースを含めるには、`nuxt.config.js` にグローバルに追加する、もしくは `head` オブジェクトまたは関数の中にローカルに追加する必要があります。

<base-alert type="info">

各リソースにオプションの `body: true` を渡すことで、`</body>` の終了タグの前にリソースを含めることもできます。

</base-alert>

### グローバルな設定

```js{}[nuxt.config.js]
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  }
}
```

### ローカルな設定

```html{}[pages/index.vue]
<template>
  <h1>About page with jQuery and Roboto font</h1>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: Roboto, sans-serif;
  }
</style>
```

## リソースヒント

初期ページの読み込み時間をより早くするために、プリフェッチとプリロードのリンクを追加しました。

多くのページとルートがある場合にのみ、このオプションを無効にすると良いでしょう。

<base-alert type="next">

[リソースヒント](/docs/2.x/configuration-glossary/configuration-render#resourcehints)

</base-alert>

<quiz :questions="questions"></quiz>
