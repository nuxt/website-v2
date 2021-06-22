---
title: 'RuntimeConfig properties'
description: RuntimeConfig allows passing dynamic config and environment variables to the nuxt context
category: api-configuration
---

Runtime config allows passing dynamic config and environment variables to the nuxt context. For more information of usage, please see [runtime config guide](/docs/directory-structure/nuxt-config#runtimeconfig)

## `publicRuntimeConfig`

- Type: `Object`

Value of this object is **accessible from both client and server** using `$config`.

## `privateRuntimeConfig`

- Type: `Object`

Value of this object is accessible from **server only** using `$config`. Overrides `publicRuntimeConfig` for server.
