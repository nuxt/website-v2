module.exports = {
  common: {
    an_error_occurred: 'An error occurred',
    api_page_not_found: 'Halaman API tidak ditemukand',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Cari ("/" to focus)',
    version: 'Versi'
  },
  iso: 'id',
  docVersion: '2.13.X',
  links: {
    download: 'Unduh',
    live_edit: 'Sunting Langsung'
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
        name: 'Examples',
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
      placeholder: 'Search ("/" to focus)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - Aplikasi Vue.js Universal',
      description:
        'Nuxt.js adalah framework minimalis untuk membuat aplikasi Vue.js dengan server side rendering, hot-reloading, static generation, dan banyak lagi!'
    },
    welcome: {
      title:
        'The Intuitive<br><span class="text-nuxt-lightgreen">Vue</span> Framework<br>',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.',
      get_started: 'Memulai',
      github_stars: '27K+ github stars',
      video:
        'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.'
    },
    why: {
      title: 'Mengapa NUXT<span class="text-nuxt-lightgreen">JS</span>',
      try_nuxtjs_online: 'Coba NuxtJS Online',
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
      title: 'Siapa yang menggunakan nuxt<span class="text-nuxt-lightgreen">JS</span>'
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
      title: 'Menjadi Sponsor',
      description:
        'NuxtJS adalah proyek open source berlisensi MIT dan sepenuhnya gratis untuk digunakan. Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur-fitur baru untuk proyek ini tidak berkelanjutan tanpa dukungan keuangan yang tepat. Jika Anda menjalankan bisnis dan menggunakan Nuxt dalam produk yang menghasilkan pendapatan, masuk akal bagi bisnis untuk mensponsori pengembangan Nuxt: memastikan proyek yang diandalkan produk Anda tetap sehat dan dipelihara secara aktif. Ini juga dapat membantu pemaparan Anda di komunitas Vue/Nuxt dan membuatnya lebih mudah untuk menarik pengembang Vue/Nuxt. Jika Anda adalah pengguna individu dan telah menikmati produktivitas menggunakan Nuxt, pertimbangkan untuk memberi donasi sebagai tanda penghargaan.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: 'Nuxt<span class="text-nuxt-lightgreen">JS</span> Newsletter',
      description:
        'Get the latest Nuxt news to your inbox, curated by the core team and contributors.',
      form: {
        email: 'Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
        subscribed_messages: {
          pre: 'An email to confirm your subscription has been sent to',
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
    release_notes: 'Release Notes',
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
    docs: 'Jumpa kesalahan atau ingin berkontribusi pada dokumentasi ini?',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'Sunting halaman ini di GitHub!',
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
      'getting-started': 'Getting Started'
    },
    api: {
      essential: 'Essential',
      pages: 'Pages',
      components: 'Components',
      utils: 'Utils',
      configuration: 'Configuration',
      programmatically: 'Programmatically',
      internals: 'Internals'
    },
    examples: {
      essentials: 'Essentials',
      customization: 'Customization',
      advanced: 'Advanced'
    },
    faq: {
      configuration: 'Configuration',
      development: 'Development',
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
