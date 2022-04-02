---
template: guide
title: Amazon Web Services
description: S3 Amplify と CloudFront による AWS 上の静的ホスティング
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/AWS_Light.svg"
  dark: "/img/companies/square/dark/AWS_Dark.svg"
---

# Nuxt を Amazon Web Services にデプロイする

S3 Amplify と CloudFront による AWS 上の静的ホスティング

---

AWS とは Amazon Web Services の略です。
S3 は静的サイトホスティング用の設定が行える静的ストレージです。CloudFront はそれらの CDN です（コンテンツ・デリバリー・ネットワーク）。

## Amplify Console と AWS

Amplify Console を使用した AWS での**静的に生成された** Nuxt アプリケーションのホスティングはパワフルで安上がりです。

はじめに、任意の Git プロバイダーに Nuxt アプリケーションをプッシュしてください。そのあと Amplify Console にアクセスしてください。Amplify Hosting を使用したことがない場合、**Deploy** ヘッダー下の **GET STARTED** ボタンをクリックし、そうでなければ **Connect App** ボタンをクリックしてください。

## From your existing code

"From your existing code" ページでは、Git プロバイダーを選択し **Continue** をクリックしてください。

### Add repository branch

"Add repository branch" ページでは、デプロイしたいリポジトリとブランチを選択してください。その後 **Next** をクリックしてください。

## ビルド設定

"Configure build settings" ページでは、"Build and test settings" の `Edit` ボタンをクリックしてください。また以下のように変更を行なってください：

1. **build** commands に `npm run generate` を設定します。
2. `baseDirectory` の場所に `dist` を設定します。

編集が完了した設定は以下のようになります：

```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - npm run generate
  artifacts:
    # 重要 - ビルド出力ディレクトリを確認してください
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

その後、**Save** と **Next** をクリックしてください。

### レビュー

レビューページでは、**Save and deploy** をクリックしてください。

その後、アプリケーションがデプロイされます。この作業には数分かかります。

`Provision`、`Build`、`Deploy`、そして `Verify` が緑になり、Amplify Console が提供する URL をクリックするとサイトが表示されます。

## AWS と S3 + CloudFront

S3 + CloudFront を使用した AWS での**静的に生成された** Nuxt アプリケーションのホスティングはパワフルで安上がりです。

> AWS は徐々に衰退しています。もし見逃しているステップがあれば、このドキュメントを更新するために PullRequest を提出してください。

### 概要

複数の AWS のサービスで非常に安くホストします。簡単にまとめると：

- S3
  - web サイトのファイルのためにクラウドデータ "bucket" があります
  - 静的な web サイトをホストするよう設定できます
- CloudFront
  - CDN（コンテンツ・デリバリー・ネットワーク）
  - HTTPS 証明書を無料で提供します
  - サイトの読み込みを高速化します

以下のようにサイトをプッシュします：

```
Nuxt Generate -> Local folder -> AWS S3 Bucket -> AWS CloudFront CDN -> Browser
  [      nuxt generate       ]    [         gulp deploy          ]
  [                         deploy.sh                            ]
```

はじめに、`nuxt generet`e（<= v2.12）でサイトを作成してください。次に [Gulp](https://gulpjs.com/) を使用して S3 バケットにファイルを公開し、CloudFront CDN を無効にしてください。

- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-awspublish](https://www.npmjs.com/package/gulp-awspublish)
- [gulp-cloudfront-invalidate-aws-publish](https://www.npmjs.com/package/gulp-cloudfront-invalidate-aws-publish)
- [concurrent-transform](https://www.npmjs.com/package/concurrent-transform) （並列アップロードのため）

デプロイスクリプトでは以下の環境変数を設定する必要があります：

- AWS_BUCKET_NAME="example.com"
- AWS_CLOUDFRONT="UPPERCASE"
- AWS_ACCESS_KEY_ID="key"
- AWS_SECRET_ACCESS_KEY="secret"

このようなファイルがあります：

```
deploy.sh       -  `nuxt generate` と `gulp deploy` を実行します
gulpfile.js     -  S3 にファイルをプッシュし、CloudFront を無効にする `gulp deploy` コードです
```

### 設定方法

1. S3 バケットを作成し、静的サイトのホスティング用に設定します
2. CloudFront ディストリビューションを作成します
3. セキュリティ・アクセスの設定をします
4. プロジェクトでビルドスクリプトを設定します

### AWS: S3 バケットと CloudFront ディストリビューションの設定

ステップ 1、2 は [S3 と CloudFront 設定のチュートリアル](https://learnetto.com/blog/cloudfront-s3) にしたがって進めてください。

これでデータが揃います：

- AWS_BUCKET_NAME="example.com"
- AWS_CLOUDFRONT="UPPERCASE"

### AWS: セキュリティ・アクセスの設定

ステップ 3 では、以下のことができるユーザーを作成する必要があります：

- バケット・コンテンツを更新する
- CloudFront ディストリビューションを無効にする（変更をより早くユーザーに伝えられます）

[このポリシーでプログラムユーザーを作成します](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)：

> NOTE: 2x `example.com` を以下の S3 バケット名に置き換えてください。このポリシーは指定したバケットへのプッシュを許可し、CloudFront ディストリビューションを無効にします。

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": ["arn:aws:s3:::example.com"]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:GetObjectAcl",
        "s3:DeleteObject",
        "s3:ListMultipartUploadParts",
        "s3:AbortMultipartUpload"
      ],
      "Resource": ["arn:aws:s3:::example.com/*"]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations",
        "cloudfront:UnknownOperation"
      ],
      "Resource": "*"
    }
  ]
}
```

