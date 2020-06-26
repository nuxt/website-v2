---
title: Installation
description: There is not much you need in order to get started with Nuxt.js. Below you will find a few recommendations and then we will walk you through the 4 steps so you can have your first Nuxt.js project up and and running in no time.
position: 1
category: Get Started
categoryPosition: 1
csb_link: https://codesandbox.io/embed/github/nuxt-academy/book-get-started/tree/master/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prerequisites

There is not much you need in order to get started with Nuxt.js. Below you will find a few recommendations and then we will walk you through the 4 steps so you can have your first Nuxt.js project up and and running in no time. 

<base-alert type="info">

Another way to get started with Nuxt.js is to use [CodeSandbox](https://template.nuxtjs.org) which is a great way for quickly playing around with Nuxt.js or sharing your code with other people. 

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - at least v8.9.0

*We recommend you have the latest version installed.* 

### Text editor

Use whatever you like, but we recommend [VSCode](https://code.visualstudio.com/) and further examples will be shown with it.

### Terminal

Use whatever you like, but we recommend to use the VSCode terminal and further examples will be shown with it.

## Starting from scratch

Creating a Nuxt.js project from scratch only requires one file and one directory.

In this example we will use the terminal to create the directories and files but feel free to create them using your editor if you prefer. 

### First step: Set up your project

To get started create an empty directory with the name of your project and navigate into it:

```bash
mkdir <project-name>
cd <project-name>
```

*Replace `<project-name>` with the name of your project.*

Then create a file named `package.json`:

```bash
touch package.json
```

Open the package.json file in your favourite code editor and fill it with this JSON content: 

```json
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "export": "nuxt export"
  }
}
```

`scripts` define Nuxt.js commands that will be launched with the command `npm run <command>`.

<base-alert type="info"> 

**What is a package.json file?**

</base-alert>

The `package.json` is like the ID card of your project. If you don't know what the `package.json` file is, we highly recommend you to have a quick read on the [NPM documentation](https://docs.npmjs.com/creating-a-package-json-file).

### Second step: Install nuxt in your project

Once the `package.json` has been created, you need to add `nuxt` to your project via the NPM or Yarn command below:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add nuxt
  ```

  </code-block>
  <code-block label="NPM" >

  ```bash
  npm install nuxt
  ```

  </code-block>
</code-group>

This command will add `nuxt` as a dependency to your project and it will add it to your `package.json` automatically. The `node_modules` directory will also be created which is where all your installed packages and their dependencies are stored. 

<base-alert type="info"> 

A `package-lock.json` is also created which ensures a consistent install and compatible dependencies of your packages installed in your project.

</base-alert>

### Third step: Create your first page

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

Open the `index.vue` page in your editor and add the following content:

```html
<template>
  <h1>Hello world!</h1>
</template>
```

### Final step: **Launch the project**

Run your project by typing the NPM command below in your terminal:

```bash
npm run dev
```

<base-alert type="info"> 

*We use the `npm run dev` command because we are running our application in development mode.*

</base-alert>

The application is now running on **[http://localhost:3000](http://localhost:3000/).** 

Open it in your browser by clicking the link in your terminal and you should see the text "Hello World" we copied in the previous step. 

<base-alert type="info"> 

When launching *Nuxt.js in development mode, it will listen for file changes in most directories, so there is no need to restart the application when e.g. adding new pages.*

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>

### 🍄 Bonus step:

Create a page named `fun.vue` in the `pages` directory. 

Add a `<template></template>` and include a heading with a funny sentence inside. 

Then, go to your browser and see your new page on **[http://localhost:3000/fun](http://localhost:3000/fun).**

<base-alert type="info"> 

*Create a directory name `more-fun` and put an `index.vue` file inside. This will give the same result as creating a `more-fun.vue` file*

</base-alert>
