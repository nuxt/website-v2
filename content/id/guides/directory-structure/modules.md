---
title: modules
description: Nuxt.js menyediakan sistem modul tingkat tinggi yang memungkinkan untuk memperluas inti. Modul adalah fungsi yang dipanggil secara berurutan saat mem-_boot_ Nuxt.js.
position: 9
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/10_modules?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/modules.svg
imgAlt: modules-in-nuxt-js
questions:
  - question: Kapan modul dipanggil?
    answers:
      - sebelum Nuxt.js dimulai
      - saat Nuxt.js sedang berjalan
      - setelah Nuxt.js dimulai
    correctAnswer: sebelume Nuxt.js dimulai
  - question: Modul Nuxt.js dapat digabungkan ke dalam paket npm
    answers:
      - benar
      - salah
    correctAnswer: benar
  - question: Di berkas nuxt.config.js, di properti mana anda menambahkan modul?
    answers:
      - nuxtModules
      - modules
      - plugins
    correctAnswer: modules
  - question: Urutan dalam penambahan modul ke berkas nuxt.config.js sangat penting
    answers:
      - benar
      - salah
    correctAnswer: benar
  - question: Di mana kamu harus menambahkan modul yang hanya diperlukan selama pengembangan dan waktu _build_?
    answers:
      - modules
      - build
      - buildModules
    correctAnswer: buildModules
  - question: Apa sebenarnya modul itu?
    answers:
      - arrays
      - functions
      - plugins
    correctAnswer: functions
  - question: Apa yang kita gunakan ketika ingin melakukan sesuatu hanya pada kondisi tertentu dan tidak hanya selama inisialisasi Nuxt.ja?
    answers:
      - plugins
      - hooks
      - asyncData
    correctAnswer: hooks
  - question: Modul bisa
    answers:
      - hanya dapat digunakan sebagai paket npm
      - hanay dapat disertakan langsung dalam kode sumber proyek
      - keduanya
    correctAnswer: keduanya
  - question: Baris mana yang diperlukan jika anda ingin menerbitkan modul sebagai paket npm?
    answers:
      - module.exports
      - module.exports.meta
      - module.exports.module
    correctAnswer: module.exports.meta
  - question: Anda dapat memerintahkan Nuxt.js untuk memuat modul dengan parameter opsional sebagai opsi
    answers:
      - true
      - false
    correctAnswer: true
---

## Menjelajahi Modul Nuxt

