---
template: blank
title: Ist Nuxt 3 bereit?
description: 'Nuxt 3 wurde von Grund auf für das moderne Web neu entwickelt. Hybrides Static & Server-Rendering, API-Routen und natives Serverless.'
head.titleTemplate: null
---

::nuxt3-hero
---
primary: false
---

#title
Nuxt 3 kommt[.]{.text-primary}

#description
Von Grund auf neu aufgebaut für das moderne Web.<br>
Hybrides Static & Server-Rendering, API-Routen und natives Serverless.

#body
Lassen Sie sich per E-Mail benachrichtigen, wenn Nuxt 3 in der öffentlichen Beta-Version erscheint.
::

::home-features{.dark:bg-secondary-darkest .bg-gray-50}
---
category: Entdecken
---
#title
Mit neuen Features

#description
Nuxt 3 hat eine neue Architektur mit einem kleineren Kern und wurde für eine schnellere Leistung und bessere Entwicklererfahrung optimiert.

#default
  ::section-content-item
  ---
  title: Leichter
  description: Bis zu 75-mal kleinere Server-Deployments und kleinere Client-Builds, die auf moderne Browser ausgerichtet sind.
  image: IconFeather
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Schneller
  description: 'Optimierter Start mit dynamischem Server-Code-Splitting, unterstützt durch Nitro.'
  image: IconRabbit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Hybrid
  description: 'Incremental Static Generation und andere erweiterte Modi sind jetzt möglich.'
  image: IconHybrid
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Suspense
  description: 'Abrufen von Daten in jeder Komponente, vor oder nach der Navigation.'
  image: IconSuspense
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Composition API
  description: "Verwenden Sie die Composition API und die Composables von Nuxt 3 für echte Wiederverwendbarkeit von Code."
  image: IconCAPI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt CLI
  description: 'Eine neue Zero-Dependency-Erfahrung für einfache Gerüstbildung und Modulintegration.'
  image: IconCLI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Devtools
  description: 'Schnelleres Arbeiten mit Informationen und schnellen Korrekturen direkt im Browser.'
  image: IconDevtools
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Kit
  description: 'Brandneue Modulentwicklung mit Typescript und versionsübergreifender Kompatibilität.'
  image: IconKit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Webpack 5
  description: 'Schnellere Erstellungszeit und kleinere Paketgröße, ohne dass eine Konfiguration erforderlich ist.'
  image: IconWebpack
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vite
  description: 'Experience lightning fast HMR by using Vite as your bundler.'
  image: IconVite
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vue 3
  description: 'Vue 3 is a solid foundation for your next web app.'
  image: IconVue
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: TypeScript
  description: 'Built with native TypeScript and ESM - no extra steps required.'
  image: IconTypeScript
  imageClass: w-10 h-10
  ---
  ::
::

::section{.py-20 .text-lg}
  ::nuxt-container{.text-justify}
    :icon-nuxt-nitro{.h-32}
    :headline[Nitro Engine]

    We worked for 9 months on Nuxt's new server engine for Nuxt: **Nitro**. It unlocks new **full-stack capabilities** to Nuxt server and beyond.

    In development, it uses rollup and Node.js workers for your server code and context isolation. It also **generates your server API** by reading files in `server/api/` and **server functions** from `server/functions/`.

    In production, it builds your app and server into one universal `.output` directory. This **output is light**: minified and removed from any Node.js modules (except polyfills). You can deploy this output on any system supporting JavaScript, from Node.js, Serverless, Workers, Edge-side rendering or purely static.

    The output is combined with both runtime code to run your Nuxt server in any environment (including experimental browser Service Workers!) and serve you static files, making it a **true hybrid framework** for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets.

    The foundation of the Nitro server is rollup and [h3](https://github.com/unjs/h3): a minimal http framework built for high performance and portability.
  ::
::

::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-justify}
  ::nuxt-container{.text-justify}
    :icon-nuxt-bridge{.h-32}
    :headline[Nuxt Bridge]

    We moved to Vue 3 and re-wrote Nuxt after 4 years of development to make it a strong foundation for the future.

    ### Smooth upgrade to Nuxt 3

    We've worked to make the upgrade as easy as possible between Nuxt 2 and Nuxt 3.

    - Legacy plugins and modules will keep working
    - Nuxt 2 config is compatible
    - Partial pages options API available

    ### Bringing Nuxt 3 experience to your existing Nuxt 2 project

    As we've been working on new features for Nuxt 3, we've back-ported some of them to Nuxt 2.

    - Using Nitro server with Nuxt 2
    - Using Composition API (same as Nuxt 3) with Nuxt 2
    - Using new CLI and Devtools with Nuxt 2
    - Progressively upgrade to Nuxt 3
    - Compatibility with Nuxt 2 module ecosystem
    - Upgrade piece by piece (Nitro, Composition API, Nuxt Kit)
  ::
::

::section{.text-center .text-xl .pt-10}
Thank you for your patience, we cannot wait to open it publicly to get your feedback — [The Nuxt Team.]{.font-serif}
::
