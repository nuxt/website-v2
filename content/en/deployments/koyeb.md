---
template: guide
title: Koyeb
description: How to deploy a Nuxt app with Koyeb?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Koyeb.svg"
  dark: "/img/companies/square/dark/Koyeb.svg"
---
# Deploy Nuxt on Koyeb Serverless Platform

How to deploy a Nuxt app with Koyeb?

---

[Koyeb](https://www.koyeb.com) is a developer-friendly serverless platform to deploy apps globally. The platform lets you seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery.

This guide showcases how to deploy a Nuxt application on the Koyeb platform.

## Requirements

To successfully follow and complete this guide, you need:

1. A Nuxt project to deploy. You can use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) to get started
2. A [Koyeb account](https://app.koyeb.com)

## Deploy

Go to the [Koyeb Control Panel](https://app.koyeb.com) and click the **Create App** button to go to the App creation page:

- Select **GitHub** as the deployment method to use
- In the repositories list, select the repository containing your Nuxt application or use our [demo application](https://github.com/koyeb/example-nuxtjs) if you don't have an existing Nuxt project yet
- Specify the branch of your repository to deploy
- In the **Environment variables** add a new variable with key `HOST` and `0.0.0.0` for value. This is required to allow Koyeb to reach your application, perform health checks and expose your application to the mesh network
- Give your Koyeb App a name, for example `nuxt-on-koyeb`, and click the **Create App** button

> You may notice that you don't have to specify any build and run commands. By default, if a `build` script is referenced in your `package.json`, Koyeb will execute it during the build stage. If a `run` script is present, it will then be used to launch your application.

You land on the deployment page, where you can follow the progress of your Nuxt application's deployment. Once the build and deployment are completed, you can access your application by clicking the App URL ending with `koyeb.app` in the Koyeb control panel.

Your Nuxt application is now running on Koyeb and benefits from native autoscaling, automatic HTTPS (SSL), auto-healing, and global load-balancing across our edge network.

## Continuous deployment (CD)

Now that your Nuxt application is deployed, each change you push to your repository will automatically trigger a new build and deployment on the Koyeb Serverless Platform.

Your changes then go live as soon as the deployment passes all necessary health checks. In case of a failure during one of your deployments, we ensure to keep the latest working deployment active, so your application is always up and running.

## Deploy to Koyeb button

You can add the Deploy to Koyeb button to your documentation and readme files to allow your users to deploy your Nuxt application with zero configuration. If you want to create your own **Deploy to Koyeb** button, you can check our [documentation](https://www.koyeb.com/docs/deploy-to-koyeb-button) explaining how to get started.

Below is the Deploy to Koyeb button to deploy the Koyeb Nuxt demo application with one click:

<a href="https://app.koyeb.com/deploy?type=git&repository=github.com/koyeb/example-nuxtjs&branch=main&name=nuxtjs-on-koyeb&env[HOST]=0.0.0.0" target="_blank">
  <img src="https://www.koyeb.com/static/images/deploy/button.svg" alt="Deploy to Koyeb" />
</a>
