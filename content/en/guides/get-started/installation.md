---
title: Installation
description: Here, you will find information on setting up and running a Nuxt.js project in 4 steps.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prerequisites

- [node](https://nodejs.org) - at least v10.13 _We recommend you have the latest LTS version installed._
- A text editor, we recommend [VS Code](https://code.visualstudio.com/) with the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension or [WebStorm](https://www.jetbrains.com/webstorm/)
- A terminal, we recommend using VS Code's [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) or [WebStorm terminal](https://www.jetbrains.com/help/webstorm/terminal-emulator.html).

## Using create-nuxt-app

To get started quickly you can use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).

Make sure you have npx installed (npx is shipped by default since npm 5.2.0) or npm v6.1 or yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn create nuxt-app <project-name>
```

  </code-block>
  <code-block label="npx">

```bash
npx create-nuxt-app <project-name>
```

  </code-block>
    <code-block label="npm">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

It will ask you some questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc. To find out more about all the options see the [Create Nuxt app](https://github.com/nuxt/create-nuxt-app/blob/master/README.md).

Once all questions are answered, it will install all the dependencies. The next step is to navigate to the project folder and launch it:

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
yarn dev
```

  </code-block>
  <code-block label="npm">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

The application is now running on [http://localhost:3000](http://localhost:3000). Well done!

<base-alert type="info">

Another way to get started with Nuxt.js is to use [CodeSandbox](https://template.nuxtjs.org) which is a great way for quickly playing around with Nuxt.js and/or sharing your code with other people.

</base-alert>

## Manual Installation

Creating a Nuxt.js project from scratch only requires one file and one directory.

We will use the terminal to create the directories and files, feel free to create them using your editor of choice.

### Set up your project

Create an empty directory with the name of your project and navigate into it:

```bash
mkdir <project-name>
cd <project-name>
```

_Replace `<project-name>` with the name of your project._

Create the `package.json` file:

```bash
touch package.json
```

Fill the content of your `package.json` with:

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

`scripts` define Nuxt.js commands that will be launched with the command `npm run <command>` or `yarn <command>`.

#### **What is a package.json file?**

The `package.json` is like the ID card of your project. It contains all the project dependencies and much more. If you don't know what the `package.json` file is, we highly recommend you to have a quick read on the [npm documentation](https://docs.npmjs.com/creating-a-package-json-file).

### Install Nuxt

Once the `package.json` has been created, add `nuxt` to your project via `npm` or `yarn` like so below:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```

  </code-block>
  <code-block label="npm">

```bash
npm install nuxt
```

  </code-block>
</code-group>

This command will add `nuxt` as a dependency to your project and add it to your `package.json`. The `node_modules` directory will also be created which is where all your installed packages and dependencies are stored.

<base-alert type="info">

A `yarn.lock` or `package-lock.json` is also created which ensures a consistent install and compatible dependencies of your packages installed in your project.

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

It is important that this page is called `index.vue` as this will be the default home page Nuxt shows when the application opens.

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
  <code-block label="npm">

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
