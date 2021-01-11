---
title: nuxt.config
description: Nuxt.js ではデフォルトの設定でほとんどのユースケースをカバーしています。nuxt.config.js を使ってこの設定を上書きすることができます。
position: 14
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/15_nuxt-config?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
---

Nuxt.js ではデフォルトの設定でほとんどのユースケースをカバーしています。nuxt.config.js を使ってこの設定を上書きすることができます。

## nuxt.config.js

### build

このオプションで、`loaders`、`filenames` や `webpack` の設定、`transpilation` を含む `build` ステップにおけるさまざまな設定を行うことができます。

```js{}[nuxt.config.js]
export default {
  build: {
    /*
     ** ここで webpack の設定を拡張することができます。
     */
    extend(config, ctx) {}
  }
}
```

<base-alert type="next">

[build プロパティ](/docs/2.x/configuration-glossary/configuration-build)の詳細を見る

</base-alert>

### css

このオプションで、グローバルに（すべてのページで）利用したい CSS ファイル/モジュール/ライブラリを指定できます。

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main.css', '~/assets/css/animations.scss']
}
```

nuxt の設定ファイルで、css プロパティの配列に記述する CSS/SCSS/Postcss/Less/Stylus/ などのファイルの拡張子は省略することができます。

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main', '~/assets/css/animations']
}
```

拡張子を省略することで、例えば css ファイルを使用していて sass を使うように変更した場合でも、ファイル名が同じままであれば新しい拡張子が使用されるので、nuxt.config を更新する必要はありません。

<base-alert type="next">

[css プロパティ](/docs/2.x/configuration-glossary/configuration-css)の詳細を見る

</base-alert>

### dev

このオプションで、Nuxt.js の `development` または `production` モードを定義できます。（Nuxt.js をプログラム的に使う際に重要です）

```js{}[nuxt.config.js]
export default {
  dev: process.env.NODE_ENV !== 'production'
}
```

<base-alert type="next">

[dev プロパティ](/docs/2.x/configuration-glossary/configuration-dev)の詳細を見る

</base-alert>

### env

このオプションを使うと、`NODE_ENV=staging` や `VERSION=1.2.3` のように、ビルド時（ランタイムではなく）に必要な環境変数を定義することができます。ただし、ランタイム環境変数の場合は `runtimeConfig` が必要です。

```js{}[nuxt.config.js]
export default {
  env: {
    baseURL: process.env.BASE_URL
  }
}
```

### runtimeConfig

ランタイム設定には dotenv サポートが組み込まれているため、より良いセキュリティと高速な開発を実現します。ランタイム設定は Nuxt ペイロードに追加されるので、開発中、サーバーサイドレンダリング、またはクライアントサイドのみのアプリケーションで作業する際に、ランタイム設定を更新するためにリビルドする必要はありません。しかし、静的サイトでは変更を確認するためにサイトを再生成する必要があります。

#### `publicRuntimeConfig`

- フロントエンドに公開されるすべての env 変数を保持しなければなりません。例として公開 URL への参照を含めることができます。
- サーバーとクライアントの両方で `$config` を使って利用できます。

```js{}[nuxt.config.js]
export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  }
}
```

#### `privateRuntimeConfig`

- プライベートでフロントエンドでは公開されてはいけないすべての env 変数を保持しなければなりません。例として API のシークレットトークンへの参照を含めることができます。
- サーバーのみで同じく `$config` を使って利用できます。（publicRuntimeConfig を上書きします）

```js{}[nuxt.config.js]
export default {
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
}
```

#### **Using your config values:**

ページ、ストア、コンポーネント、プラグインのコンテキストを使って、`this.$config` や `context.$config` を使用することで、どこからでもこれらの値にアクセスすることができます。

```html{}[pages/index.vue]
<script>
  asyncData ({ $config: { baseURL } }) {
    const posts = await fetch(`${baseURL}/posts`)
      .then(res => res.json())
  }
</script>
```

テンプレートの中では、`$config.*` を使って直接ランタイム設定にアクセスできます。

```html{}[pages/index.vue]
<template>
  <p>Our Url is: {{ $config.baseURL}}</p>
</template>
```

<base-alert type="warn">

サーバーのみのコンテキスト以外で `$config` を使用した場合（例えば `fetch`、 `asyncData`、 あるいはテンプレート内で直接 `$config` を使用した場合など）、プライベートな設定が公開される可能性があります。

</base-alert>

<base-alert type="next">

[runtimeConfig](/docs/2.x/configuration-glossary/configuration-runtime-config)の詳細を見る

</base-alert>

<base-alert type="next">

[@nuxtjs/dotenv からランタイム設定への移行](/blog/moving-from-nuxtjs-dotenv-to-runtime-config)のブログ記事を見る

</base-alert>

<base-alert type="next">

[env プロパティ](/docs/2.x/configuration-glossary/configuration-env)の詳細を見る

</base-alert>

### generate

このオプションで、アプリケーションの動的なルーティングに用いるパラメータを指定できます。Nuxt.js により HTML ファイルに変換されます。

