---
template: guide
title: Azure Portal
description: Nuxt アプリケーションを Azure Portal にデプロイするには？
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Azure.svg"
  dark: "/img/companies/square/dark/Azure.svg"
---
# Nuxt を Azure Portal へデプロイする

Nuxt アプリケーションを Azure Portal にデプロイするには？

---

## 前提条件

- プロジェクトを設定する時、バックエンドを選択する必要があります。たとえ必要でなくても、そうしなければサイトを起動することができません。
- サーバーが Node 8 以上であること。

## もしバックエンドのないプロジェクトがすでにある場合は？

心配いりません。既存のプロジェクトに express サーバーを追加するのは簡単です。

プロジェクトのルートに `server` という新しいフォルダを作成してください。次に `server` フォルダ内に `index.js` を作成し、以下の内容を `index.js` に貼り付けてください：

```
const express = require('express')
const consola = require('consola')
const { loadNuxt } = require('nuxt-start')
const app = express()

async function start () {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  await nuxt.listen(process.env.PORT, process.env.HOST)
}

start()

```

次に nuxt.config.js を編集してください：

Before:

```
import pkg from './package'

export default {
... config
}
```

After:

```
module.exports = {
... config
}

```

**config 内の pkg オブジェクトへの参照を削除することを忘れないでください。**

それだけです！

Azure App Service のデプロイメントの場合、 App Service &rsaquo; Settings &rsaquo; Configuration &rsaquo; Application settings で、以下 2 つの環境変数（アプリケーション設定）を設定していることを確認してください。

```
HOST: '0.0.0.0'
NODE_ENV: 'production'
```

## DevOps で Web アプリケーションに Node のバージョンを設定する方法

リリースパイプラインの "Deploy Azure Web Service" タスク内のアプリ設定経由で、サーバー上の Node のバージョンを設定することができます

アプリ設定欄の"Application and Configuration Settings"に追加します

```
-WEBSITE_NODE_DEFAULT_VERSION 10.16.3
```

LTS バージョンを使用することが推奨されています。

## アーティファクト

Azure DevOps を使用してビルドパイプラインを働かせていて、かつアーティファクトを保存したい場合。接頭辞に `.` が付いているファイルは明示的に artifact フォルダーに移動する必要があります。次に Artifact Archive を作成し、そのあと Release Deployment からダウンロードします。

## web サーバーの実行

Azure Portal の場合 `web.config` ファイルが必要です。提供されていない場合、自分で作成します。これは **Nuxt では使えません**。リポジトリに web.config ファイルを追加してください。`Nuxt` が最新バージョンの場合サーバーファイルは `server/index.js` にあります。web.config では正しいパス `server/index.js` を指定せず `server` となっています。以下の web.config の例を見てください。これを行わないと、Vue がルートを見つけられないというログが表示されます。

```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
     iinode が IIS または IIS Express の後ろでノードプロセスを実行するために使用される場合、
     この設定ファイルが必要です。詳細はこちらを確認してください:

     https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config
-->

<configuration>
  <system.webServer>
    <!-- WebSocket サポートの詳細は https://azure.microsoft.com/en-us/blog/introduction-to-websockets-on-windows-azure-web-sites/ を確認してください -->
    <webSocket enabled="false" />
    <handlers>
      <!-- server.js ファイルが iisnode モジュールによって処理される Node.js サイトであることを示しています -->
      <add name="iisnode" path="server" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <!-- node-inspector のデバッグの要求を妨害しないようにする -->
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server\/debug[\/]?" />
        </rule>

        <!-- はじめに受信した URL が /public フォルダ内の物理ファイルと一致するかどうかを判別します -->
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>

        <!-- 他のすべての URL は Node.js サイトのエントリーポイントにマッピングされます -->
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server"/>
        </rule>
      </rules>
    </rewrite>

    <!-- 'bin' ディレクトリは Node.js にとって特別な意味はありませんが、アプリケーションをそこに置くことができます -->
    <security>
      <requestFiltering>
        <hiddenSegments>
          <remove segment="bin"/>
        </hiddenSegments>
      </requestFiltering>
    </security>

    <!-- エラーレスポンスがそのまま残るようにします -->
    <httpErrors existingResponse="PassThrough" />

    <!--
      以下のオプションを使用すれば、IIS 内で Node がホストされる方法を制御することができます:
        * watchedFiles: サーバーを再起動する時の変更を監視する、セミコロンで区切られたリストのファイル
        * node_env: 環境変数 NODE_ENV として node に伝わります
        * debuggingEnabled - 組み込みのデバッガを有効にするかどうかを制御します

      オプションの全リストは https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config で確認してください
    -->
    <!--<iisnode watchedFiles="web.config;*.js"/>-->
  </system.webServer>
</configuration>
```
