---
template: page
layout:
  fluid: true
navigation: false
layout.asideClass: 'block lg:hidden'
layout.aside: true
title: Is Nuxt3 Ready?
description: 'Nuxt3 is rebuilt from the ground up for the modern web. Hybrid static & server rendering, API routes and native serverless.'
head.titleTemplate: null
---

::nuxt3-hero
---
primary: false
---

#title
Nuxt3 is coming[.]{.text-primary}

#description
Rebuilt from the ground up for the modern web.<br>
Hybrid static & server rendering, API routes and native serverless.

#body
Get notified when Nuxt3 is in public beta.
::

::home-learn-guides
---
category: When?
---
#title
Timeline

#description
After more than 16 months of work, Nuxt3 is ready to be released, in three stages.

#default
  ::section-content-item
  ---
  image: /img/v3/step1.svg
  title: July 2021
  description: Private beta for Vue core team, Nuxt module authors and partners.
  ---
  ::
  ::section-content-item
  ---
  image: /img/v3/step2.svg
  title: September 2021
  description: Public beta for anyone willing to help make Nuxt3 bullet-proof.
  ---
  ::
  ::section-content-item
  ---
  image: /img/v3/step3.svg
  title: Q4 2021
  description: Stable version for confident production deployment.
  ---
  ::
::

::home-features
---
category: Discover
---
#title
With new features

#description
Nuxt3 has been re-architected with a smaller core and optimized for faster performance and better developer experience.

#default
  ::section-content-item
  ---
  title: Lighter
  description: Out of the box, Nuxt3 is 20% smaller than Nuxt2 (just 13kb).
  image: IconFeather
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Faster
  description: 'Optimized cold start with dynamic SSR code-splitting, powered by h3.'
  image: IconRabbit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Hybrid
  description: 'Incremental Static Generation and other advanced modes are now possible.'
  image: IconHybrid
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Suspense
  description: 'Fetch data in any component, before or after navigation.'
  image: IconSuspense
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Composition API
  description: "Use the Composition API and Nuxt3's composables for true code re-usability."
  image: IconCAPI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt CLI
  description: 'A new zero-dependency experience for easy scaffolding and module integration.'
  image: IconCLI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Devtools
  description: 'Work faster with info and quick fixes right in the browser.'
  image: IconDevtools
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Kit
  description: 'Create modules that can run on both Nuxt2 and Nuxt3 with ease.'
  image: IconKit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Webpack 5
  description: 'Faster build time and smaller bundle size, with no configuration required.'
  image: IconWebpack
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vite (beta)
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

::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-lg}
  ::nuxt-container{.text-justify}
    :icon-nuxt-nitro{.h-32}
    :headline[Nitro Engine]

    We worked for 9 months on Nuxt's new server engine for Nuxt: **Nitro**. It unlocks new **full-stack capabilities** to Nuxt server and beyond.

    In development, it uses rollup and node workers to give Hot Module Replacement for your server code and context isolation. It also **generates your server API** by reading files in `server/api/` and **server functions** from `server/functions/`.

    In production, it builds your app and server into one universal `.output` directory. This **output is light**: minified and removed from any node modules (except polyfills). You can deploy this output on any system supporting JavaScript, from Node, Serverless, Workers, Edge-side rendering or purely static.

    The output is combined with both runtime code to run your Nuxt server in any environment (including browser Service Workers, experimental) and serve you static files, making it a **true hybrid framework** for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets.

    The foundation of the Nitro server is [h3](https://github.com/unjs/h3): a minimal http framework built for high performance and portability.
  ::
::

::nuxt-container{.pt-20 .text-justify}
  :icon-nuxt-bridge{.h-32}
  :headline[Nuxt Bridge]

We moved to Vue 3 and re-wrote Nuxt after 4 years of development to make it a strong foundation for the future.

### Smooth upgrade to Nuxt3

We've worked to make the upgrade as easy as possible between Nuxt2 and Nuxt3.

- Legacy plugins and modules working
- Nuxt2 config compatible
- Partial pages options API

### Bringing Nuxt3 experience to your existing Nuxt2 project

As we've been working on new features for Nuxt3, we've back-ported some of them to Nuxt2.

- Using Nitro with Nuxt2
- Using Composition API with Nuxt2
- Using new CLI and Devtools with Nuxt2
- Progressively upgrade to Nuxt3
- Compatibility with Nuxt2 module ecosystem
- Upgrade piece by piece (Nitro, Composition API, Nuxt Kit)
::

::nuxt-container{.text-center .text-xl .pt-10}
Thank you for your patience, we cannot wait to open it publicly to get your feedback — [The Nuxt Team.]{.font-serif}
::
