module.exports = {
  common: {
    an_error_occurred: "Une erreur 'est produite",
    api_page_not_found: 'La page API est introuvable',
    please_define_title: 'Merci de définir un titre',
    please_define_description: 'Merci de définir une description',
    search: 'Rechercher ("/" to focus)',
    version: 'Version'
  },
  iso: 'fr',

  links: {
    download: 'Téléchargement',
    live_edit: 'Éditer en ligne'
  },
  header: {
    links: [
      {
        name: 'Guides',
        slug: 'guides',
        type: 'newDocs',
        routeName: 'guides-book-slug'
      },
      {
        name: 'Guide',
        slug: 'guide',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'API',
        slug: 'api',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Exemples',
        slug: 'examples',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'FAQ',
        slug: 'faq',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Ressources',
        slug: 'resources',
        type: 'static'
      },
      {
        name: 'Blog',
        slug: 'blog',
        type: 'static'
      }
    ],
    search: {
      placeholder: 'Rechercher ("/" to focus)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - Le Framework Vue.js Intuitif',
      description:
        "Nuxt.js fournit toutes les configurations nécessaires pour rendre vos développements d'application Vue.js agréable. Nuxt.js peut créer des Applications Universelles, Monopages ou Statiques Générées."
    },
    welcome: {
      title: 'Le Framework Intuitif{break}basé sur {frameworkType}',
      description:
        'Construisez votre prochaine application Vue.js en toute confiance avec NuxtJS. Un framework {openSource} rendant le développement web simple et puissant.',
      openSource: 'open source',
      get_started: 'Commencer',
      get_updates: 'Get NuxtJS updates to your inbox each month',
      video:
        'Vidéo produite par {company}, téléchargez gratuitement {cheatSheet}.',
      cheatSheet: 'Nuxt Cheat Sheet.'
    },
    why: {
      title: 'Pourquoi {nuxt}',
      try_nuxtjs_online: 'Essayez NuxtJS Online',
      enjoyable: {
        title: 'Enjoyable',
        description:
          "Notre principal objectif est l'expérience des développeurs. Nous aimons Nuxt.js et améliorons continuellement le framework pour que vous l'aimiez aussi! {break} Attendez-vous à des solutions attrayantes, des messages d'erreur descriptifs, des paramètres par défaut puissants et une documentation détaillée. Si des questions ou des problèmes surviennent, notre communauté attentionnée vous aidera."
      },
      modular: {
        title: 'Modular',
        description:
          "Nuxt repose sur une puissante architecture modulaire. Vous pouvez choisir parmi plus de 50 modules pour rendre votre développement plus rapide et plus facile. Il n'est pas nécessaire de réinventer la roue pour obtenir les avantages PWA, ajouter Google Analytics à votre page ou générer un plan du site."
      },
      performant: {
        title: 'Performant',
        description:
          "Avec Nuxt.js, votre application sera optimisée et prête à l'emploi. Nous faisons de notre mieux pour créer des applications performantes en appliquant les meilleures pratiques de Vue.js et Node.js. Pour tirer le meilleur parti de votre application, Nuxt inclut un analyseur de bundles et de nombreuses possibilités d'ajuster votre application."
      }
    },
    companies: {
      title: 'Qui utilise {nuxt}'
    },
    modes: {
      title: 'Rendu {nuxt}',
      ssr: {
        title: 'Server Side Rendered',
        description:
          'The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).{break}Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description:
          "Don't need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides? Are you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will likely be your choice. The outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the framework itself."
      },
      ssg: {
        title: 'Statically Generated',
        description:
          'Static Site Generation is a very hot topic right now (aka JAMStack). Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? {proverbial} Nuxt.js supports generating a static website based on your Vue application. It is the "best of both worlds" as you don\'t need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.',
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'Sponsors',
      description:
        'NuxtJS est un projet open source sous licence MIT entièrement gratuit. Cependant, les efforts nécessaires pour maintenir et développer de nouvelles fonctionnalités pour le projet ne sont pas durables sans un soutien financier adéquat. Si vous exploitez une entreprise et utilisez Nuxt dans un produit générateur de revenus, il est logique de parrainer le développement Nuxt: cela garantit que le projet sur lequel votre produit repose reste en bonne santé et activement entretenu. Cela peut également vous aider à mieux faire connaître votre entreprise dans la communauté Vue/Nuxt et à attirer plus facilement les développeurs Vue/Nuxt. Si vous êtes un utilisateur individuel et avez apprécié la productivité de l’utilisation de Nuxt, envisagez de faire un don en guise de remerciement.',
      become_a_sponsor: 'Devenir sponsor'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        "Recevez les dernières nouvelles de Nuxt dans votre boîte de réception, organisée par l'équipe Nuxt et les contributeurs.",
      form: {
        email: 'Email',
        subscribing: "S'abonner",
        subscribe: "S'abonner",
        subscribed_messages: {
          pre: 'Un email pour confirmer que votre abonnement a été envoyé à',
          post: '💚'
        }
      }
    }
  },
  blog: {
    title: 'NuxtJS Blog',
    description:
      'Discover articles from the core team and contributors about NuxtJS, tips and tricks included!',
    contribute: 'Caught a mistake or want to contribute to this blog post?'
  },
  guide: {
    release_notes: 'Notes de versions (en)',
    toc_title: 'On this page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: 'Want to take a look at our new docs? Our ',
    link: 'new docs',
    msg2: 'are now in beta. Have fun!'
  },
  contribute: {
    title: 'Contributors',
    docs:
      'Vous avez vu une erreur ou vous souhaitez contribuer à la documentation ?',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'Éditez cette page sur GitHub !',
    msg1:
      'Contribution for this page is now closed. If you would like to contribute please check out our',
    link: 'new docs'
  },
  codeSandbox: {
    open: 'Open CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Pour Commencer'
    },
    api: {
      essential: 'Essentiel',
      pages: 'Pages',
      components: 'Composants',
      utils: 'Utilitaires',
      configuration: 'Configuration',
      programmatically: 'Programmation',
      internals: 'Mécanismes'
    },
    examples: {
      essentials: 'Essentiels',
      customization: 'Personnalisation',
      advanced: 'Avancé'
    },
    faq: {
      configuration: 'Configuration',
      development: 'Développement',
      deployment: 'Déploiement'
    },
    guides: {
      'get-started': 'Get Started',
      concepts: 'Concepts',
      features: 'Features',
      'directory-structure': 'Directory Structure',
      'configuration-glossary': 'Configuration Glossary',
      'internals-glossary': 'Internals Glossary',
      'components-glossary': 'Components Glossary'
    }
  }
}
