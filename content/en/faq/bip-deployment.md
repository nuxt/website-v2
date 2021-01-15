---
title: How to deploy with Bip?
description: How to deploy a Nuxt app with Bip?
menu: Deploy on Bip
category: deployment
position: 204
---

[Bip](https://bip.sh) is a commercial hosting service which provides zero downtime deployment, a global CDN, SSL, unlimited bandwidth and more for Nuxt static websites. Plans are available on a pay as you go, per domain basis.

The following guide will show you how to deploy your Nuxt static site to Bip in just a couple simple steps.

## Prerequisites

- You have [Yarn](https://yarnpkg.com/getting-started/install) installed.
- You have the Bip CLI installed, along with a Bip account and domain ready to use. Visit the [Bip Get Started guide](https://bip.sh/getstarted) for further instructions.

## Step 1: Initial setup

You'll first need a Nuxt project ready to deploy and share with the world. If you need a project, use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app):

Use Yarn to create your new project:

```bash
yarn create nuxt-app <project-name>
```

Follow the prompts to setup your Nuxt project. Ensure that when you reach the 'Deployment target' setting, select 'Static (Static/JAMstack hosting)'.

Once complete, move into your new directory:

```bash
cd <project-name>
```

Next, you'll need to initialize your project with Bip. This only needs to be done once.

```bash
bip init
```

Follow the prompts, where you'll be asked which domain you'd like to deploy to. Bip will detect that you're using Nuxt, and set project settings like the source file directory automatically.

## Step 2: Deploy

You're now ready to deploy your website. To do so, run:

```bash
yarn generate && bip deploy
```

That's it! After a few moments, your website will be deployed.
