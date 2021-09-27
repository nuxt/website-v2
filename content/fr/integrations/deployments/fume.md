---
template: guide
title: Fume
description: Comment déployer Nuxt sur Fume ?
target: Static & Server
category: deployment
logo:
  light: "/img/partners/dark/Fume.svg"
  dark: "/img/partners/light/Fume.svg"
---
# Déployer Nuxt sur Fume

Comment déployer Nuxt sur Fume ?

---

[Fume](https://fume.app/) est une plate-forme de contrôle des opérations optimisée par AWS.

Fume comprend les fonctionnalités suivantes :

Fume comprend les fonctionnalités suivantes :

- Structures à moindre coût prenant en charge à la fois Server et Static avec Lambda et CloudFront.
- [Automated](https://github.com/marketplace/actions/fume-deployment) Déploiements avec rollbacks en un clic
- Métriques et prévision des coûts pour chaque environnement
- Contrôle de domaine - importer des hôtes, émettre des certificats et mapper l'enregistrement aux environnements
- Notifications intégrées à Slack, Discord et autres plateformes de collaboration

## Installer

Obtenez une URL prête pour la production en 2 minutes en suivant ces étapes :

- Rendez-vous sur [Fume](https://fume.app), connectez-vous et branchez votre compte AWS
- Créer une équipe, et un projet Nuxt
- Exécutez la commande suivante dans le dossier racine de vos projets

::code-group
```bash [Yarn]
yarn global add fume-cli
fume deploy
```
```bash [NPM]
npm install -g fume-cli
fume deploy
```
::
