---
template: guide
title: Bip
description: Comment déployer une application Nuxt avec Bip ?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/bip.png"
  dark: "/img/companies/square/dark/bip.png"
---
# Déployer Nuxt avec Bip

Comment déployer une application Nuxt avec Bip ?

---

[Bip](https://bip.sh) est un service commercial d'hébergement qui fournit un déploiement sans interruption, un CDN mondial, SSL, une bande passante illimitée et plus encore pour les sites web statiques Nuxt. Les plans sont disponibles sur une base de paiement au fur et à mesure, par domaine.

Le guide suivant vous montrera comment déployer votre site statique Nuxt sur Bip en quelques étapes simples.

## Conditions préalables

- Vous avez installé [Yarn](https://yarnpkg.com/getting-started/install).
- Vous avez installé la CLI de Bip, ainsi qu'un compte et domaine Bip prêt à l'emploi. Consultez le [guide de démarrage Bip](https://bip.sh/getstarted) pour plus d'informations.

## Étape 1 : Configuration initiale

Vous aurez tout d'abord besoin d'un projet Nuxt prêt à être déployé et partagé avec le monde. Si vous avez besoin d'un projet, utilisez [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) :

Utilisez Yarn pour créer un nouveau projet :

```bash
yarn create nuxt-app <project-name>
```

Suivez les instructions pour configurer votre projet Nuxt. Assurez-vous que lorsque vous atteignez le paramètre 'Deployment target', sélectionnez 'Static (Static/JAMstack hosting)'.

Une fois terminé, déplacez-vous dans votre nouveau répertoire :

```bash
cd <project-name>
```

Ensuite, vous devrez initialiser votre projet avec Bip. Cela n'a besoin d'être fait que la première fois.

```bash
bip init
```

Suivez les instructions, où il vous sera demandé sur quel domaine vous souhaitez déployer. Bip détectera que vous utilisez Nuxt et définira automatiquement les paramètres du projet comme le répertoire du fichier source.

## Étape 2: Déploiement

Vous êtes maintenant prêt à déployer votre site web. Pour ce faire, exécutez :

```bash
yarn generate && bip deploy
```

Voilà ! Après quelques instants, votre site web sera déployé.
