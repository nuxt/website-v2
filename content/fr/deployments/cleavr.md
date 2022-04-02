---
template: guide
title: Cleavr
description: Comment déployer une application Nuxt avec Cleavr ?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/cleavr.svg"
  dark: "/img/companies/square/dark/cleavr.svg"
---
# Déployer Nuxt sur Cleavr

Comment déployer une application Nuxt avec Cleavr ?

---

[Cleavr](https://cleavr.io) est une console de gestion de serveur qui s'intègre à plusieurs fournisseurs de VPS (hébergement cloud) et vous aide à configurer des serveurs pour héberger et déployer vos applications Nuxt en quelques clics.

Cleavr inclut les fonctionnalités suivantes :

- Provisionner et configurer des serveurs prêts à exécuter des applications Nuxt SSR et statiques
- Serveurs sécurisés qui fournit des certificats SSL gratuits
- Déployez le code à partir des projets GitHub, GitLab et Bitbucket sans interruptions
- Installation automatique qui configure PM2 (avec le mode cluster activé) pour les applications Nuxt SSR
- Intégration de GitHub Actions pour créer une application sans configuration supplémentaire requise

## Conditions préalables

- Votre compte Cleavr est connecté à vos fournisseurs de VPS et de contrôle de version (par exemple GitHub, GitLab, Bitbucket)
- Vous avez un projet Nuxt SSR ou Statique prêt à être déployé
- Vous avez un serveur provisionné existant

## Étape 1 : Configuration initiale

Vous pouvez utiliser Flash Deploy pour provisionner/configurer un nouveau serveur et déployer votre application d'un seul coup, ou vous pouvez utiliser la méthode traditionnelle consistant à ajouter une nouvelle application Nuxt à un serveur existant. Ces instructions de configuration décrivent l'ajout d'une nouvelle application à un serveur existant.

Dans Cleavr, accédez au serveur auquel ajouter la nouvelle application et sélectionnez **Ajouter un site**.

Sélectionnez le type d'application web Nuxt SSR ou Nuxt Statique en fonction de la cible que vous avez l'intention de déployer. Remplissez les informations restantes sur le site web et cliquez sur **Ajouter**.

Cela ajoutera le site à votre serveur et configurera le serveur avec toutes les dépendances manquantes pour l'environnement.

Une fois le site ajouté avec succès, accédez à la section Application Web et cliquez sur **Configuration complète** pour l'application web qui a été ajoutée.

Renseignez votre fournisseur de contrôle de version, votre projet et votre branche pour déployer les champs, puis cliquez sur **Mettre à jour**.

## Étape 2 : Déploiement

Vous êtes maintenant prêt à déployer votre application web.

Sur la page de déploiement de l'application web, cliquez sur **Déployer**.

Le processus de déploiement commencera et se terminera après quelques instants.
