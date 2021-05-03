---
title: Deploy Nuxt on Heroku
description: How to deploy Nuxt.js on Heroku?
menu: Heroku
target: Server
category: deployment
position: 109
---

We recommend you read the [Heroku documentation for Node.js](https://devcenter.heroku.com/articles/nodejs-support).

<div class="Promo__Video">
  <a href="https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku?friend=nuxt" target="_blank">
    <p class="Promo__Video__Icon">
      Watch a free lesson on <strong>How to deploy Nuxt.js to Heroku</strong> on Vue School 
    </p>
  </a>
</div>

You can set up and configure your app via the [Heroku dashboard](https://devcenter.heroku.com/articles/heroku-dashboard) or the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

First, we create our app. Then we add the Node.js [buildpack](https://devcenter.heroku.com/articles/buildpacks) and configure the app to listen on the host `0.0.0.0`:

```bash
heroku create myapp
heroku buildpacks:set heroku/nodejs
heroku config:set HOST=0.0.0.0
```

Your app's Settings section on the Heroku dashboard should contain this:

![nuxt config vars Heroku](https://user-images.githubusercontent.com/23453691/116850762-81ea0e00-abf1-11eb-9f70-260721a1d525.png)

Finally, we can push the app on Heroku with:

```bash
git push heroku master
```

To deploy a non-master branch to Heroku use:

```bash
git push heroku develop:master
```

where `develop` is the name of your branch.

You can optionally configure automatic deploys from a selected branch of your app's GitHub repository in the Deploy section of your app in the Heroku dashboard.

Voilà! Your Nuxt.js application is now hosted on Heroku!