```js{}[nuxt.config.js]
export default {
  generate: {
    dir: 'gh_pages', // dist/ の代わりに gh_pages/ を設定する
    subFolders: false // HTML ファイルがルートパスに従って生成されます
  }
}
```

<base-alert type="next">

[generate プロパティ](/docs/2.x/configuration-glossary/configuration-generate)の詳細を見る

</base-alert>

### head

```js{}[nuxt.config.js]
export default {
	head: {
    title: 'my title',
    meta: [
      { charset: 'utf-8' },
			.....
		]
	}
}
```

このオプションで、アプリケーションのデフォルトのメタタグを全て指定できます。

<base-alert type="next">

[head インテグレーション](/docs/2.x/configuration-glossary/configuration-head)の詳細を見る

</base-alert>

### loading

このオプションで、Nuxt.js のデフォルトのローディングコンポーネントをカスタマイズできます。

```js{}[nuxt.config.js]
export default {
  loading: {
    color: '#fff'
  }
}
```

<base-alert type="next">

[loading インテグレーション](/docs/2.x/configuration-glossary/configuration-loading)の詳細を見る

</base-alert>

### modules

このオプションで、プロジェクトに Nuxt モジュールを追加できます。

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/axios']
}
```

<base-alert type="next">

[modules プロパティ](/docs/2.x/configuration-glossary/configuration-modules)の詳細を見る

</base-alert>

### modulesDir

modulesDir プロパティは、モジュールディレクトリの設定でパス解決のために使用します。例えば Webpack の resolveLoading、 nodeExternals や postcss です。設定パスは `options.rootDir` （デフォルト: process.cwd()）からの相対パスになります。

```js{}[nuxt.config.js]
export default {
  modulesDir: ['../../node_modules']
}
```

プロジェクトが Yarn ワークスペーススタイルのモノリポジトリで構成されている場合はこのフィールドが必要になるかもしれません。

<base-alert type="next">

[modulesDir プロパティ](/docs/2.x/configuration-glossary/configuration-modulesdir)の詳細を見る

</base-alert>

### plugins

このオプションで、ルートの Vue.js アプリケーションをインスタンス化する前に実行したい JavaScript plugin を指定できます。

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/url-helpers.js']
}
```

<base-alert type="next">

[plugins プロパティ](/docs/2.x/configuration-glossary/configuration-plugins)の詳細を見る

</base-alert>

### router

`router` オプションで、Nuxt.js のデフォルトの Vue Router 設定を上書きできます。

```js{}[nuxt.config.js]
export default {
  router: {
    linkExactActiveClass: 'text-primary'
  }
}
```

<base-alert type="next">

[router プロパティ](/docs/2.x/configuration-glossary/configuration-router)の詳細を見る

</base-alert>

### server

このオプションで、Nuxt.js アプリケーションのサーバーインスタンスにおける接続変数を設定できます。

```js{}[nuxt.config.js]
import path from 'path'
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  }
}
```

<base-alert type="next">

[server プロパティ](/docs/2.x/configuration-glossary/configuration-server)の詳細を見る

</base-alert>

### srcDir

このオプションで、Nuxt.js アプリケーションのソースディレクトリを指定できます。

```js{}[nuxt.config.js]
export default {
  srcDir: 'client/'
}
```

`client` ディレクトリにある Nuxt.js アプリケーションのプロジェクト構造の例です。

```bash
**-| app/
---| node_modules/
---| nuxt.config.js
---| package.json
---| client/
------| assets/
------| components/
------| layouts/
------| middleware/
------| pages/
------| plugins/
------| static/
------| store/**
```

### dir

This option lets you define custom names of your Nuxt.js directories.

```js{}[nuxt.config.js]
export default {
  pages: 'views' // Nuxt will look for the views/ instead of the pages/ folder
}
```

<base-alert type="next">

See more on the [dir property](/docs/2.x/configuration-glossary/configuration-dir)

</base-alert>

### pageTransition

This option lets you define the default properties of the page transitions.

```js{}[nuxt.config.js]
export default {
  pageTransition: 'page'
}
```

<base-alert type="next">

See more on the [transition property](/docs/2.x/configuration-glossary/configuration-transition)

</base-alert>

## Other configuration files

Besides the `nuxt.config.js` there might be other config files in your project root, such as [.eslintrc](https://eslint.org/), [prettier.config.json](https://prettier.io/) or [.gitignore](https://git-scm.com/docs/gitignore). These are used to configure other tools such as your linter, code formatter or your git repository and detached from the `nuxt.config.js`.

### .gitignore

In your .gitignore file you will need to add the following so that they are ignored and not added to version control. `node_modules` which is where all your installed modules are. The `nuxt` folder which is what gets created when running the dev or build commands. The `dist` folder is the folder that gets created when running the generate command.

```markdown{}[.gitignore]
node_modules .nuxt dist
```

### What's next

<base-alert type="next">

Check out the [configuration-glossary](/docs/2.x/configuration-glossary/configuration-build)

</base-alert>
