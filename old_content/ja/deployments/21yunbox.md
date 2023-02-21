---
template: guide
title: 21YunBox
description: 21YunBox に Nuxt をどうやってデプロイしますか？
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Yunbox.svg"
  dark: "/img/companies/square/dark/Yunbox.svg"
---
# 21YunBox で Nuxt をデプロイする

21YunBox に Nuxt をどうやってデプロイしますか？

---

[21YunBox](https://www.21yunbox.com) は中国の高速 CDN を提供し、継続的なデプロイメント、ワンクリック HTTPS、また[マネージドサービスやバックエンド web サービスといった他のサービス](https://www.21yunbox.com/docs/)など、中国で web プロジェクトを立ち上げるための手段を提供しています。

21YunBox には以下の機能があります：

- GitHub と Gitee からの継続的な、自動ビルドとデプロイ
- [Let's Encrypt](https://letsencrypt.org) による自動 SSL 証明書の発行
- 中国製の高速 CDN で瞬時のキャッシュの無効化
- 無制限の [カスタムドメイン](https://www.21yunbox.com/docs/#/custom-domains)
- サイト高速化のための自動 [Brotli 圧縮](https://en.wikipedia.org/wiki/Brotli)
- ネイティブな HTTP/2 のサポート
- HTTP → HTTPS の自動リダイレクト
- カスタム URL のリダイレクトとリライト

## 前提条件

このガイドではデプロイする Nuxt プロジェクトがあることを想定しています。もしプロジェクトが必要なら、開始するために [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) を使用するか、21YunBox の [Nuxt Example](https://gitee.com/eryiyunbox-examples/nuxtjs) をフォークしてから続けてください。

## セットアップ

2 つの簡単なステップで Nuxt サイトを 21YunBox にセットアップできます：

1. 21YunBox に新しい web サービスを作成し、 21YunBox に GitHub か Gitee リポジトリのアクセス許可を与えます。
2. 作成時には以下の値を使用してください：

   |                       |                                                     |
   | --------------------- | --------------------------------------------------- |
   | **環境**               | `Static Site`                                       |
   | **ビルドコマンド**       | `yarn && yarn generate` （もしくは独自のビルドコマンド） |
   | **公開ディレクトリ**     | `./dist` （もしくは独自の出力ディレクトリ）               |

それだけです！ビルドが完了するとサイトは 21YunBox の URL（`yoursite.21yunbox.com` のようなもの）にサイトが公開されます。

## 継続的なデプロイ

今 21YunBox はリポジトリに接続されており、GitHub にプッシュするといつでも自動的にサイトを構築して公開します。

## 21YunBox CDN とキャッシュの無効化

21YunBox はサイトを、中国の超高速 CDN でホスティングし、中国すべてのユーザーに最速のダウンロード時間を保証します。

すべてのデプロイは自動的、かつ瞬時にキャッシュを無効化し、ユーザーはいつでもサイトの最新のコンテンツにアクセスできます。

## カスタムドメイン

21YunBox の [カスタムドメイン](https://www.21yunbox.com/docs/#/custom-domains) ガイドを使用することで、簡単にサイトへ独自のドメイン追加ができます。