Temukan [daftar modul](https://modules.nuxtjs.org) kami untuk meningkatkan proyek Nuxt anda, yang dibuat oleh tim dan komunitas Nuxt.

- 145+ Modul
- 89+ Pemelihara

<base-alert type="next">

Lihat [modules.nuxtjs.org](https://modules.nuxtjs.org)

</base-alert>

<app-modal :src="img" :alt="imgAlt"></app-modal>

Saat mengembangkan aplikasi tingkat produksi dengan Nuxt.js, anda mungkin menemukan bahwa fungsionalitas inti dari kerangka kerja tidak cukup. Nuxt.js dapat diperluas dengan opsi konfigurasi dan _plugin_, tetapi memelihara kustomisasi ini di banyak proyek itu membosankan, berulang, dan memakan waktu. Di sisi lain, mendukung setiap kebutuhan proyek yang tidak biasa akan membuat Nuxt.js sangat kompleks dan sulit digunakan.

Inilah salah satu alasan mengapa Nuxt.js menyediakan sistem modul tingkat tinggi yang memungkinkan untuk memperluas inti. Modul adalah fungsi yang dipanggil secara berurutan saat mem-_boot_ Nuxt.js. Kerangka kerja menunggu setiap modul selesai sebelum melanjutkan. Dengan cara ini, modul dapat menyesuaikan hampir semua aspek proyek anda. Berkat desain modular Nuxt.js (berdasarkan [Tapable](https://github.com/webpack/tapable) _webpack_), modul dapat dengan mudah mendaftarkan _hook_ untuk titik masuk tertentu seperti inisialisasi _builder_. Modul juga dapat mengganti templat, mengkonfigurasi pemuat _webpack_, menambahkan pustaka CSS, dan melakukan banyak tugas berguna lainnya.

Yang terbaik dari semuanya, modul Nuxt.js dapat digabungkan ke dalam paket npm. Hal ini memungkinkan untuk digunakan kembali di seluruh proyek anda dan untuk dibagikan dengan komunitas, membantu menciptakan ekosistem pengaya berkualitas tinggi.

## Properti modules

Modul adalah ekstensi Nuxt.js yang dapat memperluas fungsionalitas inti kerangka kerja dan menambahkan integrasi tanpa akhir. Setelah anda menginstal modul, anda dapat menambahkannya ke berkas nuxt.config.js pada properti modules.

```js{}[nuxt.config.js]
export default {
  modules: [
    // Menggunakan nama paket
    '@nuxtjs/axios',

    // Relatif terhadap srcDir proyek
    '~/modules/awesome.js',

    // Memberikan opsi
    ['@nuxtjs/google-analytics', { ua: 'X1234567' }],

    // Definisi sebaris
    function () {}
  ]
}
```

<base-alert type="info">

Pengembang modul biasanya memberikan langkah dan detail tambahan yang diperlukan untuk penggunaan.

</base-alert>

Nuxt.js mencoba menyelesaikan setiap item dalam larik modul menggunakan jalur yang dibutuhkan node (dalam `node_modules`) dan kemudian akan menyelesaikan dari `srcDir` proyek jika alias `@` digunakan.

<base-alert>

Modul dijalankan secara berurutan sehingga urutannya sangat penting.

</base-alert>

Modul harus mengekspor _function_ untuk meningkatkan _build_/_runtime_ dan secara opsional mengembalikan sebuah _promise_ sampai tugasnya selesai. Perhatikanlah bahwa modul diimpor saat _runtime_ sehingga harus sudah ditranspilasi jika menggunakan fitur ES6 modern.

## Menulis Modul sendiri

Modul adalah fungsi, dapat dikemas sebagai modul npm atau langsung disertakan dalam kode sumber proyek.

```js{}[nuxt.config.js]
export default {
  exampleMsg: 'hello',
  modules: [
    // Penggunaan sederhana
    '~/modules/example',
    // Meneruskan opsi secara langsung
    ['~/modules/example', { token: '123' }]
  ]
}
```

```js{}[modules/example.js]
export default function ExampleModule(moduleOptions) {
  console.log(moduleOptions.token) // '123'
  console.log(this.options.exampleMsg) // 'halo'

  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt sudah siap')
  })
}

// DIBUTUHKAN jika menerbitkan modul sebagai paket npm
module.exports.meta = require('./package.json')
```

## 1) ModuleOptions

`moduleOptions`: Ini adalah objek yang diteruskan menggunakan larik `modules` oleh pengguna. Kita dapat menggunakannya untuk menyesuaikan perilakunya.

### Opsi tingkat atas

Terkadang lebih nyaman jika kita dapat menggunakan opsi tingkat atas saat mendaftarkan modul di `nuxt.config.js`. Ini memungkinkan kita untuk menggabungkan berbagai sumber opsi.

```js{}[nuxt.config.js]
export default {
  modules: [['@nuxtjs/axios', { anotherOption: true }]],

  // modul axios menyadari hal ini dengan menggunakan `this.options.axios`
  axios: {
    option1,
    option2
  }
}
```

## 2) this.options

`this.options`: Anda dapat langsung mengakses opsi Nuxt.js menggunakan referensi ini. Ini adalah isi dari `nuxt.config.js` pengguna, dengan semua opsi bawaannya. Ini dapat digunakan sebagai bersama antar modul/

```js{}[module.js]
export default function (moduleOptions) {
  // `options` akan berisi opsi1, opsi2, dan opsiLainnya
  const options = Object.assign({}, this.options.axios, moduleOptions)

  // ...
}
```

### Menambahkan Pustaka CSS

Jika modul anda akan menyediakan pustaka CSS, pastikan untuk melakukan pemeriksaan jika pengguna sudah menyertakan pustaka tersebut untuk menghindari duplikasi, dan tambahkan opsi untuk menonaktifkan pustaka CSS di modul.

```js{}[module.js]
export default function (moduleOptions) {
  if (moduleOptions.fontAwesome !== false) {
    // Menambahkan Font Awesome
    this.options.css.push('font-awesome/css/font-awesome.css')
  }
}
```

### Emisi aset

Kita dapat mendaftarkan _plugin_ _webpack_ untuk mengeluarkan aset selama _build_.

```js{}[module.js]
export default function (moduleOptions) {
  const info = 'Dibangun dengan awesome module - 1.3 alpha pada ' + Date.now()

  this.options.build.plugins.push({
    apply(compiler) {
      compiler.plugin('emit', (compilation, cb) => {
        // Ini akan menghasilkan `.nuxt/dist/info.txt' yang berisi variabel info.
        // Sumber juga bisa menjadi buffer
        compilation.assets['info.txt'] = {
          source: () => info,
          size: () => info.length
        }

        cb()
      })
    }
  })
}
```

## 3) this.nuxt

`this.nuxt`: Ini adalah referensi ke _instance_ Nuxt.js saat ini. Kita dapat mendaftarkan _hook_ pada peristiwa siklus hidup tertentu.

- **Siap** : Nuxt siap untuk bekerja (ModuleContainer dan Perender siap).

```js
nuxt.hook('ready', async nuxt => {
  // Kode khusus anda di sini
})
```

- **Galat**: Kesalahan yang tidak tertangani saat memanggil _hook_.

```js
nuxt.hook('error', async error => {
  // Kode khusus anda di sini
})
```

- **Tutup**: _Instance_ Nuxt ditutup dengan baik.

```js
nuxt.hook('close', async nuxt => {
  // Kode khusus anda di sini
})
```

- **Pantau**: Peladen internal Nuxt mulai memantau. (Menggunakan nuxt start atau nuxt dev)

```js
nuxt.hook('listen', async (server, {host, port}) => {
  // Kode khusus anda di sini
})
```

`this`: Konteks modul. Semua modul akan dipanggil dalam konteks _instance_ ModuleContainer.

Harap lihat dokumentasi kelas [ModuleContainer](/docs/2.x/internals-glossary/internals-module-container) untuk mengetahui metode yang tersedia.

### Menjalankan Tugas pada _hook_ Tertentu

Modul anda mungkin perlu melakukan beberapa hal hanya pada kondisi tertentu dan tidak hanya selama inisialisasi Nuxt.js. Kita dapat menggunakan _hook_ Nuxt.js yang sangat berguna untuk melakukan tugas pada peristiwa tertentu (berdasarkan [Hookable](https://github.com/nuxt-contrib/hookable)). Nuxt.js akan menunggu _function_ anda jika ia mengembalikan _promise_ atau didefinisikan sebagai `async`.

Berikut beberapa contoh dasar:

```js{}[modules/myModule.js]
export default function myModule() {
  this.nuxt.hook('modules:done', moduleContainer => {
    // Ini akan dipanggil ketika semua modul selesai dimuat
  })

  this.nuxt.hook('render:before', renderer => {
    // Dipanggil setelah perender dibuat
  })

  this.nuxt.hook('build:compile', async ({ name, compiler }) => {
    // Dipanggil sebelum kompilator (bawaan: webpack) memulai
  })

  this.nuxt.hook('generate:before', async generator => {
    // Ini akan dipanggil sebelum Nuxt membuat laman anda
  })
}
```

### Menyediakan _plugin_

Biasanya modul menyediakan satu atau lebih plugin saat ditambahkan. Misalnya modul [bootstrap-vue](https://bootstrap-vue.js.org/) akan perlu mendaftar sendiri ke Vue. Dalam situasi seperti itu kita bisa menggunakan _helper_ `this.addPlugin`.

```js{}[plugin.js]
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

