---
template: guide
title: Kinsta Application Hosting
description: How to deploy Nuxt on Kinsta Application Hosting?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/full/light/kinsta.svg"
  dark: "/img/companies/full/dark/kinsta.svg"
---
# Deploy Nuxt on Kinsta Application Hosting

How to deploy Nuxt on Kinsta Application Hosting?

---

[Kinsta Application Hosting](https://kinsta.com/application-hosting) is a service that lets you build and deploy your web apps directly from your Git repository.

## SSR - configuration
**Kinsta Application Hosting** is using Buildpacks to determine what is needed to build and deploy the application.

Whenever a deployment is initiated the `npm build` command is run, followed by the `npm start` command.

This means you, that your `package.json` should look like this:

```json
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  },
  "dependencies": {
    "nuxt": "^3.0.0"
  }
}
```

## SSG - configuration
**Kinsta Application Hosting** is using Buildpacks to determine what is needed to build and deploy the application.

Whenever a deployment is initiated the `npm build` command is run, followed by the `npm start` command.

First, we have to install the `serve` package and prepare the `package.json` like this:

```json
{
  "name": "my-app",
  "scripts": {
    "build": "nuxt generate",
    "start": "serve ./.output/public"
  },
  "dependencies": {
    "nuxt": "^3.0.0",
    "serve": "^14.1.2"
  }
}
```

## Deployment
Once your project's GitHub repository is connected, you can trigger manual deploys to Kinsta Application Hosting in the **MyKinsta Admin Panel**. You can also set up automatic deployments in your admin panel.

### Configuring a new Kinsta application
1. Register on [Kinsta Application Hosting](https://kinsta.com/signup/?product_type=app-db) or login directly to [My Kinsta](https://my.kinsta.com/) admin panel.
2. Go to the **Applications** tab.
3. Connect your GitHub repository.
4. Press the **Add service** > **Application** button.
5. Follow the wizard steps.
6. Your application is deployed.