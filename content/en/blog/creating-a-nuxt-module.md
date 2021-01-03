---
title: Creating a Nuxt Module
description: Modules are functions that are called sequentially when booting Nuxt. The framework waits for each module to finish before continuing. In this way, modules can customize almost any aspect of your project. Let's create a module that uses ngrok to get a Public URL that you can share while working in Development.
imgUrl: blog/creating-nuxt-module/main.png
date: 2020-11-27
authors:
  - name: "Debbie O'Brien"
    avatarUrl: https://pbs.twimg.com/profile_images/1252900852156772352/JLIVJ-TC_400x400.jpg
    link: https://twitter.com/debs_obrien
tags:
  - Nuxt
  - Modules
  - ngrok
---

Modules are functions that are called sequentially when booting Nuxt. The framework waits for each module to finish before continuing. In this way, modules can customize almost any aspect of your project. Nuxt modules can be incorporated into npm packages. This makes them easy to reuse across projects and to share with the community.

Have you ever been working on something and ran into a bug or just needed to get approval from someone. There are a few options to achieve this such as deploying your application or creating a [CodeSandbox](https://codesandbox.io). But another option is to share your localhost so that as you make changes live in dev mode, it can be seen by anyone who has the link, no matter where they are. We can use [ngrok](https://www.npmjs.com/package/ngrok) to achieve this.

Let's create a module that uses [ngrok](https://www.npmjs.com/package/ngrok) so that you get a public URL which can be seen in the Nuxt CLI when you run the dev command.

<video poster="https://res.cloudinary.com/nuxt/video/upload/v1588091670/ngrok-blog_jqc1di.jpg" loop="loop" plays-inline="true" controls="controls">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1588091670/ngrok-blog_jqc1di.webm" type="video/webm">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1592314331/ngrok-blog_jqc1di.mp4" type="video/mp4">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1588091670/ngrok-blog_jqc1di.ogv" type="video/ogg">
</video>

This module has already been created and deployed and you can use it without creating it yourself by installing the [@nuxtjs/ngrok module](https://ngrok.nuxtjs.org). You can also jump straight into the code by checking out our [CodeSandbox Demo](/examples/modules-internal). However if you are interested in seeing how it was created or want to create your own module then continue reading.

- [How does it work?](#how-does-it-work)
- [Let's get started](#lets-get-started)
- [Creating our module](#creating-our-module)
- [Investigating nuxt.options](#investigating-nuxtoptions)
- [Start the ngrok tunnel when the Nuxt server is listening](#start-the-ngrok-tunnel-when-the-nuxt-server-is-listening)
- [Adding an authtoken](#adding-an-authtoken)
- [ngrok in action](#ngrok-in-action)
- [Add our URL to the Nuxt CLI](#add-our-url-to-the-nuxt-cli)
- [Closing our ngrok](#closing-our-ngrok)
- [Full code example](#full-code-example)
- [Conclusion](#conclusion)
- [Further exploration](#further-exploration)

## How does it work?

ngrok will create a http-https-tcp tunnel. Check out the [ngrok npm package](https://www.npmjs.com/package/ngrok) for more details. We need to be able to connect to an ngrok port when the Nuxt server is listening. Once we get a public URL we want to print it to the Nuxt CLI so we can easily click it to open and share it.

![nuxt cli](/blog/creating-nuxt-module/nuxt-cli.png)

## Let's get started

To use a custom module within our app we need to create a modules folder if you haven't already got one. Inside it let's create a folder called ngrok and add an index.js file into it. You can use your editor to create these folders and files or use the commands below.

```bash
mkdir modules modules/ngrok
touch modules/ngrok/index.js
```

In order to use our module we will need to register it by adding it in the [buildModules](/docs/2.x/directory-structure/modules/#buildmodules) section of our `nuxt.config.js` file. BuildModules are only imported during development and build time which is perfect for our module as we only need it to work in dev mode.

```js{}[nuxt.config.js]
export default {
  buildModules: ['~/modules/ngrok']
}
```

As we will use the [ngrok npm package](https://www.npmjs.com/package/ngrok) we will need to install as a dev dependency.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add --dev ngrok
```

</code-block>
<code-block label="npm">

```bash
npm install --dev ngrok
```

  </code-block>
</code-group>

## Creating our module

Now that we have installed and registered everything we can now go ahead and create our module. The first thing we need to do is to import ngrok from our `node_modules` folder into our `index.js` file of our ngrok module.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'
```

We can then create a function using export default which allows us to use this function in another file.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {}
```

Inside this function we can start by destructuring nuxt and making it equal to `this`, which means we won't have to write `this.nuxt`each time we refer to nuxt.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  const { nuxt } = this

  // My nuxt module code goes here
}
```

## Investigating nuxt.options

We only want to run ngrok in dev mode and not in production so how would we do that?

First let's log to our console `nuxt.options` so we can see all the nuxt options that are available to us. This is the `nuxt.config.js` mixed with the default values.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  const { nuxt } = this

  console.log(nuxt.options)

  // My nuxt module code goes here
}
```

There are a lot of values in here. What we want is a way to see when we are in dev mode and you will see from the console that in our `nuxt.options` we have `dev` set to `true`. That means we can add an if statement to check if dev is false and return if we are not in dev mode.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  const { nuxt } = this

  // Don't start ngrok in production
  if (nuxt.options.dev === false) {
    return
  }

  // More coming below :)
}
```

## Start the ngrok tunnel when the Nuxt server is listening

We want to start the ngrok tunnel when the nuxt sever is listening. To do that we need a way to hook into Nuxt and listen for a port so we can connect. That's where Nuxt hooks come in. [Nuxt hooks](/docs/2.x/internals-glossary/internals-nuxt) are listeners to Nuxt events. We will use the `nuxt.hook()` passing in the value of `listen` followed by an async function. In this function we need to pass in the server, followed by the port.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  // [...]

  // https://nuxtjs.org/docs/2.x/internals-glossary/internals-nuxt#hooks
  nuxt.hook('listen', async function (server, { port }) {

  })
}
```

We then await the ngrok connection passing in the value of port and assigning it to our url, which is defined outside the function. We can now run a `console.log` inside our function to see the result of our url.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  // [...]

  let url

  // https://nuxtjs.org/docs/2.x/internals-glossary/internals-nuxt#hooks
  nuxt.hook('listen', async function (server, { port }) {

    url = await ngrok.connect(port)

    // We have our public url here
    console.log(url)
  })
}
```

Now if you run the dev command and open up your console you will see your url from ngrok. Opening that URL will show you your website in dev mode.

## Adding an authtoken

Although this should work we might run into some issues regarding max connections and other limitations and therefore it is best to setup up an [authtoken](https://ngrok.com/) which can be done for free from the ngrok website.

Once we have our token we can set up our `.env` file and add our token.

```bash{}[.env]
NGROK_TOKEN=my-authtoken-from-ngrok
```

<base-alert type="warning">

Don't forget to make sure your `.env`file has been added to your `.gitignore`.

</base-alert>

We can now set a const of `options` equal to the options from the ngrok property of our `nuxt.config.js` or equal to an empty object in case we don't define any options. We also add a const of `authtoken` equal to the `NGROK_TOKEN` from our `.env` file or `options.authtoken` which is the same as `nuxt.options.ngrok.authtoken`, in case this value was defined directly in our `ngrok` property in the our `nuxt.config.js`.

We can then await the ngrok authtoken passing in the token value.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  // [...]

  // Read ngrok property defined in nuxt.config.js
  const options = nuxt.options.ngrok || {}
  const authtoken = process.env.NGROK_TOKEN || options.authtoken

  // [...]
}
```

We can then await the ngrok authtoken passing in the value of `token`which we have defined above.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  // [...]

  // Read ngrok property defined in nuxt.config.js
  const options = nuxt.options.ngrok || {}
  const token = process.env.NGROK_TOKEN || options.authtoken

  // https://nuxtjs.org/docs/2.x/internals-glossary/internals-nuxt#hooks
  nuxt.hook('listen', async function (server, { port }) {

    if(options.authtoken){
      await ngrok.authtoken(options.authtoken)
    }

    url = await ngrok.connect(port)

    // We have our public url here
    console.log(url)
  })
}
```

## ngrok in action

But is it really working? If I change anything in development will they see it on that URL? Let's take a look. If we go to our index page and add some text. For example "URL from ngrok:" you will now see that change in your [localhost](http://localhost) and also in the url from ngrok that you printed to console. How cool.

```html{}[pages/index.vue]
<p>URL from ngrok:</p>
```

Let's add our url from ngrok to our vue template. We can get access to our ngrok url by using the publicRuntimeConfig which is then accessible using `$config` from the context. We do this by assigning our url to the to the `nuxt.options.publicRuntimeConfig.ngrok`. We can now remove our `console.log`as this is no longer needed.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'

export default function () {
  // [...]

  // https://nuxtjs.org/docs/2.x/internals-glossary/internals-nuxt#hooks
  nuxt.hook('listen', async function (server, { port }) {

    if(options.authtoken){
      await ngrok.authtoken(options.authtoken)
    }

    url = await ngrok.connect(port)

    // Add the public url to the public runtimeConfig
    nuxt.options.publicRuntimeConfig.ngrok = { url }

  })
}
```

We can now access this in our Vue template using `$config`and if we wrap it in a link tag then it will be clickable.

```html{}[modules/ngrok/index.js]
<template>
  <p>URL from ngrok: <a :href="$config.ngrok.url">{{ $config.ngrok.url }}</a></p>
</template>
```

Let's run the dev server and now you should see your URL from ngrok printed out on the page. How cool.

## Add our URL to the Nuxt CLI

In general we probably won't want to print the URL onto the page. It would be much better if we could add it to the Nuxt CLI so we can see it every time we run the dev command and be able to click and open it from there. We can then share that link with whoever we want without having to expose it in our .vue file or in our console.

We can access the CLI through the `nuxt.options`. You can see this by logging the `nuxt.options`to the console and searching for cli. If you do you will see that we have a [`badgeMessages`](/docs/2.x/configuration-glossary/configuration-cli#badgemessages) property. This is the green box that shows us the messages of Environment, Rendering and Target as well as what port the app is listening on.

We can use the `push()` method to push our URL to the Nuxt CLI.

```js{}[modules/ngrok/index.js]
// [...]
nuxt.hook('listen', async function (server, { port }) {
    // [...]

    // Add the public url to the Nuxt box in the CLI
    nuxt.options.cli.badgeMessages.push(url)

  })
})
```

Now when we run the dev command our url appears in the green box. We can of course improve this further by adding some text before the URL so our users know what it is.

```js{}[modules/ngrok/index.js]
// [...]
nuxt.hook('listen', async function (server, { port }) {
    // [...]

    // Add the public url to the Nuxt box in the CLI
    nuxt.options.cli.badgeMessages.push(`Public URL: ${url}`)

  })
})
```

We can also change the color of this link and underline it by using a package called [chalk](https://www.npmjs.com/package/chalk) which allows us to style our terminal.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'
import chalk from 'chalk'

// [...]
```

We can then use `chalk.underline.yellow` or any other color from the chalk package.

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'
import chalk from 'chalk'
// [...]

  nuxt.hook('listen', async function (server, { port }) {
    // [...]

    // Change the color using chalk
    nuxt.options.cli.badgeMessages.push(
      `Public URL: ${chalk.underline.yellow(url)}`
    )
  })
}
```

You will now see when running the dev command that we have our Public URL with the link underlined and in a yellow color. This can then be clicked and opened and of course shared with anyone, anywhere in the world so they can watch your changes in dev mode live.

![nuxt cli](/blog/creating-nuxt-module/nuxt-cli.png)

## Closing our ngrok

We should always close our ngrok connection when we close Nuxt. To do this we can hook into Nuxt and look for when it will close and run a function to disconnect ngrok.

```js{}[modules/ngrok/index.js]
// [...]
export default function () {
  // [...]

  nuxt.hook('close', function () {
    url && ngrok.disconnect()
  })
}
```

## Full code example

```js{}[modules/ngrok/index.js]
import ngrok from 'ngrok'
import chalk from 'chalk'

export default function () {
  const { nuxt } = this

  // Don't start ngrok in production
  if (nuxt.options.dev === false) {
    return
  }

  // Read ngrok property defined in nuxt.config.js
  const options = nuxt.options.ngrok || {}
  const authtoken = process.env.NGROK_TOKEN

  // https://nuxtjs.org/docs/2.x/internals-glossary/internals-nuxt#hooks
  nuxt.hook('listen', async function (server, { port }) {

    if(options.authtoken){
      await ngrok.authtoken(options.authtoken)
    }


    url = await ngrok.connect(port)

    // Add the public url to the public runtimeConfig
    nuxt.options.publicRuntimeConfig.ngrok = { url }

    // Add the public url to the Nuxt box in the CLI
    nuxt.options.cli.badgeMessages.push(
    `Public URL: ${chalk.underline.yellow(url)}`
    )

  })

  nuxt.hook('close', function () {
    url && ngrok.disconnect()
  })
}
```

## Conclusion

We have just created our local module which we can use in our project. This sometimes is enough but sometimes we want to share our module across projects or even better, with the Nuxt Community. To do this we need to create our module using a module template and publish it to npm.

As of today we are working on improving this template to make it more user friendly. All modules are created using typescript and should contain tests, docs and an example.

## Further exploration

Check our our [CodeSandbox example](/examples/modules-internal) for this module.

Check out our published [ngrok module](https://ngrok.nuxtjs.org/).

Check out our list of [Nuxt modules](https://modules.nuxtjs.org/).
