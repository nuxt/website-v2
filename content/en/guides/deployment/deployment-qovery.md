---
title: Deploy Nuxt on Qovery
description: How to deploy Nuxt.js on Qovery?
menu: Qovery
target: Static & Server
category: deployment
position: 115
---

[Qovery](https://www.qovery.com) is a fully-managed cloud platform that runs on your AWS, Digital Ocean and Scaleway account where you can host static sites, backend APIs, databases, cron jobs, and all your other apps in one place.

Static sites are **completely free** on Qovery and include the following:

- Continuous, automatic builds & deploys from GitHub and GitLab.
- Automatic SSL certificates through [Let's Encrypt](https://letsencrypt.org).
- Free managed PostgreSQL.
- Free SSD storage.
- Unlimited collaborators.
- Unlimited [custom domains](https://docs.qovery.com/guides/getting-started/setting-custom-domain/).

## Prerequisites

This guide assumes you already have a Nuxt project to deploy. If you need a project, follow the [Get Started](/docs/2.x/get-started/installation) guide.

## Setup

Follow the procedure below to set up Nuxt on Qovery:

### 1. Create a Qovery account.

Visit the [Qovery dashboard](https://console.qovery.com) to create an account if you don't already have one.

### 2. Create a project
* Click on **Create project** and give a name to your project.
* Click on **Next**.

![Create a project](https://hub.qovery.com/img/heroku/heroku-2.png)

### 3. Create a new environment
* Click on **Create environment** and give a name (e.g. staging, production).

![Create a new environment](https://hub.qovery.com/img/heroku/heroku-3.png)

### 3. Add an application

* Click on **Create an application**, give a name and select your GitHub or GitLab repository where your Nuxt.js app is located.
* Define the main branch name and the root application path.
* Click on **Create**.

![Add your application](https://hub.qovery.com/img/rust/rust.png)

After the application is created:

* Navigate to your application **Settings**
* Select **Port**
* Add port used by your Nuxt.js application

### 8. Deploy the app on Qovery
All you have to do now is to navigate to your application and click on **Deploy**

![Deploy the app](https://hub.qovery.com/img/heroku/heroku-1.png)

That's it. Watch the status and wait till the app is deployed.

To open the application in your browser, click on **Action** and **Open** in your application overview

## Support
Chat with Qovery developers on [Discord](https://discord.qovery.com) if you need help.
