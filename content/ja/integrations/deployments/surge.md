---
template: guide
title: Surge
description: Nuxt.js アプリケーションを Surge にどうやってデプロイするのか？
target: Static
category: deployment
logo: "/img/modules/categories/deployment.svg"
---
# Nuxt を Surge にデプロイする

Nuxt.js アプリケーションを Surge にどうやってデプロイするのか？

---

Nuxt.js は、例えば [Surge](https://surge.sh/) のような任意の静的ホスティング上で Web アプリケーションをホストすることができます。

Surge でデプロイするには、まずコンピュータに Surge をインストールします：

```bash
npm install -g surge
```

そして、Nuxt.js で Web アプリケーションの生成をします：

```bash
npm run generate
```

これにより、`dist` フォルダが作成され、その中にすべてのものが入っているので、静的なホスティングに展開することができます。

そして、それを Surge にデプロイします：

```bash
surge dist/
```

以上で、終わりです :)

[ダイナミックルート](/docs/directory-structure/pages#dynamic-pages)を持つプロジェクトがあり、Nuxt <= v2.12 を使用している場合は、[`generate` 設定](/docs/configuration-glossary/configuration-generate)を見て、Nuxt.js にダイナミックルートの生成方法を設定してみてください。

::alert{type="warning"}
`nuxt generate` で Web アプリケーションを生成する際に、[asyncData](/docs/features/data-fetching) に渡す[コンテキスト](/docs/internals-glossary/context)には、`req` と `res` がありません。
::
