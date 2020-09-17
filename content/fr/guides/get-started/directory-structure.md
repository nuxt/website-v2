---
title: Structure des répertoires
description: La structure par défaut d'une application Nuxt.js est destinée à fournir un excellent point de départ pour les applications plus ou moins grandes. Vous êtes libre d'organiser votre application comme vous le souhaitez et pouvez créer d'autres répertoires au fur et à mesure que vous en avez besoin.
position: 3
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/03_directory_structure?fontsize=14&hidenavigation=1&theme=dark
---

La structure par défaut d'une application Nuxt.js est destinée à fournir un excellent point de départ pour les applications plus ou moins grandes. Vous êtes libre d'organiser votre application comme vous le souhaitez et pouvez créer d'autres répertoires au fur et à mesure que vous en avez besoin.

Créons les répertoires et les fichiers qui n'existent pas encore dans notre projet :

```bash
mkdir components assets static
touch nuxt.config.js
```

Ce sont les principaux répertoires et fichiers que nous utilisons lors de la construction d'une application Nuxt.js. Vous trouverez une explication de chacun d'entre eux ci-dessous.

<base-alert type="info">

La création de répertoires avec ces noms active les fonctionnalités de votre projet Nuxt.js.

</base-alert>

## Répertoires

### Le répertoire pages

Le répertoire `pages` contient les vues et les routes de votre application. Comme vous l'avez appris dans [l'étape précédente](/guides/get-started/routing), Nuxt.js lit tous les fichiers `.vue` dans ce répertoire et les utilise pour créer le routeur de l'application.

<base-alert type="next">

En savoir plus sur le [répertoire pages](/guides/directory-structure/pages)

</base-alert>

### Le répertoire components

Le répertoire `components` est l'endroit où vous placez tous vos composants Vue.js qui sont ensuite importés dans vos pages.

Avec Nuxt.js, vous pouvez créer vos composants et les importer automatiquement dans vos fichiers `.vue`, ce qui signifie qu'il n'est pas nécessaire de les importer manuellement dans la section script. Nuxt.js les analysera et les importera automatiquement pour vous une fois que vous aurez activé cette fonctionnalié dans votre fichier de configuration.

<base-alert type="next">

En savoir plus sur le [répertoire des composants](/guides/directory-structure/components)

</base-alert>

### Le répertoire assets

Le répertoire `assets` contient vos fichiers non compilés tels que vos styles, images ou polices.

<base-alert type="next">

En savoir plus sur le [répertoire assets](/guides/directory-structure/assets)

</base-alert>

### Le répertoire static

Le répertoire `static` est directement servi à la racine du serveur et contient des fichiers qui doivent conserver leur nom (comme `robots.txt`) _ou_ qui ne changeront probablement pas (comme le favicon).

<base-alert type="next">

En savoir plus sur le [répertoire static](/guides/directory-structure/static)

</base-alert>

### Le fichier nuxt.config.js

Le fichier `nuxt.config.js` est le point unique de configuration pour Nuxt.js. Si vous souhaitez ajouter des modules ou remplacer les paramètres par défaut, c'est ce fichier qu'il faudra modifier.

<base-alert type="next">

En savoir plus sur le [fichier nuxt.config.js](/guides/directory-structure/nuxt-config)

</base-alert>

### Le fichier package.json

Le fichier `package.json` contient toutes les dépendances et scripts de votre application.

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## En savoir plus sur la structure du projet

Il existe d'autres répertoires et fichiers utiles, comme [content](/guides/directory-structure/content), [layouts](/guides/directory-structure/layouts), [middleware](/guides/directory-structure/middleware), [modules](/guides/directory-structure/modules), [plugins](/guides/directory-structure/plugins) et [store](/guides/directory-structure/store). Comme ils ne sont pas nécessaires pour les petites applications, ils ne sont pas traités ici.

<base-alert type="next">

Pour en savoir plus sur tous les répertoires en détail, n'hésitez pas à lire le [guide sur la structure des répertoires](/guides/directory-structure/nuxt).

</base-alert>