Vue.use(BootstrapVue)
```

```js{}[module.js]
import path from 'path'

export default function nuxtBootstrapVue(moduleOptions) {
  // Mendaftarkan templat `plugin.js`
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}
```

### Templat _plugin_

Templat dan _plugin_ yang terdaftar dapat memanfaatkan [templat lodash](https://lodash.com/docs/4.17.4#template) untuk mengubah keluaran dari _plugin_ yang terdaftar, secara bersyarat.

```js{}[plugin.js]
// Mengatur Google Analytics UA
ga('create', '<%= options.ua %>', 'auto')

<% if (options.debug) { %>
// Kode dev saja
<% } %>
```

```js{}[module.js]
import path from 'path'

export default function nuxtBootstrapVue(moduleOptions) {
  // Mendaftarkan templar `plugin.js`
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      // Nuxt akan mengganti `options.ua` dengan `123` saat menyalin plugin ke proyek
      ua: 123,

      //bagian bersyarat dengan dev akan dihapus dari kode plugin pada build produksi
      debug: this.options.dev
    }
  })
}
```

### Mendaftarkan pemuat _webpack_ khusus

Kita bisa melakukan hal yang sama seperti `build.extend`  di  `nuxt.config.js`  menggunakan  `this.extendBuild`.

```js{}[module.js]
export default function (moduleOptions) {
    this.extendBuild((config, { isClient, isServer }) => {
      // Pemuat `.foo`
      config.module.rules.push({
        test: /\.foo$/,
        use: [...]
      })

      // Menyesuaikan pemuat yang sudah ada
      // Lihat kode sumber untuk internal Nuxt:
      // https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js
      const barLoader = config.module.rules.find(rule => rule.loader === 'bar-loader')
  })
}
```

## Modul Asinkron

Tidak semua modul akan melakukan semuanya secara sinkron. Misalnya, anda mungkin ingin mengembangkan modul yang perlu mengambil beberapa API atau melakukan Operasi asinkron. Untuk ini, Nuxt.js mendukung modul asinkron yang dapat mengembalikan _Promise_ atau memanggil _callback_.

### Menggunakan async/await

```js
import fse from 'fs-extra'

