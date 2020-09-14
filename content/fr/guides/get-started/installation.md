---
title: Installation
description: Vous pourrez découvrir ci-dessous comment créer un projet Nuxt.js fonctionnel en 4 étapes.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prérequis

Vous pourrez découvrir ci-dessous comment créer un projet Nuxt.js fonctionnel en 4 étapes.

<base-alert type="info">

Pour commencer avec Nuxt.js, vous pouvez également utiliser [CodeSandbox](https://template.nuxtjs.org) qui est une très bonne manière de tester Nuxt.js rapidement et/ou de partager votre code avec d'autres personnes.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - au moins v8.9.0

_Nous vous recommandons d'avoir la dernière version installée._

### Éditeur de texte

Utilisez celui que vous préférez, mais nous recommandons [VSCode](https://code.visualstudio.com/).

### Terminal

Utilisez celui que vous préférez, mais nous recommandons le [terminal de VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal).

## Commencer de zéro

Créer un projet Nuxt.js de zéro demande seulement un dossier et un fichier.

Dans cet exemple, nous allons utiliser le terminal pour créer les dossiers et fichiers mais vous pouvez utiliser votre éditeur pour les créer.

### Première étape : configurer votre projet

Pour commencer, créez un dossier vide avec le nom de votre projet et naviguez à l'intérieur de celui-ci :

```bash
mkdir <nom-du-projet>
cd <nom-du-projet>
```

_Remplacez `<nom-du-projet>` avec le nom de votre projet._

Puis créez un fichier nommé `package.json` :

```bash
touch package.json
```

Ouvrez le fichier package.json avec votre éditeur préféré et ajoutez ce contenu JSON :

```json{}[package.json]
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

#### **À quoi sert le fichier package.json ?**

Le fichier `package.json` est comme la carte d'identité de votre projet. Si vous ne savez pas ce qu'est le fichier `package.json`, nous vous recommandons grandement de lire la [documentation de NPM](https://docs.npmjs.com/creating-a-package-json-file).

### Deuxième étape : installer nuxt

Une fois le fichier `package.json` créé, vous devez ajouter `nuxt` à votre projet avec la commande `npm` ou `yarn` comme ci-dessous :

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

Cette commande va ajouter `nuxt` comme une dépendance du projet et va automatiquement l'ajouter à votre `package.json`. Le dossier `node_modules` va aussi être créé, c'est l'endroit où sont installés tous vos packages et leurs dépendances.

<base-alert type="info">

Un fichier `yarn.lock` ou `package-lock.json` est aussi créé. ce qui assure une consistance et une compatibilité dans les dépendances installées de votre projet.

</base-alert>

### Troisième étape : créer votre première page

Nuxt.js transforme tous les fichiers `*.vue` dans le dossier `pages` comme une route pour l'application.

Créez le dossier `pages` dans votre projet :

```bash
mkdir pages
```

Puis, créez un fichier `index.vue` dans le dossier `pages` :

```bash
touch pages/index.vue
```

Il est important que cette page soit appelée `index.vue` car elle sera la page par défaut quand votre application sera ouverte. C'est la page d'accueil et elle doit être appelée index.

Ouvrez le fichier `index.vue` dans votre éditeur et ajoutez le contenu suivant :

```html{}[pages/index.vue]
<template>
  <h1>Hello world!</h1>
</template>
```

### Étape finale : lancer le projet

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

La commande `dev` est utilisée lorsque l'application est lancée en mode développement.

</base-alert>

L'application est maintenant en cours d'exécution sur **[http://localhost:3000](http://localhost:3000/).**

Ouvrez-la dans votre navigateur en cliquant sur le lien dans votre terminal et vous devriez voir le texte "Hello World" que nous avons ajouté dans l'étape précédente.

<base-alert type="info">

Une fois Nuxt.js lancé en mode développement, il écoutera les changements de fichiers dans la plupart des dossiers, il n'est donc pas nécessaire de redémarrer l'application quand vous éditez ou ajoutez une page.

</base-alert>

<base-alert type="warning">

Lorsque vous lancez la commande `dev`, un dossier `.nuxt` est créé. Ce dossier devrait être ignoré par Git (ou tout autre système de gestion de versions). Vous pouvez faire ceci en créant un fichier `.gitignore` à la racine de votre projet et en y ajoutant `.nuxt`.

</base-alert>

### Étape bonus

Créez une page nommée `fun.vue` dans le dossier `pages`.

Ajoutez un `<template></template>` et insérez un titre avec une phrase drôle à l'intérieur.

Puis allez sur votre navigateur et regardez votre nouvelle page sur **[http://localhost:3000/fun](http://localhost:3000/fun).**

<base-alert type="info">

Si vous créez un dossier nommé `more-fun` et ajoutez un fichier `index.vue` à l'intérieur, cela donnera le même résultat que de créer un fichier `more-fun.vue`.

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

## Utiliser create-nuxt-app

Pour créer rapidement un nouveau projet, vous pouvez utiliser [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).

Vérifiez que vous avez `npx` installé (npx est embarqué par défaut depuis npm v5.2.0) ou npm v6.1 ou yarn.

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

Quelques questions vous seront posées (nom, options Nuxt, framework UI, TypeScript, linter, framework de test, etc.), quand vous y aurez répondu, toutes les dépendances seront installées. La prochaine étape est de naviguer dans votre dossier et démarrer votre application :

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

Votre application est maintenant en cours d'exécution sur [http://localhost:3000](http://localhost:3000).
