---
template: guide
title: Digital Ocean
description: Comment déployer Nuxt sur DigitalOcean App Platform ?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Digital_Ocean.svg"
  dark: "/img/companies/square/dark/Digital_Ocean.svg"
---
# Déployer Nuxt sur DigitalOcean App Platform

Comment déployer Nuxt sur DigitalOcean App Platform ?

---

[DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/) vous permet de créer, déployer et mettre à l'échelle des applications rapidement à l'aide d'une solution simple et entièrement gérée. Ils géreront l'infrastructure, les environnements d'exécution et les dépendances des applications, afin que vous puissiez pousser le code vers la production en quelques clics.

La plate-forme d'applications comprend les fonctionnalités suivantes :

- Créez, déployez, gérez et faites évoluer des applications.
- Sécurisez les applications automatiquement. Ils créent, gèrent et renouvellent vos certificats SSL en protègeant également vos applications des attaques DDoS.
- Prise en charge de Node.js, sites statiques, Python, Django, Go, PHP, Laravel, React, Ruby, Ruby on Rails, Gatsby, Hugo, images de conteneurs.
- Déployez le code directement depuis vos projets GitHub et GitLab. Redéployez automatiquement l'application lorsque vous envoyez des mises à jour de votre code source.
- Zéro gestion d'infrastructures. App Platform utilise des normes ouvertes et natives du cloud et analyse automatiquement votre code, crée des conteneurs et les exécutent sur des clusters Kubernetes.
- Hautement évolutif. Mise à l'échelle horizontalement ou verticalement.

## Conditions préalables

Ce guide suppose que vous avez déjà un projet Nuxt à déployer. Si vous avez besoin d'un projet, utilisez [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) pour commencer.

## Installation

1. Liez votre projet : créez un nouveau compte sur DigitalOcean et connectez votre compte GitHub ou Gitlab. Puis, sélectionnez le projet que vous souhaitez déployer.
2. Choisissez une branche de votre projet et une région pour déployer votre site.
3. Choisissez un service qui convient à votre site web.

   | Type       | Paramètres                                                                                 |
   | ---------- | ------------------------------------------------------------------------------------------ |
   | **Server** | Web service - Commande de construction `yarn build` & Commande d'exécution `yarn start`    |
   | **Static** | Static Sites - Commande de construction `yarn generate` & Répertoire de sortie `dist`      |

4. Si vous disposez de variables d'environnements, ajoutez les manuellement dans les entrées clés-valeurs.

Une fois que vous avez réussi le processus, vous pouvez déployer et votre site web sera en ligne sur une URL générée automatiquement dès que la construction sera terminée.

## Déploiement continu (CD)

Maintenant qu'App Platform est connecté à votre projet, il construira et publiera automatiquement votre site à chaque fois que vous pousserez un nouveau changement.

## Ajouter des domaines personnalisés

Ajoutez facilement vos propres domaines à votre site sur Paramètres > Domaines > Ajouter un domaine ou suivez le guide : [Comment gérer les domaines sur App Platform](https://www.digitalocean.com/docs/app-platform/how-to/manage-domains/).

## Déployez grâce au bouton de DigitalOcean

Le bouton de déploiement sur DigitalOcean permet aux utilisateurs de lancer une application sur App Platform. Il peut être directement intégré dans le fichier README pour les projets Github, permettant ainsi aux utilisateurs qui parcourent votre projet de déployer votre code en un clic, en ajoutant un fichier .yaml dans votre projet. Consultez [Comment ajouter un bouton de "déploiement sur DigitalOcean" à votre projet](https://www.digitalocean.com/docs/app-platform/how-to/add-deploy-do-button/).
