---
title: 静的サイト生成
description: 静的サイト生成を使用すると、ビルドフェーズでアプリケーションをレンダリングし、Netlify、GitHubページ、Vercelなどの静的ホスティングサービスにデプロイすることができます。
position: 4
category: concepts
questions:
  - question: You need a server to host your static site
    answers:
      - True
      - False
    correctAnswer: False
  - question: What command do you use to generate your static site?
    answers:
      - nuxt build
      - nuxt prerender
      - nuxt generate
    correctAnswer: nuxt generate
  - question: When is your API called?
    answers:
      - Every time you navigate to the page with the API content
      - When you generate your site
      - When you generate your site and every time you navigate to the page with the API content
    correctAnswer: When you generate your site
  - question: Which pages will fallback into single page application mode?
    answers:
      - The error page
      - Those that are excluded from generation with generate.excludes
      - All pages on navigation
    correctAnswer: Those that are excluded from generation with generate.excludes
  - question: How do you update the content to your site?
    answers:
      - It is updated automatically
      - You need to regenerate your site
    correctAnswer: You need to regenerate your site
---

静的サイト生成を使用すると、ビルドフェーズでアプリケーションをレンダリングし、Netlify、GitHub ページ、Vercel などの静的ホスティングサービスにデプロイすることができます。これは、アプリケーションをデプロイするためにサーバーが必要ないことを意味します。

### サイトを生成する

[target:static](/docs/2.x/features/deployment-targets#static-hosting) でサイトをデプロイすると、すべての `.vue` のページが HTML と JavaScript ファイルに生成されます。API へのすべての呼び出しは、生成されたコンテンツ内の static と呼ばれるフォルダにキャッシュされ、クライアントサイドのナビゲーションで API を呼び出す必要がなくなります。

### ステップ 1：ブラウザから CDN へ

ブラウザが最初のリクエストを送信すると、CDN にヒットします。

### ステップ 2: CDN から ブラウザへ

CDN は、すでに生成された HTML、JavaScript、静的アセットをブラウザに送り返します。コンテンツが表示され、Vue.js のハイドレーションが作動してリアクティブになります。この処理の後、ページはインタラクティブになります。

### ステップ 3: ブラウザからブラウザへ

ページ間の遷移は [`<NuxtLink>`](/docs/2.x/features/nuxt-components#the-nuxtlink-component) を使ってクライアントサイドで行われるので、CDN に再度ヒットすることはありません。そしてブラウザをハードリフレッシュしても、すべての API コールはすでにキャッシュされている静的フォルダから読み込まれます。

### SPA Fallback

Pages that have been excluded from generation, by using the `generate.exclude` property will fallback to being a single page application. These pages will therefore not exist in the CDN and will be rendered on client side in the browser once the user navigates to that page.

<base-alert type="next">

To learn more about the [generate property](/docs/2.x/configuration-glossary/configuration-generate#exclude)

</base-alert>

### Updating your content

In order to get new content to your site from your API you will need to regenerate your site again. With most static sites hosting providers you can do this by pushing your changes to your master branch via the git command or via a pull request.

### Preview Mode

The Preview mode will call your API or your CMS so you can see the changes live before deploying. See the [preview mode](/docs/2.x/features/live-preview) on how to enable this feature.

<quiz :questions="questions"></quiz>
