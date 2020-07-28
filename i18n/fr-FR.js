module.exports = {
  common: {
    an_error_occurred: "Une erreur s'est produite",
    api_page_not_found: 'La page API est introuvable',
    please_define_title: 'Merci de définir un titre',
    please_define_description: 'Merci de définir une description',
    search: 'Rechercher',
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
      placeholder: 'Rechercher'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - Le Framework Vue.js Intuitif',
      description:
        "Nuxt.js fournit toutes les configurations nécessaires pour rendre vos développements d'application Vue.js agréable. Nuxt.js peut créer des Applications Universelles, Monopages ou Statiques Générées."
    },
    welcome: {
      title: 'Le Framework Intuitif {br} basé sur {frameworkType}',
      description:
        'Construisez votre prochaine application Vue.js en toute confiance avec NuxtJS. Un framework {openSource} rendant le développement web simple et puissant.',
      openSource: 'open source',
      get_started: 'Commencer',
      get_updates:
        'Recevez chaque mois les mises à jour de Nuxt dans votre boîte de réception',
      video:
        'Vidéo produite par {company}, téléchargez gratuitement {cheatSheet}.',
      cheatSheet: 'Nuxt Cheat Sheet'
    },
    why: {
      title: 'Pourquoi {nuxt}',
      try_nuxtjs_online: 'Essayez NuxtJS Online',
      enjoyable: {
        title: 'Agréable',
        description:
          "Notre principal objectif est l'expérience des développeurs. Nous aimons Nuxt.js et améliorons continuellement le framework pour que vous l'aimiez aussi! {break} Attendez-vous à des solutions attrayantes, des messages d'erreur descriptifs, des paramètres par défaut puissants et une documentation détaillée. Si des questions ou des problèmes surviennent, notre communauté attentionnée vous aidera."
      },
      modular: {
        title: 'Modulaire',
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
        title: 'Server Side Rendered (SSR)',
        description:
          'Le mode le plus populaire pour Nuxt. Avec le rendu côté server (SSR), également appelé mode "universel" ou "isomorphe", un serveur Node.js sera utilisé pour fournir du HTML basé sur vos composants Vue au client au lieu du pur javascript. L\'utilisation du SSR entraînera une amélioration considérable de votre SEO, un meilleur UX et plus d\'opportunités (par rapport à une Vue SPA traditionnelle).{break}Parce que la mise en place du SSR par vous-même peut être vraiment fastidieuse, Nuxt.js vous offre un support complet et s\'occupera des pièges courants.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description:
          "Vous n'avez pas besoin de SSR ou de génération de site statique mais vous souhaitez tout de même profiter des avantages offerts par Nuxt ? Vous commencez doucement la transition de votre application et vous souhaitez commencer léger ? Alors le mode SPA traditionnel est probablement le bon choix. Le résultat est une typique Vue SPA telle que vous la connaissez mais influencé par votre configuration Nuxt et le framework lui-même."
      },
      ssg: {
        title: 'Static Site Generation (SSG)',
        description:
          "La génération de sites statiques est un sujet à la mode en ce moment (aka JAMStack). Au lieu de passer à un autre framework et de passer du temps à s'y habituer, pourquoi ne pas faire d'une pierre deux coups ? {proverbial} Nuxt.js prend en charge la génération d'un site statique basé sur votre application Vue. C'est le \"meilleur des deux mondes\" car vous n'avez pas besoin d'un serveur mais vous avez toujours des avantages SEO car Nuxt pré-rendra toutes les pages et inclura le HTML nécessaire. En outre, vous pouvez déployer facilement la page résultante sur des pages Netlify ou GitHub.",
        proverbial: "comme le dit l'expression"
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
      'Découvrez les articles de {nuxtTeam} et {ambassadors} à propos de NuxtJS ainsi que des astuces !',
    ambassadors: 'ambassadeurs',
    contribute:
      'Vous avez commis une erreur ou souhaitez contribuer à cet article de blog ?'
  },
  guide: {
    release_notes: 'Notes de versions (en)',
    toc_title: 'Sur cette page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: "Jetez un coup d'œil à notre ",
    link: 'nouvelle documentation (beta)',
    msg2: '. Have fun !'
  },
  contribute: {
    title: 'Contributeurs',
    docs:
      'Vous avez vu une erreur ou vous souhaitez contribuer à la documentation ?',
    blog:
      'Vous avez commis une erreur ou souhaitez contribuer à cet article de blog ?',
    edit_on_github: 'Éditez cette page sur GitHub !',
    msg1:
      'La contribution pour cette page est maintenant fermée. Si vous souhaitez contribuer, veuillez consulter notre',
    link: 'nouvelle documentation'
  },
  codeSandbox: {
    open: 'Ouvrir CodeSandbox'
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
      'get-started': 'Commencer',
      concepts: 'Concepts',
      features: 'Fonctionnalités',
      'directory-structure': 'Structure',
      'configuration-glossary': 'Configuration',
      'internals-glossary': 'Internes',
      'components-glossary': 'Composants'
    }
  }
}
