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

The `static` directory is directly mapped to the server root and contains files that likely won't be changed. All included files will be automatically served by Nuxt and are accessible through your project root URL.

`/static/robots.txt` will be available at `http://localhost:3000/robots.txt`

`/static/favicon.ico` will be available at  `http://localhost:3000/favicon.ico`

This option is helpful for files like `robots.txt`, `sitemap.xml` or `CNAME` (which is important for GitHub Pages deployment).

<base-alert>

_This directory cannot be renamed without extra configuration._

</base-alert>

## Static Assets

If you don't want to use Webpack assets from the `assets` directory, you can add the images to the static directory.

In your code, you can then reference these files relative to the root (`/`):

```html
<!-- Static image from static directory -->
<img src="/my-image.png" />

<!-- webpacked image from assets directory -->
<img src="@/assets/my-image-2.png" />
```

## Static Directory Config

Should you need to you can configure the `static/` directory behaviour in the `nuxt.config.js` file.

### Static asset Prefix

If you deploy Nuxt.js to a subfolder, e.g. `/blog/`, the router base will be added to the static asset path by default. If you want to disable this behavior, you can set `static.prefix` to false in the `nuxt.config.js`.

```js
export default {
  static: {
    prefix: false
  }
}
```

Default: `/blog/my-image.png`

With `static.prefix` disabled: `/my-image.png`

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
