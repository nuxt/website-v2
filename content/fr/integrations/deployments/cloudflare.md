---
template: guide
title: Cloudflare
description: Ce qui doit être pris en compte lors de l'utilisation de Nuxt avec Cloudflare
category: deployment
logo:
  light: "/img/partners/dark/Cloudflare.svg"
  dark: "/img/partners/light/Cloudflare.svg"
---
# Déployez Nuxt sur Cloudflare

Ce qui doit être pris en compte lors de l'utilisation de Nuxt avec Cloudflare

---

Dans la plupart des cas, Nuxt peut fonctionner avec du contenu tiers qui n'est pas généré ou créé par Nuxt lui-même. Mais parfois, un tel contenu peut causer des problèmes, en particulier les "Options de minification et de sécurité" de Cloudflare.

En conséquence, vous devez vous assurer que les options suivantes sont décochées/désactivées dans Cloudflare. Sinon, des erreurs de rendu ou d'hydratation inutiles pourraient avoir un impact néfaste sur votre application de production.

1. Vitesse > Optimisation > Auto Minify : **Décochez** JavaScript, CSS et HTML
2. Vitesse > Optimisation > **Désactiver** "Rocket Loader™"
3. Vitesse > Optimisation > **Désactiver** "Mirage"
4. Scrape Shield > **Désactiver** "Obfuscation de l'adresse e-mail"
5. Scrape Shield > **Désactiver** "Exclusions côté serveur"

Avec ces paramètres, vous pouvez être sûr que Cloudflare n'injectera pas de scripts dans votre application Nuxt qui pourraient provoquer des effets secondaires indésirables.
