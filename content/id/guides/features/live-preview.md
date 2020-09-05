---
title: Mode Pratinjau
description: Gunakan mode pratinjau untuk melakukan pratinjau secara _live_ website dengan target statis
category: features
position: 12
---

Dengan Nuxt.js dan target statis penuh, anda bisa menggunakan fitur bawaan yaitu pratinjau secara _live_, ini akan memanggil API atau CMS anda sehingga anda bisa melihat perubahan apapun yang terjadi secara _live_ sebelum melakukan penggelaran (deploying).

<base-alert> Hanya bisa digunakan jika properti [`target` bernilai `static`](/guides/features/deployment-targets#static-hosting) </base-alert>

Mode pratinjau ini akan secara otomatis menyegarkan data pada halaman anda karena fitur ini menggunakan `$nuxt.refresh` di balik layar. Fungsi ini memanggil fungsi `nuxtServerInit`, `asyncData`, dan `fetch` di sisi klien.

Untuk mengaktifkan fitur pratinjau secara _live_, anda perlu menambahkan _plugin_ berikut:

```js{}[plugins/preview.client.js]
export default function ({ query, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }
}
```

<base-alert>
Fungsi enablePreview hanya tersedia di dalam objek context milik plugin. Dikarenakan penanganan pratinjau hanya bisa dilakukan di sisi klien, maka plugin-nya pun harus dijalankan di sisi klien: preview.client.js
</base-alert>

```js{}[nuxt.config.js]
export default {
  plugins: ['plugins/preview.client.js']
}
```

Setelah anda menambahkan _plugin_ tersebut, anda bisa menjalankan perintah _generate_ website lalu menyajikannya (_serve_).

<code-group>
<code-block label="npx" active>

```bash
npx nuxt generate
npx nuxt start
```

</code-block>
<code-block label="Yarn" >

```bash
yarn generate
yarn start
```

  </code-block>
</code-group>

Lalu anda bisa melihat halaman pratinjau anda dengan menambahkan parameter kueri di akhir halaman yang ingin anda lihat sekali:

```js
?preview=true
```

<base-alert>
Fungsi enablePreview sebaiknya dites secara lokal dengan menggunakan perintah yarn start dan bukan yarn dev
</base-alert>

### Melakukan pratinjau terhadap halaman yang belum ter-generate

Untuk halaman - halaman yang belum ter-_generate_, _fallback SPA_ akan tetap memanggil _API_ sebelum menampilkan halaman 404. Hal ini dikarenakan halaman - halaman tersebut pada dasarnya ada pada _API_ hanya saja belum ter-_generate_.

Jika anda perlu memasang pengait `validate`, anda mungkin perlu memodifikasinya agar pengait tidak melakukan _redirect_ ke halaman 404 dalam mode pratinjau.

```js
validate({ params, query }) {
  if (query.preview) {
    return true
}
```

### Mengoper data ke fungsi enablePreview

Anda bisa mengoper data ke fungsi `enablePreview`. Data tersebut kemudian akan tersedia dalam _context helper_ `$preview` dan dalam `this.$preview`.

### Apa selanjutnya?

<base-alert type="next">

Baca lebih lanjut [buku struktur direktori](/guides/directory-structure/nuxt)

</base-alert>
