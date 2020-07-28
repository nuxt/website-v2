---
title: Installation
description: There is not much you need in order to get started with Nuxt.js. Below you will find a few recommendations and then we will walk you through the 4 steps so you can have your first Nuxt.js project up and and running in no time.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prerequisites

There is not much you need in order to get started with Nuxt.js. Below you will find a few recommendations. Then we will walk you through the 4 steps so you can have your first Nuxt.js project up and and running in no time.

<base-alert type="info">

Another way to get started with Nuxt.js is to use [CodeSandbox](https://template.nuxtjs.org) which is a great way for quickly playing around with Nuxt.js or sharing your code with other people.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - at least v8.9.0

_We recommend you have the latest version installed._

### Text editor

Use whatever you like, but we recommend [VSCode](https://code.visualstudio.com/) and further examples will be shown with it.

### Terminal

Use whatever you like, but we recommend to use the VSCode terminal and further examples will be shown with it.

## Starting from scratch

Creating a Nuxt.js project from scratch only requires one file and one directory.

In this example we will use the terminal to create the directories and files but feel free to create them using your editor if you prefer.

### Set up your project

To get started create an empty directory with the name of your project and navigate into it:

```bash
mkdir <project-name>
cd <project-name>
```

_Replace `<project-name>` with the name of your project._

Then create a file named `package.json`:

```bash
touch package.json
```

Open the package.json file in your favorite code editor and fill it with this JSON content:

```json{}[package.json]
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start",
  }
}
```

`scripts` define Nuxt.js commands that will be launched with the command `npm run <command>`.

#### **What is a package.json file?**

The `package.json` is like the ID card of your project. If you don't know what the `package.json` file is, we highly recommend you to have a quick read on the [NPM documentation](https://docs.npmjs.com/creating-a-package-json-file).

### Install nuxt

Once the `package.json` has been created, you need to add `nuxt` to your project via the NPM or Yarn command below:

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

This command will add `nuxt` as a dependency to your project and it will add it to your `package.json` automatically. The `node_modules` directory will also be created which is where all your installed packages and their dependencies are stored.

<base-alert type="info">

A `yarn.lock` or `package-lock.json` is also created which ensures a consistent install and compatible dependencies of your packages installed in your project.

</base-alert>

### Create your first page

Nuxt.js transforms every `*.vue` file inside the `pages` directory as a route for the application.

Create the `pages` directory in your project:

```bash
mkdir pages
```

Then, create an `index.vue` file in the `pages` directory:

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

Run your project by typing the NPM command below in your terminal:

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

We use the the dev command because we are running our application in development mode.

</base-alert>

The application is now running on **[http://localhost:3000](http://localhost:3000/).**

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

Create a directory name `more-fun` and put an `index.vue` file inside. This will give the same result as creating a `more-fun.vue` file

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
npx create nuxt-app <project-name>
```

  </code-block>
    <code-block label="NPM">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

It will ask you some questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc.), when answered, it will install all the dependencies so the next step is to navigate to the project folder and launch it with:

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
Yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

The application is now running on [http://localhost:3000](http://localhost:3000).
