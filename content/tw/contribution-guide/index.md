---
template: post
title: 貢獻指南
description: Any contribution to Nuxt is more than welcome!
back: false
---

> Any contribution to Nuxt is more than welcome!

## 回報問題

A great way to contribute to the project is to send a detailed report when you encounter an issue: [Bug report](https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=bug-report&template=bug-report.md&title=)

Please make sure to include a reproduction repository or [CodeSandBox](https://template.nuxtjs.org/) so that bugs can be reproduced without great efforts. The better a bug can be reproduced, the faster we can start fixing it!

## Pull Requests

We'd love to see your pull requests, even if it's just to fix a typo!

However, any significant improvement should be associated to an existing [feature request](https://feature.nuxtjs.org/) or [bug report](https://bug.nuxtjs.org/).

### 入門

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [Nuxt repository](https://github.com/nuxt/nuxt.js) to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. 執行 `npm install` 或 `yarn install` 來安裝依賴套件。

> _提醒： **npm** and **yarn** have been seen to miss installing dependencies. To remedy that, you can either delete the `node_modules` folder in your example app and install again or do a local install of the missing dependencies._

> If you are adding a dependency, please use `yarn add`. The `yarn.lock` file is the source of truth for all Nuxt dependencies.

### Setup

在執行任何測試前，請確認所有依賴套件已安裝，並建置所有套件：

```sh
yarn
yarn build
```

### 測試結構

A great PR, whether it includes a bug fix or a new feature, will often include tests. To write great tests, let us explain our test structure:

#### 固件

固件 (位於 `tests/fixtures`) 包含了數個 Nuxt 應用程式。To keep build time as short as possible, we don't build an own Nuxt application per test. Instead, the fixtures are built (`yarn test:fixtures`) before running the actual unit tests.

Please make sure to **alter** or **add a new fixture** when submitting a PR to reflect the changes properly (if applicable).

Also, don't forget to **rebuild** a fixture after changing it by running the corresponding test with `jest test/fixtures/my-fixture/my-fixture.test.js`!

#### 單元測試

The unit tests can be found in `tests/unit` and will be executed after building the fixtures. A fresh Nuxt server will be used per test so that no shared state (except the initial state from the build step) is present.

After adding your unit tests, you can run them directly:

```sh
jest test/unit/test.js
```

Or you can run the whole unit test suite:

```sh
yarn test:unit
```

Again, please be aware that you might have to rebuild your fixtures before!

### 測試您的更動

While working on your PR you will likely want to check if your fixture is set up correctly or debug your current changes.

To do so you can use the Nuxt script itself to launch for example your fixture or an example app:

```sh
yarn nuxt examples/your-app
yarn nuxt test/fixtures/your-fixture-app
```

> `npm link` could also (and does, to some extent) work for this, but it has been known to exhibit some issues. That is why we recommend calling `yarn nuxt` directly to run examples.

### 範例

If you are working on a larger feature, please set up an example app in `examples/`. This will help greatly in understanding changes and also help Nuxt users to understand the feature you've built in-depth.

### Lint

As you might have noticed already, we are using ESLint to enforce a code standard. Please run `yarn lint` before committing your changes to verify that the code style is correct. If not, you can use `yarn lint --fix` or `npm run lint -- --fix` (no typo!) to fix most of the style changes. If there are still errors left, you must correct them manually.

### 文件

If you are adding a new feature, or refactoring or changing the behavior of Nuxt in any other manner, you'll likely want to document the changes. Please do so with a PR to the [docs](https://github.com/nuxt/docs/pulls) repository. You don't have to write documentation up immediately (but please do so as soon as your pull request is mature enough).

### Final checklist

When submitting your PR, there is a simple template that you have to fill out. Please tick all appropriate "answers" in the checklists.

### 疑難排解

#### Debugging tests on macOS

Searching for `getPort()` will reveal it's used to start new Nuxt processes during tests. It's been seen to stop working on macOS at times and may require you to manually set a port for testing.

Another common issue is Nuxt processes that may hang in memory when running fixture tests. A ghost process will often prevent subsequent tests from working. Run `ps aux | grep -i node` to inspect any hanging test processes if you suspect this is happening.
