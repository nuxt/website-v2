---
title: nuxt.config
description: Secara bawaan, Nuxt.js dikonfigurasi untuk mencakup sebagian besar kasus penggunaan. Konfigurasi bawaan ini dapat ditimpa dengan berkas nuxt.config.js.
position: 14
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/15_nuxt-config?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
---

Secara bawaan, Nuxt.js dikonfigurasi untuk mencakup sebagian besar kasus penggunaan. Konfigurasi bawaan ini dapat ditimpa dengan berkas nuxt.config.js.

## nuxt.config.js

### build

Opsi ini memungkinkan Anda mengonfigurasi berbagai pengaturan untuk langkah `build`, termasuk `loader`, `filenames`, konfigurasi `webpack` dan `transpilation`.

```js{}[nuxt.config.js]
export default {
  build: {
    /*
     ** Anda dapat memperluas konfigurasi webpack di sini
     */
    extend(config, ctx) {}
  }
}
```

<base-alert type="next">

Lihat Selengkapnya di [build property](/guides/configuration-glossary/configuration-build)

</base-alert>

### css

Opsi ini memungkinkan Anda menentukan berkas CSS, modul, dan pustaka yang ingin Anda sertakan secara global (di setiap halaman).

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main.css', '~/assets/css/animations.scss']
}
```

Anda dapat menghilangkan ekstensi berkas untuk berkas CSS/SCSS/Postcss/Less/Stylus/... yang terdaftar dalam larik css di berkas konfigurasi nuxt Anda.

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main', '~/assets/css/animations']
}
```

Dengan menghilangkan ekstensi, jika Anda memiliki berkas css dan memutuskan untuk menggunakan sass misalnya, Anda tidak perlu memperbarui nuxt.config Anda karena akan menggunakan ekstensi baru setelah nama berkas tetap sama.

<base-alert type="next">

Lihat selengkapnya di [css property](/guides/configuration-glossary/configuration-css)

</base-alert>

### dev

Opsi ini memungkinkan Anda menentukan mode `pengembangan` atau `produksi` Nuxt.js (penting saat Anda menggunakan Nuxt.js secara _programatik_)

```js{}[nuxt.config.js]
export default {
  dev: process.env.NODE_ENV !== 'production'
}
```

<base-alert type="next">

Lihat selengkapnya di [dev property](/guides/configuration-glossary/configuration-dev)

</base-alert>

### env

Opsi ini memungkinkan Anda menentukan variabel lingkungan yang tersedia untuk klien dan peladen.

```js{}[nuxt.config.js]
export default {
  env: {
    baseUrl: process.env.BASE_URL || baseUrl
  }
}
```

<base-alert type="next">

Lihat selengkapnya di [env property](/guides/configuration-glossary/configuration-env)

</base-alert>

### generate

Opsi ini memungkinkan Anda mengatur nilai parameter untuk setiap rute dinamis dalam aplikasi Anda yang akan diubah menjadi berkas HTML oleh Nuxt.js.

```js{}[nuxt.config.js]
export default {
  generate: {
    dir: 'gh_pages', // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  }
}
```

<base-alert type="next">

Lihat selengkapnya di [generate property](/guides/configuration-glossary/configuration-generate)

</base-alert>

### head

```js{}[nuxt.config.js]
export default {
	head: {
    title: 'my title',
    meta: [
      { charset: 'utf-8' },
			.....
		]
	}
}
```

Opsi ini memungkinkan Anda menentukan semua tag meta bawaan untuk aplikasi Anda.

<base-alert type="next">

Lihat selengkapnya di [head integration](/guides/configuration-glossary/configuration-head)

</base-alert>

### loading

Opsi ini memungkinkan Anda menyesuaikan komponen pemuatan yang digunakan Nuxt.js secara bawaan.

```js{}[nuxt.config.js]
export default {
  loading: {
    color: '#fff'
  }
}
```

<base-alert type="next">

Lihat selengkapnya di [loading integration](/guides/configuration-glossary/configuration-loading)

</base-alert>

### modules