次に [アクセスキーとシークレットを取得してください。](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

これでデータが揃います：

- AWS_ACCESS_KEY_ID="key"
- AWS_SECRET_ACCESS_KEY="secret"

### ラップトップ: プロジェクトのビルドスクリプトの設定

4.1) `deploy.sh` スクリプトを作成してください。オプションの [nvm（node バージョンマネージャー）](https://github.com/creationix/nvm)を参照してください。

```bash
#!/bin/bash

export AWS_ACCESS_KEY_ID="key"
export AWS_SECRET_ACCESS_KEY="secret"
export AWS_BUCKET_NAME="example.com"
export AWS_CLOUDFRONT="UPPERCASE"

# nvm（node バージョンマネージャー）の読み込み、node のインストール（.nvmrc でのバージョン）、そして npm でのパッケージのインストールをします
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# まだインストールされていない場合、Npm でインストールします
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy
```

4.2) `deploy.sh` を実行可能にして、Git をチェックしないようにします（deploy.sh にはシークレットがあります）

```bash
chmod +x deploy.sh
echo "
# Don't commit build files
node_modules
dist
.nuxt
.awspublish
deploy.sh
" >> .gitignore
```

4.3) プロジェクトとコマンドラインに Gulp を追加します

```bash
npm install --save-dev gulp gulp-awspublish gulp-cloudfront-invalidate-aws-publish concurrent-transform
npm install -g gulp
```

4.4) ビルドスクリプトで `gulpfile.js` を作成します

```javascript
const gulp = require('gulp')
const awspublish = require('gulp-awspublish')
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish')
const parallelize = require('concurrent-transform')

// https://docs.aws.amazon.com/cli/latest/userguide/cli-environment.html

const config = {
  // 必須
  params: {
    Bucket: process.env.AWS_BUCKET_NAME
  },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v3'
  },

  // 任意
  deleteOldVersions: false, // NOT FOR PRODUCTION
  distribution: process.env.AWS_CLOUDFRONT, // CloudFront distribution ID
  region: process.env.AWS_DEFAULT_REGION,
  headers: {
    /* 'Cache-Control': 'max-age=315360000, no-transform, public', */
  },

  // 適切なデフォルト値 - これらのファイルとディレクトリは gitignore している
  distDir: 'dist',
  indexRootPath: true,
  cacheFileName: '.awspublish',
  concurrentUploads: 10,
  wait: true // CloudFront の無効化が完了するのを待つ（約 30-60 秒）
}

gulp.task('deploy', function () {
  // S3 オプションを使用した新しいパブリッシャーの作成
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create(config)

  let g = gulp.src('./' + config.distDir + '/**')
  // パプリッシャーは Content-Length, Content-Type、上記のヘッダーを追加します
  // 指定しない場合 x-amz-acl を public-read にデフォルトとして設定します
  g = g.pipe(
    parallelize(publisher.publish(config.headers), config.concurrentUploads)
  )

  // CDN を無効化する
  if (config.distribution) {
    console.log('Configured with CloudFront distribution')
    g = g.pipe(cloudfront(config))
  } else {
    console.log(
      'No CloudFront distribution configured - skipping CDN invalidation'
    )
  }

  // 削除されたファイルを削除する
  if (config.deleteOldVersions) {
    g = g.pipe(publisher.sync())
  }
  // 連続したアップロードを高速化するため、キャッシュファイルを作成する
  g = g.pipe(publisher.cache())
  // 連続したアップロードを高速化するため、キャッシュファイルを作成する
  g = g.pipe(awspublish.reporter())
  return g
})
```

4.5) デプロイとデバッグ

以下を実行してください：

```bash
./deploy.sh
```

以下のような出力が得られるはずです:

