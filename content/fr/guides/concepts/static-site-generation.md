---
title: Génération de site statique
description: Avec la génération statique vous pouvez générer votre application durant la phase de build et déployer votre site sur n'importe quel hébergeur tel que Netlify, Github pages, Vercel etc...
position: 4
category: concepts
questions:
  - question: Vous avez besoin d'un serveur pour héberger votre site statique
    answers:
      - True
      - False
    correctAnswer: False
  - question: Quelle commande utilisez-vous pour générer votre site statique ?
    answers:
      - nuxt build
      - nuxt prerender
      - nuxt generate
    correctAnswer: nuxt generate
  - question: Quand appelez-vous votre API ?
    answers:
      - À chaque fois que vous naviguez sur une page avec du contenu qui provient de votre API
      - Quand vous générez votre site
      - When you generate your site and every time you navigate to the page with the API content
      - Quand vous générez votre site et à chaque fois que vous naviguez sur une page avec du contenu qui provient de votre API
    correctAnswer: Quand vous générez votre site
  - question: Quelles pages vont se rabattre sur le mode de Single Page App ?
    answers:
      - La page d'erreur
      - Celles qui sont exclues de la génération avec generate.excludes
      - Toutes les pages de la navigation
    correctAnswer: Celles qui sont exclues de la génération avec generate.excludes
  - question: Comment mettez-vous à jour le contenu de votre site ?
    answers:
      - Il se met à jour automatiquement
      - Vous avez besoin de regénérer votre site
    correctAnswer: Vous avez besoin de regénérer votre site
---

Avec la génération statique vous pouvez générer votre application durant la phase de build et déployer votre site sur n'importe quel hébergeur tel que Netlify, Github pages, Vercel etc... Ce qui veut dire qu'il n'y a pas besoin de serveur pour pouvoir déployer votre application.

### Générer votre site

Lorsque vous déployez votre site avec [target:static](/guides/features/deployment-targets#static-hosting), toutes vos pages `.vue` seront générées dans des fichiers HTML et JavaScript. Tous les calls aux API seront faits et mis en cache dans un répertoire nommé `static` à l'intérieur de votre contenu généré pour le côté client, ainsi il n'y aura pas besoin de faire d'appels à votre API par la suite.

### Étape 1: Du navigateur au CDN

Lorsqu'un navigateur enverra la requête initiale, il va accéder au CDN.

### Étape 2: du CDN au navigateur

Le CDN va envoyer le HTML préalablement généré, ainsi que le JavaScript et toutes les ressources statiques au navigateur. Le contenu sera affiché et l'hydratation de Vue.js commencera à faire effet afin de rendre le tout réactif. À la suite de ce processus, la page sera intéractive.

### Étape 3: du navigateur au navigateur

Naviguer entre les pages à l'aide de [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component) est fait du côté client afin que vous n'ayez pas besoin de refaire une requête au CDN et les appels à l'API seront chargés à partir du répertoire des ressources mis en cache et ce même si vous rafraîchissez manuellement votre page.

### Solution de secours: la SPA

Pages that have been excluded from generation, by using the `generate.exclude` property will fallback to being a single page application. These pages will therefore not exist in the CDN and will be rendered on client side in the browser once the user navigates to that page.

Les pages qui auront été exclues de la génération en utilisant la propriété `generate.exclude` se rabattront sur la version SPA de votre application. Ces pages n'existeront donc pas sur le CDN et seront regénérées sur le client (dans le navigateur) à chaque fois qu'un utilisateur naviguera sur ces pages.

<base-alert type="next">

Pour en savoir davantage sur la [propriété `generate`](/guides/configuration-glossary/configuration-generate#exclude)

</base-alert>

### Mettre à jour votre contenu

Afin de récupérer le nouveau contenu sur votre site à partir de l'API, vous aurez besoin de regénerer le site à nouveau. Avec la plupart des services d'hébergement, vous pouvez parvenir à cela en poussant vos modifications sur la branche `master` avec git ou via une pull request.

### Mode de prévisualisation

Le mode de prévisualisation va appeler votre API ou votre CMS afin que vous puissiez voir les changements en live avant de déployer. Se référer au [mode de prévisualisation](/guides/features/live-preview) pour activer cette fonctionnalité.

<quiz :questions="questions"></quiz>
