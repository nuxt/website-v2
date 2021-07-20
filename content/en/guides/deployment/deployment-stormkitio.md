---
title: Deploy Nuxt with Stormkit.io
description: How to deploy Nuxt with Stormkit.io
menu: Stormkit.io
target: Static & Server
category: deployment
position: 118
---


Easily build, deploy and scale your Nuxt apps with Stormkit. Stormkit has a built-in support for Nuxt to deploy apps in just a few clicks and seconds. Just toggle Serverless or Static mode with a switch under your Environment configuration. We'll understand your <code>publish</code> folder directly from the framework configuration file.

## Prerequisites

This guide assumes you already have a Nuxt project to deploy. If you need a project, use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) to get started or fork Stormkit's [Nuxt Example](https://github.com/stormkit-dev/hackernews-nuxt) before continuing.

## Setup

1. Go to [app.stormkit.io](https://app.stormkit.io) and log in by selecting your git provider.
2. Once logged in, Stormkit will ask you in which provider your codebase is located. Click on the provider once more.
3. If Github, click on ‘Connect more repositories’ and grant Stormkit access to it.
5. Next, select your repository. 

Now, it's connected. You’ll be presented with a page where you see the production environment:

5. Click on <code>Details</code> under the production environment. You’ll be brought to a page where you can deploy your application. 
6. Click on <code>Deploy now</code> button on top right of the screen. 
7. Voilà! Your app is being deployed.

Once you have deployed your application, Stormkit will generate a URL for you. Preview your application using that link. Later, you can connect your domain and publish this deployment so that the users will start to see that version of your application. You can also do staged-rollouts or A/B testing by publishing multiple versions at the same time. You can always cancel the deployment or rollback to an earlier version, whenever you like.

## Further instructions
For more insctructions, including screen shots, check out [Stormkit documentation](https://www.stormkit.io/docs/deployments/configuration).
For instructions for single page applications or hybrid applications check out these [methods](https://www.stormkit.io/docs/deployments/configuration/nuxt).
