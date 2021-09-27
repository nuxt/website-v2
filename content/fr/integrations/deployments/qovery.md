---
template: guide
title: Qovery
description: Comment déployer Nuxt sur Qovery ?
target: Static & Server
category: deployment
logo:
  light: "/img/partners/dark/Qovery.svg"
  dark: "/img/partners/light/Qovery.svg"
---
# Déployez Nuxt sur Qovery

Comment déployer Nuxt sur Qovery ?

---

[Qovery](https://qovery.com) est une plate-forme cloud entièrement gérée qui s'exécute sur votre compte AWS, GCP, Azure et Digital Ocean où vous pouvez héberger des sites statiques, des APIs backend, des bases de données, des tâches cron ou toutes autres applications en un seul endroit.

Les sites statiques sont **entièrement gratuits** sur Qovery et incluent les éléments suivants :

- Constructions, déploiements continus et automatiques à partir de GitHub et GitLab.
- Certificats SSL automatiques via [Let's Encrypt](https://letsencrypt.org).
- PostgreSQL gratuitement géré.
- Stockage SSD gratuit.
- Collaborateurs illimités.
- [Domaines personnalisés illimités](https://docs.qovery.com/guides/getting-started/setting-custom-domain/).

## Conditions préalables

Ce guide suppose que vous avez déjà un projet Nuxt à déployer. Si vous avez besoin d'un projet, suivez le [guide de démarrage](/docs/get-started/installation).

## Installation

Suivez la procédure ci-dessous pour configurer Nuxt sur Qovery :

### 1. Créer un compote Qovery.

Visitez le [dashboard Qovery](https://console.qovery.com) pour créer un compte si vous n'en avez pas déjà un.

### 2. Créer un projet

Cliquez sur "Créer un nouveau projet" et donnez un nom à votre projet.

Cliquez sur "Suivant".

### 3. Ajouter une application

Cliquez sur "Créer une application" puis choisissez "J'ai une application" et sélectionnez le référentiel où se trouve votre site Nuxt.

Cliquez sur "Suivant".

Ignorez l'ajout de services pour le site Web statique.

Cliquez sur "Déployer".

## Déployer

Your app should be deployed. You can see the status in real time by clicking on deployment logs.

## Déploiement continu

Maintenant que Qovery est connecté à votre référentiel, il **construira et publiera automatiquement votre site** à chaque fois que vous pousserez vers git.

## Domaines personnalisés

Ajoutez facilement vos propres domaines à votre site à l'aide du guide [domaines personnalisés](https://docs.qovery.com/guides/getting-started/setting-custom-domain/) de Qovery.

## Support

Discutez avec les développeurs Qovery sur [Discord](https://discord.qovery.com) si vous avez besoin.
