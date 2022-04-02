---
template: guide
title: 21YunBox
description: Comment déployer Nuxt sur 21YunBox ?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Yunbox.svg"
  dark: "/img/companies/square/dark/Yunbox.svg"
---

# Déployer Nuxt sur 21YunBox

Comment déployer Nuxt sur 21YunBox ?

---

[21YunBox](https://www.21yunbox.com) fournit un CDN chinois ultra-rapide, un déploiement continu, un HTTPS en un clic et [d'autres services tels que des bases de données gérées et des services backend](https://www.21yunbox.com/docs/), fournissant un moyen de lancer des projets Web en Chine.

21YunBox inclut les fonctionnalités suivantes :

- Constructions, déploiements continus et automatiques à partir de GitHub et Gitee
- Certificats SSL automatiques via [Let's Encrypt](https://letsencrypt.org)
- Invalidation instantanée du cache grâce à un CDN chinois ultra-rapide
- Illimité grâce à des [domaines personnalisés](https://www.21yunbox.com/docs/#/custom-domains)
- Automatique grâce à la [compression Brotli](https://en.wikipedia.org/wiki/Brotli) pour des sites plus rapides
- Prise en charge native de HTTP/2
- Redirections automatique de HTTP → HTTPS
- Redirections et réécritures personnalisées d'URLs

## Conditions préalables

Ce guide suppose que vous avez déjà un projet Nuxt prêt à être déployé. Si vous avez besoin d'un projet, utilisez [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) pour commencer ou clonez [l'exemple Nuxt de 21YunBox](https://gitee.com/eryiyunbox-examples/nuxtjs) avant de continuer.

## Installation

Vous pouvez configurer un site Nuxt sur 21YunBox en deux étapes rapides :

1. Créez un nouveau service Web sur 21YunBox et autorisez 21YunBox à accéder à votre dépôt GitHub ou Gitee.
2. Utilisez les valeurs suivantes lors de la création :

   |                       |                                                                    |
   | --------------------- | ------------------------------------------------------------------ |
   | **Environment**       | `Static Site`                                                      |
   | **Build Command**     | `yarn && yarn generate` (ou votre propre commande de construction) |
   | **Publish Directory** | `./dist` (ou votre propre répertoire de sortie)                    |

C'est tout ! Votre site sera en ligne sur votre URL 21YunBox (qui ressemblera à `yoursite.21yunbox.com`) dès que la construction sera terminée.

## Déploiements continus

Maintenant que 21YunBox est connecté à votre dépôt, il construira et publiera automatiquement votre site chaque fois que vous pousserez vers GitHub.

## 21YunBox CDN et invalidation du cache

21YunBox héberge votre site sur un CDN chinois ultra-rapide qui garantit des temps de téléchargement les plus rapides possibles pour tous vos utilisateurs à travers la Chine.

Chaque déploiement invalide automatiquement et instantanément le cache CDN, afin que vos utilisateurs puissent toujours accéder au dernier contenu de votre site.

## Domaines personnalisés

Ajoutez facilement vos propres domaines à votre site grâce à l'aide du guide [domaines personnalisés](https://www.21yunbox.com/docs/#/custom-domains).
