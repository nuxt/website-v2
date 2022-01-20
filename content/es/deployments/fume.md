---
template: guide
title: Fume
description: How to deploy Nuxt on Fume?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Fume.svg"
  dark: "/img/companies/square/dark/Fume.svg"
---
# Deploy Nuxt on Fume

How to deploy Nuxt on Fume?

---

[Fume](https://fume.app/) is an operations control platform powered by AWS.

Fume includes the following features:

- Serverless structures supporting both Server and Static with Lambda and CloudFront.
- [Automated](https://github.com/marketplace/actions/fume-deployment) deployments with rollbacks with the click of a button
- Metrics and cost prediction for each environment
- Domain control - import hosts, issues certificates, and map records to environments
- Integrated notifications to Slack, Discord, and other collaboration platforms

## Setup

Get a production-ready URL in 2 minutes with these steps:

- Head to [Fume](https://fume.app), connect and plug in your AWS account
- Create a Team, and a Nuxt project
- Run the following command inside your projects root folder

::code-group
```bash [Yarn]
yarn global add fume-cli
fume deploy
```
```bash [NPM]
npm install -g fume-cli
fume deploy
```
::
