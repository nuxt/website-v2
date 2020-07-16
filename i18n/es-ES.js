module.exports = {
  common: {
    an_error_occurred: 'Ha ocurrido un error',
    api_page_not_found: 'Página API no encontrada',
    please_define_title: 'Por favor, añade un título',
    please_define_description: 'Por favor, añade una descripción',
    search: 'Buscar ("/" to focus)',
    version: 'Version'
  },
  iso: 'es',

  links: {
    download: 'Descargar',
    live_edit: 'Editar en línea'
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
        name: 'Ejemplos',
        slug: 'Ejemplos',
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
        name: 'Resources',
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
      placeholder: 'Buscar ("/" to focus)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - El Framework intuitivo de Vue',
      description:
        'Construye tu siguiente aplicación de Vue.js con confianza usando NuxtJS. Un framework de código abierto que trabaja en conseguir que el desarrollo web sea simple y poderoso.'
    },
    welcome: {
      title:
        'The Intuitive<br><span class="text-nuxt-lightgreen">Vue</span> Framework<br>',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.',
      get_started: 'get started',

      video:
        'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.'
    },
    why: {
      title: 'Why NUXT<span class="text-nuxt-lightgreen">JS</span>',
      try_nuxtjs_online: 'Try NuxtJS Online',
      enjoyable: {
        title: 'Enjoyable',
        description:
          'Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.'
      },
      modular: {
        title: 'Modular',
        description:
          "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap."
      },
      performant: {
        title: 'Performant',
        description:
          'With Nuxt.js, your application will be optimized out of the box.<br>We do our best to build performant applications by utilizing Vue.js and Node.js best practices.<br>To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.'
      }
    },
    companies: {
      title: 'Who\'s using nuxt<span class= "text-nuxt-lightgreen" > JS</span>'
    },
    modes: {
      title: 'NUXT<span class="text-nuxt-lightgreen">JS</span> rendering',
      ssr: {
        title: 'Server Side Rendered',
        description:
          'The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description:
          "Don't need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides? Are you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will likely be your choice. The outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the framework itself."
      },
      ssg: {
        title: 'Statically Generated',
        description:
          'Static Site Generation is a very hot topic right now (aka JAMStack). Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? <span style="color: #777">(only proverbial 🐦🐦)</span><br><br> Nuxt.js supports generating a static website based on your Vue application. It is the "best of both worlds" as you don\'t need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.'
      }
    },
    sponsors: {
      title: 'Sponsors',
      description:
        'NuxtJS is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers. If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: 'Nuxt<span class="text-nuxt-lightgreen">JS</span> Newsletter',
      description:
        'Recibe las últimas noticias de Nuxt en tu bandeja de entrada, organizado por el equipo de Nuxt y los contribuidores.',
      form: {
        email: 'Email',
        subscribing: 'Suscribiéndote...',
        subscribe: 'Suscríbete',
        subscribed_messages: {
          pre: 'Para confirmar tu suscripción hemos enviado un email a',
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
    release_notes: 'Notas de publicación (en)',
    toc_title: 'On this page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: '¿Quieres echar un vistazo a nuestra nueva documentación? Nuestras ',
    link: 'nuevas docs',
    msg2: 'están ahora en modo beta. Pásalo bien!'
  },
  contribute: {
    title: 'Contributors',
    docs: '¿Has encontrado un error o quieres contribuir en la documentación?',
    blog: '¿Has encontrado un error o quieres contribuir en este artículo?',
    edit_on_github: 'Edita esta página en GitHub!',
    msg1:
      'La contribución en esta página está cerrada. Si quieres contribuir, por favor, revisa nuestra',
    link: 'nueva documentación'
  },
  codeSandbox: {
    open: 'Abrir CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prólogo',
      'getting-started': 'Empecemos'
    },
    api: {
      essential: 'Esencial',
      pages: 'Páginas',
      components: 'Componentes',
      utils: 'Utilidades',
      configuration: 'Configuración',
      programmatically: 'Programación',
      internals: 'Mecanismos'
    },
    examples: {
      essentials: 'Esenciales',
      customization: 'Personalización',
      advanced: 'Avanzado'
    },
    faq: {
      configuration: 'Configuración',
      development: 'Desarrollo',
      deployment: 'Deployment'
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
