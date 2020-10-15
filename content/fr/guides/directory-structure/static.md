---
title: static
description: le répertoire `static` est directement mappé à la racine du serveur et contient des fichiers qui ne seront probablement pas modifiés. Tous les fichiers inclus seront automatiquement servis par Nuxt et sont accessibles via l'URL racine de votre projet.
position: 12
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/13_static?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Dans quel répertoire devez-vous placer vos fichiers qui ne seront pas modifiés tels que votre favicon ou robots.txt?
    answers:
      - assets
      - static
      - src
    correctAnswer: static
  - question: Ce répertoire peut être facilement renommé sans aucune configuration
    answers:
      - vrai
      - faux
    correctAnswer: faux
  - question: Où devriez-vous placer vos images si vous souhaitez que Webpack les traite ?
    answers:
      - static
      - assets
      - src
    correctAnswer: assets
  - question: Tout ce qui se trouve dans le répertoire statique est relatif au répertoire racine
    answers:
      - vrai
      - faux
    correctAnswer: vrai
  - question: Vous pouvez configurer le comportement du répertoire statique dans le nuxt.config.js
    answers:
      - vrai
      - faux
    correctAnswer: vrai
---

Le répertoire `static` est directement mappé à la racine du serveur et contient des fichiers qui ne seront probablement pas modifiés au cours du temps. Tous les fichiers inclus seront automatiquement servis par Nuxt et sont accessibles via l'URL racine de votre projet.

`/static/robots.txt` sera disponible sur` http://localhost:3000/robots.txt`

`/static/favicon.ico` sera disponible sur` http://localhost:3000/favicon.ico`

Cette option est utile pour les fichiers tels que `robots.txt`,` sitemap.xml` ou `CNAME` (qui est important pour le déploiement des pages GitHub par exemple).

<base-alert>

_Ce répertoire ne peut pas être renommé sans configuration supplémentaire ._

</base-alert>

## Static Assets

Si vous ne souhaitez pas utiliser les assets Webpack du répertoire ʻassets`, vous pouvez ajouter les images au répertoire static.

Dans votre code, vous pouvez ensuite référencer ces fichiers par rapport à la racine (`/`):

```html
<!-- Static image depuis le répertoire static -->
<img src="/my-image.png" />

<!-- image traité par webpack depuis le répertoire assets -->
<img src="@/assets/my-image-2.png" />
```

## Configuration Du Répertoire Static

Si vous en avez besoin, vous pouvez configurer le comportement du répertoire `static/` dans le fichier `nuxt.config.js`.

### Prefix ressources Statique

Si vous déployez Nuxt.js dans un sous-dossier, par exemple `/blog/`, la base du routeur sera ajoutée par défaut au chemin statique par défaut. Si vous souhaitez désactiver ce comportement, vous pouvez définir `static.prefix` sur false dans`nuxt.config.js`.


```js
export default {
  static: {
    prefix: false
  }
}
```

Defaut: `/blog/my-image.png`

avec `static.prefix` désactivé: `/my-image.png`

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
