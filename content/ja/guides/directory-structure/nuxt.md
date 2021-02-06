---
title: .nuxt
description: '`.nuxt` ディレクトリはいわゆる *build ディレクトリ*です。このディレクトリは動的に生成され、デフォルトでは非表示になっています。ディレクトリの中には、`nuxt dev` を使っているときには自動生成されたファイルが、`nuxt build` を使っているときにはビルドの成果物が入っています。'
position: 1
category: directory-structure
questions:
  - question: What what commands is the .nuxt folder generated?
    answers:
      - nuxt start
      - nuxt generate
      - nuxt build or nuxt dev
    correctAnswer: nuxt build or nuxt dev
  - question: What property do you use to rename the nuxt folder?
    answers:
      - dir
      - build
      - buildDir
    correctAnswer: buildDir
  - question: In which file can you find your generated routes?
    answers:
      - pages.js
      - router.js
      - views.js
    correctAnswer: router.js
  - question: What can you find in the components folder?
    answers:
      - nuxt components
      - custom components
      - global components
    correctAnswer: nuxt components
  - question: The .nuxt folder is the folder you need to upload when deploying static sites.
    answers:
      - true
      - false
    correctAnswer: false
---

`.nuxt` ディレクトリはいわゆる *build ディレクトリ*です。このディレクトリは動的に生成され、デフォルトでは非表示になっています。ディレクトリの中には、`nuxt dev` を使っているときには自動生成されたファイルが、`nuxt build` を使っているときにはビルドの成果物が入っています。 これらのファイルを変更することはデバッグに最適ですが、これらは生成されたファイルであり、`dev` や `build` コマンドを再度実行すると、ここに保存されていたものはすべて再生成されることを覚えておいてください。

<base-alert>

`.nuxt` ディレクトリはバージョン管理システムにコミットされるべきではありません。`nuxt dev` または `nuxt build` を実行したときに自動的に生成されるので、`.gitignore` で無視してください。

</base-alert>

### The buildDir Property

デフォルトでは `.nuxt` のディレクトリ名がドットで始まるため、多くのツールが隠しディレクトリと見なします。これを防ぐには buildDir オプションを使用します。名前を変更した場合は、新しい名前を `.gitignore` ファイルに追加することを忘れないようにしてください。

```js{}[nuxt.config.js]
export default {
  buildDir: 'nuxt-dist'
}
```

### Inside the .nuxt folder:

- The router.js file is the generated router file that Nuxt.js generates for you when you put `.vue` files inside the pages folder. You can use this file for debugging for when you want to look up which routes are generated for vue-router and find out the names of a specific route.
- The router.scrollBehavior.js which is your Router ScrollBehavior
- The Components folder has all your Nuxt components such as NuxtChild and NuxtLink. It also contains the nuxt-build-indicator which is the page we see when your application is building and nuxt-loading which is your loading component that gets seen when we are waiting for your page to load. You will also find the nuxt-error page in here which contains the Nuxt default error page.
- The mixins folder has the files needed for the Nuxt `$fetch` method.
- The views folder contains your app template and your server error page.
- The app.js is your main application file.
- The client.js file is your client file needed for everything that happens client side.
- The empty file is intentionally left empty for no-op aliases
- The index.js file bootstraps your application.
- The loading.html is the file that is used when the page is loading.
- The middleware file is where your middleware is kept
- The server.js file is all the code that is ran on the server
- the utilities contains the utilities that Nuxt needs for it to work.

### Deploying

The `.nuxt` folder is part of the files needed to deploy your SSR application. It is not needed for deploying your static Nuxt.js app though because we use the `dist` folder for that.

<quiz :questions="questions"></quiz>
