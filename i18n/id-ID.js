module.exports = {
  common: {
    an_error_occurred: 'Terjadi kesalahan',
    api_page_not_found: 'Halaman API tidak ditemukan',
    please_define_title: 'Silakan tentukan judul di bagian depan',
    please_define_description: 'Silakan tentukan deskripsi di bagian depan',
    search: 'Cari ("/" untuk fokus)',
    version: 'Versi'
  },
  iso: 'id',

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
      placeholder: 'Cari ("/" untuk fokus)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - Aplikasi Vue.js Universal',
      description:
        'Nuxt.js adalah framework minimalis untuk membuat aplikasi Vue.js dengan server side rendering, hot-reloading, static generation, dan banyak lagi!'
    },
    welcome: {
      title: 'Intuitif {br} {frameworkType} Framework',
      description:
        'Bangun aplikasi Vue.js Anda berikutnya dengan percaya diri menggunakan NuxtJS. Kerangka {openSource} membuat pengembangan web sederhana dan kuat.',
      openSource: 'sumber terbuka',
      get_started: 'memulai',
      get_updates: 'Dapatkan pembaruan NuxtJS ke kotak masuk Anda setiap bulan',
      video:
        'Video diproduksi oleh {company}, unduh gratis mereka {cheatSheet}',
      cheatSheet: 'Nuxt Cheat Sheet.'
    },
    why: {
      title: 'Mengapa {nuxt}',
      try_nuxtjs_online: 'Coba NuxtJS Online',
      enjoyable: {
        title: 'Menyenangkan',
        description:
          'Fokus utama kami adalah Pengalaman Pengembang. Kami menyukai Nuxt.js dan terus meningkatkan kerangka kerja sehingga Anda juga menyukainya! {break} Harapkan solusi yang menarik, pesan kesalahan deskriptif, standar kuat dan dokumentasi terperinci. Jika ada pertanyaan atau masalah, komunitas kami yang membantu akan membantu Anda.'
      },
      modular: {
        title: 'Modular',
        description:
          'Nuxt didasarkan pada arsitektur modular yang kuat. Anda dapat memilih dari lebih dari 50 modul untuk membuat pengembangan Anda lebih cepat dan lebih mudah. Anda tidak harus menemukan kembali roda untuk mendapatkan manfaat PWA, menambahkan Google Analytics ke halaman Anda atau menghasilkan peta situs.'
      },
      performant: {
        title: 'Kinerja',
        description:
          'Dengan Nuxt.js, aplikasi Anda akan dioptimalkan di luar kotak. Kami melakukan yang terbaik untuk membangun aplikasi berkinerja dengan memanfaatkan praktik terbaik Vue.js dan Node.js. Untuk menekan setiap bit yang tidak perlu dari aplikasi Anda Nuxt menyertakan penganalisa bundel dan banyak peluang untuk menyempurnakan aplikasi Anda.'
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
          'Mode paling populer untuk Nuxt. Dengan SSR, juga disebut mode "universal" atau "isomorphic", server Node.js akan digunakan untuk mengirimkan HTML berdasarkan komponen Vue Anda ke klien alih-alih javascript murni. Menggunakan SSR akan mengarah pada peningkatan SEO yang besar, UX yang lebih baik, dan lebih banyak peluang (dibandingkan dengan Vue SPA tradisional). {Break} Karena menerapkan SSR sendiri bisa sangat membosankan, Nuxt.js memberi Anda dukungan penuh di luar kotak dan akan mengurus perangkap umum.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description:
          'Tidak memerlukan SSR atau Pembuatan Situs Statis tetapi masih ingin mengambil untung dari manfaat yang diberikan Nuxt? Apakah Anda perlahan-lahan mentransisikan aplikasi Anda dan ingin memulai yang ringan? Maka mode SPA tradisional kemungkinan akan menjadi pilihan Anda. Hasilnya akan menjadi Vue SPA khas seperti yang Anda tahu tetapi dipengaruhi oleh konfigurasi Nuxt Anda dan kerangka itu sendiri.'
      },
      ssg: {
        title: 'Statically Generated',
        description:
          'Pembuatan Situs Statis adalah topik yang sangat panas saat ini (alias JAMStack). Alih-alih beralih ke kerangka kerja lain dan menghabiskan waktu untuk membiasakan diri, mengapa tidak membunuh dua burung dengan satu batu? {proverbial} Nuxt.js mendukung pembuatan situs web statis berdasarkan aplikasi Vue Anda. Ini adalah "yang terbaik dari kedua dunia" karena Anda tidak memerlukan server tetapi masih memiliki manfaat SEO karena Nuxt akan melakukan pra-render semua halaman dan menyertakan HTML yang diperlukan. Anda juga dapat menggunakan halaman yang dihasilkan dengan mudah ke halaman Netlify atau GitHub.',
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'Menjadi Sponsor',
      description:
        'NuxtJS adalah proyek open source berlisensi MIT dan sepenuhnya gratis untuk digunakan. Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur-fitur baru untuk proyek ini tidak berkelanjutan tanpa dukungan keuangan yang tepat. Jika Anda menjalankan bisnis dan menggunakan Nuxt dalam produk yang menghasilkan pendapatan, masuk akal bagi bisnis untuk mensponsori pengembangan Nuxt: memastikan proyek yang diandalkan produk Anda tetap sehat dan dipelihara secara aktif. Ini juga dapat membantu pemaparan Anda di komunitas Vue/Nuxt dan membuatnya lebih mudah untuk menarik pengembang Vue/Nuxt. Jika Anda adalah pengguna individu dan telah menikmati produktivitas menggunakan Nuxt, pertimbangkan untuk memberi donasi sebagai tanda penghargaan.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        'Dapatkan berita Nuxt terbaru ke kotak masuk Anda, dikuratori oleh tim NuxtJS.',
      form: {
        email: 'Alamat Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
        subscribed_messages: {
          pre: 'Email untuk mengonfirmasi langganan Anda telah dikirim',
          post: '💚'
        }
      }
    }
  },
  design: {
    title: 'Design',
    description:
      'NuxtJS adalah proyek open source berlisensi MIT dan sepenuhnya gratis untuk digunakan. {break} Anda dapat dengan bebas menggunakan logo kami selama Anda menyebutkan NuxtJS dan tautan ke nuxtjs.org.',
    other_download_message:
      'Anda juga dapat mengunduh file {favicon} atau {sketch} kami.'
  },
  resources: {
    title: 'Resources',
    description:
      'Temukan panel sumber daya yang dibuat oleh mitra kami. Dengan menggunakan tautan sumber daya afiliasi mereka, Anda membantu kami menjaga dan mengembangkan Kerangka Sumber Terbuka.',
    themes: {
      title: 'Themes'
    },
    videos: {
      title: 'Video Kursus'
    }
  },
  shop: {
    title: 'Shop',
    description:
      'Anda ingin mendukung proyek NuxtJS dan menunjukkan cinta Anda kepada seluruh komunitas? {Break} Ini produk kami dengan kualitas terbaik yang pernah ada!'
  },
  team: {
    title: 'Team',
    description:
      'Pengembangan NuxtJS dan ekosistemnya dipandu oleh tim internasional. Kami memiliki tim yang sangat aktif dan terlibat yang terus berupaya untuk mendorong Nuxt maju.'
  },
  themes: {
    title: 'Themes',
    description:
      'Dengan tema di bawah ini yang dibangun oleh mitra kami dari Tim Kreatif dan Hutan Tema Anda dapat melihat bagaimana aplikasi dunia nyata dibangun, dengan Nuxt.js menumpuk di belakang.'
  },
  'video-courses': {
    title: 'Video Kursus',
    description:
      'Dengan kursus video di bawah ini yang dibuat oleh mitra kami VueSchool Anda dapat menemukan dan mempelajari lebih lanjut tentang Kerangka Nuxt.js.',
    cta: {
      discover: 'Discover vueschool',
      start: 'MULAI KURSUS'
    }
  },
  sponsor: {
    title: {
      pre: 'Sponsor',
      post: 'Development'
    },
    description:
      'NuxtJS adalah proyek sumber terbuka berlisensi MIT dan sepenuhnya gratis untuk digunakan. {Break} Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur baru untuk proyek ini tidak berkelanjutan tanpa dukungan keuangan yang tepat. {Break} Anda dapat mendukung pengembangan NuxtJS melalui metode berikut:',
    donations: {
      title: 'Satu kali donasi',
      description: 'Kami menerima donasi melalui saluran ini'
    },
    pledges: {
      title: 'Janji Berulang',
      description:
        'Janji berulang datang dengan tunjangan eksklusif, mis. memiliki nama Anda terdaftar di repositori NuxtJS GitHub, atau menempatkan logo perusahaan Anda di situs web ini. Menjadi nuxter atau sponsor melalui {opencollective} (masuk ke dana dengan model pengeluaran transparan yang mendukung upaya dan acara komunitas).'
    },
    become_a_sponsor: 'Menjadi sponsor'
  },
  support: {
    title: {
      pre: 'Consulting',
      post: 'Support'
    },
    description:
      '{team} kami sekarang menawarkan layanan konsultasi resmi untuk aplikasi NuxtJS Anda. {Break} Kami menawarkan layanan berbeda tergantung kebutuhan Anda, dari dukungan teknis hingga pengembangan kustom. Berharap balasan dalam satu hari kerja, kami dapat menandatangani NDA khusus dan Anda bisa mendapatkan pengembalian dana penuh jika Anda tidak puas dengan layanan kami.',
    technical: {
      title: 'Technical support',
      description:
        'Dapatkan audit proyek, penerapan aplikasi, pengembangan kustom, dan dukungan teknis dari tim NuxtJS.',
      start: 'Memulai obrolan',
      partner: {
        pre: 'Kami bermitra dengan',
        post:
          'untuk menawarkan layanan ini sehingga kami dapat fokus membantu Anda secepat mungkin.'
      }
    },
    entreprise: {
      title: 'for enterprise',
      description:
        'NuxtJS dan pengelola ribuan paket lainnya bekerja dengan Tidelift untuk memberikan satu langganan perusahaan yang mencakup semua sumber terbuka yang Anda gunakan. {Break} Jika Anda ingin fleksibilitas open source dan kepercayaan diri dari perangkat lunak kelas komersial, ini adalah untukmu.',
      partner: {
        pre: 'Tersedia sebagai bagian dari',
        post: 'subscription.'
      },
      learn_more: 'Berlajar lagi',
      request_a_demo: 'Permintaan demo'
    }
  },
  blog: {
    title: 'NuxtJS Blog',
    description:
      'Temukan artikel dari {nuxtTeam} dan {ambassadors} tentang NuxtJS, termasuk tip dan trik!',
    ambassadors: 'ambassadors',
    contribute:
      'Tertangkap kesalahan atau ingin berkontribusi pada posting blog ini?'
  },
  guide: {
    release_notes: 'Catatan Rilis',
    toc_title: 'Di halaman ini'
  },
  quiz: {
    title: 'Kuis'
  },
  tryNewDocs: {
    msg1: 'Ingin melihat dokumen baru kami? Kami ',
    link: 'new docs',
    msg2: 'sekarang dalam versi beta. Selamat bersenang-senang!'
  },
  contribute: {
    title: 'Kontributor',
    docs: 'Jumpa kesalahan atau ingin berkontribusi pada dokumentasi ini?',
    blog:
      'Tertangkap kesalahan atau ingin berkontribusi pada posting blog ini?',
    edit_on_github: 'Sunting halaman ini di GitHub!',
    msg1:
      'Kontribusi untuk halaman ini sekarang ditutup. Jika Anda ingin berkontribusi, silakan periksa',
    link: 'new docs'
  },
  codeSandbox: {
    open: 'Buka CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Memulai'
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
  cookies: {
    consent:
      'Kami menggunakan Cookie untuk analisis pengguna dan peningkatan pada halaman!',
    linkLabel: 'Pelajari tentang cookie',
    button: 'Mengerti'
  }
}
