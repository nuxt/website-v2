---
title: Perintah dan Penggelaran (_Deployment_)
description: Nuxt.js hadir dengan sekumpulan perintah yang berguna, baik untuk tujuan pengembangan dan produksi.
position: 4
category: get-started
video: hYdXzIGDlYA
---

<YouTubeLite :video="video" :title="title" ></YouTubeLite>

Nuxt.js hadir dengan sekumpulan perintah yang berguna, baik untuk tujuan pengembangan dan produksi.

## Penggunaan in package.json

Anda harus memiliki perintah ini di `package.json`:

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate"
}
```

Anda dapat meluncurkan perintah Anda melalui `yarn <perintah>` atau `npm run <perintah>` (contoh: `yarn dev` / `npm run dev`).

## Lingkungan Pengembangan

Untuk meluncurkan Nuxt dalam mode pengembangan dengan [_hot module replacement_](https://webpack.js.org/concepts/hot-module-replacement/) pada `http://localhost:3000`:

<code-group>

  <code-block label="Yarn" active>

```bash
yarn dev
```

  </code-block>

  <code-block label="npm">

```bash
npm run dev
```

  </code-block>
</code-group>

## Daftar Perintah

Anda dapat menjalankan perintah yang berbeda tergantung pada [target](/docs/2.x/features/deployment-targets):

### target: `server` (nilai bawaan)

- **nuxt dev** - Meluncurkan peladen pengembangan.
- **nuxt build** - Bangun dan optimalkan aplikasi Anda dengan webpack untuk produksi.
- **nuxt start** - Mulai peladen produksi (setelah menjalankan `nuxt build`). Gunakan untuk hosting Node.js seperti Heroku, Digital Ocean, dll.

### target: `static`

- **nuxt dev** - Meluncurkan peladen pengembangan.
- **nuxt generate** - Bangun aplikasi (jika perlu), buat setiap rute sebagai berkas HTML dan ekspor secara statis ke direktori `dist/` (digunakan untuk hosting statis).
- **nuxt start** - Melayani direktori `dist/` seperti yang akan dilakukan oleh hosting statis Anda (Netlify, Vercel, Surge, dll), bagus untuk pengujian sebelum penggelaran (_deploying_).

## Inspeksi Konfigurasi Webpack

Anda dapat memeriksa konfigurasi webpack yang digunakan oleh nuxt untuk membuat proyek yang mirip dengan [vue inspect](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config).

- **nuxt webpack [query...]**

**Argumen:**

- `--name`: Nama paket untuk diperiksa. (klien, server, modern).
- `--dev`: Periksa konfigurasi webpack untuk mode pengembang.
- `--depth`: Kedalaman inspeksi. Bawaannya adalah 2 untuk mencegah keluaran verbose.
- `--no-colors`: Nonaktifkan warna ANSI (dinonaktifkan secara bawaan saat TTY tidak tersedia atau saat menyalurkan ke berkas).

**Contoh:**

- `nuxt webpack`
- `nuxt webpack devtool`
- `nuxt webpack resolve alias`
- `nuxt webpack module rules`
- `nuxt webpack module rules test=.jsx`
- `nuxt webpack module rules test=.pug oneOf use.0=raw`
- `nuxt webpack plugins constructor.name=WebpackBar options reporter`
- `nuxt webpack module rules loader=vue-`
- `nuxt webpack module rules "loader=.*-loader"`

## Penggelaran Produksi

Nuxt.js memungkinkan Anda memilih antara penggelaran Server atau Statis.

### Penggelaran Server

Untuk menerapkan aplikasi SSR, kita harus menggunakan `target: 'server'`, di mana server adalah nilai bawaan.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn build
```

  </code-block>
  <code-block label="npm">

```bash
npm run build
```

  </code-block>
</code-group>

Nuxt.js akan membuat direktori `.nuxt` dengan semua yang ada di dalamnya siap untuk digunakan di peladen hosting Anda.

<base-alert type="info">

sebaiknya letakkan `.nuxt` di `.npmignore` atau `.gitignore`.

</base-alert>

Setelah aplikasi Anda dibuat, Anda dapat menggunakan perintah `start` untuk melihat versi produksi aplikasi Anda.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn start
```

  </code-block>
  <code-block label="npm">

```bash
npm run start
```

  </code-block>
</code-group>

### Penggelaran Statis (Pra-render)

Nuxt.js memberi Anda kemampuan untuk menghosting aplikasi web Anda di hosting statis apa pun.

Untuk menggelar situs yang dibuat statis, pastikan Anda memiliki `target: 'static'` di `nuxt.config.js` (untuk Nuxt >= 2.13):

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

<code-group>
  <code-block label="Yarn" active>

```bash
yarn generate
```

  </code-block>
  <code-block label="npm">

```bash
npm run generate
```

  </code-block>
</code-group>

Nuxt.js akan membuat direktori `dist/` dengan semua yang ada di dalamnya siap untuk digunakan pada layanan hosting statis.

Pada Nuxt v2.13, terpasang perayap yang akan merayapi tag tautan Anda dan menghasilkan rute Anda saat menggunakan perintah `nuxt generate` berdasarkan tautan tersebut.

<base-alert>

**Peringatan:** rute dinamis diabaikan oleh perintah `generate` saat menggunakan Nuxt <= v2.12: [API Configuration generate](/docs/2.x/configuration-glossary/configuration-generate)

</base-alert>

<base-alert type="info">

Saat membuat aplikasi web Anda dengan `nuxt generate`, [konteks](/docs/2.x/internals-glossary/context) yang diberikan ke [asyncData](/docs/2.x/features/data-fetching#async-data) dan [fetch](/docs/2.x/features/data-fetching#the-fetch-hook) tidak akan memiliki `req` and `res`.

</base-alert>

#### **Fail on Error**

Untuk mengembalikan kode status bukan nol saat kesalahan halaman ditemukan dan membiarkan CI/CD gagal dalam penggelaran atau pembuatan, Anda dapat menggunakan argumen `--fail-on-error`.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn generate --fail-on-error
```

  </code-block>
  <code-block label="npm">

```bash
npm run generate --fail-on-error
```

  </code-block>

</code-group>

## Apa selanjutnya?

<base-alert type="next">

Baca [Panduan Penggelaran](/docs/2.x/deployment/deploying-to-21yunbox) kami untuk menemukan contoh penerapan ke host populer.

</base-alert>

</div>
