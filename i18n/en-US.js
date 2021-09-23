<<<<<<< HEAD
import en from '~docus-i18n/en-US'

export default {
  ...en,
  banner: {
    here: 'here',
    format: '{nuxt} is coming... Discover more about it {here} !'
  },
  cookies: {
    message: 'We use Cookies for user analysis and on-page improvements!',
    link: 'Learn about cookies',
    button: 'Got it'
  },
  footer: {
    titles: {
      Discover: 'Discover',
      Help: 'Help',
      Support: 'Support'
    },
    'Our team': 'Our team',
    'Design Kit': 'Design Kit',
    'Contact us': 'Contact us',
    Resources: 'Resources',
    'Chat with us': 'Chat with us',
    'Contribution guide': 'Contribution guide',
    Sustainability: 'Sustainability',
    Training: 'Training',
    newsletter: {
      title: 'Newsletter',
      description: 'The latest news, articles, and resources, sent to your inbox monthly.',
=======
module.exports = {
  common: {
    an_error_occurred: 'An error occurred',
    api_page_not_found: 'API page not found',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Search ("/" to focus)',
    version: 'Version'
  },
  iso: 'en',

  links: {
    download: 'Download',
    live_edit: 'Live Edit'
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
<<<<<<< HEAD
        name: 'FAQ',
        slug: 'faq',
        type: 'dynamic',
        routeName: 'section-slug'
=======
        name: 'Resources',
        icon: 'resources',
        slug: 'resources'
>>>>>>> 1ac253b5 (feat: resources page (#1177))
      },
      {
        name: 'Resources',
        slug: 'resources',
        type: 'static'
      },
      {
<<<<<<< HEAD
        name: 'Blog',
        slug: 'blog',
        type: 'static'
=======
        name: 'Video Courses',
        icon: 'video',
        slug: 'video-courses'
        // href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
>>>>>>> 1ac253b5 (feat: resources page (#1177))
      }
    ],
    search: {
      placeholder: 'Search ("/" to focus)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - The Intuitive Vue Framework',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful.'
    },
    welcome: {
      title: 'The Intuitive {break}{frameworkType} Framework',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An {openSource} framework making web development simple and powerful.',
      openSource: 'open source',
      get_started: 'get started',
      get_updates: 'Get NuxtJS updates to your inbox each month',
      video: 'Video produced by {company}, download their free {cheatSheet}',
      cheatSheet: 'Nuxt Cheat Sheet.'
    },
    why: {
      title: 'Why {nuxt}',
      try_nuxtjs_online: 'Try NuxtJS Online',
      enjoyable: {
        title: 'Enjoyable',
        description:
          'Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! {break} Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.'
      },
      modular: {
        title: 'Modular',
        description:
          "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap."
      },
      performant: {
        title: 'Performant',
        description:
          'With Nuxt.js, your application will be optimized out of the box.We do our best to build performant applications by utilizing Vue.js and Node.js best practices. To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.'
      }
    },
    companies: {
      title: "Who's using {nuxt}"
    },
    modes: {
      title: '{nuxt} rendering',
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
        'NuxtJS is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers. If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        'Get the latest Nuxt news to your inbox, curated by the NuxtJS team.',
>>>>>>> 26a70b2b (chore: add guides section (#407))
      form: {
        email: 'Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
<<<<<<< HEAD
        already_registered: 'You are already registered',
        invalid_address: 'Invalid address',
        subscribed_messages: {
          pre: 'An email to confirm your subscription has been sent to',
          confirmation: 'Email confirmed'
        }
      }
    },
    license: 'Nuxt is an open source framework under MIT license.'
  },
  sidebar: {
    partners: {
      title: 'Partners',
      button: 'Support Us'
    },
<<<<<<< HEAD
    ads: {
      fallback: {
        title: 'Nuxt needs you!',
        description: 'By allowing nuxtjs.org on your Ad-Blocker, you support our work and help us financially.'
      }
=======
    title: '{nuxt} Resources',
    description:
      'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.',
    themes: {
      title: 'Themes'
    },
    modules: {
      title: 'Modules'
    },
    examples: {
      title: 'Examples'
    },
    faq: {
      title: 'FAQ'
    },
    videos: {
      title: 'Video Courses'
>>>>>>> 1ac253b5 (feat: resources page (#1177))
    }
  },
  home: {
    discover: {
      pages: 'Pages',
      ui: 'UI',
      data: 'Data',
      modules: 'Modules',
      deployment: 'Deployment'
    },
    cli: 'From CLI',
    scratch: 'From Scratch'
  },
  modules: {
    search: 'Search a module (name, category, username, etc.)',
    sort_by: 'Sort by',
    sort_fields: {
      downloads: 'Downloads',
      stars: 'Stars'
    },
    loading: 'Loading...',
    error: 'An error occured while fetching modules.'
  },
<<<<<<< HEAD
  resources: {
    themes: {
      get_for_it: 'Get it for {price}',
      video_course: 'Start course'
=======
  'video-courses': {
    meta: {
      title: 'NuxtJS Video Courses',
      description:
        'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.'
    },
    title: '{nuxt} Video Courses',
    description:
      'With the video courses below you can discover and learn more about the Nuxt Framework.',
    cta: {
      discover: 'Discover Mastering Nuxt',
      start: 'START COURSE'
>>>>>>> 1ac253b5 (feat: resources page (#1177))
    }
  },
  sustainability: {
    tiers: {
      mvp_sponsors: 'MVP Sponsors',
      partners: 'Partners',
      sponsors: 'Sponsors',
      donations: 'Donate'
    },
    mvp_detail: {
      services: 'Services',
      location: 'Location',
      contact_partner: 'Contact Partner',
      visit_website: 'Visit Website'
    }
  },
  support: {
    confirm_sending: 'Message sent to technical support',
    error_sending: 'Error during sending',
    invalid_adress: 'Invalid address'
  },
  showcases: {
    loading: 'Loading...',
    chrome_extension: 'Chrome extension',
    firefox_extension: 'Firefox extension',
    categories: {
      Featured: 'Featured',
      'E-Commerce': 'E-Commerce',
      News: 'News',
      Government: 'Government',
      Sport: 'Sport',
      Education: 'Education',
      Entertainment: 'Entertainment',
      Travel: 'Travel',
      Finance: 'Finance',
      Tech: 'Tech',
      Business: 'Business'
    }
  },
  releases: {
    version: 'Version',
    released_on: 'Released on {datetime}'
  },
  partners: {
    become_partner: 'Become a partner'
  },
  theme_mode: {
    system: 'System',
    light: 'Light',
    dark: 'Dark'
  },
  common: {
    an_error_occurred: 'An error occurred',
    page_not_found: "We couldn't find the page you are looking for.",
    please_define_title: 'Please define a title in the front matter',
    please_define_description: 'Please define a description in the front matter',
    search: 'Search ("/" to focus)',
    settings: 'Settings',
    version: 'Version',
    currently_version: 'Currently in private beta',
    back: 'Back',
    go_to: 'Go to {title}',
    go_home: 'Go home',
    read_article: 'Read article',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    copied: 'Copied',
    watch_video: 'Watch video'
  },
  iso: 'en'
=======
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
      'Discover articles from the {nuxtTeam} and {ambassadors} about NuxtJS, tips and tricks included!',
    ambassadors: 'ambassadors',
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
    docs: 'Caught a mistake or want to contribute to the documentation?',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'Edit this page on GitHub!',
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
>>>>>>> 26a70b2b (chore: add guides section (#407))
}
