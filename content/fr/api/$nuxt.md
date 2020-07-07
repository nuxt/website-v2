---
title: "$nuxt: L'assistant NuxtJS"
description: $nuxt est un assistant conçu pour améliorer l'expérience utilisateur.
menu: $nuxt
category: utils
position: 1
---

`$nuxt` est un assistant conçu pour améliorer l'expérience utilisateur.

- `isOffline`
  - Type: `Boolean`
  - Description: `true` lorsque la connexion Internet de l'utilisateur se déconnecte
- `isOnline`
  - Type: `Boolean`
  - Description: L'opposé de `isOffline`

Exemple:

`layouts/default.vue`:

```html
<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <nuxt/>
  </div>
</template>
```
