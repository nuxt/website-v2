---
title: 'Properti CSS'
description: Nuxt.js mengizinkan kamu untuk menentukan file/modul/perpustakaan CSS yang ingin anda kamu atur secara global (disertakan dalam setiap halaman).
menu: css
category: configuration-glossary
position: 4
---

> Nuxt.js mengizinkan kamu untuk menentukan file/modul/perpustakaan CSS yang ingin anda kamu atur secara global (disertakan dalam setiap halaman).

Jika kamu ingin menggunakan `sass` pastikan kamu telah menginstall paket `sass` dan `sass-loader`. Jika belum, maka

```sh
npm install --save-dev sass sass-loader fibers
```

<base-alert type="info">Kompilasi sinkron dengan `sass` (peningkatan kecepatan 2x) [diaktifkan secara otomatis](https://github.com/webpack-contrib/sass-loader) ketika `fibers` telah terinstall.</base-alert>

- Tipe: `Array`
  - Item: `string`

```js{}[nuxt.config.js]
export default {
  css: [
    // Memuat modul Node.js secara langsung (Ini adalah file Sass)
    'bulma',
    // File CSS dalam proyek
    '@/assets/css/main.css',
    // File SCSS dalam proyek
    '@/assets/css/main.scss'
  ]
}
```

Nuxt.js secara otomatis akan menentukan jenis file berdasarkan ekstensinya dan menggunakan pemuat pra-prosesor yang sesuai untuk webpack. Kamu masih perlu menginstal pemuat yang diperlukan jika kamu perlu menggunakanny

### Ekstensi File Gaya

Kamu bisa menghilangkan ekstensi file untuk file CSS/SCSS/Postcss/Less/Stylus/... yang terdapat dalam himpunan css di file konfigurasi nuxt.

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main', '~/assets/css/animations']
}
```

<base-alert>

Jika kamu memiliki dua file dengan nama yang sama mis. `main.scss` dan` main.css`, dan tidak menentukan ekstensi dalam himpunan css, mis. `css: ['~/assets/css/main']`, maka hanya satu file yang akan dimuat tergantung pada urutan `styleExtensions`. Dalam kasus ini, hanya file `css` yang akan dimuat dan file `scss` akan diabaikan karena `css` berada di urutan pertama dalam himpunan `styleExtension` bawaan.

</base-alert>

Urutan bawaan: `['css', 'pcss', 'postcss', 'styl', 'stylus', 'scss', 'sass', 'less']`
