---
title: Nuxt を Cloudflare へデプロイする
description: Cloudflare で Nuxt を使用する時に注意すべきこと
menu: Cloudflare
category: deployment
position: 118
---

ほとんどのケースで、Nuxt は Nuxt 自体によって生成、もしくは作成していないサードパーティコンテンツと連携することができます。しかし時々そのようなコンテンツは問題を起こします、特に Cloudflare の"Minification と Security Options"によってです。

よって Cloudflare の以下のオプションのチェックがされていないか、無効になっているか確認してください。そうでなければ、必要のない再レンダリングやハイドレーションのエラーが本番環境のアプリケーションに影響を与える可能性があります。

1. Speed > Optimization > Auto Minify: **チェックを外してください** JavaScript, CSS と HTML
2. Speed > Optimization > **無効にしてください** "Rocket Loader™"
3. Speed > Optimization > **無効にしてください** "Mirage"
4. Scrape Shield > **無効にしてください** "Email Address Obfuscation"
5. Scrape Shield > **無効にしてください** "Server-side Excludes"

これらの設定により、望んでいない副作用が引き起こされる可能性があるスクリプトを、Cloudflare が Nuxt アプリケーションに追加しなくなることが保証されます。
