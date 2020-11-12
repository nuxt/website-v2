---
title: レイアウト
description: レイアウトは Nuxt.js アプリのルック&フィールを変えるとき、とても役に立ちます. サイドバーを含めるか、モバイルとデスクトップのための明確なレイアウトを持つかどうかです.
position: 7
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/07_layouts?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: You can easily rename the layouts directory without any configuration
    answers:
      - true
      - false
    correctAnswer: false
  - question: What is the default layout page called?
    answers:
      - layout.vue
      - default.vue
      - defaultLayout.vue
    correctAnswer: default.vue
  - question: What component must you include in your layouts?
    answers:
      - <Nuxt />
      - <NuxtLink />
      - <RouterView />
    correctAnswer: <Nuxt />
  - question: You can add any other component to your layout
    answers:
      - true
      - false
    correctAnswer: true
  - question: To add a custom layout you create a `.vue` file and add it to what folder?
    answers:
      - layout
      - layouts
      - page
    correctAnswer: layouts
  - question: How do you tell the a page to use the blog layout?
    answers:
      - "layout: 'blog'"
      - "name: 'blog'"
      - 'blog: true'
    correctAnswer: "layout: 'blog'"
  - question: In which directory do you add an error page?
    answers:
      - pages
      - layouts
      - errors
    correctAnswer: layouts
  - question: You should add the `<Nuxt>` component to the error page?
    answers:
      - true
      - false
    correctAnswer: false
  - question: You can set a custom layout for your error page
    answers:
      - true
      - false
    correctAnswer: true
  - question: The error page is displayed when an error occurs while server side rendering?
    answers:
      - true
      - false
    correctAnswer: false
---

レイアウトは Nuxt.js アプリのルック&フィールを変えるとき、とても役に立ちます. サイドバーを含めるか、モバイルとデスクトップのための明確なレイアウトを持つかどうかです.

<base-alert>

_このディレクトリは追加の設定なしに名前を変更できないです_

</base-alert>

## デフォルトレイアウト

`layouts/default.vue` ファイルを追加することでメインレイアウトを継承できます. これはレイアウトが指定されていない全てのページで使用されます。レイアウトを作成するとき `<Nuxt>` コンポーネントを追加して、実際にページコンポーネントを含めるようにしてください。

レイアウトに必要なのは、ページコンポーネントをレンダリングするための3行のコードだけです。

```html{}[layouts/default.vue]
<template>
  <Nuxt />
</template>
```

ナビゲーションやヘッダー、フッターのようなコンポーネントもここに追加できます.

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

<base-alert type="info">

もし [components プロパティを true に設定](/docs/2.x/directory-structure/components)していたら、コンポーネントを追加するために import 文は必要ないです.

</base-alert>

## カスタムレイアウト

Every file (_top-level_) in the `layouts` directory will create a custom layout accessible with the `layout` property in the page components.

`layout` ディレクトリの全てのファイル(_トップレベル_)は、ページコンポーネントの `layout` プロパティで使えるカスタムレイアウトが作られる.

ブログレイアウトを作成して `layouts/blog.vue` に保存しましょう.

```html{}[layouts/blog.vue]
<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
```

その後、カスタムレイアウトを使用するためにページに教えなければなりません。

```js{}[pages/posts.vue]
<script>
export default {
  layout: 'blog',
  // OR
  layout (context) {
    return 'blog'
  }
}
</script>
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## エラーページ

The error page is a *page component* which is always displayed when an error occurs (that is not thrown on the server-side).

エラーページはエラーが発生したときいつも表示される *ページコンポーネント*　です.(サーバーサイドで発生したものではない)

<base-alert>

このファイルは `layout` フォルダに置かれるが、ページとして扱われるべきです.

</base-alert>

上述したように、このレイアウトは特殊でテンプレートの中に `<Nuxt>` を含めるべきではありません。このレイアウトは、エラーが発生したときに表示されるコンポーネントとして表示されなければなりません (`404`, `500` など)。他のページコンポーネントと同様に、エラーページにも通常の方法でカスタムレイアウトを設定することができます。

`layouts/error.vue` ファイルを追加することで、エラーページをカスタマイズできます:

```js{}[layouts/error.vue]
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
```

<base-alert type="info">

デフォルトのエラーページのソースコードは [GitHub で手に入ります](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-app/template/components/nuxt-error.vue).

</base-alert>

<quiz :questions="questions"></quiz>
