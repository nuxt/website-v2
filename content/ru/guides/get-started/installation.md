---
title: Установка
description: Здесь вы найдете информацию по настройке и запуску Nuxt.js проекта за 4 шага.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Необходимые условия

Здесь вы найдете информацию по настройки и запуску Nuxt.js проекта за 4 шага.

<base-alert type="info">

Другой способ начать работать с Nuxt.js - это использовать [CodeSandbox](https://template.nuxtjs.org), это отличный вариант, чтобы поигать с Nuxt.js и/или поделиться вашим кодом с другими.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - не ниже v8.9.0

_Мы рекомендуем использовать последнюю доступную версию._

### Редактор кода

Используйте тот, который вам нравится, но мы рекомендуем [VSCode](https://code.visualstudio.com/).

### Терминал

Используйте тот, который вам нравится, но мы рекомендуем интегрированный в VSCode [терминал](https://code.visualstudio.com/docs/editor/integrated-terminal).

## Настройка с нуля

Для создания Nuxt.js проекта с нуля требуется только один файл и одна директория.

В этом примере мы будем использовать терминал для создания директорий и файлов, но вы можете создавать их как вам удобно.

### Настройка проекта

Для начала создайте пустую директорию с именем проекта и перейдите в нее:

```bash
mkdir <project-name>
cd <project-name>
```

_Замените `<project-name>` на имя вашего проекта._

Затем создайте файл с именем `package.json`:

```bash
touch package.json
```

Откройте файл package.json в вашем редакторе и вставьте такой JSON:

```json{}[package.json]
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```

В секции `scripts` указаны Nuxt.js команды, которые будут запущены при выполнении `npm run <имя_команды>`.

#### **Что такое файл package.json?**

`package.json` это как паспорт вашего проекта. Если вы хотите больше узнать о файле `package.json`, то мы рекомендуем почитать [документацию NPM](https://docs.npmjs.com/creating-a-package-json-file).

### Установка nuxt

После создания файла `package.json`добавьте `nuxt` в ваш проект используя `npm` или `yarn`:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt
```

  </code-block>
</code-group>

Эта команда добавит `nuxt` как зависимость вашего проекта и обновит файл `package.json` автоматически. Директория `node_modules` также будет создана, в ней будут храниться установленные пакеты и их зависимости.

<base-alert type="info">

`yarn.lock` или `package-lock.json` также буду созданы для обеспечения совместимости зависимостей вашего проекта.

</base-alert>

### Create your first page

Nuxt.js transforms every `*.vue` file inside the `pages` directory as a route for the application.

Create the `pages` directory in your project:

```bash
mkdir pages
```

Then, create an `index.vue` file in the `pages` directory:

```bash
touch pages/index.vue
```

It is important that this page is called `index.vue` as this will be the default page Nuxt shows when the application opens. It is the home page and it must be called index.

Open the `index.vue` file in your editor and add the following content:

```html{}[pages/index.vue]
<template>
  <h1>Hello world!</h1>
</template>
```

### Start the project

Run your project by typing one of the following commands below in your terminal:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
npm run dev
```

  </code-block>
</code-group>

<base-alert type="info">

We use the dev command when running our application in development mode.

</base-alert>

The application is now running on **[http://localhost:3000](http://localhost:3000/).**

Open it in your browser by clicking the link in your terminal and you should see the text "Hello World" we copied in the previous step.

<base-alert type="info">

When launching Nuxt.js in development mode, it will listen for file changes in most directories, so there is no need to restart the application when e.g. adding new pages

</base-alert>

<base-alert type="warning">

When you run the dev command it will create .nuxt folder. This folder should be ignored from version control. You can ignore files by creating a .gitignore file at the root level and adding .nuxt.

</base-alert>

### Bonus step

Create a page named `fun.vue` in the `pages` directory.

Add a `<template></template>` and include a heading with a funny sentence inside.

Then, go to your browser and see your new page on **[http://localhost:3000/fun](http://localhost:3000/fun).**

<base-alert type="info">

Create a directory named `more-fun` and put an `index.vue` file inside. This will give the same result as creating a `more-fun.vue` file

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## Using create-nuxt-app

To get started quickly you can use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).

Make sure you have npx installed (npx is shipped by default since NPM 5.2.0) or npm v6.1 or yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn create nuxt-app <project-name>
```

  </code-block>
  <code-block label="NPX">

```bash
npx create-nuxt-app <project-name>
```

  </code-block>
    <code-block label="NPM">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

It will ask you some questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc.), when answered, it will install all the dependencies. The next step is to navigate to the project folder and launch it:

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

The application is now running on [http://localhost:3000](http://localhost:3000). Well done!
