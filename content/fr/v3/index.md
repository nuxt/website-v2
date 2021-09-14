---
template: blank
layout:
  fluid: true
navigation: false
layout.asideClass: 'block lg:hidden'
layout.aside: true
title: Is Nuxt 3 Ready?
head.titleTemplate: null
---


::nuxt3-hero
---
primary: false
---

#title
Nuxt 3 arrive[.]{.text-primary}

#description
Reconstruit à partir de zéro avec TypeScript et une architecture plus solide.<br>
Nuxt 3 amène les applications web à un nouveau niveau, rendu hybride statique et serveur, routes API, serveless.

#body
Soyez averti lorsque Nuxt 3 passe en version bêta publique.
::

::home-features
---
category: Découvrir
---

#title
Avec de nouvelles fonctionnalités

#description
Reconstruit à partir de zéro avec TypeScript et une architecture plus solide, Nuxt 3 offre un noyau plus petit et un ensemble de nouvelles fonctionnalités pour les performances et l'expérience des développeurs.

#default
  ::section-content-item
  ---
  title: Léger
  description: "L'application Nuxt 3 pèse par défaut 13 Ko, soit une réduction de 20% par rapport à Nuxt 2."
  image: IconFeather
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Rapide
  description: 'Démarrage du serveur et temps de réponse plus rapides grâce au code-splitting, optimisé par h3.'
  image: IconRabbit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Hybride
  description: "La génération statique incrémentale est désormais possible, spécifiez vos pages statiques et laissez Nuxt s'occuper du reste."
  image: IconHybrid
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Suspense
  description: 'Récupérez les données dans les composants et retardez la navigation entre deux pages ou affichez des espaces réservés pour le chargement.'
  image: IconSuspense
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Composition API
  description: 'Utilisez la composition API de Vue et Nuxt 3 pour apporter une réactivité et une réutilisabilité complète de votre application.'
  image: IconCAPI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt CLI
  description: "Une nouvelle expérience pour un démarrage rapide, une installation légère avec l'intégration de modules."
  image: IconCLI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Devtools
  description: 'Travaillez plus rapidement avec des informations visuelles et des actions rapides dans le navigateur.'
  image: IconDevtools
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Kit
  description: 'Créez des modules qui peuvent fonctionner à la fois sur Nuxt 2 et Nuxt 3 avec facilité.'
  image: IconKit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Webpack 5
  description: 'Temps de construction plus rapide et taille de paquets plus petits, sans configuration requise.'
  image: IconWebpack
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vite (beta)
  description: "Faites l'expérience de l'HMR ultra-rapide en utilisant Vite comme bundler au lieu de Webpack."
  image: IconVite
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vue 3
  description: 'Composition API, suspense, plugins, Vue 3 est une base solide pour un framework web.'
  image: IconVue
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: TypeScript
  description: "TypeScript et ESM prêts à l'emploi. Aucune étape supplémentaire nécessaire lors de l'exécution avec Nuxt."
  image: IconTypeScript
  imageClass: w-10 h-10
  ---
  ::
::


::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-lg}
  ::nuxt-container{.text-justify}
    :icon-nuxt-nitro{.h-32}
    :headline[Moteur Nitro]

  Nous avons travaillé pendant 9 mois sur le nouveau moteur de serveur pour Nuxt : **Nitro**. Il débloque de nouvelles **capacités robustes** sur le serveur Nuxt et au-delà.

  En développement, il utilise Rollup et des workers Node pour fournir un remplacement de module à chaud pour votre code serveur et l'isolation du contexte. Il **génère également l'API de votre serveur** en lisant les fichiers dans `server/api/` et des **fonctions serveurs** à partir de `server/functions/`.

  En production, il construit votre application et votre serveur dans un répertoire universel `.output`. Cette **sortie est légère** : minimisée et supprimée de tous les modules de node (excepté les polyfills). Vous pouvez déployer cette sortie sur n'importe quel système prenant en charge JavaScript, à partir de Node, Serverless, Workers, Edge-side Rendering ou purement statique.

  La sortie est combinée à la fois au code d'exécution pour exécuter votre serveur Nuxt dans n'importe quel environnement (y compris les Service Workers du navigateur, expérimental) et vous servir des fichiers statiques, ce qui en fait un **véritable framework hybride** pour JAMStack. De plus, une couche de stockage native est implémentée, prenant en charge plusieurs sources, pilotes et ressources locales.

  La base du serveur Nitro est [h3](https://github.com/unjs/h3) : un framework http minimal conçu pour des performances et une portabilité élevées.
  ::
::

::nuxt-container{.pt-20 .text-justify}
  :icon-nuxt-bridge{.h-32}
  :headline[Nuxt Bridge]

Nous sommes passés à Vue 3 et avons réécrit Nuxt après 4 ans de développement pour en faire une base solide pour l'avenir.

### Mise à niveau en douceur vers Nuxt3

Nous avons travaillé pour rendre la mise à niveau aussi simple que possible entre Nuxt2 et Nuxt3.

- Les plugins et modules hérités fonctionnent
- Compatible avec la configuration Nuxt2
- Options API de pages partielles

### Apporter l'expérience Nuxt3 à votre projet Nuxt2 existant

Alors que nous travaillions sur de nouvelles fonctionnalités pour Nuxt3, nous avons rétroporté certaines d'entre elles sur Nuxt2.

- Utilisation de Nitro avec Nuxt2
- Utilisation Composition API avec Nuxt2
- Utilisation de la nouvelle CLI et Devtools avec Nuxt2
- Mise à niveau progressive vers Nuxt3
- Compatibilité avec l'écosystème de modules Nuxt2
- Mise à niveau pièce par pièce (Nitro, Composition API, Nuxt Kit)
::

::nuxt-container{.text-center .text-xl .pt-10}
Nous vous remercions de votre patience et avons hâte de l'ouvrir publiquement pour obtenir vos commentaires.
::

::nuxt-container{.text-center .text-xl .pt-10}
Thank you for your patience, we cannot wait to open it publicly to get your feedback — [The Nuxt Team.]{.font-serif}
::
