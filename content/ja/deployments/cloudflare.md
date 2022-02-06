---
template: guide
title: Cloudflare
description: Nuxt と Cloudflare を併用する際に注意すべきこと
category: deployment
logo:
  light: "/img/companies/square/light/Cloudflare.svg"
  dark: "/img/companies/square/dark/Cloudflare.svg"
---
# Nuxt を Cloudflare にデプロイする

Nuxt と Cloudflare を併用する際に注意すべきこと

---

ほとんどの場合、Nuxt は、Nuxt 自身が生成または作成したものではないサードパーティのコンテンツと連携できます。しかし、そのようなコンテンツが問題を引き起こすこともあり、特に Cloudflare の"Minification and Security Options" が問題となります。

そのため、Cloudflare で以下のオプションがチェックされていない/無効になっていることを確認する必要があります。そうしないと、不要な再レンダリングやハイドレーションのエラーが本番アプリケーションに影響を与える可能性があります。

1. Speed > Optimization > Auto Minify: **Uncheck** JavaScript, CSS and HTML
2. Speed > Optimization > **Disable** "Rocket Loader™"
3. Speed > Optimization > **Disable** "Mirage"
4. Scrape Shield > **Disable** "Email Address Obfuscation"
5. Scrape Shield > **Disable** "Server-side Excludes"

これらの設定により、望まない副作用を引き起こす可能性のあるスクリプトを、Cloudflare が Nuxt アプリケーションに注入しないことが保証されます。
