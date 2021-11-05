---
template: guide
title: Dokku
description: Nuxt アプリケーションを Dokku でどうやってデプロイするのか？
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/dokku.png"
  dark: "/img/companies/square/dark/dokku.png"
---

# Dokku で Nuxt をデプロイする

Nuxt アプリケーションを Dokku でどうやってデプロイするのか？

---

[Dokku documentation for setup](http://dokku.viewdocs.io/dokku/getting-started/installation/) そして [Deploying a Node.js Application on Digital Ocean using Dokku](http://jakeklassen.com/post/deploying-a-node-app-on-digital-ocean-using-dokku/)をお読みになることをお勧めします。

例として、ここでは Nuxt アプリケーションを `my-nuxt-app` と呼ぶことにします。

プロジェクトの `devDependencies` をインストールするように Dokku に指示する必要があります（`npm run build` を起動できるようにするため）。

```bash
// Dokku サーバー上で
dokku config:set my-nuxt-app NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
```

また、アプリケーションはホスト `0.0.0.0` をリッスンし、プロダクションモードで動作するようにします：

```bash
// Dokku サーバー上で
dokku config:set my-nuxt-app HOST=0.0.0.0 NODE_ENV=production
```

`dokku config my-nuxt-app` を手でタイプするとき、 以下の 3 行が見ることができるはずです

![nuxt config vars Dokku](https://i.imgur.com/9FNsaoQ.png)

次に、プロジェクトの `app.json` にある `scripts.dokku.predeploy` スクリプトを使って、`npm run build` を起動するように Dokku に指示します：

`create a file name app.json in our project root folder`

```js
{
  "scripts": {
    "dokku": {
      "predeploy": "npm run build"
    }
  }
}
```

アプリケーションを起動するために、[Procfile](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/#procfiles-and-multiple-processes) を使って `npm run start` を実行します：

```
web: npm run start
```

最後に、Dokku にアプリケーションを push することができます：

```bash
// push する前に変更をコミット
git remote add dokku dokku@yourServer:my-nuxt-app
git push dokku master
```

ここに、Nuxt アプリケーションが Dokku にホストされました！