Dengan opsi ini Anda dapat menambahkan modul Nuxt.js ke proyek Anda.

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/axios']
}
```

<base-alert type="next">

Lihat selengkapnya [modules property](/guides/configuration-glossary/configuration-modules)

</base-alert>

### modulesDir

Properti modulesDir digunakan untuk mengatur direktori modul untuk penyelesaian jalur. Misalnya: resolLoading, nodeExternals dan postcss Webpack. Jalur konfigurasi relatif terhadap `options.rootDir` (default: process.cwd ()).

```js{}[nuxt.config.js]
export default {
  modulesDir: ['../../node_modules']
}
```

Menyetel bidang ini mungkin diperlukan jika proyek Anda diatur sebagai mono-repositori bergaya ruang kerja Yarn.

<base-alert type="next">

Lihat selengkapnya di [modulesDir property](/guides/configuration-glossary/configuration-modulesdir)

</base-alert>

### plugins

Opsi ini memungkinkan Anda menentukan plugin JavaScript yang harus dijalankan sebelum membuat instance aplikasi root Vue.js.

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/url-helpers.js']
}
```

<base-alert type="next">

Lihat selengkapnya di [plugins property](/guides/configuration-glossary/configuration-plugins)

</base-alert>

### router

Dengan opsi `router` Anda dapat menimpa konfigurasi Nuxt.js bawaan dari Vue Router.

```js{}[nuxt.config.js]
export default {
  router: {
    linkExactActiveClass: 'text-primary'
  }
}
```

<base-alert type="next">

Lihat selengkapnya di [router property](/guides/configuration-glossary/configuration-router)

</base-alert>

### server

Opsi ini memungkinkan Anda mengkonfigurasi variabel koneksi untuk instance peladen dari aplikasi Nuxt.js Anda.

```js{}[nuxt.config.js]
import path from 'path'
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  }
}
```

<base-alert type="next">

Lihat selengkapnya di [server property](/guides/configuration-glossary/configuration-server)

</base-alert>

### srcDir

Opsi ini memungkinkan Anda menentukan direktori sumber aplikasi Nuxt.js Anda.

```js{}[nuxt.config.js]
export default {
  srcDir: 'client/'
}
```

Contoh struktur proyek dengan aplikasi Nuxt.js Anda di direktori `source`.

```bash
**-| app/
---| node_modules/
---| nuxt.config.js
---| package.json
---| client/
------| assets/
------| components/
------| layouts/
------| middleware/
------| pages/
------| plugins/
------| static/
------| store/**
```

### dir

Opsi ini memungkinkan Anda menentukan nama kustom direktori Nuxt.js Anda.

```js{}[nuxt.config.js]
export default {
  pages: 'views' // Nuxt will look for the views/ instead of the pages/ folder
}
```

<base-alert type="next">

Lihat selengkapnya di [dir property](/guides/configuration-glossary/configuration-dir)

</base-alert>

### pageTransition

Opsi ini memungkinkan Anda menentukan properti bawaan dari transisi halaman.

```js{}[nuxt.config.js]
export default {
  pageTransition: 'page'
}
```

<base-alert type="next">

Lihat selengkapnya di [transition property](/guides/configuration-glossary/configuration-transition)

</base-alert>

## Other configuration files

Selain `nuxt.config.js` mungkin ada berkas konfigurasi lain di root project Anda, seperti [.eslintrc](https://eslint.org/), [prettier.config.json](https://prettier.io/) atau [.gitignore](https://git-scm.com/docs/gitignore). Ini digunakan untuk mengonfigurasi alat lain seperti linter, pemformat kode, atau repositori git Anda dan terlepas dari `nuxt.config.js`.

### .gitignore

Dalam berkas .gitignore Anda, Anda perlu menambahkan yang berikut ini agar diabaikan dan tidak ditambahkan ke kontrol versi. `node_modules` yang merupakan tempat semua modul yang telah Anda instal. direktori `nuxt` yang dibuat saat menjalankan perintah dev atau build. direktori `dist` adalah direktori yang dibuat saat menjalankan perintah generate.

```markdown{}[.gitignore]
node_modules .nuxt dist
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

### What's next

<base-alert type="next">

Lihat [configuration-glossary](/guides/configuration-glossary/configuration-build)

</base-alert>
