---
title: 'The generate Property'
description: Configure the generation of your universal web application to a static web application.
menu: generate
category: configuration-glossary
position: 10
---

- Type: `Object`

> Configure the generation of your universal web application to a static web application.

When calling `nuxt.generate()`, Nuxt.js will use the configuration defined in the `generate` property.

```js{}[nuxt.config.js]
export default {
  generate: {
    ...
  }
}
```

## cache

> Introduced in v2.14.0

- Type: `Object` or `false`

This option is used by `nuxt generate` with [static target](/docs/2.x/features/deployment-targets#static-hosting) to avoid re-building when no tracked file has been changed.

Defaults:

```js
{
  ignore: [
    '.nuxt', // buildDir
    'static', // dir.static
    'dist', // generate.dir
    'node_modules',
    '.**/*',
    '.*',
    'README.md'
  ]
}
```

If you want to avoid re-building when changing a configuration file, just add it to the list by providing the `cache.ignore` option:

```js{}[nuxt.config.js]
export default {
  generate: {
    cache: {
      ignore: ['renovate.json'] // ignore changes applied on this file
    }
  }
}
```

## concurrency

- Type: `Number`
- Default: `500`

The generation of routes are concurrent, `generate.concurrency` specifies the amount of routes that run in one thread.

## crawler

- Type: `boolean`
- Default: true

As of Nuxt >= v2.13 Nuxt.js comes with a crawler installed that will crawl your relative links and generate your dynamic links based on these links. If you want to disable this feature you can set the value to `false`

```js
export default {
  generate: {
    crawler: false
  }
}
```

## dir

- Type: `String`
- Default: `'dist'`

Directory name created when building web applications using the `nuxt generate` command.

## devtools

- Type: `boolean`
- Default: `false`

Configure whether to allow [vue-devtools](https://github.com/vuejs/vue-devtools) inspection.

If you already activated through nuxt.config.js or otherwise, devtools enable regardless of the flag.

## exclude

- Type: `Array`
  - Items: `String` or `RegExp`

It accepts an array of string or regular expressions and will prevent generation of routes matching them. The routes will still be accessible when `generate.fallback` is used.

Taking this examples of structure:

```bash
-| pages/
---| index.vue
---| admin/
-----| about.vue
-----| index.vue
```

By default, running `nuxt generate` a file will be created for each route.

```bash
-| dist/
---| index.html
---| admin/
-----| about.html
-----| item.html
```

When adding a regular expression which matches all routes with "ignore", it will prevent the generation of these routes.

```js{}[nuxt.config.js]
export default {
  generate: {
    exclude: [
      /^\/admin/ // path starts with /admin
    ]
  }
}
```

```bash
-| dist/
---| index.html
```

You can also exclude a specific route by giving a string:

```js{}[nuxt.config.js]
export default {
  generate: {
    exclude: ['/my-secret-page']
  }
}
```

## fallback

- Type: `String` or `Boolean`
- Default: `200.html`

```js{}[nuxt.config.js]
export default {
  generate: {
    fallback: '404.html'
  }
}
```

The path to the fallback HTML file. It should be set as the error page, so that also unknown routes are rendered via Nuxt. If unset or set to a falsy value, the name of the fallback HTML file will be `200.html`. If set to `true`, the filename will be `404.html`. If you provide a string as a value, it will be used instead.

```{}[nuxt.config.js]
fallback: false;
```

If working with statically generated pages then it is recommended to use a `404.html` for error pages and for those covered by [excludes](/docs/2.x/configuration-glossary/#exclude) (the files that you do not want generated as static pages).

```js{}[nuxt.config.js]
fallback: true
```

However, Nuxt allows you to configure any page you like so if you don't want to use the `200.html` or `404.html` you can add a string and then you just have to make sure you redirect to that page instead. This is of course not necessary and is best to redirect to `200.html`/`404.html`.

```js{}[nuxt.config.js]
fallback: 'fallbackPage.html'
```

_Note: Multiple services (e.g. Netlify) detect a `404.html` automatically. If you configure your webserver on your own, please consult it's documentation to find out how to set up an error page (and set it to the `404.html` file)_

## interval

- Type: `Number`
- Default: `0`

Interval in milliseconds between two render cycles to avoid flooding a potential API with calls from the web application.

## minify

- **Deprecated!**
- Use [build.html.minify](/docs/2.x/configuration-glossary/configuration-build#htmlminify) instead

## routes

- Type: `Array`

<base-alert type="info">

As of Nuxt v2.13 there is a crawler installed that will crawl your link tags and generate your routes when running `nuxt generate`.

If have unlinked pages (such as secret pages) and you would like these to also be generated then you can use the `generate.routes` property.

</base-alert>

<base-alert>

Dynamic routes are ignored by the `generate` command when using `Nuxt <= v2.12`

</base-alert>

Example:

```bash
-| pages/
---| index.vue
---| users/
-----| _id.vue
```

Only the route `/` will be generated by Nuxt.js.

If you want Nuxt.js to generate routes with dynamic params, you need to set the `generate.routes` property to an array of dynamic routes.

We add routes for `/users/:id`:

```js{}[nuxt.config.js]
export default {
  generate: {
    routes: ['/users/1', '/users/2', '/users/3']
  }
}
```

Then when we launch `nuxt generate`:

```bash
[nuxt] Generating...
[...]
nuxt:render Rendering url / +154ms
nuxt:render Rendering url /users/1 +12ms
nuxt:render Rendering url /users/2 +33ms
nuxt:render Rendering url /users/3 +7ms
nuxt:generate Generate file: /index.html +21ms
nuxt:generate Generate file: /users/1/index.html +31ms
nuxt:generate Generate file: /users/2/index.html +15ms
nuxt:generate Generate file: /users/3/index.html +23ms
nuxt:generate HTML Files generated in 7.6s +6ms
[nuxt] Generate done
```

Great, but what if we have **dynamic params**?

1. Use a `Function` which returns a `Promise`.
2. Use a `Function` with a `callback(err, params)`.

### Function which returns a Promise

```js{}[nuxt.config.js]
import axios from 'axios'

export default {
  generate: {
    routes() {
      return axios.get('https://my-api/users').then(res => {
        return res.data.map(user => {
          return '/users/' + user.id
        })
      })
    }
  }
}
```

### Function with a callback

```js{}[nuxt.config.js]
import axios from 'axios'

export default {
  generate: {
    routes(callback) {
      axios
        .get('https://my-api/users')
        .then(res => {
          const routes = res.data.map(user => {
            return '/users/' + user.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  }
}
```

### Speeding up dynamic route generation with `payload`

In the example above, we're using the `user.id` from the server to generate the routes but tossing out the rest of the data. Typically, we need to fetch it again from inside the `/users/_id.vue`. While we can do that, we'll probably need to set the `generate.interval` to something like `100` in order not to flood the server with calls. Because this will increase the run time of the generate script, it would be preferable to pass along the entire `user` object to the context in `_id.vue`. We do that by modifying the code above to this:

```js{}[nuxt.config.js]
import axios from 'axios'

export default {
  generate: {
    routes() {
      return axios.get('https://my-api/users').then(res => {
        return res.data.map(user => {
          return {
            route: '/users/' + user.id,
            payload: user
          }
        })
      })
    }
  }
}
```

Now we can access the `payload` from `/users/_id.vue` like so:

```js
async asyncData ({ params, error, payload }) {
  if (payload) return { user: payload }
  else return { user: await backend.fetchUser(params.id) }
}
```

## subFolders

- Type: `Boolean`
- Default: `true`

By default, when running `nuxt generate`, Nuxt.js will create a directory for each route & serve an `index.html` file.

Example:

```bash
-| dist/
---| index.html
---| about/
-----| index.html
---| products/
-----| item/
-------| index.html
```

When set to false, HTML files are generated according to the route path:

```js{}[nuxt.config.js]
export default {
  generate: {
    subFolders: false
  }
}
```

```bash
-| dist/
---| index.html
---| about.html
---| products/
-----| item.html
```
