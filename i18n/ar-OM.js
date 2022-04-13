module.exports = {
  common: {
    an_error_occurred: 'حدث خطأ',
    page_not_found: 'الصفحة غير موجودة',
    please_define_title: 'يُرجى تحديد العنوان',
    please_define_description: 'يُرجى تحديد الوصفس',
    search: 'ابحث ("/" للتركيز)',
    version: 'الإصدار'
  },
  iso: 'ar',

  links: {
    download: 'تحميل',
    live_edit: 'تعديل مباشر'
  },
  header: {
    links: [
      {
        name: 'المستندات',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'الأمثلة',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'المصادر',
        icon: 'resources',
        slug: 'resources'
      },
      {
        name: 'المدونة',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'دورات تعليمية مسجلة',
        icon: 'video',
        slug: 'video-courses'
        // href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
      }
    ],
    search: {
      placeholder: 'ابحث ("/" للتركيز)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - هيكل العمل Vue الحدسي',
      description:
        'أنشئ تطبيق Vue.js التالي بثقة باستخدام NuxtJS. هيكل عمل {openSource} يجعل تطوير المواقع بسيط و قوي.'
    },
    welcome: {
      title: 'هيكل العمل {br} {frameworkType} الحدسي',
      description:
        'أنشئ تطبيق Vue.js التالي بثقة باستخدام NuxtJS. هيكل عمل {openSource} يجعل تطوير المواقع بسيط و قوي.',
      openSource: 'مفتوح المصدر',
      get_started: 'ابدأ',
      get_updates: 'احصل على تحديثات NuxtJS في صندوقك البريدي شهرياً',
      video: 'مقطع مسجل تم إنتاجه بواسطة {company}, حمِّل {cheatSheet} مجاناً.',
      cheatSheet: 'صفحة Nuxt الموجزة'
    },
    why: {
      title: 'لماذا {nuxt}',
      try_nuxtjs_online: 'جرِّب NuxtJS عبر الإنترنت',
      enjoyable: {
        title: 'ممتع',
        description:
          'تركيزنا الأساسي على تجربة المطور. نحن نحب Nuxt.js و نطور هيكلة العمل باستمرار لتحبه أيضاً! {break} توقع حلولاً جذابة ورسائل خطأ تصويرية و وصفية وافتراضات قوية ووثائق مفصلة. إذا ظهرت أسئلة أو مشاكل ، فسيساعدك مجتمعنا المفيد.'
      },
      modular: {
        title: 'نموذجي',
        description:
          'Nuxt مؤسس على هيكلة نموذجية قوية . بإمكانك اختيار من بين أكثر من ٥٠ نموذج لجعل تطويرك أسرع و أسهل. ليس عليك إبتكار العجلة مجدداً للحصول على فوائد تطبيقات الويب المتقدمة٬ أضف تحليلات جوجل لصفحتك أو أنشئ خريطة الموقع'
      },
      performant: {
        title: 'فعَّال',
        description:
          'مع Nuxt.js, تطبيقك سيكون مُحسَّن منذ البداية. نحن نفعل ما بوسعنا لبناء تطبيقات فعَّالة باستخدام أفضل ممارسات Vue.js و Node.js. للتخلص من كل ما هو غير مهم في تطبيقك، Nuxt تشمل محلل الحزم و الكثير من الفُرَص للضبط تطبيقك بدِقَّة.'
      }
    },
    companies: {
      title: 'من يستخدم {nuxt}'
    },
    modes: {
      title: '{nuxt} أداء',
      ssr: {
        title: 'جانب أداء الخادم',
        description:
          'الوضع الأكثر شهرة لNuxt. مع SSR، و يسمى أيضاً وضع "عالمي" أو "متماثل" خادم Node.js سيستخدم لتوصيل أساس HTML في مكونات Vue للعميل بدلاً من javascript نقي. باستخدام SSR سيؤدي إلى زيادة كبيرة في تحسين محركات البحث، تجربة مستخدم أفضل والمزيد من الفرص (مقارنةً بـ Vue SPA التقليدي). {break}نظرًا لأن تطبيق SSR بمفردك يمكن أن يكون مملاً حقًا ، يمنحك Nuxt.js دعمًا كاملاً من خارج الصندوق وسيهتم بالمآزِق الشائعة.'
      },
      ssg: {
        title: 'Statically Generated',
        description:
          'Static Site Generation is a very hot topic right now (aka JAMStack). Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? {proverbial} Nuxt.js supports generating a static website based on your Vue application. It is the "best of both worlds" as you don\'t need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.',
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'الرُعاة',
      description:
        'NuxtJS is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers. If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.',
      become_a_sponsor: 'كن راعياً'
    },
    newsletter: {
      title: 'نشرة {nuxt} الإخبارية',
      description:
        ' إحصل على آخر أخبار Nuxt في صندوقك البريدي، تم إختيارها بواسطة فريق NuxtJS.',
      form: {
        email: 'البريد الإلكتروني',
        subscribing: 'جارِ الإشتراك ...',
        subscribe: 'إشترك',
        subscribed_messages: {
          pre: 'تم إرسال بريد إلكتروني لتأكيد اشتراكك إلى',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'NuxtJS تصميم',
      description: 'حمّل مصادر تصميم NuxtJS (SVG, icons, emoji و favicon).'
    },
    title: '{nuxt} تصميم',
    description:
      'NuxtJS is an MIT licensed open source project and completely free to use. {break} You can freely use our logos as long as you mention NuxtJS and link to nuxtjs.org.',
    other_download_message:
      'You can also download our {favicon} or our {sketch} file.'
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
      'With the video courses below you can discover and learn more about the Nuxt Framework.',
    cta: {
      discover: 'Discover Mastering Nuxt',
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
  example: {
    intro: 'In this example:'
  },
  codeSandbox: {
    open: 'See Example'
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Getting Started'
    },
    api: {
      essential: 'الأساسية',
      pages: 'الصفحات',
      components: 'العناصر',
      utils: 'Utils',
      configuration: 'الإعدادات',
      programmatically: 'Programmatically',
      internals: 'Internals'
    },
    examples: {
      routing: 'Routing',
      dataFetching: 'جلب البيانات',
      assetManagement: 'Asset Management',
      transitions: 'Transitions',
      seo: 'SEO',
      loading: 'جارِ التحميل',
      miscellaneous: 'Miscellaneous',
      middleware: 'Middleware',
      plugins: 'Plugins',
      modules: 'Modules',
      customization: 'التفصيل',
      advanced: 'التقدم'
    },
    faq: {
      configuration: 'الإعدادات',
      development: 'التطوير',
      deployment: 'النشر'
    },
    guides: {
      'get-started': 'ابدأ',
      concepts: 'الأفكار',
      features: 'المميزات',
      'directory-structure': 'دليل الهيكلة',
      'configuration-glossary': 'قائمة مصطلحات الإعدادات',
      'internals-glossary': 'قائمة المصطلحات الداخلية',
      'components-glossary': 'قائمة مصطلحات العناصر',
      deployment: 'نشر',
      examples: 'الأمثلة'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'إكتشف',
        shop: 'متجر منتجاتنا',
        consulting: 'تدريب و استشارة',
        sponsorNuxt: 'الرُعاة و المتبرعين'
      },
      about: {
        title: 'المساعدة',
        team: 'فريقنا',
        design: 'عدة التصميم',
        contact: 'تواصل معنا'
      },
      support: {
        title: 'الدعم',
        resources: 'المصادر',
        discord: 'دردش معنا',
        contributionGuide: 'دليل المشاركات'
      }
    }
  },
  cookies: {
    consent:
      'نحن نستخدم ملفات تعريف الارتباط لتحليل تفاعل المستخدم و التحسينات على الصفحة',
    linkLabel: 'تعلم عن ملفات تعريف الارتباط',
    button: 'فهمت'
  }
}
