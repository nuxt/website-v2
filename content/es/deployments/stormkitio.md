---
template: guide
title: Stormkit.io
description: How to deploy Nuxt with Stormkit.io?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Stormkit.svg"
  dark: "/img/companies/square/dark/Stormkit.svg"
---
# Deploy with Stormkit

How to deploy Nuxt with Stormkit.io?

---

Easily build, deploy and scale your Nuxt applications with [Stormkit.io](https://www.stormkit.io). It supports instant rollbacks, serverless-side logic, snippet injections, multiple development environments and more...

## Prerequisites

This guide assumes you already have a Nuxt project to deploy. If you need a project, use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) to get started or fork Stormkit's [Nuxt Example](https://github.com/stormkit-dev/hackernews-nuxt) before continuing.

## Setup

1. Go to [app.stormkit.io](https://app.stormkit.io) and log in by selecting your git provider.
2. Once logged in, Stormkit will ask you in which provider your codebase is located. Click on the provider once more.
3. If Github, click on ‘Connect more repositories’ and grant Stormkit access to it.
4. Next, select your repository. This will create the application on Stormkit.
5. On your application's page, find the **Production** environment and click on that.
6. Click on edit to configure your application. You will provide the build command and the
   environment variables in this screen.

## Static websites

You don't have to do anything for static websites. Applications built with `nuxt generate` will be handled out of the box.

## Single page applications

For single page applications, all you have to do is to provide a `stormkit.config.yml` which redirects
all requests to `index.html`. To do so, create a `stormkit.config.yml` file on the top level of your project and specify the following rule:

```
app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
```

## Hybrid applications

For hybrid applications, you'll have to turn on the `Serverless` toggle on the build configuration page. This will tell Stormkit to serve the requests from the lambdas instead of the CDN. You can find more on [this guide](https://www.stormkit.io/docs/deployments/configuration/nuxt#hybrid) to configure your hybrid serverless applications.

## Hosting using Stormkit

Stormkit generates a unique URL for each deployment. You can preview your application using these links. Later, you can connect your domain and publish any deployment so that the users will start to see that version of your application. You can also do staged-rollouts or A/B testing by publishing multiple versions at the same time.

## Support

If you need additional support, you can chat with Stormkit developers and other community members on [Discord](https://discord.gg/6yQWhyY).
