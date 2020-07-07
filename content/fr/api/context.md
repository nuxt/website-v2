---
title: "API: Le contexte"
description: Le `context` fournit des objets/paramètres de Nuxt qui ne sont pas traditionnellement disponible dans les composants de Vue. Le `context` est disponible dans des zones spéciales du cycle de vie de Nuxt comme `asyncData`, `plugins`,` middlewares`, `modules` et` store / nuxtServerInit`.
menu: context
group: Essentiel
groupPosition: 1
position: 1
---

> Le `context` fournit des objets/paramètres de Nuxt qui ne sont pas traditionnellement disponible dans les composants 
> de Vue. Le `context` est disponible dans des zones spéciales du cycle de vie de Nuxt comme [`asyncData`](/api), 
> [`fetch`](/api/pages-fetch), [`plugins`](/guide/plugins), [`middleware`](/guide/routing#middleware) et 
> [`nuxtServerInit`](/guide/vuex-store#the-nuxtserverinit-action).

> *Note: "Le Contexte" auquel nous nous référons ici ne doit pas être confondu avec le `context` disponible dans les 
> actions du store [`Vuex`](https://vuex.vuejs.org/guide/actions.html). Les deux ne sont pas liés.*

```js
function (context) {
  // Clés universelles
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error
  } = context
  // Côté serveur
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }
  // Côté client
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

## Clés universelles

Ces clés sont disponibles à la fois côté client et côté serveur.

### `app` (*NuxtAppOptions*)

Les options d'instance de la racine Vue qui incluent tous vos plugins. Par exemple, lorsque vous utilisez `i18n`, vous 
pouvez accéder à `$i18n` via `context.app.i18n`.

### `store` ([*Vuex Store*](https://vuex.vuejs.org/en/api.html#vuexstore-instance-properties))

L'instance du store de Vuex. **Disponible uniquement si [vuex store](/guide/vuex-store) est défini**.

### `route` ([*Vue Router Route*](https://router.vuejs.org/en/api/route-object.html))

L'instance du routage de Vue.

### `params` (*Objet*)

Alias de `route.params`.

### `query` (*Objet*)

Alias de `route.query`.

### `env` (*Objet*)

Variables d'environnement définies dans `nuxt.config.js`, voir [env api](/api/configuration-env).

### `isDev` (*Booléen*)

Booléen permettant de savoir si vous êtes en mode dev, peut être utile pour mettre en cache certaines données en 
production.

### `isHMR` (*Booléen*)

Booléen permettant de savoir si la méthode/middleware est appelé depuis le remplacement à chaud du module webpack 
(*vrai uniquement côté client en mode dev*).

### `redirect` (*Fonction*)

Utilisez cette méthode pour rediriger l'utilisateur vers une autre route, le code de retour est utilisé côté serveur, 
par défaut à `302`. `redirect([status,] chemin [, requête])`.

### `error` (*Fonction*)

Utilisez cette méthode pour afficher la page d'erreur : `error(params)`. Les `params` devraient avoir les propriétés 
`statusCode` et `message`.

## Clés côté serveur

Ces clés sont disponibles uniquement côté serveur.

### `req` ([*http.Request*](https://nodejs.org/api/http.html#http_class_http_incomingmessage))

Requête depuis le serveur Node.js. Si Nuxt est utilisé comme middleware, l'objet de la requête peut être différent selon 
le framework que vous utilisez. <br>**Non disponible via `nuxt generate`**.  

### `res` ([*http.Response*](https://nodejs.org/api/http.html#http_class_http_serverresponse))

Réponse depuis le serveur Node.js. Si Nuxt est utilisé comme middleware, l'object de la réponse peut être différent 
selon le framework que vous utilisez. <br>**Non disponible via `nuxt generate`**.  

### `beforeNuxtRender(fn)` (*Fonction*)

Utiliser cette méthdode pour mettre à jour la variable `__NUXT__` rendue côté client, le paramètre `fn` (peut être 
asynchrone) est appelé avec `{ Components, nuxtState }`, voir [l'exemple](https://github.com/nuxt/nuxt.js/blob/cf6b0df45f678c5ac35535d49710c606ab34787d/test/fixtures/basic/pages/special-state.vue).

## Clés côté client

Ces clés sont disponibles uniquement côté client.

### `from` ([*Vue Router Route*](https://router.vuejs.org/en/api/route-object.html))

Le chemin de départ.

### `nuxtState` *(Object)*

L'état de Nuxt, utile pour les plugins qui utilisent `beforeNuxtRender` pour obtenir cet état côté client avant le 
rendu. **Disponible uniquement pour le mode `universal`**.
