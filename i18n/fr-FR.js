module.exports = {
  header: {
    links: [
      {
        name: 'Guide French',
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
      title: 'Nuxt.js - The Intuitive Vue Framework in French',
      description: 'Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful.'
    },
    welcome: {
      title: 'The Intuitive<br><span class="text-nuxt-lightgreen">Vue</span> Framework<br> French',
      description: 'Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.',
      get_started: 'get started',
      github_stars: '27K+ github stars',
      video: 'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.'
    },
    why: {
      title: 'Why NUXT<span class="text-nuxt-lightgreen">JS</span>',
      try_nuxtjs_online: 'Try NuxtJS Online',
      enjoyable: {
        title: 'Enjoyable',
        description: 'Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.'
      },
      modular: {
        title: 'Modular',
        description: 'Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don\'t have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.'
      },
      performant: {
        title: 'Performant',
        description: 'With Nuxt.js, your application will be optimized out of the box.<br>We do our best to build performant applications by utilizing Vue.js and Node.js best practices.<br>To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.'
      }
    },
    companies: {
      title: 'Who\'s using nuxt<span class= "text-nuxt-lightgreen" > JS</span>'
    },
    modes: {
      title: 'NUXT<span class="text-nuxt-lightgreen">JS</span> rendering',
      ssr: {
        title: 'Server Side Rendered',
        description: 'The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description: 'Don\'t need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides? Are you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will likely be your choice. The outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the framework itself.'
      },
      ssg: {
        title: 'Statically Generated',
        description: 'Static Site Generation is a very hot topic right now (aka JAMStack). Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? <span style="color: #777">(only proverbial 🐦🐦)</span><br><br> Nuxt.js supports generating a static website based on your Vue application. It is the "best of both worlds" as you don\'t need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.'
      }
    },
    sponsors: {
      title: 'Sponsors',
      description: 'NuxtJS is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers. If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: 'Nuxt<span class="text-nuxt-lightgreen">JS</span> Newsletter French',
      description: 'Get the latest Nuxt news to your inbox, curated by the core team and contributors.',
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
    description: 'Discover articles from the core team and contributors about NuxtJS, tips and tricks included!'
  }
}
