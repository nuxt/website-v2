---
title: 'telemetry Property'
description: 'Nuxt.js collects anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users.'
menu: telemetry
category: configuration-glossary
position: 30
---

## The telemetry Property

> Nuxt v2.13.0 introduces Nuxt Telemetry to collect anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users.

- Type: `Boolean`
- Default is based on your user preferences

## Why collect Telemetry

Nuxt.js has grown a lot from it's [initial release](https://github.com/nuxt/nuxt.js/releases/tag/v0.2.0) (7 Nov 2016) and we are keep listening to [community feedback](https://github.com/nuxt/nuxt.js/issues) to improve it.

However, this manual process only collects feedback from a subset of users that takes the time to fill the issue template and it may have different needs or use-case than you.

Nuxt Telemetry collects **anonymous telemetry data about general usage**. This helps us to accurately gauge feature usage and customization across all our users. This data will let us better understand how Nuxt.js is used globally, measuring improvements made (DX and performances) and their relevance.

We collect multiple events:

- Command invoked (nuxt dev, nuxt build, etc)
- Versions of Nuxt.js and Node.js
- General machine information (MacOS/Linux/Windows and if command is run within CI, ci name)
- Duration of the Webpack build and average size of the application, as well as the generation stats (when using nuxt generate)
- What are the public dependency of your project (Nuxt modules)

The code is open source and available at https://github.com/nuxt/telemetry.

## Opting-out

You can disable [Nuxt Telemetry](https://github.com/nuxt/telemetry) for your project with several ways:

1. Using `npx nuxt telemetry disable`

```bash
npx nuxt telemetry [status|enable|disable] [-g,--global] [dir]
```

2. Using an environment variable

```bash
NUXT_TELEMETRY_DISABLED=1
```

3. Setting `telemetry: false` in your `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  telemetry: false
}
```

You can learn more about Nuxt Telemetry and the events sent on https://github.com/nuxt/telemetry
