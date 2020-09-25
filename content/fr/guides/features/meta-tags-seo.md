---
title: Méta tags et SEO
description: Nuxt.js vous permet de définir toutes les balises `<meta>` pour votre application à l'intérieur du fichier `nuxt.config.js` en utilisant la propriété head. C'est très utile si vous souhaitez ajouter une balise de titre par défaut ou une description (utile pour le SEO), définir le viewport ou encore ajouter le favicon.
position: 6
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/06_meta_tags_seo?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Où est-ce que l'on définit le titre et les méta descriptions de manière globale ?
    answers:
      - dans le composant page
      - dans le fichier nuxt.config.js
      - dans le package.json
    correctAnswer: dans le fichier nuxt.config.js
  - question: Où est-ce que l'on définit le titre et les méta descriptions de manière locale ?
    answers:
      - dans le composant page
      - dans le fichier nuxt.config.js
      - dans le package.json
    correctAnswer: dans le composant page
  - question: Dans les pages, pour avoir accès à votre data dans le titre ou la méta description, vous pouvez utiliser
    answers:
      - la fonction meta
      - la fonction head
      - la fonction seo
    correctAnswer: la fonction head
  - question: Vous pouvez charger des ressources externes dans le fichier nuxt.config.js uniquement
    answers:
      - true
      - false
    correctAnswer: false
  - question: Pour inclure des scripts avant la balise fermante body, il faut utiliser
    answers:
      - 'body: true'
      - 'body: false'
      - 'scripts: true'
    correctAnswer: 'body: true'
---

Nuxt.js vous donne 3 façons différentes d'ajouter de la méta data dans votre application:

1. De manière globale en utilisant le fichier nuxt.config.js
2. De manière locale en utilisant `head` en tant qu'objet
3. De manière locale en utilisant `head` en tant que fonction afin d'avoir accès aux propriétés `data` et `computed`.

### Paramètres globaux

Nuxt.js vous permet de définir toutes les balises `<meta>` pour votre application à l'intérieur du fichier `nuxt.config.js` en utilisant la propriété head. C'est très utile si vous souhaitez ajouter une balise de titre par défaut ou une description (utile pour le SEO), définir le viewport ou encore ajouter le favicon.

```js{}[nuxt.config.js]
export default {
  head: {
    title: 'Titre de mon site web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Description de mon site web'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
```

<base-alert type="info">

Ceci va vous donner le même titre et description sur chaque page.

</base-alert>

### Paramètres locaux

Vous pouvez aussi ajouter des titres et des méta pour chaque page en utilisant la méthode `head` à l'intérieur de votre balise `script` sur chaque page.

```js{}[pages/index.vue]
<script>
export default {
  head: {
    title: "Page d'accueil",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Description de la page d'accueil"
      }
    ],
  }
}
</script>
```

<base-alert type="info">

Utilisez `head` en tant qu'objet pour définir un titre et une description pour seulement la page d'accueil.

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

Utilisez `head` en tant que fonction pour définir le titre et la description pour seulement la page d'accueil. En l'utilisant en tant que fonction, vous avez accès aux propriétés `data` et `computed`.

</base-alert>

Nuxt.js utilise [vue-meta](https://vue-meta.nuxtjs.org/) pour mettre à jour l'entête de votre document et les méta attributes de votre application.

<base-alert>

Pour éviter toute duplication lorsque utilisé dans des composants enfants, veuillez donner un identifiant unique à l'aide de la clé `hid` à la méta description. Ainsi, `vue-meta` saura qu'il faudra qu'il écrase la balise par défaut.

</base-alert>

<base-alert type="next">

Pour en savoir davantage sur les options disponibles pour `head`, référez-vous à la [documentation de vue-meta](https://vue-meta.nuxtjs.org/api/#metainfo-properties).

</base-alert>

## Ressources externes

Vous pouvez inclure des ressources externes comme des scripts et des fonts en les ajoutant globalement au fichier `nuxt.config.js` ou localement dans l'objet (ou la fonction) `head`.

<base-alert type="info">

Vous pouvez aussi passer à chaque ressource un `body: true` optionnel afin de l'inclure avant la balise fermante du `</body>`.

</base-alert>

### Paramètres globaux

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

### Paramètres locaux

```html{}[pages/index.vue]
<template>
  <h1>Page à propos avec du jQuery et la font Roboto</h1>
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

## Astuces pour les ressources

Ajoutez des liens en `prefetch` et `preload` pour un chargement initial de la page plus rapide.

Cette option devrait être désactivée seulement si vous avez beaucoup de pages et de routes.

<base-alert type="next">

[Astuces pour les ressources](/guides/configuration-glossary/configuration-render#resourcehints)

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
