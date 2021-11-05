---
template: guide
title: Cleavr
description: How to deploy a Nuxt app with Cleavr?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/cleavr.svg"
  dark: "/img/companies/square/dark/cleavr.svg"
---
# Deploy Nuxt with Cleavr

How to deploy a Nuxt app with Cleavr?

---

[Cleavr](https://cleavr.io) is a server management console that integrates with multiple VPS (cloud hosting) providers and helps you configure servers to host your Nuxt apps as well as deploys your Nuxt apps in just a couple of clicks.

Cleavr includes the following features:

- Provision and configure servers ready to run Nuxt SSR and Static applications
- Secure servers and provides free SSL certs
- Deploy code from GitHub, GitLab, and Bitbucket repositories with zero-downtime
- Auto-installs and configures PM2 (with cluster mode enabled) for Nuxt SSR apps
- GitHub Actions integration to build app with no additional configuration required

## Prerequisites

- Your Cleavr account is connected to your VPS and version control (e.g. GitHub, GitLab, Bitbucket) providers
- You have a Nuxt SSR or Static project ready to deploy
- You have an existing provisioned server

## Step 1: Initial setup

In Cleavr, navigate to the server to add the new app to and select **Add Site**.

Select either **Nuxt SSR** or **Nuxt Static** web app type depending on which target you intend to deploy. Fill out the remaining website info and click **Add**.

This will add the site to your server and configure the server with any missing required environment dependencies.

Once the site has been successfully added, go to the Web App section and navigate to settings > code repository for the web app that was added.

Fill in your version control provider, repository, and branch to deploy fields and then click **Update**.

## Step 2: Deploy

You're now ready to deploy your web app.

On the web app's deployment page, click **Deploy**.

The deployment process will begin and complete in a few moments.

[View the Cleavr documentation for more info.](https://docs.cleavr.io/guides/nuxt)
