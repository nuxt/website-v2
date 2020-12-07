---
title: 'La propriété serverMiddleware'
description: Défini le middleware côté serveur.
menu: serverMiddleware
category: configuration-glossary
position: 27
---

- Type: `Array`
  - Items: `String` ou `Object` ou `Function`

Nuxt crée en interne une instance [connect](https://github.com/senchalabs/connect) à laquelle vous pouvez ajouter votre propre middleware personnalisé. Cela nous permet d'enregistrer des routes supplémentaires (généralement des routes `/api`) **sans avoir besoin d'un serveur externe**.

Parce que Connect itself est un middleware, les middleware enregistrés fonctionneront avec `nuxt start` et aussi lorsqu'il est utilisé comme un middleware avec des usages programmatiques comme [express-template](https://github.com/nuxt-community/express-template). Les [Modules](/guide/modules) nuxt peuvent également fournir `serverMiddleware` en utilisant [this.addServerMiddleware()](/guides/internals-glossary/internals-module-container#addservermiddleware-middleware)

En plus, nous avons introduit une option `prefix` dont la valeur par défaut est `true`. Elle ajoutera la base du routeur aux middlewares de votre serveur.

**Exemple:**

- Chemin d'accès au middleware du serveur : `/api`
- Base du routeur : `/admin`
- Avec `prefix: true` (par défaut): `/admin/api`
- Avec `prefix: false`: `/api`

## serverMiddleware vs middleware!

Ne le confondez pas avec [routes middleware](/guide/routing#middleware) qui sont appelés avant chaque route par Vue pour les rendu monopage ou SSR. Les Middleware listés dans la propriété `serverMiddleware` s'exécutent côté serveur **avant** `vue-server-renderer` et peuvent être utilisés pour des tâches spécifiques au serveur comme le traitement des requêtes API ou pour le chargement des ressources.

## Utilisation

Si le middleware est une chaîne de caractères, alors Nuxt.js essaiera de le résoudre automatiquement et le rendra requis.

```js{}[nuxt.config.js]
import serveStatic from 'serve-static'

export default {
  serverMiddleware: [
    // Inscrira redirect-ssl dans les package npm
    'redirect-ssl',

    // Inscrira le fichier index du répertoire api pour gérer /api/*
    { path: '/api', handler: '~/api/index.js' },

    // Nous pouvons également créer des instances personnalisées
    { path: '/static2', handler: serveStatic(__dirname + '/static2') }
  ]
}
```

<p class="Alert Alert--danger">
    <b>ATTENTION! </b>
    Si vous ne voulez pas que le middleware s'enregistre pour toutes les routes, vous devez l'utiliser sous la forme d'un Object avec un chemin d'accès spécifique, sinon le gestionnaire par défaut nuxt ne fonctionnera pas !
</p>

## Middleware de serveur personnalisé

Il est également possible d'écrire des Middleware personnalisés. Pour plus d'informations, voir [Connect Docs](https://github.com/senchalabs/connect#appusefn).

Middleware (`api/logger.js`):

```js{}[api/logger.js]
export default function (req, res, next) {
  // req est l'objet de la requête http de Node.js
  console.log(req.url)

  // res est l'objet de réponse http de Node.js

  // next est une fonction à appeler pour invoquer le prochain middleware
  // N'oubliez pas d'appeler le suivant à la fin si votre middleware n'est pas un endpoint !
  next()
}
```

```js{}[nuxt.config.js]
serverMiddleware: ['~/api/logger']
```

## API endpoint personnalisé

Un middleware de serveur peut également étendre Express. Cela permet la création d'endpoint REST.

```js{}[api/rest.js]
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

module.exports = app
```

```js{}[nuxt.config.js]
serverMiddleware: [
  { path: "/api", handler: "~/api/rest.js" },
],
```

## Syntaxe de l'objet

Si le middleware de votre serveur est constitué d'une liste de fonctions mises en correspondance avec des chemins d'accès :

```js
export default {
  serverMiddleware: [
    { path: '/a', handler: '~/api/a.js' },
    { path: '/b', handler: '~/api/b.js' },
    { path: '/c', handler: '~/api/c.js' }
  ]
}
```

Vous pouvez aussi passer un objet pour les définir, comme suit :

```js
export default {
  serverMiddleware: {
    '/a': '~/api/a.js',
    '/b': '~/api/b.js',
    '/c': '~/api/c.js'
  }
}
```
