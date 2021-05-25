---
title: Deploy Nuxt on Koyeb Serverless Platform
description: Deploy Nuxt on Koyeb Serverless Platform with Docker
menu: Koyeb
target: Server
category: deployment
position: 110.1
---

[Koyeb](https://www.koyeb.com) is a developer-friendly serverless platform to deploy apps globally. The platform lets you seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery.

In this guide, we showcase how to dockerize and deploy a Nuxt application on the Koyeb platform.

> Koyeb allows you to deploy Docker containers from the registry of your choice. In this guide we use the Docker Hub to store our image but you are free to use the [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry), the [GitLab Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/) or any other container registry provider.

## Requirements

To successfully follow and complete this guide, you need:

1. A Nuxt project to deploy. You can use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) to create a Nuxt project and get started
2. A [Koyeb account](https://app.koyeb.com) to deploy and run the dockerized Nuxt application
3. A [Docker Hub](https://hub.docker.com/) account to push the Docker image and deploy it on Koyeb

## Getting started

In your Nuxt application directory run the following command to install dependencies:

```bash
yarn
```

Once the dependencies are installed, launch your application and ensure everything is working fine:

```bash
yarn dev
```

## Dockerize your application

To Dockerize your Nuxt application, you need to create a `Dockerfile` in your project directory containing the content below:

```dockerfile
FROM node:lts as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]
```

To build the Docker image execute the following command:

```bash
docker build . -t <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

This command will build the Docker image with the name <YOUR_DOCKER_HUB>/my-nuxt-project. Once the build is over, you can run a container using the image locally to validate everything is working as expected running:

```bash
docker run -p 3000:3000 <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

Open your browser and navigate to http://localhost:3000 to view your project landing page.

## Push your Docker image to a container registry

Since our Docker image is built and functional in our test, we can now upload it to a container registry. In this documentation, we will store our image on the Docker Hub. In your terminal run the command below to push the image:

```bash
docker push <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

## Deploy the Nuxt application to production on Koyeb

On the Koyeb Control Panel, click the **Create App** button.

In the form, fill the `Docker image` field with the name of the image we previously created which should look like `<YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project`.

Check the box `Use a private registry` and, in the select field, click **Create Registry Secret**.

A modal opens asking for:

- a name for the Secret which will be created, we can use for instance `docker-hub-secret`
- the registry provider to generate the secret containing your private registry credentials, in our case Docker Hub
- your Docker Hub username and password. We recommend you to [generate an access token](https://hub.docker.com/settings/security) from the Docker Hub to use instead of your password.
  Once you've filled all the fields, click the **Create** button.

We don't need to change the _Path_, our app will be available at the root of our domain: `/`.

Give your App a name, i.e `nuxt-app`, and click **Create App**.

_You can add more regions to deploy your applications, set environment variables, and define the horizontal scaling according to your needs._

You will automatically be redirected to the Koyeb App page where you can follow the progress of your Nuxt application deployment. In a few seconds, once your app is deployed, click on the _Public URL_ ending with `koyeb.app`.

Your Nuxt application is now running on Koyeb and benefits from native autoscaling, automatic HTTPS (SSL), auto-healing, and global load-balancing across our edge network.
