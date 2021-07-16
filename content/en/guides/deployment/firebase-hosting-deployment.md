---
title: Deploy Nuxt on Firebase hosting
description: How to deploy Nuxt.js on Firebase hosting?
menu: Firebase hosting
target: Static
category: deployment
position: 119
---

Deploying to [Firebase hosting](https://firebase.google.com/products/hosting/) is a fast and easy solution for hosting your prerendered Nuxt application on Firebase.

In this guide, we build the application locally, editing the [firebase.json](https://firebase.google.com/docs/hosting/full-config) configuration file to fit our needs. After that, we set up the [Firebase CLI](https://firebase.google.com/docs/cli) and then deploy the application to Firebase hosting.

## Getting Started

Make sure you have a Google Account, a Firebase project with an empty Hosting site. Make sure to download and install Firebase CLI as explained [here](https://firebase.google.com/docs/cli) and log into your Google Account.

## Configure hosting behavior

To initialize firebase in the project, run `firebase init`.


`? What do you want to use as your public directory?` -> `dist`
`? Configure as a single-page app (rewrite all urls to /index.html)?` -> `n`

After the initialization is complete, open the file `firebase.json` and change the file to look something like the one below.

```json
{
  "hosting": {
    "site": "YOUR_SITE", // this is only needed if you want to host multiple sites on the same Firebase project
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

## Build and deploy the app

Now build your app with `npm run build` or `yarn build`.

At this point, your app is ready to be deployed to Firebase hosting. Now just run the following command:

```
firebase deploy --only hosting
```

And you done! Your Nuxt.js static application is now hosted on Firebase hosting!

## Further Information

- To add a custom domain just click the `Add custom domain`, follow the instructions and you're done (free SSL certificate included).
- To deploy to a prewiew, run ` firebase hosting:channel:deploy preview_name`
