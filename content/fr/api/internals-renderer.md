---
title: "API : la classe Renderer"
description: La classe `Renderer` de Nuxt
menu: Renderer
category: internals
position: 3
---

- Source : **[vue-renderer/renderer.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-renderer/src/renderer.js)**

Cette classe exporte un middleware qui gère et sert tous les rendus côté serveur et les requêtes de ressources.

## Points d'ancrage

Nous pouvons enregistrer des points d'ancrage sur certains évènements du cycle de vie.

Point d'ancrage           | Arguments                | Quand
--------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 `render:before`          | (renderer, options)      | Avant la configuration du middleware et des ressources pour la classe `Renderer`. Utile pour surcharger des méthodes ou des options.
 `render:setupMiddleware` | (app) *connect instance* | Avant que Nuxt ajoute sa pile de middleware. Nous pouvons l'utiliser pour enregistrer des middlewares côté serveur personnalisés
 `render:errorMiddleware` | (app) *connect instance* | Appelez votre propre middleware avant d'utiliser ceux de Nuxt. Voir le [module Sentry](https://github.com/nuxt-community/sentry-module/blob/master/lib/module.js#L122) pour plus d'informations.
 `render:resourcesLoaded` | (resources)              | Appelez après les ressources pour le renderer (client manifest, server bundle, etc).
 `render:done`            | (renderer)               | Middleware de rendu côté serveur et toutes les ressources prêtes (`Renderer` prèt).
 `render:routeContext`    | (context.nuxt)           | *Chaque fois qu'une route est rendue côté serveur et avant le point d'ancrage `render:route`*. Appelé avant la sérialisation du contexte Nuxt dans `window.__NUXT__`, utile pour ajouter diverses données que vous souhaitez récupérer côté client.
 `render:route`           |  (url, result, context)  | *Chaque fois qu'une route est rendu côté serveur*. Appelé avant de renvoyer la requête au navigateur.
 `render:routeDone`       |  (url, result, context)  | *Chaque fois qu'une route est rendu côté serveur*. Appelé après l'envoi de la requête au navigateur.
