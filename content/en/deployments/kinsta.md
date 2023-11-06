---
template: guide
title: Kinsta Application Hosting
description: How to deploy Nuxt on Kinsta?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/full/light/kinsta.svg"
  dark: "/img/companies/full/dark/kinsta.svg"
---
# Deploy Nuxt on Kinsta Application Hosting and Static Site Hosting

How to deploy Nuxt on Kinsta?

---

[Kinsta Application Hosting](https://kinsta.com/application-hosting) is a service that lets you build and deploy your web apps directly from your Git repository. 

[Static Site Hosting](https://kinsta.com/static-site-hosting/) is a service that lets you deploy static websites from your Git repository straight to the Edge.

## Static Site Hosting
1. Login or create an account to view your [MyKinsta](https://my.kinsta.com/) dashboard.

2. Authorize Kinsta with your Git provider.

3. Select **Static Sites** from the left sidebar and press **Add sites**.

4. Select the repository and branch you want to deploy.

5. During the build settings, Kinsta will automatically try to fill out the **Build command**, **Node version**, and **Publish directory**. If it won't, fill out the following:

   - Build command: `npm run generate`
   - Node version: `18.16.0`
   - Publish directory: `.output/public`

6. Click the **Create site**.

There is also a [Starter](https://github.com/kinsta/hello-world-nuxt) if you want to give it a spin.

## Application Hosting
### SSR - configuration

**Kinsta Application Hosting** is using Buildpacks to determine what is needed to build and deploy the application.

Whenever a deployment is initiated the `npm build` command is run, followed by the `npm start` command.

This means, that your `package.json` should look like this:

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
There is also a [Starter](https://github.com/kinsta/hello-world-nuxt), if you want to give it a spin.

### SSG - configuration
**Kinsta Application Hosting** is using Buildpacks to determine what is needed to build and deploy the application.

Whenever a deployment is initiated the `npm build` command is run, followed by the `npm start` command.

First, we have to install the [`serve`](https://www.npmjs.com/package/serve) package and prepare the `package.json` like this:

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

### Deployment
Once your project's GitHub repository is connected, you can trigger manual deploys to Kinsta Application Hosting in the **MyKinsta Admin Panel**. You can also set up automatic deployments in your admin panel.

#### Configuring a new Kinsta application
1. Register on [Kinsta Application Hosting](https://kinsta.com/signup/?product_type=app-db) or login directly to [My Kinsta](https://my.kinsta.com/) admin panel.
2. Go to the **Applications** tab.
3. Connect your GitHub repository.
4. Press the **Add service** > **Application** button.
5. Follow the wizard steps.
6. Your application is deployed.
