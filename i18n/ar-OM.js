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
        title: 'مولّد ثابت',
        description:
          'توليد المواقع الثابتة موضوع رائج في الوقت الحالي (المعروف باسم JAMStack). وبدلاً من الانتقال إلى إطار عمل جديد واستهلاك الوقت في التأقلم معه، ما رأيك بحل يحقق هدفين في آنٍ واحد؟ يتيح Nuxt.js إنشاء موقع ثابت باستخدام تطبيق Vue الخاص بك. إنه يجمع "أفضل ما في العالمين"—فلا حاجة لخادم مع الاحتفاظ بمزايا تحسين محركات البحث (SEO)، حيث يقوم Nuxt بتحميل الصفحات مسبقاً مع HTML المطلوب. كما يمكنك نشر الموقع الناتج بسهولة على Netlify أو GitHub Pages.',
        proverbial: 'فقط مجازي'
      }
    },
    sponsors: {
      title: 'الرُعاة',
      description:
        'NuxtJS هو مشروع مفتوح المصدر مرخص بموجب ترخيص MIT ومجاني تمامًا للاستخدام. ومع ذلك، فإن الجهد المطلوب لصيانة وتطوير ميزات جديدة للمشروع ليس مستدامًا بدون دعم مالي مناسب. إذا كنت تدير عملًا تجاريًا وتستخدم Nuxt في منتج يحقق إيرادات، فإنه من المنطقي تجاريًا دعم تطوير Nuxt: فهذا يضمن بقاء المشروع الذي يعتمد عليه منتجك في حالة صحية ويتم صيانته بنشاط. كما يمكن أن يساعد في زيادة تعرضك في مجتمع Vue/Nuxt ويسهل جذب المطورين المختصين بـ Vue/Nuxt. إذا كنت مستخدمًا فرديًا وقد استمتعت بإنتاجية استخدام Nuxt، فكر في التبرع كعلامة تقدير.',
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
      'NuxtJS هو مشروع مفتوح المصدر مرخص بموجب ترخيص MIT ومجاني تمامًا للاستخدام. {break} يمكنك استخدام شعاراتنا بحرية طالما تذكر NuxtJS وتضع رابطًا إلى nuxtjs.org.',
    other_download_message:
      'يمكنك أيضًا تنزيل {favicon} أو ملف {sketch} الخاص بنا.'
  },
  resources: {
    meta: {
      title: 'موارد NuxtJS',
      description:
        'اكتشف مجموعة من الموارد التي أنشأها شركاؤنا. من خلال استخدام روابط الموارد التابعة، فإنك تساعدنا في الحفاظ على إطار عمل المصدر المفتوح وتطويره.'
    },
    title: '{nuxt} موارد',
    description:
      'اكتشف مجموعة من الموارد التي أنشأها شركاؤنا. من خلال استخدام روابط الموارد التابعة، فإنك تساعدنا في الحفاظ على إطار عمل المصدر المفتوح وتطويره.',
    themes: {
      title: 'المواضيع'
    },
    modules: {
      title: 'وحدات'
    },
    examples: {
      title: 'أمثلة'
    },
    faq: {
      title: 'الأسئلة المتداولة'
    },
    videos: {
      title: 'دورات الفيديو'
    }
  },
  shop: {
    meta: {
      title: 'متجر NuxtJS',
      description:
        'هل تريد دعم مشروع NuxtJS وإظهار حبك لبقية المجتمع؟ إليك منتجاتنا بأفضل جودة على الإطلاق!'
    },
    title: 'متجر {nuxt}',
    description:
      'هل تريد دعم مشروع NuxtJS وإظهار حبك لبقية المجتمع؟ {break} إليك منتجاتنا بأفضل جودة على الإطلاق!',
    button: 'قريباً'
  },
  team: {
    meta: {
      title: 'NuxtJS فريق',
      description:
        'يتمتع NuxtJS بفريق نشط للغاية ومنخرط يسعى باستمرار إلى دفع Nuxt إلى الأمام.'
    },
    title: '{nuxt} فريق',
    description:
      'يتم تطوير NuxtJS ونظامه البيئي تحت إشراف فريق دولي. لدينا فريق نشط للغاية ومنخرط يسعى باستمرار لدفع Nuxt إلى الأمام.'
  },
  themes: {
    meta: {
      title: 'مواضيع NuxtJS',
      description:
        'باستخدام السمات أدناه التي بناها شركاؤنا من Creative Tim و Theme Forest، يمكنك رؤية كيفية بناء تطبيق في العالم الحقيقي، مع وجود Nuxt.js خلفه.'
    },
    title: '{nuxt} مواضيع',
    description:
      'باستخدام السمات أدناه التي بناها شركاؤنا من Creative Tim و Theme Forest، يمكنك رؤية كيفية بناء تطبيق في العالم الحقيقي، مع وجود Nuxt.js خلفه.',
    button: 'احصل عليه لـ'
  },
  'video-courses': {
    meta: {
      title: 'دورات الفيديو لـ NuxtJS',
      description:
        'من خلال دورات الفيديو أدناه التي أنشأها شريكنا VueSchool، يمكنك اكتشاف وتعلم المزيد عن إطار عمل Nuxt.js.'
    },
    title: 'دورات الفيديو لـ {nuxt}',
    description:
      'من خلال الدورات الفيديو أدناه، يمكنك اكتشاف وتعلم المزيد عن إطار عمل Nuxt.',
    cta: {
      discover: 'اكتشف إتقان Nuxt',
      start: 'ابدأ الدورة'
    }
  },
  sponsor: {
    meta: {
      title: 'رعاية تطوير NuxtJS',
      description:
        'يمكنك دعم تطوير NuxtJS عبر طرق مختلفة وضمان التحديثات المنتظمة للإطار.'
    },
    title: 'رعاية تطوير {nuxt}',
    description:
      'NuxtJS هو مشروع مفتوح المصدر مرخص بموجب رخصة MIT ومجاني تمامًا للاستخدام. {break} ومع ذلك، فإن الجهود اللازمة لصيانة وتطوير ميزات جديدة للمشروع لا يمكن الاستمرار فيها بدون دعم مالي مناسب. {break} يمكنك دعم تطوير NuxtJS عبر الطرق التالية:',
    donations: {
      title: 'التبرعات لمرة واحدة',
      description: 'نقبل التبرعات من خلال هذه القنوات'
    },
    pledges: {
      title: 'الالتزامات المتكررة',
      description:
        'الالتزامات المتكررة تأتي مع مزايا حصرية، مثل إدراج اسمك في مستودع NuxtJS على GitHub، أو وضع شعار شركتك على هذا الموقع. كن نُوكْسْتَر أو راعيًا عبر {opencollective} (يذهب إلى صندوق بنماذج إنفاق شفافة لدعم جهود وفعاليات المجتمع).'
    },
    become_a_sponsor: 'كن راعيًا'
  },
  support: {
    meta: {
      title: 'دعم NuxtJS',
      description:
        'فريق NuxtJS لدينا يقدم الآن خدمات استشارية رسمية لتطبيقات NuxtJS الخاصة بك.'
    },
    title: 'الدعم الاستشاري لـ {nuxt}',
    description:
      'فريقنا {team} يقدم الآن خدمات استشارية رسمية لتطبيقات NuxtJS الخاصة بك. {break} نقدم خدمات مختلفة حسب احتياجاتك، من الدعم الفني إلى التطوير المخصص. نتوقع الرد في غضون يوم عمل واحد، يمكننا توقيع اتفاقية سرية مخصصة ويمكنك الحصول على استرداد كامل إذا لم تكن راضيًا عن خدماتنا.',
    technical: {
      title: 'الدعم الفني',
      description:
        'احصل على تدقيقات للمشاريع، نشر التطبيقات، تطوير مخصص ودعم تقني من فريق NuxtJS.',
      start: 'ابدأ الدردشة',
      partner: {
        pre: 'تعاوننا مع',
        post:
          'لتقديم هذه الخدمات حتى نتمكن من التركيز على مساعدتك بأسرع ما يمكن.'
      }
    },
    entreprise: {
      title: 'للمؤسسات',
      description:
        'يعمل NuxtJS ومشرفو الآلاف من الحزم الأخرى مع Tidelift لتقديم اشتراك واحد للمؤسسات يغطي جميع المصادر المفتوحة التي تستخدمها. {break} إذا كنت ترغب في مرونة المصادر المفتوحة وثقة البرمجيات ذات الجودة التجارية، فهذا لك.',
      partner: {
        pre: 'متاح كجزء من',
        post: 'الاشتراك.'
      },
      learn_more: 'اعرف المزيد',
      request_a_demo: 'اطلب عرضًا توضيحيًا'
    }
  },
  blog: {
    meta: {
      title: 'مدونة NuxtJS',
      description:
        'اكتشف المقالات من فريق NuxtJS ومجتمع NuxtJS حول NuxtJS، بما في ذلك النصائح والحيل!'
    },
    title: 'مدونة {nuxt}',
    description:
      'اكتشف المقالات من {nuxtTeam} و {nuxtCommunity} حول NuxtJS، بما في ذلك النصائح والحيل!',
    nuxt_team: 'فريق NuxtJS',
    nuxt_community: 'مجتمع Nuxt.js',
    contribute: 'هل اكتشفت خطأ أو ترغب في المساهمة في هذه المقالة؟'
  },
  guide: {
    release_notes: 'ملاحظات الإصدار',
    toc_title: 'على هذه الصفحة'
  },
  quiz: {
    title: 'اختبار'
  },
  tryNewDocs: {
    msg1: 'هل ترغب في إلقاء نظرة على وثائقنا الجديدة؟ لدينا',
    link: 'الوثائق الجديدة',
    msg2: 'أصبحت الآن في المرحلة التجريبية. استمتع!'
  },
  contribute: {
    title: 'المساهمون',
    docs: 'هل اكتشفت خطأ أو ترغب في المساهمة في التوثيق؟',
    blog: 'هل اكتشفت خطأ أو ترغب في المساهمة في هذه المقالة؟',
    edit_on_github: 'قم بتحرير هذه الصفحة على GitHub!',
    msg1:
      'تم إغلاق المساهمة في هذه الصفحة الآن. إذا كنت ترغب في المساهمة، يرجى التحقق من',
    link: 'الوثائق الجديدة'
  },
  example: {
    intro: 'في هذا المثال:'
  },
  codeSandbox: {
    open: 'انظر المثال'
  },
  content: {
    guide: {
      prologue: 'المقدمة',
      'getting-started': 'البدء'
    },
    api: {
      essential: 'الأساسية',
      pages: 'الصفحات',
      components: 'العناصر',
      utils: 'الأدوات المساعدة',
      configuration: 'الإعدادات',
      programmatically: 'برمجيًا',
      internals: 'الداخليات'
    },
    examples: {
      routing: 'التوجيه',
      dataFetching: 'جلب البيانات',
      assetManagement: 'إدارة الأصول',
      transitions: 'الانتقالات',
      seo: 'SEO',
      loading: 'جارِ التحميل',
      miscellaneous: 'متفرقات',
      middleware: 'البرمجيات الوسيطة',
      plugins: 'الإضافات',
      modules: 'الوحدات',
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
