module.exports = {
  common: {
    an_error_occurred: '文档API服务异常',
    api_page_not_found: 'API页面不存在',
    please_define_title: '请在文档页头中指定标题(title)字段',
    please_define_description: '请在文档页头中指定描述(description)字段',
    search: '搜索 ("/" to focus)',
    version: '版本'
  },
  iso: 'zh',

  links: {
    download: '下载',
    live_edit: '在线编辑'
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
      title: 'Nuxt.js - Vue.js 通用应用框架',
      description:
        'Nuxt.js 是一个基于 Vue.js 的轻量级应用框架，可用来创建服务端渲染 (SSR) 应用，也可充当静态站点引擎生成静态站点应用，具有优雅的代码结构分层和热加载等特性。'
    },
    welcome: {
      title:
        'The Intuitive<br><span class="text-nuxt-lightgreen">Vue</span> Framework<br>',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.',
      get_started: '开始使用',

      video:
        'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.'
    },
    why: {
      title: '为什么选择 Nuxt<span class="text-nuxt-lightgreen">JS</span>',
      try_nuxtjs_online: '在线尝试 NuxtJS',
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
      title: '谁在使用 nuxt<span class="text-nuxt-lightgreen">JS</span>'
    },
    modes: {
      title: 'NUXT<span class="text-nuxt-lightgreen">JS</span> 渲染',
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
      title: '赞助商',
      description:
        'NuxtJS 是 MIT 许可的开源项目，完全免费使用。但是，如果没有适当的资金支持，为项目维护和开发新功能所需的工作量将无法持续。如果您经营一家企业并在产生收入的产品中使用 Nuxt，则赞助Nuxt开发具有商业意义：它可以确保您的产品所依赖的项目保持健康并得到积极维护。 它还可以帮助您在 Vue/Nuxt 社区中曝光，并更容易吸引 Vue/Nuxt 开发人员。如果您是个人用户，并且享受使用 Nuxt 带来的生产力，请考虑捐赠作为一种感激之情。',
      become_a_sponsor: '成为赞助商'
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
    release_notes: '版本信息',
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
    docs: '如何提交问题或文档贡献？',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: '在 GitHub 编辑此页面！',
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
