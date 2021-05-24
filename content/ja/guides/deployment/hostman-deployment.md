---
title: Deploy Nuxt on Hostman
description: How to deploy Nuxt.js on Hostman?
menu: Hostman
target: Static
category: deployment
position: 110
---

[Hostman](https://hostman.com/) is a cloud hosting provider for startups and new projects. It helps to get rid of most routine DevOps operations, saving time for developers and money for companies. Hostman employs a services concept to make it easier to develop complex architecture and scale it in one click.

Hostman provides you with the following features:

- Build and deploy static websites, web apps, docker containers and databases.
- Everything is very transparent, because you see the actual hardware your application is operating on and the actual load average, so you can assess them if something goes wrong.
- You can SSH into your Docker container, providing the perfect balance between abstraction and transparency.
- Hostman automatically sets up an SSL certificate for all your domains and puts a CDN in place to deliver your content as fast as possible.
- Hostman automates CI/CD, pulling, building and launching code as soon as you push a new commit to the repository.
- No vendor lock-in.
- Hostman supports 22 frameworks.

## Prerequisites

This guide assumes you already have a Nuxt project to deploy. If you need a project, use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) to get started.

## Setup

---

<strong>Step 1. Create a service</strong>

To deploy a Nuxt static website, click Create in the top-left corner of your [Dashboard](https://dashboard.hostman.com/) and choose Front-end app or static website.

![Hostman dashboard](https://i.imgur.com/bEePHDo.png)

<strong>Step 2. Select the project to deploy</strong>

If you are logged in to Hostman with your GitHub, GitLab or Bitbucket account, at this point you will see the repository with your projects, including the private ones.

Choose the project you want to deploy. It must contain the Nuxt app directory that was automatically created after running the yarn create-nuxt-app command.

To access a different repository, click <strong>Connect another repository</strong>.

If you didn’t use your Git account credentials to log in, you’ll be able to access the necessary account now, and then select the project.

<strong>Step 3. Configure the build settings</strong>

Next, the Website customization window will appear.

![Build configuration](https://i.imgur.com/gIgl5EH.png)

Choose the <strong>Static website</strong> option from the list of frameworks.

The <strong>Directory with app</strong> points at the directory that will contain the project's files after the build. For Nuxt the directory is dist.

The standard <strong>build command</strong> will be:

`yarn build`

It initiates the framework’s command nuxt generate which will create the dist directory with the project’s files.

You can modify the command here if the build process for your project requires it. You can enter multiple commands separated by &&.

<strong>Step 4. Deploy</strong>

Click <strong>Deploy</strong> to start the build process.

Once it starts, you will enter the deployment log. If there are any issues with the code, you will get warning or error messages in the log, specifying the cause of the problem.

Usually the log contains all the debugging data you'll need, but we are also here to help you solve the issues, so do not hesitate to contact us via chat.

When the deployment is complete, you will receive an e-mail notification and also see a similar log entry:

![Log entry](https://i.imgur.com/KwzMxTb.png)

<strong>All done!</strong>

Your project is up and ready.
