---
title: How to deploy on Google Cloud Run?
description: How to deploy NuxtJS on Google Cloud Run?
menu: Deploy on Google Cloud Run
category: deployment
position: 208
---

[Google Cloud Run](https://cloud.google.com/run) is a fully managed compute platform for deploying and scaling containerized applications quickly and securely.

In this guide, we simply upload the entire project folder to Google Cloud Build with a Dockerfile. After the upload, Cloud Build will automatically generate a container. Then we will deploy this container to Google Cloud Run which will start it with the `start` script in our package.json.

## Getting Started

Make sure you have a Google Cloud Account, a project and the accesses as editor on Cloud Build and Cloud Run. Furthermore, make sure to download and install the Cloud SDK (CLI) from Google as explained [here](https://cloud.google.com/sdk/) and log into your Google Cloud Account. If you do not want to download the Cloud SDK, be aware that you can use gcloud CLI from the Google Cloud Console.

Now, let's do few checks!

If the Cloud Build API and the Cloud Run API are not enabled, enable them:

```bash
# Enabling Cloud Build
$ gcloud services enable cloudbuild.googleapis.com

# Enabling Cloud Run
$ gcloud services enable run.googleapis.com
```

Go in your application directory and install dependencies:

```bash
# For yarn users
$ yarn

# For npm users
$ npm install
```

Start the application locally:

```bash
# For yarn users
$ yarn dev

# For npm users
$ npm run dev
```

Check that everything works.

## Application configuration

!Attention: from now and on, the port is set to `3000`, change all occurrences if needed.

The host should not be set to localhost, but to 0.0.0.0. You can update the server configuration in `nuxt.config.js`:

```javascript
export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
```

More information [here](/docs/2.x/configuration-glossary/configuration-server).

Or, add this to your package.json file:

```json
{
  "config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "3000",
      "timing": false
    }
  }
}
```

## Containerize your application

Now, we will create a container with Cloud Build.

You need to add to your Nuxt app a `Dockerfile`. Create a new file named `Dockerfile` in your root project directory and add the following content:

For yarn users:

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .
EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]
```

For npm users:

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start" ]
```

Run the following command to start the build process:

`gcloud builds submit --tag gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 .`

!Attention: if you want to implement continuous delivery or .env files configurations, you will have to use a [Cloud Build configuration file](https://cloud.google.com/cloud-build/docs/build-config).

## Deploying your application on Cloud Run

Run the following command to deploy your application:

`gcloud run deploy --image=gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --platform managed --port 3000`

Allow unauthenticated invocations if you want to set up a public access.

Be aware that Cloud Run applications will have a default concurrency value of 80 (each container instance will handle up to 80 requests at a time). You can specify the concurrency value this way:

`gcloud run deploy --image=gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --platform managed --port 3000 --concurrency <YOUR_CONCURRENCY_VALUE>`

Run the following command to check if the deployment was created successfully:

`gcloud run services list --platform managed`

A list of Cloud Run services is displayed. Click on the URL of your deployment and enjoy the result!
