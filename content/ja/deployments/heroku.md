---
template: guide
title: Heroku
description: Nuxt を Heroku にどうやってデプロイするのか？
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Heroku.svg"
  dark: "/img/companies/square/dark/Heroku.svg"
---
# Nuxt を Heroku へデプロイする

Nuxt を Heroku にどうやってデプロイするのか？

---

[Node.js 向けの Heroku ドキュメント](https://devcenter.heroku.com/articles/nodejs-support)を読むことをお勧めします。

<div class="Promo__Video">
  <a href="https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku?friend=nuxt" target="_blank">
    <p class="Promo__Video__Icon">
      Watch a free lesson on <strong>How to deploy Nuxt to Heroku</strong> on Vue School
    </p>
  </a>
</div>

アプリの設定は、[Heroku ダッシュボード](https://devcenter.heroku.com/articles/heroku-dashboard)または [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)から行うことができます。

まず、アプリを作成します。そして、Node.js の [buildpack](https://devcenter.heroku.com/articles/buildpacks) を追加し、アプリがホスト `0.0.0.0` をリッスンするように設定します：

```bash
heroku create myapp
heroku buildpacks:set heroku/nodejs
heroku config:set HOST=0.0.0.0
```

Heroku のダッシュボードにあるアプリの Settings セクションには、このような内容が含まれているはずです：

![nuxt config vars Heroku](https://user-images.githubusercontent.com/23453691/116850762-81ea0e00-abf1-11eb-9f70-260721a1d525.png)

最後に、このアプリを Heroku にプッシュしてみましょう：

```bash
git push heroku master
```

master 以外のブランチを Heroku にデプロイするには：

```bash
git push heroku develop:master
```

ここで、`develop` はブランチの名前です。

オプションで、Heroku ダッシュボードのアプリの Deploy セクションで、アプリの GitHub リポジトリの選択したブランチからの自動デプロイを設定することができます。

ほら! あなたの Nuxt アプリケーションがHerokuにホスティングされました。
