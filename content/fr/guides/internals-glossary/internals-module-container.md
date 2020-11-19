---
title: Le ModuleContainer
description: La classe ModuleContainer de Nuxt
menu: Le ModuleContainer
category: internals-glossary
position: 6
---

- Source: **[core/module.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/core/src/module.js)**

Tous les [modules](/guides/directory-structure/modules) seront appelés dans le contexte de l'instance `ModuleContainer`.

## Plugins à usage unique

Nous pouvons enregistrer des hooks sur certains événements du cycle de vie.

```js
nuxt.moduleContainer.plugin('ready', async moduleContainer => {
  // Faites-le après que tous les modules soient prêts
})
```

Dans le contexte des [modules](/guides/directory-structure/modules), nous pouvons utiliser cette méthode à la place :

```js
this.plugin('ready', async moduleContainer => {
  // Faites-le après que tous les modules soient prêts
})
```

| Plugin  | Arguments       | Quand                                                      |
| ------- | --------------- | ---------------------------------------------------------- |
| `ready` | moduleContainer | Tous les modules dans `nuxt.config.js` ont été initialisés |

## Méthodes

### addVendor (vendor)

**Déprécié car le terme `vendor` n'est plus utilisé**

Ajoute à `options.build.vendor` et applique un filtre unique.

### addTemplate (template)

- **template**: `String` or `Object`
  - `src`
  - `options`
  - `fileName`

Affiche le modèle en utilisant [lodash template](https://lodash.com/docs/4.17.4#template) pendant l'intégration au projet `buildDir` (`.nuxt`).

Si `fileName` n'est pas fourni ou si `template` est une chaîne de caractères, le nom du fichier cible est par défaut `[dirName].[fileName].[pathHash].[ext]`.

Cette méthode renvoie l'objet final `{ dst, src, options }`.

### addPlugin (template)

Enregistre un plugin en utilisant `addTemplate` et l'ajoute à la première ligne des options `plugins[]`.

Vous pouvez utiliser `template.ssr : false` pour désactiver le plugin y compris dans le bundle SSR.

### addServerMiddleware (middleware)

Pousse le middleware dans [options.serverMiddleware](/guides/configuration-glossary/configuration-servermiddleware).

### extendBuild (fn)

Permet d'étendre facilement la configuration du webpack par chaînage dans la fonction [options.build.extend](/guides/configuration-glossary/configuration-build#extend).

### extendRoutes (fn)

Permet d'étendre facilement les routes dans la fonction [options.build.extendRoutes](/guides/configuration-glossary/configuration-router#extendroutes).

### extendPlugins (fn)

Permet d'étendre facilement les plugins dans la fonction [options.extendPlugins](/guides/configuration-glossary/configuration-extend-plugins).

### addModule (moduleOpts, requireOnce)

_Async function_

Enregistre un module. Les `moduleOpts` peuvent être une chaîne de caractères ou un tableau (`[src, options]`). Si `requireOnce` est `true` et que le module est résolu dans les `meta`, cela empêchera d'enregistrer deux fois le même module.

### requireModule (moduleOpts)

_Async function_

Est un raccourci pour `addModule(moduleOpts, true)`

## Hooks

Nous pouvons enregistrer des hooks sur certains événements du cycle de vie.

| Hook             | Arguments                  | Quand                                                                                                     |
| ---------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| `modules:before` | (moduleContainer, options) | Appelé avant la création de la classe ModuleContainer, utile pour surcharger les méthodes et les options. |
| `modules:done`   | (moduleContainer)          | Appelé lorsque tous les modules ont été chargés.                                                          |
