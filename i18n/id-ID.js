module.exports = {
  common: {
    an_error_occurred: 'Terjadi kesalahan',
    page_not_found: 'Halaman tidak ditemukan',
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
        name: 'FAQ',
        icon: 'resources',
        slug: 'faq'
      },
      {
        name: 'Blog',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Video Courses',
        icon: 'video',
        href:
          'https://masteringnuxt.com?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Navbar&utm_content=prelaunch'
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
      ssg: {
        title: 'Generate Secara Statis',
        description:
          'Pembuatan Situs Statis adalah topik yang sangat panas saat ini (alias JAMStack). Alih-alih beralih ke kerangka kerja lain dan menghabiskan waktu untuk membiasakan diri, mengapa tidak membunuh dua burung dengan satu batu? {proverbial} Nuxt.js mendukung pembuatan situs web statis berdasarkan aplikasi Vue Anda. Ini adalah "yang terbaik dari kedua dunia" karena Anda tidak memerlukan server tetapi masih memiliki manfaat SEO karena Nuxt akan melakukan pra-render semua halaman dan menyertakan HTML yang diperlukan. Anda juga dapat menggunakan halaman yang dihasilkan dengan mudah ke halaman Netlify atau GitHub.',
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'Menjadi Sponsor',
      description:
        'NuxtJS adalah proyek sumber terbuka berlisensi MIT dan sepenuhnya gratis untuk digunakan. Namun, jumlah upaya yang diperlukan untuk mempertahankan dan mengembangkan fitur-fitur baru untuk proyek ini tidak berkelanjutan tanpa dukungan keuangan yang tepat. Jika Anda menjalankan bisnis dan menggunakan Nuxt dalam produk yang menghasilkan pendapatan, masuk akal bagi bisnis untuk mensponsori pengembangan Nuxt: memastikan proyek yang diandalkan produk Anda tetap sehat dan dipelihara secara aktif. Ini juga dapat membantu pemaparan Anda di komunitas Vue/Nuxt dan membuatnya lebih mudah untuk menarik pengembang Vue/Nuxt. Jika Anda adalah pengguna individu dan telah menikmati produktivitas menggunakan Nuxt, pertimbangkan untuk memberi donasi sebagai tanda penghargaan.',
      become_a_sponsor: 'Menjadi sponsor'
    },
    newsletter: {
      title: 'Buletin {nuxt}',
      description:
        'Dapatkan berita Nuxt terbaru ke kotak masuk Anda, dikuratori oleh tim NuxtJS.',
      form: {
        email: 'Alamat Surel',
        subscribing: 'Berlangganan...',
        subscribe: 'Langganan',
        subscribed_messages: {
          pre: 'Pesan untuk mengonfirmasi langganan Anda telah dikirim',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'Desain NuxtJS',
      description:
        'Unduh sumber daya desain NuxtJS (SVG, ikon, emoji, dan favicon).'
    },
    title: 'Desain {nuxt}',
    description:
      'NuxtJS adalah proyek open source berlisensi MIT dan sepenuhnya gratis untuk digunakan. {break} Anda dapat dengan bebas menggunakan logo kami selama Anda menyebutkan NuxtJS dan tautan ke nuxtjs.org.',
    other_download_message:
      'Anda juga dapat mengunduh file {favicon} atau {sketch} kami.'
  },
  resources: {
    meta: {
      title: 'Sumber Daya NuxtJS',
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
      title: 'Toko NuxtJS',
      description:
        'Anda ingin mendukung proyek NuxtJS dan menunjukkan cinta Anda kepada seluruh komunitas? Berikut produk kami dengan kualitas terbaik yang pernah ada!'
    },
    title: 'Toko {nuxt}',
    description:
      'Anda ingin mendukung proyek NuxtJS dan menunjukkan cinta Anda kepada seluruh komunitas? {Break} Ini produk kami dengan kualitas terbaik yang pernah ada!',
    button: 'Segera hadir'
  },
  team: {
    meta: {
      title: 'Tim NuxtJS',
      description:
        'NuxtJS memiliki tim yang sangat aktif dan terlibat yang terus berupaya untuk mendorong Nuxt maju.'
    },
    title: 'Tim {nuxt}',
    description:
      'Pengembangan NuxtJS dan ekosistemnya dipandu oleh tim internasional. Kami memiliki tim yang sangat aktif dan terlibat yang terus berupaya untuk mendorong Nuxt maju.'
  },
  themes: {
    meta: {
      title: 'Tema NuxtJS',
      description: ''
    },
    title: 'Tema {nuxt}',
    description:
      'Dengan tema di bawah ini yang dibangun oleh mitra kami dari Tim Kreatif dan Hutan Tema Anda dapat melihat bagaimana aplikasi dunia nyata dibangun, dengan Nuxt.js menumpuk di belakang.',
    button: 'Dapatkan harga'
  },
  'video-courses': {
    meta: {
      title: 'Video Kursus NuxtJS',
      description:
        'Dengan kursus video di bawah ini yang dibuat oleh mitra kami VueSchool, Anda dapat menemukan dan mempelajari lebih lanjut tentang Kerangka Nuxt.js.'
    },
    title: 'Video Kursus {nuxt}',
    description:
      'Dengan kursus video di bawah ini yang dibuat oleh mitra kami VueSchool Anda dapat menemukan dan mempelajari lebih lanjut tentang Kerangka Nuxt.js.',
    cta: {
      discover: 'Discover vueschool',
      start: 'MULAI KURSUS'
    }
  },
  sponsor: {
    meta: {
      title: 'Sponsor Pengembang NuxtJS',
      description:
        'Anda dapat mendukung pengembangan NuxtJS melalui metode yang berbeda dan memastikan pembaruan berkala pada kerangka kerja.'
    },
    title: 'Sponsor Pengembang {nuxt}',
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
    meta: {
      title: 'Dukungan NuxtJS',
      description:
        'Tim NuxtJS kami sekarang menawarkan layanan konsultasi resmi untuk aplikasi NuxtJS Anda.'
    },
    title: 'Konsultasi {nuxt} Dukungan',
    description:
      '{team} kami sekarang menawarkan layanan konsultasi resmi untuk aplikasi NuxtJS Anda. {Break} Kami menawarkan layanan berbeda tergantung kebutuhan Anda, dari dukungan teknis hingga pengembangan kustom. Berharap balasan dalam satu hari kerja, kami dapat menandatangani NDA khusus dan Anda bisa mendapatkan pengembalian dana penuh jika Anda tidak puas dengan layanan kami.',
    technical: {
      title: 'Dukungan teknis',
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
      title: 'untuk perusahaan',
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
    meta: {
      title: 'Blog NuxtJS',
      description:
        'Temukan artikel dari tim inti dan kontributor tentang NuxtJS, termasuk tip dan trik!'
    },
    title: 'Blog {nuxt}',
    description:
      'Temukan artikel tentang NuxtJS dari {nuxtTeam} dan {nuxtCommunity} NuxtJS, termasuk tips dan trik!',
    nuxt_team: 'Tim NuxtJS',
    nuxt_community: 'Komunitas Nuxt.js',
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
    msg1: 'Ingin melihat dokumen baru kami? ',
    link: 'dokumen baru',
    msg2: ' kami sekarang dalam versi beta. Selamat bersenang-senang!'
  },
  contribute: {
    title: 'Kontributor',
    docs: 'Jumpa kesalahan atau ingin berkontribusi pada dokumentasi ini?',
    blog:
      'Tertangkap kesalahan atau ingin berkontribusi pada posting blog ini?',
    edit_on_github: 'Sunting halaman ini di GitHub!',
    msg1:
      'Kontribusi untuk halaman ini sekarang ditutup. Jika Anda ingin berkontribusi, silakan periksa ',
    link: 'dokumen baru'
  },
  example: {
    intro: 'In this example:'
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
      development: 'Development',
      deployment: 'Deployment'
    },
    guides: {
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
        consulting: 'Training & consultancy',
        sponsorNuxt: 'Sponsoring & donations'
      },
      about: {
        title: 'About',
        team: 'Our team',
        design: 'Design kit',
        contact: 'Contact us'
      },
      support: {
        title: 'Support',
        resources: 'Sumber Daya',
        discord: 'Chat with us',
        contributionGuide: 'Contribution guide'
      }
    }
  },
  cookies: {
    consent:
      'Kami menggunakan Cookie untuk analisis pengguna dan peningkatan pada halaman!',
    linkLabel: 'Pelajari tentang cookie',
    button: 'Mengerti'
  }
}