export default async function asyncModule() {
  // Anda dapat melakukan pekerjaan asinkron di sini menggunakan `async`/`await`
  const pages = await fse.readJson('./pages.json')
}
```

### Mengembalikan _Promise_

```js
export default function asyncModule($http) {
  return $http
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user => '/users/' + user.username))
    .then(routes => {
      // Melakukan sesuatu dengan memperluas rute Nuxt
    })
}
```

<base-alert type="info">

Ada lebih banyak _hook_ dan kemungkinan untuk modul. Silakan baca [Internal Nuxt](/docs/2.x/internals-glossary/internals) untuk mengetahui lebih lanjut mengenai API _nuxt-internal_.

</base-alert>

## Menerbitkan modul

`module.exports.meta`: Baris ini diperlukan jika anda menerbitkan modul sebagasi paket npm.Nuxt secara internal akan menggunakan meta untuk bekerja lebih baik dengan paket anda.

```js{}[modules/myModule.js]
module.exports.meta = require('./package.json')
```

## buildModules

Beberapa modul hanya diimpor selama pengembangan dan waktu _build_. Penggunaan `buildModules` dapat membantu mempercepat proses produksi dan juga dapat mengurangi ukuran `node_modules` secara signifikan untuk penggelaran (_deployment_) produksi. Silakan merujuk ke dokumentasi setiap modul guna mengetahui apaka direkomendasikan untuk menggunakan `modules` atau `buildModules`.

Perbedaan penggunaannya adalah:

- Daripada menambahkan ke `modules` di dalam `nuxt.config.js`, tambahkan ke `buildModules`

```js{}[nuxt.config.js]
export default {
  buildModules: ['@nuxtjs/eslint-module']
}
```

- Daripada menambahkan ke `dependencies` di dalam `package.json`, tambahkan ke `devDependencies`

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add -D @nuxtjs/eslint-module
```

  </code-block>
  <code-block label="npm">

```bash
npm install --save-dev @nuxtjs/eslint-module
```

  </code-block>
</code-group>

<base-alert type="info">

Jika anda adalah pembuat modul, sangat disarankan untuk menyarankan pengguna untuk menginstal paket anda sebagai `devDependency` dan menggunakan  `buildModules` alih-alih `modules` untuk `nuxt.config.js`.

</base-alert>

Modul anda adalah `buildModule`, kecuali:

- menyediakan serverMiddleware
- Harus mendaftarkan _hook runtime_ Node.js (Seperti sentry)
- Mempengaruhi perilaku vue-renderer atau menggunakan _hook_ dari _namespace_ `server:` atau `vue-renderer:`
- Apa pun yang berada di luar cakupan _webpack_ (Petunjuk: _plugin_ dan templat dikompilasi dan berada dalam cakupan _webpack_)

<base-alert> 

Jika anda menawarkan untuk menggunakan `buildModules` harap sebutkan bahwa fitur ini hanya tersedia untuk Nuxt v2.9 ke atas. Pengguna yang menggunakan versi lama harus meningkatkan Nuxt atau menggunakan properti `modules`.

</base-alert>

<quiz :questions="questions"></quiz>
