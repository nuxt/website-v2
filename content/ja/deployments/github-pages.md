---
template: guide
title: GitHub Pages
description: Nuxt アプリケーションを GitHub Pages でどうやってデプロイするのか？
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Github_Pages.svg"
  dark: "/img/companies/square/dark/Github_Pages.svg"
---
# GitHub Pages で Nuxt をデプロイする

Nuxt アプリケーションを GitHub Pages でどうやってデプロイするのか？

---

Nuxtは、例えば [GitHub Pages](https://pages.github.com/) のような任意の静的ホスティング上で Web アプリケーションのホストすることができます。

GitHub Pages 上にデプロイするために、静的 Web アプリケーションを生成する必要があります：

```bash
npm run generate
```

これにより、`dist` フォルダが作成され、その中には GitHub Pages のホスティングにデプロイするためのすべてのものが入っています。プロジェクトのリポジトリにはブランチ `gh-pages` を、ユーザーや組織サイトにはブランチ `master` を指定します。

::alert{type="info"}
<b>情報:</b> GitHub Pages のカスタムドメインを使用し、`CNAME` ファイルを設置する場合は、`static` ディレクトリに CNAME ファイルを設置することを推奨します。これについては、[より詳細なドキュメント](/docs/directory-structure/static)を参照してください。
::

## リポジトリを GitHub Pages にデプロイする

まず、GitHub pages でホストしているため、[static target](/docs/features/deployment-targets)を使用していることを確認してください：

```js[nuxt.config.js]
export default {
  target: 'static'
}
```

特定のリポジトリ用に GitHub Pages を作成し、カスタムドメインを持たない場合、ページの URL は次のような形式になります。`http://<ユーザー名>.github.io/<リポジトリ名>` となります。

[router base](/docs/configuration-glossary/configuration-router)を追加せずに `dist` フォルダをデプロイした場合、デプロイされたサイトにアクセスすると、アセットが不足しているためにサイトが動作していないことがわかります。これは、ウェブサイトのルートが `/` であると仮定しているが、この場合は `/<リポジトリ名>` であるためです。

この問題を解決するには、[router base](/docs/configuration-glossary/configuration-router#base) という設定を `nuxt.config.js` に追加する必要があります：

```js[nuxt.config.js]
export default {
  target: 'static',
  router: {
    base: '/<repository-name>/'
  }
}
```

こうすることで、生成されたパスアセットの先頭にはすべて `/<リポジトリ名>/` が付き、次にコードをリポジトリの GitHub Pages にデプロイしたときに、サイトが正しく動作するようになります。

## コマンドラインによるデプロイ

[push-dir パッケージ](https://github.com/L33T-KR3W/push-dir)も使うことができます：

まず npm でそれをインストールします：

```bash
npm install push-dir --save-dev
```

プロジェクトのリポジトリであればブランチを `gh-pages` に、ユーザーや組織のサイトであればブランチを `master` として、`package.json` に `deploy` コマンドを追加してください。

```js
"scripts": {
  "dev": "nuxt",
  "generate": "nuxt generate",
  "start": "nuxt start",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},
```

その後、静的なアプリケーションを生成し、デプロイします：

```bash
npm run generate
npm run deploy
```

## ビルドサーバーのデプロイ

デプロイメントをさらに一歩進めて、手動でローカルインストールからファイルをコンパイルしてデプロイするのではなく、ビルドサーバーを利用して GitHub リポジトリの新しいコミットを監視し、自動的にチェックアウト、コンパイル、デプロイを行うことができます。

### GitHub Actions

GitHub を使ったソフトウェア自動化のための公式ツールである [GitHub Actions](https://github.com/features/actions) を使ってデプロイするためには、ワークフローを持っていない場合、新しいワークフローを作成するか、既存のワークフローに新しいステップを追加する必要があります。

これは、[GitHub Pages Action](https://github.com/marketplace/actions/github-pages-action)を使用しており、生成されたファイルを `dist` フォルダからデフォルトの GitHub Pages ブランチ `gh-pages` にプッシュします。

既存のワークフローで、次のステップを追加します：

```yaml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

新しいワークフローでは、以下の内容を `.github/workflows` ディレクトリの `cd.yml` という新しいファイルに貼り付けます：

```yaml
name: cd

on: [push, pull_request]

jobs:
  cd:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest]
        node: [14]

    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Setup node env
        uses: actions/setup-node@v2.1.2
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        run: yarn

      - name: Generate
        run: yarn run generate

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

そして、これを自分のリポジトリにコミットします：

```bash
git add .github/workflows/cd.yml
git commit -m "Adding github pages deploy workflow"
git push origin
```

完了すると、`gh-pages` ブランチが更新され、サイトも更新されているのがわかります。

### Travis CI

オープンソースプロジェクト向けの無料ビルドサーバーである [Travis CI](https://travis-ci.org/) を使ってデプロイするには、GitHub アカウントでサインインし、Travis にリポジトリを閲覧する権限を与え、表示されたリストのリポジトリ名の横にあるスイッチを切り替えて、リポジトリのビルドサーバーを有効にします。

![Travis Builder Server Enable](/img/docs/github_pages_travis_01.png)

次に、リポジトリ名の横にある歯車のアイコンをクリックして、ビルドサーバの一般的な設定を行い、スイッチを切り替えて 'Build only if .travis.yml is present' 機能を有効にします。

![Travis Builder Server Settings](/img/docs/github_pages_travis_02.png)

同じ画面で Environment Variables セクションにスクロールダウンし、`GITHUB_ACCESS_TOKEN` という名前の新しい変数を作成します。値の欄には、先ほど作成した GitHub パーソナルアクセストークンのコピーを貼り付けて、'Add' ボタンをクリックします。

![Travis Builder Server Environment Variables](/img/docs/github_pages_travis_03.png)

最後に、リポジトリのルートに以下の内容の `.travis.yml` 設定ファイルを作成します。

```yaml
language: node_js
node_js:
  - '12'

cache:
  directories:
    - 'node_modules'

branches:
  only:
    - master

install:
  - npm install
  - npm run generate

script:
  - echo "Skipping tests"

deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_ACCESS_TOKEN # travis-ci.orgのダッシュボードに設定され、安全とマークされます https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target-branch: gh-pages
  local-dir: dist
  on:
    branch: master
```

そして、これをリポジトリにコミットします

```bash
git add .travis.yml
git commit -m "Adding travis deploy configuration"
git push origin
```

これで、リポジトリに何か変更をコミットすると、Travis の中で、新しいビルドが開始されます

![Travis Builder Server Output](/img/docs/github_pages_travis_04.png)

そして完了すると、GitHub pages のサイトが自動的に更新されているのがわかります。

### Appveyor

オープンソースプロジェクト向けの無料ビルドサーバーである [Appveyor](https://www.appveyor.com) を使ってデプロイするには、新規アカウントにサインアップし、GitHub 認証オプションを選択して、GitHub アカウントを使ってサインインします。

一度サインインしたら、'New project' リンクをクリックし、表示されたリストのリポジトリ名の横にある 'Add' ボタンをクリックして、リポジトリのビルドサーバーを有効にします。

![Appveyor Builder Server Enable](/img/docs/github_pages_appveyor_01.png)

次に、リポジトリのルートに、以下の内容の `appveyor.yml` 設定ファイルを作成します

```yaml
environment:
  # Nuxtにはnode v12以上が必要です
  nodejs_version: '12'
  # 機密データの暗号化 (https://ci.appveyor.com/tools/encrypt)
  github_access_token:
    secure: ENCRYPTED_GITHUB_ACCESS_TOKEN
  github_email:
    secure: ENCRYPTED_GITHUB_EMAIL

# master ブランチでのみ実行
branches:
  only:
    - master

# インストールスクリプト (repoのクローニング後に実行されます)
install:
  # nodejs バージョンをスイッチ
  - ps: Install-Product node $env:nodejs_version
  # モジュールをインストール
  - npm install
  # 静的ファイルを生成
  - npm run generate
  # グローバル git クレデンシャルストアの設定 (https://www.appveyor.com/docs/how-to/git-push/)
  - git config --global credential.helper store
  - ps: Add-Content "$env:USERPROFILE\.git-credentials" "https://$($env:github_access_token):x-oauth-basic@github.com`n"
  - git config --global user.email $env:github_email
  # GitHub pages へのデプロイ
  - npm run deploy

# テストを実行しない
test: off

# 実際にはビルドしない
build: off
```

**_NB_** この設定では、[コマンドラインによるデプロイ](#command-line-deployment)の指示に従って、`package.json` ファイルが設定されていることを前提としています。

ただし、このファイルをコミットする前に、`ENCRYPTED_GITHUB_ACCESS_TOKEN` と `ENCRYPTED_GITHUB_EMAIL` 変数に、先ほどの GitHub パーソナルアクセストークンと、[Appveyor encryption tool](https://ci.appveyor.com/tools/encrypt)を使って暗号化した GitHub のメールアドレスを設定しておく必要があります。

一度更新したら、そのファイルをリポジトリにコミットします

```bash
git add appveyor.yml
git commit -m "Adding appveyor deploy configuration"
git push origin
```

これで、Appveyor 内でリポジトリに変更をコミットすると、新しいビルドが開始されることになります

![Appveyor Builder Server Output](/img/docs/github_pages_appveyor_02.png)

完了すると、GitHub pages のサイトが自動的に更新されているのがわかります。
