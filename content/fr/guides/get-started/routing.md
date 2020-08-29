---
title: Routage
description: La plupart des sites Web ont plus d'une page. Par exemple, une page d'accueil, une page à propos, une page de contact, etc. Pour afficher ces pages, nous avons besoin d'un routeur.
position: 2
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/02_routing?fontsize=14&hidenavigation=1&theme=dark
---

## Itinéraires automatiques

La plupart des sites Web ont plus d'une page (comme une page d'accueil, une page à propos, une page de contact, etc.). Pour afficher ces pages, nous avons besoin d'un routeur. C'est là qu'intervient `vue-router`. Lorsque vous travaillez avec l'application Vue, vous devez configurer un fichier de configuration (c'est-à-dire `router.js`) et y ajouter manuellement tous vos itinéraires. Nuxt.js génère automatiquement la configuration `vue-router` pour vous, en fonction des fichiers Vue fournis dans le répertoire `pages`. Cela signifie que vous n'aurez plus jamais besoin d'écrire une configuration de routeur! Nuxt.js vous offre également la division automatique du code pour tous vos itinéraires.

En d'autres termes, tout ce que vous avez à faire pour avoir un routage dans votre application est de créer des fichiers `.vue` dans le dossier `pages`.

<base-alert type="next">

En savoir plus sur le [Routage](/guides/features/file-system-routing)

</base-alert>

## Navigation

Pour naviguer entre les pages de votre application, vous devez utiliser le composant [NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component). Ce composant est inclus avec Nuxt.js et vous n'avez donc pas à l'importer comme vous le faites avec d'autres composants. C'est similaire à la balise HTML `<a>`, sauf qu'au lieu d'utiliser un `href="/about"` nous utilisons `to="/about"`. Si vous avez déjà utilisé `vue-router`, vous pouvez penser à `<NuxtLink>` en remplacement de `<RouterLink>`

Un simple lien vers la page `index.vue` dans votre dossier `pages`:

```html{}[pages/index.vue]
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

Pour tous liens vers des pages de votre site, utilisez `<NuxtLink>`. Si vous avez des liens vers d'autres sites Web, vous devez utiliser la balise `<a>`. Voir ci-dessous pour un exemple:

```html{}[pages/index.vue]
<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </main>
</template>
```

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<base-alert type="next">

En savoir plus sur le [composant NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component).

</base-alert>
