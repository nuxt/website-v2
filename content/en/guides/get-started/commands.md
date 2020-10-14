---
title: Commands and Deployment
description: Nuxt.js comes with a set of useful commands, both for development and production purpose.
position: 4
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/02_routing?fontsize=14&hidenavigation=1&theme=dark
---

Nuxt.js comes with a set of useful commands, both for development and production purpose.

## Using in package.json

You should put these commands in the `package.json`:

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate"
}
```

Then, you can launch your commands via `yarn <command>` (example: `yarn dev`).

## Development Environment

To launch Nuxt in development mode with hot reloading:

<code-group>
  <code-block label="npx" active>

```bash
nuxt
```

  </code-block>

  <code-block label="Yarn">

```bash
yarn dev
```

  </code-block>

  <code-block label="NPM">

```bash
npm run dev
```

  </code-block>
</code-group>

## List of Commands

You can run different commands depending on the [target](/guides/features/deployment-targets) :

### target: `server` (default value)

- **nuxt dev** - Launch a development server on `http://localhost:3000` with hot-reloading.
- **nuxt build** - Build your application with webpack and minify the JS & CSS (for production).
- **nuxt start** - Start the production server (after running `nuxt build`). Use it for Node.js hosting like Heroku, Digital Ocean, etc.

### target: `static`

- **nuxt dev** - Launch a development server on localhost:3000 with hot-reloading.
- **nuxt generate** - Build the application (if needed), generate every route as a HTML file and statically export to `/dist` (used for static hosting).
- **nuxt start** - serve the dist/ directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying.

## Production Deployment

Nuxt.js lets you choose between three modes to deploy your application: SSR, Static Generated, or SPA.

### Server-Side Rendered Deployment (Universal SSR)

To deploy a SSR application we use `target: server`, where server is the default value.

<code-group>
  <code-block label="npx" active>

```bash
nuxt build
```

  </code-block>
  <code-block label="Yarn">

```bash
yarn build
```

  </code-block>
  <code-block label="NPM">

```bash
npm run build
```

  </code-block>
</code-group>

Once you application is built you can use the `start` command to see a production version of your application

<code-group>
  <code-block label="npx" active>

```bash
nuxt start
```

  </code-block>
  <code-block label="Yarn">

```bash
yarn start
```

  </code-block>
  <code-block label="NPM">

```bash
npm run start
```

  </code-block>
</code-group>

<base-alert type="info">

we recommend putting `.nuxt` in `.npmignore` or `.gitignore`.

</base-alert>

### Static Generated Deployment (Pre-rendered)

Nuxt.js gives you the ability to host your web application on any static hosting.

To deploy a static generated site make sure you have `target: static` in your `nuxt.config.js`.(For Nuxt >= 2.13:)

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

<code-group>
  <code-block label="npx" active>

```bash
nuxt generate
```

  </code-block>
  <code-block label="Yarn">

```bash
yarn generate
```

  </code-block>
  <code-block label="NPM">

```bash
npm run generate
```

  </code-block>
</code-group>

Nuxt.js will create a `dist` folder with everything inside ready to be deployed on a static hosting service.

#### **Fail on Error**

To return a non-zero status code when a page error is encountered and let the CI/CD fail the deployment or build, you can use the `--fail-on-error` argument.

<code-group>
<code-block label="npx" active>

```bash
nuxt generate --fail-on-error
```

  </code-block>
  <code-block label="Yarn">

```bash
yarn generate --fail-on-error
```

  </code-block>
  <code-block label="NPM">

```bash
npm run generate --fail-on-error
```

  </code-block>

</code-group>

As of Nuxt v2.13 there is a crawler installed that will now crawl your link tags and generate your routes when using the command `nuxt generate` based on those links.

<base-alert>

**Warning:** dynamic routes are ignored by the `generate` command when using Nuxt <= v2.12: [API Configuration generate](/api/configuration-generate#routes)

</base-alert>

<base-alert type="info">

When generating your web application with `nuxt generate`, [the context](/guides/internals-glossary/context) given to [asyncData](/guide/async-data) and [fetch](/guide/vuex-store#the-fetch-method) will not have `req` and `res`.

</base-alert>

### Single Page Application Deployment (SPA)

When `ssr` is set to `false` in our `nuxt.config.js` file (`ssr: false`) and we run the `build`/`generate` command, Nuxt will generate our dist folder with all generated routes. These HTML files common meta and resource links, but not page content. The content is generated in the browser, on the client side.

That means, we can't use SPA'S for applications where content depends on user authentication or a real time API (at least for the first load).

#### **For Static Hosting**

```js{}[nuxt.config.js]
export default {
  target: 'static'
  ssr: false
}
```

<code-group>
  <code-block label="npx" active>

```bash
nuxt generate
```

  </code-block>
  <code-block label="Yarn">

```bash
yarn generate
```

  </code-block>
  <code-block label="NPM">

```bash
npm run generate
```

  </code-block>
</code-group>

Deploy the created `dist/` folder to your static hosting like Surge, GitHub Pages or nginx.

#### **For Server Hosting**

```js{}[nuxt.config.js]
export default {
  ssr: false
}
```

<code-group>
  <code-block label="npx" active>

```bash
nuxt build
```

  </code-block>
  <code-block label="Yarn">

```bash
yarn build
```

  </code-block>
  <code-block label="NPM">

```bash
npm run build
```

  </code-block>
</code-group>

Deploy the created `dist/` folder to your Node.js hosting like Heroku, Digital Ocean.

### Nuxt as a Middleware

Another possible deployment method is to use Nuxt as a middleware in frameworks while `ssr` is `false`. This helps reduce server load and uses Nuxt in projects where SSR is not possible.

## What's next?

<base-alert type="next">

Read our [FAQ](/faq) to find examples for deployments to popular hosts.

</base-alert>

<base-alert type="next">

Read our [Going Full Static](/blog/going-full-static) blog post.

</base-alert>

<base-alert type="next">

Read our [Nuxt Static Improvements](/blog/nuxt-static-improvements) blog post.

</base-alert>

</div>
