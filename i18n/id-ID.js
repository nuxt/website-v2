<<<<<<< HEAD
export default {
  common: {
    an_error_occurred: 'Terjadi kesalahan',
    page_not_found: 'Halaman tidak ditemukan',
    please_define_title: 'Silakan tentukan judul di bagian depan',
    please_define_description: 'Silakan tentukan deskripsi di bagian depan',
    search: 'Cari ("/" untuk fokus)',
=======
module.exports = {
  common: {
    an_error_occurred: 'An error occurred',
    api_page_not_found: 'Halaman API tidak ditemukand',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Cari ("/" to focus)',
>>>>>>> 26a70b2b (chore: add guides section (#407))
    version: 'Versi'
  },
  iso: 'id',
  cookies: {
    message: 'Kami menggunakan Cookie untuk menganalisis pengguna dan melakukan peningkatan pada halaman!',
    link: 'Pelajari tentang cookie',
    button: 'Mengerti'
  },
  links: {
    download: 'Unduh',
    live_edit: 'Sunting Langsung'
  },
  header: {
    links: [
      {
<<<<<<< HEAD
        name: 'Panduan',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'Contoh',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'Sumber Daya',
        icon: 'resources',
        slug: 'resources'
      },
      {
        name: 'Blog',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Kursus Video',
        icon: 'video',
        href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
      }
    ],
    search: {
      placeholder: 'Cari ("/" untuk fokus)'
=======
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
>>>>>>> 26a70b2b (chore: add guides section (#407))
    }
  },
  homepage: {
    meta: {
<<<<<<< HEAD
      title: 'Nuxt - Aplikasi Vue.js Universal',
      description:
        'Nuxt adalah kerangka kerja minimalis untuk membuat aplikasi Vue.js dengan server side rendering, hot-reloading, static generation, dan banyak lagi!'
    },
    welcome: {
      title: 'Kerangka Kerja {br} {frameworkType} nan Intuitif',
      description:
        'Bangun aplikasi Vue.js Anda berikutnya dengan percaya diri menggunakan Nuxt. Kerangka kerja {openSource} yang membuat pengembangan web menjadi sederhana dan efektif.',
      openSource: 'sumber terbuka',
      get_started: 'memulai',
      get_updates: 'Dapatkan pembaruan Nuxt ke kotak masuk surel Anda setiap bulannya',
      video: 'Video diproduksi oleh {company}, unduh {cheatSheet} gratis dari mereka.',
      cheatSheet: 'cheatsheet Nuxt'
    },
    why: {
      title: 'Mengapa {nuxt}',
      try_nuxtjs_online: 'Coba Nuxt secara Daring',
      enjoyable: {
        title: 'Menyenangkan',
        description:
          'Fokus utama kami adalah pengalaman pengembang. Kami menyukai Nuxt dan terus meningkatkan kerangka kerja ini sehingga Anda juga akan menyukainya! {break} Harapkan solusi yang menarik, pesan kesalahan deskriptif, standar kuat dan dokumentasi terperinci. Jika ada pertanyaan atau masalah, komunitas kami akan membantu Anda.'
=======
      title: 'Nuxt.js - Aplikasi Vue.js Universal',
      description:
        'Nuxt.js adalah framework minimalis untuk membuat aplikasi Vue.js dengan server side rendering, hot-reloading, static generation, dan banyak lagi!'
    },
    welcome: {
      title: 'The Intuitive{break}{frameworkType}Framework',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An {openSource} framework making web development simple and powerful.',
      openSource: 'open source',
      get_started: 'get started',
      get_updates: 'Get NuxtJS updates to your inbox each month',
      video: 'Video produced by {company}, download their free {cheatSheet}',
      cheatSheet: 'Nuxt Cheat Sheet.'
    },
    why: {
      title: 'Mengapa {nuxt}',
      try_nuxtjs_online: 'Coba NuxtJS Online',
      enjoyable: {
        title: 'Enjoyable',
        description:
          'Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! {break} Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.'
>>>>>>> 26a70b2b (chore: add guides section (#407))
      },
      modular: {
        title: 'Modular',
        description:
<<<<<<< HEAD
          'Nuxt didasarkan pada arsitektur modular yang efektif. Anda dapat memilih dari lebih dari 50 modul untuk membuat pengembangan Anda lebih cepat dan lebih mudah. Anda tidak harus "reinventing the wheel" untuk mendapatkan manfaat PWA, menambahkan Google Analytics ke halaman Anda atau menghasilkan peta situs.'
      },
      performant: {
        title: 'Kinerja',
        description:
          'Dengan Nuxt, aplikasi Anda akan dioptimalkan secara otomatis. Kami melakukan yang terbaik untuk membangun aplikasi yang efisien dengan memanfaatkan praktik terbaik Vue.js dan Node.js. Untuk membuang setiap bagian yang tidak perlu dari aplikasi Anda, Nuxt menyertakan penganalisa bundel dan banyak peluang untuk menyempurnakan aplikasi Anda.'
=======
          "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap."
      },
      performant: {
        title: 'Performant',
        description:
          'With Nuxt.js, your application will be optimized out of the box.We do our best to build performant applications by utilizing Vue.js and Node.js best practices. To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.'
>>>>>>> 26a70b2b (chore: add guides section (#407))
      }
    },
    companies: {
      title: 'Siapa yang menggunakan {nuxt}'
    },
    modes: {
      title: '{nuxt} rendering',
      ssr: {
        title: 'Server Side Rendered',
        description:
<<<<<<< HEAD
          'Mode paling populer untuk Nuxt. Dengan SSR, juga disebut mode "universal" atau "isomorphic", server Node.js akan digunakan untuk mengirimkan HTML berdasarkan komponen Vue Anda ke klien alih-alih JavaScript murni. Menggunakan SSR membawa keuntungan besar seperti peningkatan SEO, UX yang lebih baik, dan lebih banyak peluang (dibandingkan dengan Vue SPA tradisional). {Break} Dikarenakan menerapkan SSR dari awal bisa jadi sangat menjemukan, Nuxt sudah memiliki dukungan penuh untuk SSR dan dirancang untuk terhindar dari kesulitan-kesulitan tersembunyi yang umum terjadi.'
      },
      ssg: {
        title: 'Generate Secara Statis',
        description:
          'Static Site Generation (alias JAMStack) adalah topik yang banyak dibicarakan saat ini. Alih-alih beralih ke kerangka kerja lain dan menghabiskan waktu untuk membiasakan diri, mengapa tidak membunuh dua burung dengan satu batu? {proverbial} Nuxt mendukung pembuatan situs web statis berdasarkan aplikasi Vue Anda. Ini adalah "yang terbaik dari kedua dunia" karena Anda tidak memerlukan server tetapi masih memiliki manfaat SEO karena Nuxt akan melakukan pra-render terhadap semua halaman Anda dan menyertakan HTML yang diperlukan. Anda juga dapat men-deploy halaman yang dihasilkan dengan mudah ke Netlify atau GitHub.',
        proverbial: 'hanya pepatah'
=======
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
>>>>>>> 26a70b2b (chore: add guides section (#407))
      }
    },
    sponsors: {
      title: 'Menjadi Sponsor',
      description:
<<<<<<< HEAD
        'Nuxt adalah proyek sumber terbuka berlisensi MIT dan sepenuhnya gratis untuk digunakan. Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur-fitur baru untuk proyek ini tidak memungkinkan untuk dilakukan secara berkelanjutan tanpa dukungan keuangan yang memadai. Jika Anda menjalankan bisnis dan menggunakan Nuxt dalam produk Anda serta menghasilkan pendapatan, secara bisnis, masuk akal bagi Anda untuk mensponsori pengembangan Nuxt: memastikan proyek yang diandalkan produk Anda tetap sehat dan dipelihara secara aktif. Hal ini juga dapat membantu exposure Anda di komunitas Vue/Nuxt dan membuat Anda lebih mudah untuk menarik pengembang Vue/Nuxt. Jika Anda adalah pengguna individu dan telah menikmati produktivitas menggunakan Nuxt, pertimbangkan untuk memberi donasi sebagai tanda penghargaan.',
      become_a_sponsor: 'Menjadi sponsor'
    },
    newsletter: {
      title: 'Buletin {nuxt}',
      description: 'Dapatkan berita Nuxt terbaru ke kotak masuk surel Anda, dikurasi oleh tim Nuxt.',
      form: {
        email: 'Alamat Surel',
        subscribing: 'Berlangganan...',
        subscribe: 'Langganan',
        subscribed_messages: {
          pre: 'Pesan untuk mengonfirmasi langganan Anda telah dikirim',
=======
        'NuxtJS adalah proyek open source berlisensi MIT dan sepenuhnya gratis untuk digunakan. Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur-fitur baru untuk proyek ini tidak berkelanjutan tanpa dukungan keuangan yang tepat. Jika Anda menjalankan bisnis dan menggunakan Nuxt dalam produk yang menghasilkan pendapatan, masuk akal bagi bisnis untuk mensponsori pengembangan Nuxt: memastikan proyek yang diandalkan produk Anda tetap sehat dan dipelihara secara aktif. Ini juga dapat membantu pemaparan Anda di komunitas Vue/Nuxt dan membuatnya lebih mudah untuk menarik pengembang Vue/Nuxt. Jika Anda adalah pengguna individu dan telah menikmati produktivitas menggunakan Nuxt, pertimbangkan untuk memberi donasi sebagai tanda penghargaan.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        'Get the latest Nuxt news to your inbox, curated by the NuxtJS team.',
      form: {
        email: 'Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
        subscribed_messages: {
          pre: 'An email to confirm your subscription has been sent to',
>>>>>>> 26a70b2b (chore: add guides section (#407))
          post: '💚'
        }
      }
    }
  },
<<<<<<< HEAD
  design: {
    meta: {
      title: 'Desain Nuxt',
      description: 'Unduh sumber daya desain Nuxt (SVG, ikon, emoji, dan favicon).'
    },
    title: 'Desain {nuxt}',
    description:
      'Nuxt adalah proyek open source berlisensi MIT dan sepenuhnya gratis untuk digunakan. {break} Anda dapat dengan bebas menggunakan logo kami selama Anda menyebutkan Nuxt dan mencantumkan tautan ke nuxtjs.org.',
    other_download_message: 'Anda juga dapat mengunduh berkas {favicon} atau {sketch} kami.'
  },
  resources: {
    meta: {
      title: 'Sumber Daya Nuxt',
      description:
        'Temukan panel sumber daya yang dibuat oleh mitra kami. Dengan menggunakan tautan sumber daya afiliasi itu, Anda membantu kami memelihara dan mengembangkan Kerangka Sumber Terbuka.'
    },
    title: 'Sumber Daya {nuxt}',
    description:
      'Temukan panel sumber daya yang dibuat oleh mitra kami. Dengan menggunakan tautan sumber daya afiliasi mereka, Anda membantu kami menjaga dan mengembangkan Kerangka Sumber Terbuka.',
    themes: {
      title: 'Tema'
    },
    videos: {
      title: 'Video Kursus'
    }
  },
  shop: {
    meta: {
      title: 'Toko Nuxt',
      description:
        'Anda ingin mendukung proyek Nuxt dan menunjukkan cinta Anda kepada seluruh komunitas? Berikut produk kami dengan kualitas terbaik yang pernah ada!'
    },
    title: 'Toko {nuxt}',
    description:
      'Anda ingin mendukung proyek Nuxt dan menunjukkan cinta Anda kepada seluruh komunitas? {Break} Ini produk kami dengan kualitas terbaik yang pernah ada!',
    button: 'Segera hadir'
  },
  team: {
    meta: {
      title: 'Tim Nuxt',
      description:
        'Nuxt memiliki tim yang sangat aktif dan sibuk yang terus berupaya untuk mendorong perkembangan Nuxt.'
    },
    title: 'Tim {nuxt}',
    description:
      'Pengembangan Nuxt dan ekosistemnya dipandu oleh tim internasional. Kami memiliki tim yang sangat aktif dan sibuk yang terus berupaya untuk mendorong perkembangan Nuxt.'
  },
  themes: {
    meta: {
      title: 'Tema Nuxt',
      description: ''
    },
    title: 'Tema {nuxt}',
    description:
      'Dengan tema di bawah ini yang dibangun oleh mitra kami dari Tim Kreatif dan Hutan Tema Anda dapat melihat bagaimana aplikasi dunia nyata dibangun, dengan Nuxt menumpuk di belakang.',
    button: 'Dapatkan harga'
  },
  'video-courses': {
    meta: {
      title: 'Video Kursus Nuxt',
      description:
        'Dengan kursus video di bawah ini yang dibuat oleh mitra kami VueSchool, Anda dapat menemukan dan mempelajari lebih lanjut tentang kerangka kerja Nuxt.'
    },
    title: 'Video Kursus {nuxt}',
    description:
      'Dengan kursus video di bawah ini yang dibuat oleh mitra kami VueSchool Anda dapat menemukan dan mempelajari lebih lanjut tentang kerangka kerja Nuxt.',
    cta: {
      discover: 'Discover vueschool',
      start: 'MULAI KURSUS'
    }
  },
  sponsor: {
    meta: {
      title: 'Sponsor Pengembang Nuxt',
      description:
        'Anda dapat mendukung pengembangan Nuxt melalui metode yang berbeda dan memastikan pembaruan berkala pada kerangka kerja ini.'
    },
    title: 'Sponsor Pengembang {nuxt}',
    description:
      'Nuxt adalah proyek sumber terbuka berlisensi MIT dan sepenuhnya gratis untuk digunakan. {Break} Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur baru untuk proyek ini tidak dapat dilakukan secara berkelanjutan tanpa dukungan keuangan yang memadai. {Break} Anda dapat mendukung pengembangan Nuxt melalui metode berikut:',
    donations: {
      title: 'Satu kali donasi',
      description: 'Kami menerima donasi melalui saluran ini'
    },
    pledges: {
      title: 'Janji Berulang',
      description:
        'Janji berulang datang dengan tunjangan eksklusif, mis. membuat nama Anda terdaftar di repositori Nuxt GitHub, atau menempatkan logo perusahaan Anda di situs web ini. Menjadi nuxter atau sponsor melalui {opencollective} (masuk ke dana dengan model pengeluaran transparan yang mendukung upaya dan acara komunitas).'
    },
    become_a_sponsor: 'Menjadi sponsor'
  },
  support: {
    meta: {
      title: 'Dukungan Nuxt',
      description: 'Tim Nuxt kami sekarang menawarkan layanan konsultasi resmi untuk aplikasi Nuxt Anda.'
    },
    title: 'Konsultasi {nuxt} Dukungan',
    description:
      '{team} kami sekarang menawarkan layanan konsultasi resmi untuk aplikasi Nuxt Anda. {Break} Kami menawarkan layanan berbeda tergantung kebutuhan Anda, dari dukungan teknis hingga pengembangan kustom. Anda dapat mengharapkan balasan dalam satu hari kerja, kami dapat menandatangani Perjanjian Larangan Pengungkapan Informasi Rahasia (_Non-Disclosure Agreement_) khusus dan Anda bisa mendapatkan pengembalian dana penuh jika Anda tidak puas dengan layanan kami.',
    technical: {
      title: 'Dukungan teknis',
      description: 'Dapatkan audit proyek, penerapan aplikasi, pengembangan kustom, dan dukungan teknis dari tim Nuxt.',
      start: 'Memulai obrolan',
      partner: {
        pre: 'Kami bermitra dengan',
        post: 'untuk menawarkan layanan ini sehingga kami dapat fokus membantu Anda secepat mungkin.'
      }
    },
    entreprise: {
      title: 'untuk perusahaan',
      description:
        'Nuxt dan pengelola ribuan paket lainnya bekerja dengan Tidelift untuk memberikan satu langganan perusahaan yang mencakup semua sumber terbuka yang Anda gunakan. {Break} Jika Anda ingin fleksibilitas open source dan kepercayaan diri dari perangkat lunak kelas komersial, ini tepat untuk Anda.',
      partner: {
        pre: 'Tersedia sebagai bagian dari',
        post: 'subscription.'
      },
      learn_more: 'Pelajari lebih lanjut',
      request_a_demo: 'Minta demo'
    }
  },
  blog: {
    meta: {
      title: 'Blog Nuxt',
      description: 'Temukan artikel dari tim inti Nuxt dan kontributor Nuxt tentang Nuxt, termasuk tips dan trik!'
    },
    title: 'Blog {nuxt}',
    description: 'Temukan artikel tentang Nuxt dari {nuxtTeam} dan {nuxtCommunity} Nuxt, termasuk tips dan trik!',
    nuxt_team: 'Tim Nuxt',
    nuxt_community: 'Komunitas Nuxt',
    contribute: 'Menemukan kesalahan atau ingin berkontribusi pada pengeposan blog ini?'
  },
  guide: {
    release_notes: 'Catatan Rilis',
    toc_title: 'Di halaman ini'
  },
  quiz: {
    title: 'Kuis'
  },
  tryNewDocs: {
    msg1: 'Ingin melihat dokumen baru kami? ',
    link: 'dokumen baru',
    msg2: ' kami sekarang dalam versi beta. Selamat bersenang-senang!'
  },
  contribute: {
    title: 'Kontributor',
    docs: 'Jumpa kesalahan atau ingin berkontribusi pada dokumentasi ini?',
    blog: 'Jumpa kesalahan atau ingin berkontribusi pada posting blog ini?',
    edit_on_github: 'Sunting halaman ini di GitHub!',
    msg1: 'Kontribusi untuk halaman ini sekarang ditutup. Jika Anda ingin berkontribusi, silakan periksa ',
    link: 'dokumen baru'
  },
  example: {
    intro: 'Dalam contoh berikut:'
  },
  codeSandbox: {
    open: 'Buka CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prolog',
      'getting-started': 'Memulai'
    },
    api: {
      essential: 'Penting',
      pages: 'Halaman',
      components: 'Komponen',
      utils: 'Utilitas',
      configuration: 'Konfigurasi',
      programmatically: 'Secara Terprogram',
      internals: 'Internal'
    },
    examples: {
      essentials: 'Penting',
      customization: 'Kustomisasi',
      advanced: 'Lanjutan'
    },
    faq: {
      configuration: 'Konfigurasi',
=======
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
>>>>>>> 26a70b2b (chore: add guides section (#407))
      development: 'Development',
      deployment: 'Deployment'
    },
    guides: {
<<<<<<< HEAD
      'get-started': 'Memulai',
      concepts: 'Konsep',
      features: 'Fitur',
      'directory-structure': 'Struktur Direktori',
      'configuration-glossary': 'Konfigurasi Glosarium',
      'internals-glossary': 'Internal Glosarium',
      'components-glossary': 'Komponen Glosarium'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'Discover',
        shop: 'Our Goodies Store',
        consulting: 'Konsultasi & Training',
        sponsorNuxt: 'Donasi dan Menjadi Sponsor'
      },
      about: {
        title: 'Tentang',
        team: 'Tim kami',
        design: 'Kit desain',
        contact: 'Kontak kami'
      },
      support: {
        title: 'Dukungan',
        resources: 'Sumber Daya',
        discord: 'Mengobrol dengan kami',
        contributionGuide: 'Panduan kontribusi'
      }
    }
<<<<<<< HEAD
  },
  cookies: {
    consent: 'Kami menggunakan Cookie untuk menganalisis pengguna dan melakukan peningkatan pada halaman!',
    linkLabel: 'Pelajari tentang cookie',
    button: 'Mengerti'
=======
      'get-started': 'Get Started',
      concepts: 'Concepts',
      features: 'Features',
      'directory-structure': 'Directory Structure',
      'configuration-glossary': 'Configuration Glossary',
      'internals-glossary': 'Internals Glossary',
      'components-glossary': 'Components Glossary'
    }
>>>>>>> 26a70b2b (chore: add guides section (#407))
=======
>>>>>>> upstream/main
  }
}
