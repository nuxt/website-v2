---
title: Installation
description: Vous n'avez pas besoin de grand chose pour commencer avec Nuxt.js. Plus loin, vous allez trouver quelques recommandations et nous allons passez à travers 4 étapes pour que puissiez avoir votre premier projet Nuxt.js fonctionnel rapidement.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prérequis

Vous n'avez pas besoin de grand chose pour commencer avec Nuxt.js. Plus loin, vous allez trouver quelques recommandations et nous allons passez à travers 4 étapes pour que puissiez avoir votre premier projet Nuxt.js fonctionnel rapidement.

<base-alert type="info">

Une autre façon de commencer avec Nuxt.js et d'utiliser [CodeSandbox](https://template.nuxtjs.org) qui est une très bonne manière de rapidement jouer avec Nuxt.js ou de partager votre code avec les autres personnes.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - au moins v8.9.0

_Nous recoommandons d'avoir la dernière version installé._

### Éditeur de texte

Utilisez ce que vous voulez, mais nous recommandons [VSCode](https://code.visualstudio.com/). Les exemples seront montrés avec lui.

### Terminal

Utilisez ce que vous voulez, mais nous recommandons d'utiliser le terminal de VSCode. Les exemples seront montrés avec lui.

## Commencer de zéro

Créer un projet Nuxt.js de zéro demande seulement un dossier et un fichier.

Dans cet exemple, nous allons utiliser le terminal pour créer les dossiers et fichiers. Si vous préférez utiliser votre éditeur pour les créer.

### Première étape: Configurer votre projet

Pour commencer, créez un dossier vide avec le nom de votre projet et naviguer à l'intérieur de celui-ci.

```bash
mkdir <nom-du-projet>
cd <nom-du-projet>
```

_Remplacez `<nom-du-projet>` avec le nomo de votre projet._

Puis créez un fichier nommer `package.json`:

```bash
touch package.json
```

Ouvrez le fichier package.json avec votre éditeur préféré et copiez collé le contenu JSON:

```json
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```

`scripts` définit les commandes Nuxt.js que vous allez lancer avec la commande `npm run <commande>`.

<base-alert type="info">

**À quoi sert le fichier package.json?**

</base-alert>

Le fichier `package.json` est comme une carte d'identité pour votre projet. Si vous ne savez pas ce qu'est le fichier `package.json`, nous vous recommandons grandement de lire dans là [documentation de NPM](https://docs.npmjs.com/creating-a-package-json-file).

### Deuxième étape: installez nuxt dans votre projet

Une fois que le fichier `package.json` a été créé, vous devez ajouter `nuxt` à votre projet avec la commande NPM ou Yarn ci-dessous.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt
```

  </code-block>
</code-group>

Cette commande va ajouter `nuxt` comme une dépendance du projet et va automatiquement l'ajouter à votre `package.json`. Le dossier `node_modules` va aussi être créé qui est l'endroit où sont installés tous vos packages et leur dépendances.

<base-alert type="info">

Un `yarn.lock` ou `package-lock.json` est aussi créé ce qui assure une consistance et une compatibilité dans les dépendances installé de votre projet.

</base-alert>

### Third step: Create your first page

Nuxt.js transforme tous les fichiers `*.vue` dans le dossier `pages` comme une route pour l'application.

Créer le dossier `pages` dans votre projet:

```bash
mkdir pages
```

Puis, créez un fichier `index.vue` dans le dossier `pages`:

```bash
touch pages/index.vue
```

Il est important que cette page soit appelée `index.vue`, car elle sera la page par défaut quand votre application sera ouverte. C'est la page d'accueil et elle doit être appelé index.

Ouvrir le fichier `index.vue` dans votre éditeur et ajouter le contenue suivant:

```html
<template>
  <h1>Hello world!</h1>
</template>
```

### Étape finale: **Lancer le projet**

Lancez votre projet en tapant la commande ci-dessous dans votre terminal :

<code-group>
  <code-block label="Yarn" active>

```bash
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
npm run dev
```

  </code-block>
</code-group>

<base-alert type="info">

Nous utilisons la commande dev, car nous lançons notre application en mode développement.

</base-alert>

L'application est maintenant en train d'être exécuté sur **[http://localhost:3000](http://localhost:3000/).**

Ouvrez-la dans votre browser en cliquant sur le lien de votre terminal et vous devriez voir le texte "Hello World" que nous avions copiez dans les étapes précédentes.

<base-alert type="info">

Une fois Nuxt.js lancé en mode développement, il écoutera les changements de fichiers dans la plupart des répertoires, donc il n'y a pas besoin de redémarrer l'application quand vous éditez, ajoutez une page.

</base-alert>

### 🍄 Étape finale:

Créez une page nommée `fun.vue` dans le dossier `pages`.

Ajoutez un `<template></template>` et inclure un titre avec une phrase drôle à l'intérieur.

Puis, allez sur votre navigateur et regarder votre nouvelle page sur **[http://localhost:3000/fun](http://localhost:3000/fun).**

<base-alert type="info">

Créer un nouveau dossier nommé `more-fun` et ajoutez un fichier `index.vue` à l'intérieur. Il aura pour même effet que créer un fichier `more-fun.vue`.

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## Utilier create-nuxt-app

Pour commencer rapidement vous pouvez utiiliser [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).

Soyez sur d'avoir npx d'installer (npx est embarqué par défaut depuis NPM 5.2.0) ou npm v6.1 ou yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn create nuxt-app <project-name>
```

  </code-block>
  <code-block label="NPX">

```bash
npx create-nuxt-app <project-name>
```

  </code-block>
    <code-block label="NPM">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

Il vous sera demandé quelques questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc.), quand vous y aurez répondu, il installera toutes les dépendances. La prochaine étape sera de naviguer dans votre dossier et démarrer votre application avec :

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

Votre application est en cours d'exécution sur [http://localhost:3000](http://localhost:3000).
