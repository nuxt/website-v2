---
title: Installation
description: Here, you will find information on setting up and running a Nuxt.js project in 4 steps.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prerequisites

Here, you will find information on setting up and running a Nuxt.js project in 4 steps.

<base-alert type="info">

Another way to get started with Nuxt.js is to use [CodeSandbox](https://template.nuxtjs.org) which is a great way for quickly playing around with Nuxt.js and/or sharing your code with other people.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - at least v8.9.0

_We recommend you have the latest version installed._

### Text editor

Use whatever you like, but we recommend [VSCode](https://code.visualstudio.com/).

### Terminal

Use whatever you like, but we recommend using VSCode's [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

## Starting from scratch

Creating a Nuxt.js project from scratch only requires one file and one directory.

In this particular example, we will use the terminal to create the directories and files, but feel free to create them using your editor of choice.

### Set up your project

To get started, create an empty directory with the name of your project and navigate into it:

```bash
mkdir <project-name>
cd <project-name>
```

_Replace `<project-name>` with the name of your project._

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
    "generate": "nuxt generate"
    "start": "nuxt start",
  }
}
```

`scripts` define Nuxt.js commands that will be launched with the command `npm run <command>`.

#### **What is a package.json file?**

The `package.json` is like the ID card of your project. If you don't know what the `package.json` file is, we highly recommend you to have a quick read on the [NPM documentation](https://docs.npmjs.com/creating-a-package-json-file).

### Install nuxt

Once the `package.json` has been created, add `nuxt` to your project via `npm` or `yarn` like so below:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```