```bash
$ ./deploy.sh

Found '/home/michael/scm/example.com/www/.nvmrc' with version <8>
Now using node v8.11.2 (npm v5.6.0)

> example.com@1.0.0 generate /home/michael/scm/example.com/www
> nuxt generate

  nuxt:generate Generating... +0ms
  nuxt:build App root: /home/michael/scm/example.com/www +0ms
  nuxt:build Generating /home/michael/scm/example.com/www/.nuxt files... +0ms
  nuxt:build Generating files... +36ms
  nuxt:build Generating routes... +10ms
  nuxt:build Building files... +24ms
  ████████████████████ 100%

Build completed in 7.009s



 DONE  Compiled successfully in 7013ms                                                                                                                                     21:25:22

Hash: 421d017116d2d95dd1e3
Version: webpack 3.12.0
Time: 7013ms
                                   Asset     Size  Chunks             Chunk Names
     pages/index.ef923f795c1cecc9a444.js  10.6 kB       0  [emitted]  pages/index
 layouts/default.87a49937c330bdd31953.js  2.69 kB       1  [emitted]  layouts/default
pages/our-values.f60c731d5c3081769fd9.js  3.03 kB       2  [emitted]  pages/our-values
   pages/join-us.835077c4e6b55ed1bba4.js   1.3 kB       3  [emitted]  pages/join-us
       pages/how.75f8cb5bc24e38bca3b3.js  2.59 kB       4  [emitted]  pages/how
             app.6dbffe6ac4383bd30a92.js   202 kB       5  [emitted]  app
          vendor.134043c361c9ad199c6d.js  6.31 kB       6  [emitted]  vendor
        manifest.421d017116d2d95dd1e3.js  1.59 kB       7  [emitted]  manifest
 + 3 hidden assets
Hash: 9fd206f4b4e571e9571f
Version: webpack 3.12.0
Time: 2239ms
             Asset    Size  Chunks             Chunk Names
server-bundle.json  306 kB          [emitted]
  nuxt: Call generate:distRemoved hooks (1) +0ms
  nuxt:generate Destination folder cleaned +10s
  nuxt: Call generate:distCopied hooks (1) +8ms
  nuxt:generate Static & build files copied +7ms
  nuxt:render Rendering url /our-values +0ms
  nuxt:render Rendering url /how +67ms
  nuxt:render Rendering url /join-us +1ms
  nuxt:render Rendering url / +0ms
  nuxt: Call generate:page hooks (1) +913ms
  nuxt: Call generate:page hooks (1) +205ms
  nuxt: Call generate:page hooks (1) +329ms
  nuxt: Call generate:page hooks (1) +361ms
  nuxt:generate Generate file: /our-values/index.html +2s
  nuxt:generate Generate file: /how/index.html +0ms
  nuxt:generate Generate file: /join-us/index.html +0ms
  nuxt:generate Generate file: /index.html +0ms
  nuxt:render Rendering url / +2s
  nuxt: Call generate:done hooks (1) +4ms
  nuxt:generate HTML Files generated in 11.8s +5ms
  nuxt:generate Generate done +0ms
[21:25:27] Using gulpfile ~/scm/example.com/www/gulpfile.js
[21:25:27] Starting 'deploy'...
Configured with CloudFront distribution
[21:25:27] [cache]  README.md
[21:25:27] [cache]  android-chrome-192x192.png
[21:25:27] [cache]  android-chrome-512x512.png
[21:25:27] [cache]  apple-touch-icon.png
[21:25:27] [cache]  browserconfig.xml
[21:25:27] [cache]  favicon-16x16.png
[21:25:27] [cache]  favicon-32x32.png
[21:25:27] [cache]  favicon.ico
[21:25:27] [cache]  favicon.svg
[21:25:27] [cache]  logo-branches.svg
[21:25:27] [cache]  logo-small.svg
[21:25:27] [cache]  logo.svg
[21:25:27] [cache]  mstile-150x150.png
[21:25:27] [cache]  og-image.jpg
[21:25:27] [cache]  safari-pinned-tab.svg
[21:25:27] [cache]  site.webmanifest
[21:25:28] [create] _nuxt/manifest.421d017116d2d95dd1e3.js
[21:25:29] [update] 200.html
[21:25:30] [create] videos/flag.jpg
[21:25:30] [create] _nuxt/vendor.134043c361c9ad199c6d.js
[21:25:34] [create] videos/flag.mp4
[21:25:34] [cache]  _nuxt/pages/how.75f8cb5bc24e38bca3b3.js
[21:25:34] [cache]  _nuxt/pages/join-us.835077c4e6b55ed1bba4.js
[21:25:34] [cache]  _nuxt/pages/our-values.f60c731d5c3081769fd9.js
[21:25:36] [update] our-values/index.html
[21:25:36] [create] _nuxt/layouts/default.87a49937c330bdd31953.js
[21:25:36] [create] _nuxt/app.6dbffe6ac4383bd30a92.js
[21:25:37] [create] _nuxt/pages/index.ef923f795c1cecc9a444.js
[21:25:38] [update] join-us/index.html
[21:25:38] [update] how/index.html
[21:25:43] [create] videos/flag.webm
[21:25:43] [update] index.html
[21:25:43] CloudFront invalidation created: I16NXXXXX4JDOA
[21:26:09] Finished 'deploy' after 42 s
```

また `CloudFront invalidation created: XXXX` は CloudFront invalidation の npm パッケージからの唯一の出力です。それが確認できない場合、上手く働いていません。
