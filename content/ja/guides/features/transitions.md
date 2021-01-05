---
title: トランジション
description: Nuxt.js は `<transition>` コンポーネントを使って、ページ間を遷移する際のトランジション/アニメーションを行うことができます
position: 10
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/05_transitions?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: To define a custom transition for a specific route what key do you add to your page?
    answers:
      - pageTransition
      - transition
      - layoutTransition
    correctAnswer: transition
  - question: What is the default transition mode in Nuxt.js?
    answers:
      - in-out
      - out-in
      - none
    correctAnswer: out-in
  - question: What is the default transition name for transitions on pages?
    answers:
      - .page
      - .pages
      - .page-transition
    correctAnswer: .page
  - question: Where is the best place to add your CSS transition classes so you have global transitions on all routes?
    answers:
      - index.vue
      - A global css file
      - layouts/default.vue
    correctAnswer: A global css file
  - question: In which array in the nuxt.config.js file do you add your global stylesheet?
    answers:
      - 'css: []'
      - 'styles: []'
      - 'transitions: []'
    correctAnswer: 'css: []'
  - question: What is the default css class for layout transitions?
    answers:
      - layout
      - layout-transition
      - transition
    correctAnswer: layout
  - question: In the nuxt.config.js file what is the property you use to configure the default settings for layout transitions?
    answers:
      - layout
      - layoutTransition
      - layoutTransitions
    correctAnswer: layoutTransition
  - question: If you change the default layout to be called 'my-layout' what class do you use to create the css transitions?
    answers:
      - layout
      - my-layout
      - myLayout
    correctAnswer: my-layout
  - question: In the nuxt.config.js file what is the property you use to configure the default settings for page transitions?
    answers:
      - page
      - pageTransition
      - layoutTransition
    correctAnswer: pageTransition
  - question: Where do you modify the default settings for your page transitions?
    answers:
      - main.css
      - pages.vue
      - nuxt.config.js
    correctAnswer: nuxt.config.js
---

Nuxt.js は [transition コンポーネント](https://jp.vuejs.org/v2/guide/transitions.html#%E5%8D%98%E4%B8%80%E8%A6%81%E7%B4%A0-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%B3) を使って、ページ間を遷移する際のトランジション/アニメーションを行うことができます。

特定のルートに対してカスタムトランジションを設定するには、ページコンポーネントに `transition` キーを追加してください。

```js{}[pages/index.vue]
export default {
  // 文字列を指定できます
  transition: ''
  // またはオブジェクト
  transition: {}
  // または関数
  transition (to, from) {}
}
```

## 文字列

`transition` キーに文字列がセットされたときは `transition.name` として用いられます。

```js{}[pages/index.vue]
export default {
  transition: 'home'
}
```

上のように設定すると、コンポーネントには次のようにセットされます:

```html{}[pages/index.vue]
<transition name="home"></transition>
```

<base-alert>

これは自動的に行われるため、ページやレイアウトに `<transition>` コンポーネントを追加する必要はありません。

</base-alert>

これで、あとはトランジションのための新しいクラスを作るだけです。

```html{}[pages/index.vue]
<style>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>
```

## オブジェクト

`transition` キーにオブジェクトがセットされたとき:

```js{}[pages/index.vue]
export default {
  transition: {
    name: 'home',
    mode: 'out-in'
  }
}
```

上のように設定すると、コンポーネントは次のようにセットされます:

```html{}[pages/index.vue]
<transition name="home" mode="out-in"></transition>
```

`transition` オブジェクトは name、 mode、 css、 duration などの多くのプロパティを持つことができます。詳細は vue のドキュメントを参照してください。

ページ内の `transition` プロパティで関数を定義することもできます。 詳細は vue のドキュメントの[JavaScript フック](https://jp.vuejs.org/v2/guide/transitions.html#JavaScript-%E3%83%95%E3%83%83%E3%82%AF) を参照してください。

```js
export default {
  transition: {
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  }
}
```

### トランジションモード

<base-alert>

デフォルトのトランジションモードは Vue.js とは異なります。 `transition` モードはデフォルトで `out-in` に設定されています。 leaving と entering トランジションを同時に実行したい場合、 モードプロパティに空文字列をセット( `mode: ''` )する必要があります 。

</base-alert>

```js{}[pages/index.vue]
export default {
  transition: {
    name: 'home',
    mode: ''
  }
}
```

## 関数

`transition` キーに関数がセットされたとき:

```js{}[pages/index.vue]
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
```

トランジションは各ページ遷移時に次のように適用されます:

`/` から `/posts`=> `slide-left`、`/posts` から `/posts?page=3` => `slide-left`、`/posts?page=3` から `/posts?page=2`=> `slide-right`

## グローバルな設定

Nuxt.js のデフォルトのトランジション名は `"page"` です。 アプリケーションのすべてのページでフェードさせるトランジションを追加するには、ルーティング全体に適用されている CSS ファイルが必要です。

`assets/main.css` 内にグローバルな CSS を書きます:

```css{}[assets/main.css]
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
```

`nuxt.config.js` ファイルの `css`配列に CSS ファイルのパスを追加します:

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/main.css']
}
```

## 構成設定

## layoutTransition プロパティ

レイアウトトランジションのデフォルト設定を指定するために使われます。

デフォルトの設定は以下の通りです:

```js
{
  name: 'layout',
  mode: 'out-in'
}
```

```js{}[assets/main.css]
.layout-enter-active, .layout-leave-active {
  transition: opacity .5s
}
.layout-enter, .layout-leave-active {
  opacity: 0
}
```

デフォルトの設定を変更したい場合、nuxt.config.js ファイルに以下のように記述してください。

```js{}[nuxt.config.js]
export default {
  layoutTransition: 'my-layouts'
  // または
  layoutTransition: {
    name: 'my-layouts',
    mode: 'out-in'
  }
}
```

```css{}[assets/main.css]
.my-layouts-enter-active,
.my-layouts-leave-active {
  transition: opacity 0.5s;
}
.my-layouts-enter,
.my-layouts-leave-active {
  opacity: 0;
}
```

## pageTransition プロパティ

デフォルトの設定は以下の通りです:

```js
{
  name: 'page',
  mode: 'out-in'
}
```

デフォルトの設定を変更したい場合、nuxt.config.js ファイルに以下のように記述してください。

```js{}[nuxt.config.js]
export default {
  pageTransition: 'my-page'
  // または
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  }
}
```

ページトランジションの名前を変更したい場合、css のクラス名も変更する必要があります。

```css{}[assets/main.css]
.my-page-enter-active,
.my-page-leave-active {
  transition: opacity 0.5s;
}
.my-page-enter,
.my-page-leave-to {
  opacity: 0;
}
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
