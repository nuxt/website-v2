---
title: 'The server Property'
description: Nuxt.js let you define the server connection variables for your application inside `nuxt.config.js`.
menu: server
category: configuration-glossary
position: 26
---

- Type: `Object`

> Nuxt.js let you define the server connection variables for your application inside `nuxt.config.js`.

## Basic example:

```js{}[nuxt.config.js]
export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
```

This lets you specify the [host and port](/docs/2.x/features/configuration#edit-host-and-port) for your Nuxt.js server instance.

## Example using HTTPS configuration

```js{}[nuxt.config.js]
import path from 'path'
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  }
}
```

You can find additional information on creating server keys and certificates on `localhost` on [certificates for localhost](https://letsencrypt.org/docs/certificates-for-localhost/) article.

## Example using sockets configuration

```js{}[nuxt.config.js]
export default {
  server: {
    socket: '/tmp/nuxt.socket'
  }
}
```

## timing

- Type: `Object` or `Boolean`
- Default: `false`

Enabling the `server.timing` option adds a middleware to measure the time elapsed during server-side rendering and adds it to the headers as 'Server-Timing'

### Example using timing configuration

`server.timing` can be an object for providing options. Currently, only `total` is supported (which directly tracks the whole time spent on server-side rendering)

```js{}[nuxt.config.js]
export default {
  server: {
    timing: {
      total: true
    }
  }
}
```

### Using timing API

The `timing` API is also injected into the `response` on server-side when `server.time` is enabled.

#### Syntax

```js
res.timing.start(name, description)
res.timing.end(name)
```

#### Example using timing in serverMiddleware

```js
export default function (req, res, next) {
  res.timing.start('midd', 'Middleware timing description')
  // server side operation..
  // ...
  res.timing.end('midd')
  next()
}
```

Then `server-timing` head will be included in response header like:

```bash
Server-Timing: midd;desc="Middleware timing description";dur=2.4
```

Please refer to [Server-Timing MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing) for more details.
