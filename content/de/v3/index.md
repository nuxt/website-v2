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
  description: 'Erleben Sie blitzschnelle HMR, indem Sie Vite als Ihren Builder verwenden.'
  image: IconVite
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vue 3
  description: 'Vue 3 ist eine solide Grundlage für ihre nächste Webanwendung.'
  image: IconVue
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: TypeScript
  description: 'Erstellt mit nativem TypeScript und ESM - keine zusätzlichen Schritte erforderlich.'
  image: IconTypeScript
  imageClass: w-10 h-10
  ---
  ::
::

::section{.py-20 .text-lg}
  ::nuxt-container{.text-justify}
    :icon-nuxt-nitro{.h-32}
    :headline[Nitro Engine]

    Wir haben 9 Monate lang an der neuen Server-Engine für Nuxt gearbeitet: **Nitro**. Sie schaltet neue **Full-Stack-Funktionen** für Nuxt Server und darüber hinaus frei.

	 In der Entwicklung verwendet es Rollup und Node.js Worker für Ihren Servercode und die Kontextisolierung. Außerdem **erzeugt es Ihre Server-API**, indem es Dateien in `server/api/` und **Serverfunktionen** aus `server/functions/` liest.

    In der Produktion werden Ihre Anwendung und Ihr Server in einem universellen `.output`-Verzeichnis erstellt. Diese **Ausgabe ist leicht**: minifiziert und von allen Node.js-Modulen entfernt (außer Polyfills). Sie können diese Ausgabe auf jedem System bereitstellen, das JavaScript unterstützt, von Node.js, Serverless, Workers, Edge-seitigem Rendering oder rein statisch.

	Die Ausgabe wird sowohl mit Runtime-Code kombiniert, um Ihren Nuxt-Server in jeder Umgebung auszuführen (einschließlich experimenteller Browser Service Worker!), als auch um Ihnen Static Dateien zu liefern, was es zu einem **echten Hybrid-Framework** für den JAMStack macht. Darüber hinaus ist eine native Speicherschicht implementiert, die Multi-Source, Treiber und lokale Assets unterstützt.

    Die Grundlagen von dem Nitro Server sind rollup und [h3](https://github.com/unjs/h3): ein minimales HTTP Framework gemacht für hohe Leistung und Tragbarkeit.
  ::
::

::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-justify}
  ::nuxt-container{.text-justify}
    :icon-nuxt-bridge{.h-32}
    :headline[Nuxt Bridge]

    Wir sind auf Vue 3 umgestiegen und haben Nuxt nach 4 Jahren Entwicklungszeit neu geschrieben, um es zu einer starken Grundlage für die Zukunft zu machen.

    ### Reibungsloses Upgrade auf Nuxt 3

    Wir haben uns bemüht, das Upgrade zwischen Nuxt 2 und Nuxt 3 so einfach wie möglich zu gestalten.

    - Ältere Plugins und Module werden weiterhin funktionieren.
    - Nuxt 2 Config ist kompatibel
    - Optionen für Teilseiten API verfügbar

    ### Bringen Sie Nuxt 3 Erfahrung in Ihr bestehendes Nuxt 2 Projekt

    Da wir an neuen Funktionen für Nuxt 3 gearbeitet haben, haben wir einige von ihnen in Nuxt 2 zurückportiert.

    - Verwendung von Nitro Server mit Nuxt 2
    - Verwendung von der Composition API (Gleich wie Nuxt 3) mit Nuxt 2
    - Verwendung der neuen CLI und Devtools mit Nuxt 2
    - Schrittweises Upgrade auf Nuxt 3
    - Kompatibilität mit dem Nuxt 2 Modul-Ökosystem
    - Stück für Stück aufrüsten (Nitro, Composition API, Nuxt Kit)
  ::
::

::section{.text-center .text-xl .pt-10}
Vielen Dank für Ihre Geduld, wir können es kaum erwarten, V3 zu veröffentlichen und Ihr Feedback einzuholen. — [Das Nuxt Team.]{.font-serif}
::
