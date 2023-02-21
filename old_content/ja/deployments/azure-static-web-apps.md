---
template: guide
title: Azure Static Web Apps
description: Nuxt アプリケーションを Azure Static Web Apps でどうやってデプロイするのか？
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Azure.svg"
  dark: "/img/companies/square/dark/Azure.svg"
---
# Azure Static Web Apps でのデプロイ

Nuxt アプリケーションを Azure Static Web Apps でどうやってデプロイするのか？

---

静的サイトを Azure static web apps を使用して Azure にデプロイできます。Azure static web apps は GitHub アクションを利用して、git push ごとに静的サイトを再構築できるため、アプリを GitHub に置いておく必要があります。

Azure static web apps にアプリケーションをデプロイするには順番に 2 つの設定をする必要があります。最初に Azure が package.json から build コマンドを読み込んでいるので、build コマンドを修正し、また静的サイトでは generate コマンドを使用する必要があります。

`package.json`

```json
build: "nuxt generate"
```

2 つ目はカスタム 404 ページと spa フォールバックページを取得するのに重要な routes.json ファイルの追加です。

`static/routes.json`

```jsx
{
 "routes": [],
 "platformErrorOverrides": [
   {
    "errorType": "NotFound",
    "serve": "/200.html",
    "statusCode": 200
   }
 ]
}
```

Azure static web apps へのデプロイを実際試してみたい人のために、全ての構成・設定をした小さなデモ・アプリケーションを作成しました。使用する場合そのアプリケーションをクローンし、GitHub リポジトリに追加してください。次に「Azure Static Web Apps でアプリケーションをデプロイする」のステップに従ってください。

[デモ・アプリケーションをクローンしてください](https://github.com/debs-obrien/nuxtjs-azure-static-app)

# Azure Static Web Apps でアプリケーションをデプロイする

### ステップ 1: **Azure static web apps を作成する**

1. [Azure Portal](https://portal.azure.com/) に移動してください。
2. **Create a Resource** をクリックし、**Static App** を検索して選択してください。
3. *Subscription* ドロップダウンリストの中からサブスクリプションを選択するか、デフォルトのものを使用してください。
4. *Resource group* ドロップダウンの下の **New** リンクをクリックしてください。*New resource group name* 内に **nuxt** と入力し **OK** をクリックしてください。
5. **Name** テキストボックスにアプリケーションのグローバルで一意な名前を入力してください。有効な文字は `a-z`、`A-Z`、`0-9`、そして `-` です。 アプリケーション名はリソースのリストでアプリを識別するために使用されます。したがってリポジトリの名前を使用してアプリケーションを命名するのをおすすめします。
6. *Region* ドロップダウン内から、最も近い地域を選択してください。

![Azure Portalのリソースとアプリのセットアップ](https://user-images.githubusercontent.com/13063165/82118135-71891b00-9775-11ea-8284-aa94d17a3bc3.png)

### ステップ 2: **GitHub リポジトリの追加**

Azure App Service の Static App は Nuxt アプリケーションが格納されているリポジトリへのアクセスを必要とし、自動でコミットをデプロイすることができます：

1. **Sign in with GitHub button** をクリックしてください
2. Nuxt プロジェクトのために作成したリポジトリの **Organization** を選択してください。また GitHub のユーザー名でも良いです。
3. 先ほど作成したリポジトリの名前を探して選択してください。
4. *Branch* ドロップダウンからブランチとして **master** を選択してください。

![github への追加の仕方](https://user-images.githubusercontent.com/13063165/82118359-38ea4100-9777-11ea-9c5e-7ba5c4da708e.png)

### ステップ 3: **ビルド・プロセスの設定**

Azure App Service の Static App が想定できることはいくつかあります。それは npm の自動インストールや、`npm run build` の実行です。またビルド後にどのフォルダに静的アプリをコピーして、そこから静的サイトを提供するかなど、明確にしなければならないこともあります。

1. 静的な出力フォルダの設定のため **Build** タブをクリックしてください。
2. *App artifact location* テキストボックスに **dist** と入力してください。

![Azure Portal ビルド設定](https://user-images.githubusercontent.com/13063165/82118277-71d5e600-9776-11ea-88ad-48cf0793905d.png)

### Step 4: **レビューと作成**

1. 詳細が全て正しいか確認するため、**Review + Create** ボタンをクリックしてください。
2. リソースの作成が開始され、デプロイ用の GitHub Action もプロビジョニングされるので **Create** をクリックしてください。
3. デプロイが完了したら、**Go to resource** をクリックしてください。

![Azure Portal デプロイ完了メッセージ](https://user-images.githubusercontent.com/13063165/82118390-67681c00-9777-11ea-9778-671dc768393e.png)

4. リソースの画面でデプロイしたアプリケーションを開くため *URL* リンクをクリックしてください。

![デプロイされたアプリへのURLを含むリソース画面](https://user-images.githubusercontent.com/13063165/82118042-d001c980-9774-11ea-94f5-57d995aa5391.png)

これで静的サイトが Azure static web apps にホストされるようになりました、おめでとうございます。

## 静的アプリケーションとモニタリングのデプロイの再構築

あとやることはコードの修正と変更のプッシュだけです。変更をプッシュすることで GitHub アクションが有効になり、新しいサイトを自動で再構築します。GitHub リポジトリのアクションタブをクリックすることでワークフローを監視することができ、また再度に実行したコミットを選択することでより詳しく調べることができます。その後デプロイの完了を確認したり、デプロイ時にエラーが発生した時はログを確認することができます。

![GitHub Actions 画面](https://user-images.githubusercontent.com/13063165/82118249-34715880-9776-11ea-92e2-dbd21bbf7cb6.png)

## 知っていましたか?

### **動的なルーティングの扱い方**

もし `_id.vue` のような動的なページを扱う時は、これらのルートを nuxt.config.js の generate プロパティに追加する必要があります。

[動的なルーティングの扱い方はドキュメンテーションを確認してください。](/docs/configuration-glossary/configuration-generate#routes)

<div class="Alert">
Nuxt 2.13 以降を使用している場合、サイト内のリンクをクロールする内蔵クローラーがありますので、この点について心配する必要はありません。
</div>

### エラーページの追加方法

デフォルトの 404 ページを表示しないようにするには、layouts フォルダに `error.vue` ファイルを作成します。

### SPA フォールバックの追加方法

一部のページを生成せずに、シングルページアプリケーションとして動作させたい時は、nuxt.config ファイルの generate.excludes プロパティを使用して設定できます。

[SPA フォールバックのドキュメンテーションを確認してください](/docs/configuration-glossary/configuration-generate#exclude)
