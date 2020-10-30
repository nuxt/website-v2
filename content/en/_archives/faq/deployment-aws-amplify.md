---
title: 'How to Deploy on AWS w/ Amplify?'
description: Static Hosting on AWS with the Amplify Console
menu: Deploy on AWS w/ Amplify Console
category: deployment
position: 201
---

AWS stands for Amazon Web Services.  
The AWS Amplify Console is a static web hosting service.
Hosting a **static generated** Nuxt app on AWS w/ the Amplify Console is powerful and cheap.

## Instructions

First, push your Nuxt app to the Git provider of your choice. Then, visit the [Amplify Console](https://console.aws.amazon.com/amplify/home). Click the **GET STARTED** button under the **Deploy** header if you haven't used Amplify Hosting before, otherwise click the **Connect App** button.

### From your existing code

On the "From your existing code" page, select your Git provider and click **Continue**.

### Add repository branch

On the "Add repository branch" page, select your repository and the branch you want to deploy. Then, click **Next**.

### Configure build settings

On the "Configure build settings" page, click the `Edit` button under the "Build and test settings". Change the following:

1. Set the **build** commands to `npm run generate`.
2. Set the `baseDirectory` location to be `dist`.

The settings should look like this once you are done editing them:

```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - npm run generate
  artifacts:
    # IMPORTANT - Please verify your build output directory
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Then, click **Save** and **Next**.

### Review

On the review page, click **Save and deploy**.

Then, your application will deploy. This may take a few minutes.

Once `Provision`, `Build`, `Deploy`, and `Verify` are green, click on the URL that the Amplify Console provides to view your site.
