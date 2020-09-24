---
title: Balises meta et référencement SEO
description: Nuxt.js vous permet de définir les balises `<meta>` par défaut pour votre application dans le fichier nuxt.config.js en utilisant la propriété head. Cela permet d'ajouter un titre et une description par défaut pour le référencement ou bien définir la fenêtre d'affichage ou ajouter la favicon.
position: 6
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/06_meta_tags_seo?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Où placer le titre et les méta descriptions de façon global ?
    answers:
      - dans le composant de la page
      - dans le fichier nuxt.config.js
      - dans le package.json
    correctAnswer: dans le fichier nuxt.config.js
  - question: Où placer le titre et les méta descriptions de façon local ?
    answers:
      - dans le composant de la page
      - dans le fichier nuxt.config.js
      - dans le composant SEO
    correctAnswer: dans le composant de la page
  - question: Dans les pages, pour avoir accès aux données dans votre titre ou méta description, vous utilisez la
    answers:
      - fonction meta
      - fonction head
      - fonction SEO
    correctAnswer: fonction head
  - question: Vous pouvez charger des ressources externes uniquement dans le fichier nuxt.config.js
    answers:
      - vrai
      - faux
    correctAnswer: faux
  - question: Pour inclure des scripts avant la fermeture de la balise body vous utilisez
    answers:
      - 'body: true'
      - 'body: false'
      - 'scripts: true'
    correctAnswer: 'body: true'
---

Nuxt.js vous propose trois façons différentes d'ajouter des métadonnées à votre application :

1. Utiliser globalement le fichier nuxt.config.js
2. Utiliser localement la propriété `head` comme un objet
3. Utiliser localement la propriété `head` comme une fonction pour que vous ayez accès aux données et aux propriétés calculées.

### Global Settings

Nuxt.js vous permet de définir les balises `<meta>` par défaut pour votre application dans le fichier nuxt.config.js en utilisant la propriété head. Cela permet d'ajouter un titre et une description par défaut pour le référencement ou bien définir la fenêtre d'affichage ou ajouter la favicon.

```js{}[nuxt.config.js]
export default {
  head: {
    title: 'mon titre de site web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ma description de site web'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
```

<base-alert type="info">

Cela vous donnera le même titre et la même description sur chaque page

</base-alert>

### Configuration locale

Vous pouvez également ajouter des titres et des meta pour chaque page en utilisant la propriété `head` à l'intérieur de votre balise de script sur chaque page.

```js{}[pages/index.vue]
<script>
export default {
  head: {
    title: 'Page d\'accueil',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Description de la page d\'accueil'
      }
    ],
  }
}
</script>
```

<base-alert type="info">

Utilisez `head` comme objet pour définir un titre et une description uniquement pour la page d'accueil

</base-alert>

```html{}[pages/index.vue]
<template>
  <h1>{{ title }}</h1>
</template>
<script>
  export default {
    data() {
      return {
        title: "Page d'accueil"
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "Description de la page d'accueil"
          }
        ]
      }
    }
  }
</script>
```

<base-alert type="info">

Utilisez `head`comme une fonction pour définir un titre et une description uniquement pour la page d'accueil. En utilisant une fonction, vous avez accès aux données et aux propriétés calculées

</base-alert>

Nuxt.js utilise [vue-meta](https://vue-meta.nuxtjs.org/) pour mettre à jour l'en-tête et les méta data de votre application.

<base-alert>

Pour éviter toute duplication lors de l'utilisation de composants enfants, veuillez donner un identifiant unique avec la clé `hid` à la méta description. De cette façon, `vue-meta` saura qu'il doit écraser la balise par défaut.

</base-alert>

<base-alert type="next">

Pour en savoir plus sur les options disponibles pour la propriété `head`, consultez la documentation [vue-meta] (https://vue-meta.nuxtjs.org/api/#metainfo-properties).

</base-alert>

## Ressources externes

Vous pouvez inclure des ressources externes telles que des scripts et des polices de caractères en les ajoutant globalement au fichier `nuxt.config.js` ou localement dans l'objet ou la fonction `head`.

<base-alert type="info">

Vous pouvez également passer à chaque ressource un `body : true` optionnel afin d'inclure la ressource avant la balise de fermeture `</body>`.

</base-alert>

### Configuration globale

```js{}[nuxt.config.js]
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  }
}
```

### Configuration locale

```html{}[pages/index.vue]
<template>
  <h1>Page avec jQuery et la police police de caractère Roboto</h1>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: Roboto, sans-serif;
  }
</style>
```

## Conseils pour les ressources

Ajoutez des liens de `prefetch` et de `preload` pour accélérer le temps de chargement de la page initiale.

Vous voudrez peut-être désactiver cette option que si vous avez beaucoup de pages et de routes.

<base-alert type="next">

[Conseils pour les ressources](/guides/configuration-glossary/configuration-render#resourcehints)

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
