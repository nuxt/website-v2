---
title: .nuxt
description: Le répertoire `.nuxt` est le répértoire de build. Il est dynamiquement généré et caché du système de fichier par défaut. À l'interieur du répértoire vous pouvez trouver des fichiers générés automatiquement en utilisans la commande `nuxt dev` ou bien vos artefacts de construction lorsque vous utilisez `nuxt build`.
position: 1
category: directory-structure
questions:
  - question: Quelle(s) commande(s) permettent de générer le dossier . nuxt ?
    answers:
      - nuxt start
      - nuxt generate
      - nuxt build or nuxt dev
    correctAnswer: nuxt build ou nuxt dev
  - question: Quelle propriété devez vous utiliser pour renommer le dossier nuxt ?
    answers:
      - dir
      - build
      - buildDir
    correctAnswer: buildDir
  - question: Dans quel fichier pouvez vous trouver les routes générées ?
    answers:
      - pages.js
      - router.js
      - views.js
    correctAnswer: router.js
  - question: Que pouvez-vous trouver dans le dossier des composants ?
    answers:
      - nuxt components
      - custom components
      - global components
    correctAnswer: nuxt components
  - question: Le dossier .nuxt est le dossier qui doit être mis en ligne lorsque vous deployez des sites statiques ?
    answers:
      - vrai
      - faux
    correctAnswer: faux
---

Le répertoire `.nuxt` est le répértoire de build. Il est dynamiquement généré et caché du système de fichier par défaut. À l'interieur du répértoire vous pouvez trouver des fichiers générés automatiquement en utilisans la commande `nuxt dev` ou bien vos artefacts de construction lorsque vous utilisez `nuxt build`. La modification de ces fichiers est idéale pour le débogage mais rappelez-vous qu'il s'agit de fichiers générés et qu'une fois que vous exécutez à nouveau la commande `dev` ou` build`, tout ce qui a été modifié ici sera écrasé.

<base-alert>

Le répertoire `.nuxt` ne doit pas être versionné par système de contrôle de version (git par exemple) et doit être ignoré via votre `.gitignore` car il sera généré automatiquement lors de l'exécution de `nuxt dev` ou de` nuxt build`.

</base-alert>

### La Propriété buildDir:

Par défaut, de nombreux outils supposent que `.nuxt` est un répertoire caché car son nom commence par un point. Vous pouvez utiliser l'option buildDir dans `nuxt.config.js` pour éviter cela. Si vous changez le nom n'oubliez pas d'ajouter le nouveau nom à votre fichier `.gitignore`.
```js{}[nuxt.config.js]
export default {
  buildDir: 'nuxt-dist'
}
```

### À l'interieur du répértoire .nuxt:

- Le fichier router.js est le fichier de routeur généré que Nuxt.js génère pour vous lorsque vous placez les fichiers `.vue` dans le répértoire pages. Vous pouvez utiliser ce fichier pour le débogage lorsque vous souhaitez rechercher les routes générées par vue-router et connaître les noms d'une route spécifique.
- Le fichier router.scrollBehavior.js qui est votre Router ScrollBehavior
- Le dossier Components contient tous vos composants Nuxt tels que NuxtChild et NuxtLink. Il contient également l'indicateur nuxt-build-indicator qui est la page que nous voyons lorsque votre application est en cours de construction et nuxt-loading qui est votre composant de chargement qui est vu lorsque nous attendons le chargement de votre page. Vous trouverez également la page d'erreur nuxt ici qui contient la page d'erreur par défaut de Nuxt.
- Le dossier mixins contient les fichiers nécessaires à la méthode Nuxt `$ fetch`.
- Le dossier views contient votre modèle d'application et la page d'erreur du serveur.
- Le fichier app.js est le principal fichier de l'application.
- Le fichier client.js est le fichier nécessaire pour tout ce qui se passe bien côté client.
- Le fichier vide est volontairement laissé vide pour les _noop aliases_.
- Le fichier index.js amorce votre application.
- Le loading.html est le fichier qui est utilisé lors du chargement de la page.
- Le fichier middleware est l'endroit où votre middleware est conservé
- Le fichier server.js est tout le code exécuté sur le serveur
- les _utilities_ contiennent les utilitaires dont Nuxt a besoin pour fonctionner.

### Déployement

Le dossier `.nuxt` fait partie des fichiers nécessaires au déploiement de votre application SSR. Cela n'est pas nécessaire pour déployer votre application statique Nuxt.js car nous utilisons le dossier `dist` pour cela.

<quiz :questions="questions"></quiz>