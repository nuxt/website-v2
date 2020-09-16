---
title: Routage
description: La plupart des sites Web ont plus d'une page. Par exemple, une page d'accueil, une page à propos, une page de contact, etc. Pour afficher ces pages, nous avons besoin d'un routeur.
position: 2
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/02_routing?fontsize=14&hidenavigation=1&theme=dark
---

## Routes automatiques

La plupart des sites Web possèdent plus d'une page (comme une page d'accueil, une page à propos, une page de contact, etc.). Pour afficher ces pages, nous avons besoin d'un routeur. C'est là qu'intervient `vue-router`.

Lorsque vous travaillez avec Vue, vous devez configurer un fichier de configuration (comme `router.js`) et y ajouter manuellement toutes vos routes. Nuxt.js génère automatiquement la configuration `vue-router` pour vous, en fonction des fichiers Vue fournis dans le répertoire `pages`.

Cela signifie que vous n'aurez plus jamais besoin d'écrire une configuration de routeur ! Nuxt.js vous offre également le découpage dynamique de code pour toutes vos routes.

En d'autres termes, tout ce que vous avez à faire pour avoir un routage dans votre application est de créer des fichiers `.vue` dans le dossier `pages`.

<base-alert type="next">

En savoir plus sur le [Routage](/guides/features/file-system-routing)

</base-alert>

## Navigation

Pour naviguer entre les pages de votre application, vous devez utiliser le composant [NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component). Ce composant est inclus avec Nuxt.js et vous n'avez donc pas à l'importer comme vous le faites avec d'autres composants.

Il est similaire à la balise HTML `<a>`, mais à la place d'utiliser un attribut `href="/about"`, nous utilisons `to="/about"`. Si vous avez déjà utilisé `vue-router`, vous pouvez comparer `<NuxtLink>` au composant `<RouterLink>`.

Voici un exemple de l'utilisation du composant `NuxtLink` avec un lien vers la page `index.vue` dans votre dossier `pages` :

```html{}[pages/index.vue]
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

Pour tous liens vers des pages de votre site, utilisez `<NuxtLink>`. Si vous avez des liens vers d'autres sites Web, vous devez utiliser la balise `<a>` comme ci-dessous :

```html{}[pages/index.vue]
<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (lien interne vers une page appartenant à notre application Nuxt)
    </NuxtLink>
    <a href="https://nuxtjs.org">Lien vers une page externe</a>
  </main>
</template>
```

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<base-alert type="next">

En savoir plus sur le [composant NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component).

</base-alert>
