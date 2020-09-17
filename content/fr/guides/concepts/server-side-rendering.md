---
title: Rendu côté serveur
description: Le rendu côté serveur (SSR), est la capacité qu'une application a à générer une page web sur le serveur au lieu de la générer dans le navigateur.
position: 3
category: concepts
questions:
  - question: De quel type de serveur avez-vous besoin pour faire du rendu côté serveur ?
    answers:
      - un serveur PHP
      - un serveur JavaScript
      - un serveur Node.js
    correctAnswer: un serveur Node.js
  - question: Qu'utilisez-vous pour contrôler et étendre les possibilités du serveur ?
    answers:
      - Middleware
      - ServerMiddleware
      - Il n'est pas possible de contrôler le serveur
    correctAnswer: ServerMiddleware
  - question: Pouvez-vous héberger une application avec un rendu côté serveur sur une plateforme d'hébergement serverless ?
    answers:
      - true
      - false
    correctAnswer: false
  - question: Avons-nous accès au document côté serveur ?
    answers:
      - Oui, il est toujours disponible
      - Non, l'objet appartient au navigateur et il n'est pas disponible sur le serveur
    correctAnswer: Non, l'objet appartient au navigateur et il n'est pas disponible sur le serveur
  - question: Quand votre page devient interactive ?
    answers:
      - Quand le navigateur reçoit la page HTML générée depuis le serveur
      - Quand l'hydratation de Vue.js est effective
      - Quand le navigateur envoie la requête initiale
    correctAnswer: Quand l'hydratation de Vue.js est effective
  - question: La navigation entre les pages utilisant <NuxtLink> est faite
    answers:
      - Côté client
      - Côté serveur
    correctAnswer: Côté client
  - question: Quelles sont les étapes correctes ?
    answers:
      - navigateur → serveur, serveur → navigateur, navigateur → navigateur
      - serveur → navigateur, navigateur → serveur, serveur → serveur
      - navigateur → serveur, serveur → navigateur, navigateur → serveur
    correctAnswer: navigateur → serveur, serveur → navigateur, navigateur → navigateur
---

Le rendu côté serveur (SSR), est la capacité qu'une application a à générer une page web sur le serveur au lieu de la générer dans le navigateur. Le rendu côté serveur renvoie une page complète au client; le JavaScript côté client prend ensuite le relais et permet à Vue.js d'[hydrater](https://ssr.vuejs.org/guide/hydration.html) votre application.

## Serveur Node.js requis

Un environnement JavaScript est requis pour render votre page web.

Un serveur Node.js a besoin d'être configuré pour exécuter votre application Vue.js.

## Contrôlez et étendez les possibilités de votre serveur

Vous pouvez étendre les possibilités de votre serveur avec `serverMiddleware` et contrôler les routes avec `middleware`.

```js{}[middleware/api/logger.js]
export default function (req, res, next) {
  console.log(req.url)
  next()
}
```

```js{}[nuxt.config.js]
export default {
  serverMiddleware: ['~/middleware/api/logger']
}
```

<!--todo did not get what is written below, so I rather comment it out
en: If your server middleware consists of a list of functions mapped to paths:
fr: Si votre middleware de serveur est constitué d'une liste de fonctions correspondant à des chemins: -->

## Différence entre serveur et navigateur

Comme vous êtes dans un environnement Node.js vous avez accès aux objets Node.js tels que `req` et `res`. Vous n'avez pas accès aux objets `window` ou `document` vu qu'ils appartiennent au navigateur. Vous pouvez cependant utiliser `window` ou `document` en les utilisant dans les hooks `beforeMount` ou `mounted`.

```js
beforeMount{
  window.alert('hello');
}
mounted{
  window.alert('hello');
}
```

## Les étapes pour faire du rendu côté serveur avec Nuxt.js

### Étape 1: Du navigateur au serveur

Quand le navigateur envoie la requête initiale, cela va atterir sur le serveur Node.js. Nuxt.js va alors générer le HTML et le renvoyer au navigateur en prenant en compte le résultat des functions telles que `asyncData`, `nuxtServerInit` or `fetch`. Les fonctions présentes dans les hooks seront aussi exécutées.

### Étape 2: Du serveur au navigateur

Le navigateur reçoit la page avec le HTML généré depuis le serveur. Le contenu est affiché et l'hydratation de Vue.js entre en scène, rendant le tout réactif. Après ce processus, la page est intéractive.

### Étape 3: Du navigateur au navigateur

Naviguer entre les pages à l'aide de [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component) est fait du côté client afin que vous n'ayez pas besoin de faire une requête au serveur, sauf si vous faites un rafraîchissement manuel de votre navigateur.

<quiz :questions="questions"></quiz>
