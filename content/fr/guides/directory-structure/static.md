---
title: static
description: Le répertoire `static` est directement relié à la racine du serveur () et contient des fichiers qui ne seront probablement pas modifiés. Tous les fichiers inclus sont automatiquement servis par Nuxt et accessibles via l'URL racine de votre projet.
position: 12
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/13_static?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: In which directory should you put your files that likely won't be changed such as your favicon or robots.txt?
    answers:
      - assets
      - static
      - src
    correctAnswer: static
  - question: This directory can be easily renamed without any configuration
    answers:
      - true
      - false
    correctAnswer:
  - question: Where should you put your images if you want webpack to bundle them?
    answers:
      - static
      - assets
      - src
    correctAnswer: assets
  - question: Anything in the static directory is relative to the root directory
    answers:
      - true
      - false
    correctAnswer: true
  - question: You can configure the behaviour of the static directory in the nuxt.config.js
    answers:
      - true
      - false
    correctAnswer: true
---

Le répertoire `static` est directement relié à la racine du serveur () et contient des fichiers qui ne seront probablement pas modifiés. Tous les fichiers inclus sont automatiquement servis par Nuxt et accessibles via l'URL racine de votre projet.

`/static/robots.txt` sera disponible à l'adresse `http://localhost:3000/robots.txt`

`/static/favicon.ico` sera disponible à l'adresse `http://localhost:3000/favicon.ico`

Cette option est utile pour les fichiers tels que `robots.txt`, `sitemap.xml` ou `CNAME` (qui est important pour le déploiement des pages sur GitHub).

<base-alert>

_Ce répertoire ne peut pas être renommé sans configuration supplémentaire._

</base-alert>

## Ressources statique

Si vous ne souhaitez pas utiliser les ressources Webpack du répertoire `assets`, vous pouvez ajouter les images dans le répertoire `static`.

Dans votre code, vous pouvez alors référencer ces fichiers par rapport à la racine (`/`) :

```html
<!-- Image statique du répertoire `static` -->
<img src="/mon-image.png" />

<!-- Image webpacked du répertoire `assets` -->
<img src="@/assets/mon-image-2.png" />
```

## Configuration du répertoire `static`

Si vous en avez besoin, vous pouvez configurer le comportement du répertoire `static/` dans le fichier `nuxt.config.js`.

### Préfixe des ressources statique

If you deploy Nuxt.js to a subfolder, e.g. `/blog/`, the router base will be added to the static asset path by default. If you want to disable this behavior, you can set `static.prefix` to false in the `nuxt.config.js`.
Si vous déployez Nuxt.js dans un sous-dossier, par exemple `/blog/`, la base du routeur sera ajoutée par défaut au chemin de la ressource statique. Si vous voulez désactiver ce comportement, vous pouvez mettre `static.prefix` à `false` dans le `nuxt.config.js`.

```js
export default {
  static: {
    prefix: false
  }
}
```

Par défaut : `/blog/mon-image.png`

Avec `static.prefix` désactivé : `/mon-image.png`

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
