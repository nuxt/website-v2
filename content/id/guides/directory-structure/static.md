---
title: static
description: Direktori `static` langsung dipetakan ke dasar (_root_) server dan mengandung berkas-berkas yang kemungkinan besar tidak diubah-ubah. Berkas-berkas yang berada dalam direktori akan secara otomatis dijalnkan oleh Nuxt dan dapat diakses melalui URL dasar proyek anda.
position: 12
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/13_static?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Pada direktori apa anda harus menaruh berkas yang kemungkinan besar tidak anda ubah, seperti favicon atau robots.txt?
    answers:
      - assets
      - static
      - src
    correctAnswer: static
  - question: Direktori ini dapat dengan mudah diganti nama tanpa konfigurasi tambahan
    answers:
      - true
      - false
    correctAnswer:
  - question: Dimana anda seharusnya menaruh foto jika anda mau webpack untuk melakukan proses bundle untuk foto-foto tersebut?
    answers:
      - static
      - assets
      - src
    correctAnswer: assets
  - question: Apapun yang berada pada direktori static relatif terhadap direktori root
    answers:
      - true
      - false
    correctAnswer: true
  - question: Anda dapat melakukan konfigurasi untuk tingkah laku direktori static dalam berkas nuxt.config.js
    answers:
      - true
      - false
    correctAnswer: true
---

Direktori `static` langsung dipetakan ke dasar (_root_) server dan mengandung berkas-berkas yang kemungkinan besar tidak diubah-ubah. Berkas-berkas yang berada dalam direktori akan secara otomatis dijalnkan oleh Nuxt dan dapat diakses melalui URL dasar proyek anda.

`/static/robots.txt` akan tersedia di `http://localhost:3000/robots.txt`

`/static/favicon.ico` akan tersedia di  `localhost:3000/favicon.ico`

Opsi ini berguna untuk berkas-berkas seperti `robots.txt`, `sitemap.xml` or `CNAME` (penting untuk penggelaran (_deployment_) Github Pages).

<base-alert>

_Direktori ini tidak dapat berganti nama tanpa konfigurasi tambahan._

</base-alert>

## Aset Statis

Jika anda tidak mau menggunakan aset Webpack dari direktori `assets`, anda dapat menambahkan foto ke dalam direktori `static`.

Dalam kode anda, anda dapat mereferensikan berkas-berkas ini relatif ke dasar (_root_) proyek anda (`/`):

```html
<!-- Foto statis berasal dari direktori static -->
<img src="/foto-saya.png" />

<!-- Foto menggunakan webpack  berasal dari direktori assets -->
<img src="@/assets/foto-saya-2.png" />
```

## Konfigurasi direktori Static

Jika dibutuhkan, anda dapat melakukan konfigurasi untuk direktori `static/` dalam berkas `nuxt.config.js`.

### Awalan aset statis

Jika anda menggelar (_deploy_) Nuxt.js ke dalam sub-direktori, misalnya `/blog/`, _router base_ akan menambahkan jalur tersebut secara otomatis. Jika anda ingin mematikan fitur tingkah ini, anda dapat menetapkan `static.prefix` menjadi _false_ dalam berkas `nuxt.config.js`

```js
export default {
  static: {
    prefix: false
  }
}
```

Default: `/blog/foto-saya.png`

With `static.prefix` disabled: `/foto-saya.png`

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
