module.exports = {
  common: {
    an_error_occurred: 'Произошла ошибка',
    page_not_found: 'Страница не найдена',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Поиск ("/" - фокус)',
    version: 'Версия'
  },
  iso: 'ru',

  links: {
    download: 'Скачать',
    live_edit: 'Пробовать вживую'
  },
  header: {
    links: [
      {
        name: 'Руководства',
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
        name: 'Примеры',
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
        name: 'Ресурсы',
        slug: 'resources',
        type: 'static'
      },
      {
        name: 'Блог',
        slug: 'blog',
        type: 'static'
      }
    ],
    search: {
      placeholder: 'Поиск ("/" - фокус)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js — Универсальные приложения на Vue.js',
      description:
        'Nuxt.js — это минималистичный фреймворк для создания приложений на Vue.js с серверным рендерингом, разделением кода, горячей заменой модулей, статической генерацией и другими крутыми штуками!'
    },
    welcome: {
      title: 'Интуитивно понятный {br} {frameworkType} фреймворк',
      description:
        'Постройте ваше следующее Vue.js приложение с простотой и уверенностью, используя NuxtJS. {openSource} фреймворк который делает разработку простой и мощной.',
      openSource: 'Open source',
      get_started: 'начало работы',
      get_updates: 'Получайте новости о NuxtJS на почту каждый месяц.',
      video: 'Видео создано команией {company}, скачайте их шпаргалку {cheatSheet}',
      cheatSheet: 'Шпаргалка Nuxt.'
    },
    why: {
      title: 'Почему {nuxt}',
      try_nuxtjs_online: 'Попробуйте NuxtJS онлайн',
      enjoyable: {
        title: 'Приятный',
        description:
          'Наша главная цель - удобство разработки. Мы любим Nuxt.js и постоянно улучшаем его, надеемся, вы тоже его полюбите.{break} В вашим услугам отличная документация, информативные описания ошибок, сбалансированные настройки по умолчанию и прочие интересные решения. А если у вас возникнут вопросы или проблемы, наше дружелюбное сообщество всегда готово помочь.'
      },
      modular: {
        title: 'Модульный',
        description:
          'Nuxt разработан на основе мощной модульной архитектуры. Более 50 разнообразных модулей сделают разработку проще и быстрее. Вам не придется изобретать велосипед, чтобы прикрутить PWA-фичи, Google Analytics, генерацию sitemap и многие другие типовые вещи.'
      },
      performant: {
        title: 'Быстрый',
        description:
          'Nuxt.js оптимизирует ваше приложение сразу из коробки. Мы постоянно работаем над повышением производительности приложений, используя наработки Vue.js и Node.js. Чтобы выжать максимум из вашего приложения в Nuxt влючен анализатор бандлов и множество возможностей для тонкой настройки приложения.'
      }
    },
    companies: {
      title: 'Кто использует {nuxt}'
    },
    modes: {
      title: '{nuxt} Рендеринг',
      ssr: {
        title: 'Server Side Rendered',
        description:
          'Наиболее популярный режим в Nuxt. В режиме SSR, также именуемом "универсальный" или "изоморфный", сервер Node.js будет рендерить HTML перед отправкой на клиент на основе ваших Vue компонентов, вместо отрисовки на чистом javascript. Использование режима SSR улучшает работу с SEO, UX и даёт множество других возможностей (в сравнении с традиционным SPA клиентом на Vue). Самостоятельная реализация рендеринга на сервере может стать утомительной задачей, поэтому Nuxt.js предоставляет её полную поддержку из коробки и обходит многие подводные камни.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description:
          "Не нужен SSR или статическая генерация, но все же хотите пользоваться удобством разработки с Nuxt? Вы переводите свое приложение на Nuxt и хотите начать с малого? Тогда SPA будет для вас лучшим выбором. На выходе вы получите обычное Vue SPA, но с использованием возможностей Nuxt."
      },
      ssg: {
        title: 'Statically Generated',
        description:
          'Генерация статических сайтов (JAMStack) - очень горячая тема на сегодняшний день. Вместо того, чтобы сменить фреймворк и потратить время на его изучение, почему не убить двух зайцев одновременно? (как гласит поговорка о 🐇🐇). Nuxt.js позволяет сгенерировать статический сайт на основании вашего Vue-приложения. Получаем идеальное сочетание: вам больше не нужен сервер, однако будет работать SEO, так как Nuxt создаст все необходимые страницы заранее. Также, вы сможете без проблем опубликовать ваш проект на Netlify или GitHub pages.',
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'Спонсоры',
      description:
        'NuxtJS - это проект с открытым исходным кодом, лицензированный MIT и полностью бесплатный для использования. Тем не менее, объем усилий, необходимых для поддержания и разработки новых функций для проекта, не является устойчивым без надлежащей финансовой поддержки. Если вы управляете бизнесом и используете Nuxt в продукте, приносящем доход, имеет смысл спонсировать разработку Nuxt: это гарантирует, что проект, на который опирается ваш продукт, остается здоровым и активно поддерживается. Это также может помочь вам разобраться в сообществе Vue/Nuxt и упростить привлечение разработчиков Vue/Nuxt. Если вы являетесь индивидуальным пользователем и наслаждались продуктивностью использования Nuxt, рассмотрите возможность пожертвования в знак признательности.',
      become_a_sponsor: 'Стань спонсором'
    },
    newsletter: {
      title: '{nuxt} Рассылка',
      description:
        'Получай последние, отобранные командой NuxtJS новости на почту.',
      form: {
        email: 'Email',
        subscribing: 'Подписываюсь...',
        subscribe: 'Подписаться',
        subscribed_messages: {
          pre: 'Письмо для подтверждения подписки было отправлено на',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'NuxtJS Дизайн',
      description:
        'Скачайте дизайнерские файлы NuxtJS (SVG, иконки, emoji и favicon).'
    },
    title: '{nuxt} Дизайн',
    description:
      'NuxtJS - это проект с открытым исходным кодом, лицензированный MIT и полностью бесплатный для использования. {break} Вы можете свободно использоваться наши логотипы пока они ссылаются на nuxtjs.org.',
    other_download_message:
      'Вы также можете скачать {favicon} или {sketch} файл.'
  },
  resources: {
    meta: {
      title: 'NuxtJS Resources',
      description:
        'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.'
    },
    title: '{nuxt} Resources',
    description:
      'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.',
    themes: {
      title: 'Themes'
    },
    videos: {
      title: 'Video Courses'
    }
  },
  shop: {
    meta: {
      title: 'The NuxtJS Shop',
      description:
        'You want to support the NuxtJS project and show your love to the rest of the community? Here our products with the best quality ever!'
    },
    title: 'The {nuxt} Shop',
    description:
      'You want to support the NuxtJS project and show your love to the rest of the community?{break} Here our products with the best quality ever!',
    button: 'Coming soon'
  },
  team: {
    meta: {
      title: 'NuxtJS Team',
      description:
        'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.'
    },
    title: '{nuxt} Team',
    description:
      'The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.'
  },
  themes: {
    meta: {
      title: 'NuxtJS Themes',
      description:
        'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.'
    },
    title: '{nuxt} Themes',
    description:
      'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.',
    button: 'GET IT for'
  },
  'video-courses': {
    meta: {
      title: 'NuxtJS Video Courses',
      description:
        'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.'
    },
    title: '{nuxt} Video Courses',
    description:
      'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.',
    cta: {
      discover: 'Discover vueschool',
      start: 'START COURSE'
    }
  },
  sponsor: {
    meta: {
      title: 'Sponsor NuxtJS Development',
      description:
        'You can support NuxtJS development via different methods and ensure regular updates to the framework.'
    },
    title: 'Sponsor {nuxt} Development',
    description:
      'NuxtJS is an MIT licensed open source project and completely free to use.{break} However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.{break} You can support NuxtJS development via the following methods:',
    donations: {
      title: 'One-time donations',
      description: 'We accept donations through these channels'
    },
    pledges: {
      title: 'Recurring Pledges',
      description:
        'Recurring pledges come with exclusive perks, e.g. having your name listed in the NuxtJS GitHub repository, or have your company logo placed on this website. Become a nuxter or sponsor via {opencollective} (goes into a fund with transparent expense models supporting community efforts and events).'
    },
    become_a_sponsor: 'Become a sponsor'
  },
  support: {
    meta: {
      title: 'The NuxtJS Support',
      description:
        'Our NuxtJS team now offers official consulting services for your NuxtJS applications.'
    },
    title: 'Consulting {nuxt} Support',
    description:
      'Our {team} now offers official consulting services for your NuxtJS applications.{break} We offer different services depending of your needs, from technical support to custom development. Expect a reply within one business day, we can sign custom NDA and you can get a full refund if you are not satisfied with our service.',
    technical: {
      title: 'Technical support',
      description:
        'Get project audits, app deployments, custom development and technical support from the NuxtJS team.',
      start: 'Start chat',
      partner: {
        pre: 'We partnered with',
        post:
          'to offer these services so we can focus on helping you as fast as possible.'
      }
    },
    entreprise: {
      title: 'for enterprise',
      description:
        'NuxtJS and the maintainers of thousands of other packages are working with Tidelift to deliver one enterprise subscription that covers all of the open source you use.{break} If you want the flexibility of open source and the confidence of commercial-grade software, this is for you.',
      partner: {
        pre: 'Available as part of the',
        post: 'subscription.'
      },
      learn_more: 'Learn more',
      request_a_demo: 'Request a demo'
    }
  },
  blog: {
    meta: {
      title: 'NuxtJS Blog',
      description:
        'Discover articles from the NuxtJS team and NuxtJS Community about NuxtJS, tips and tricks included!'
    },
    title: '{nuxt} Blog',
    description:
      'Discover articles from the {nuxtTeam} and {nuxtCommunity} about NuxtJS, tips and tricks included!',
    nuxt_team: 'NuxtJS Team',
    nuxt_community: 'Nuxt.js Community',
    contribute: 'Caught a mistake or want to contribute to this blog post?'
  },
  guide: {
    release_notes: 'Замечания о релизе',
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
    docs: 'Обнаружили ошибку или хотите внести свой вклад в документацию?',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'Отредактировать эту страницу на GitHub!',
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
  },
  footer: {
    links: {
      discover: {
        title: 'Discover',
        design: 'Design resources',
        team: 'A worldwide team',
        blog: 'Blog'
      },
      follow: {
        title: 'Follow'
      },
      support: {
        title: 'Support',
        sponsorNuxt: 'Sponsor NuxtJS',
        shop: 'The NuxtJS Shop',
        consulting: 'NuxtJS Consulting'
      }
    }
  },
  cookies: {
    consent: 'Мы используем файлы Cookies для аналитики!',
    linkLabel: 'Узнать больше о Cookies',
    button: 'Понятно'
  }
}
