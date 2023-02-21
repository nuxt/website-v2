---
template: guide
title: PM2
description: PM2 クラスタモードの有効によって Nuxt をどうやってデプロイするのか？
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/pm2.png"
  dark: "/img/companies/square/dark/pm2.png"
---
# PM2 を使った Nuxt のデプロイ

PM2 クラスタモードの有効によって Nuxt をどうやってデプロイするのか？

---

[PM2](https://pm2.keymetrics.io/)(Process Manager 2)を使用したデプロイは、ユニバーサルな Nuxt アプリケーションをサーバーや VM にホスティングするための、迅速で簡単なソリューションです。

このガイドでは、アプリケーションをローカルに構築し、クラスタモードを有効にした PM2 の設定ファイルを使って提供します。クラスタモードでは、アプリケーションを複数の CPU にまたがって拡張することができるため、ダウンタイムを防ぐことができます。

## はじめに

サーバーに pm2 がインストールされていることを確認してください。インストールされていない場合は、yarn や npm からグローバルにインストールしてください。

```bash
# yarn で pm2 をインストール
$ sudo yarn global add pm2 --prefix /usr/local

# npm で pm2 をインストール
$ npm install pm2 -g
```

## アプリケーションの設定

PM2 でユニバーサル Nuxt アプリケーションを提供するために追加する必要があるのは、`ecosystem.config.js` というファイルです。プロジェクトのルートディレクトリに、この名前のファイルを新規に作成し、以下の内容を追加してください：

```javascript
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // またはインスタンスの数
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
```
## アプリケーションのビルドと提供

次に、`npm run build` でアプリをビルドします。

そして、`pm2 start` でアプリをサーブします。

ステータスを確認するには `pm2 ls` とします。

Nuxt アプリケーションが提供されました!

## さらなる情報

このソリューションは、このサーバー上のアプリケーションのダウンタイムがないことを保証します。(また、冗長化や高可用性クラウドソリューションによって、サーバーの故障を防ぐ必要があります)。

PM2 の追加設定は[こちら](https://pm2.keymetrics.io/docs/usage/application-declaration/#general)からご覧いただけます。
