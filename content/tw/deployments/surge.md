---
template: guide
title: Surge
description: How to deploy Nuxt app with Surge?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Surge.svg"
  dark: "/img/companies/square/dark/Surge.svg"
---
# Deploy Nuxt with Surge

How to deploy Nuxt app with Surge?

---

Nuxt gives you the possibility to host your web application on any static hosting like [Surge](https://surge.sh/) for example.

To deploy on Surge, first install it on your computer:

::code-group
```bash [Yarn]
yarn global add surge
```
```bash [NPM]
npm install -g surge
```
::

Then, we tell Nuxt to generate our web application:

::code-group
```bash [Yarn]
yarn generate
```
```bash [NPM]
npm run generate
```

It will create a `dist` folder with everything inside ready to be deployed on a static hosting.

We can then deploy it to Surge:

```bash
surge dist/
```

Done :)

If you have a project with [dynamic routes](/docs/directory-structure/pages#dynamic-pages), take a look at the [`generate` configuration](/docs/configuration-glossary/configuration-generate) to tell Nuxt how to generate these dynamic routes if you are using Nuxt <= v2.12.

::alert{type="warning"}
When generating your web application with `nuxt generate`, [the context](/docs/internals-glossary/context) given to [asyncData](/docs/features/data-fetching) will not have `req` and `res`.
::
