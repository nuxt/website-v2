---
title: Upgrade
description: Memutakhirkan Nuxt.js cepat, tetapi lebih melibatkan daripada memperbarui package.json Anda
position: 5
category: get-started
---

> Memutakhirkan Nuxt.js cepat, tetapi lebih melibatkan daripada memperbarui package.json Anda

Jika Anda mengupgrade ke Nuxt v2.14 dan ingin menggunakan hosting statis maka Anda perlu menambahkan [target:static](/guides/features/deployment-targets#static-hosting) ke file nuxt.config.js agar perintah generate berfungsi dengan benar.

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

## Memulai

1. Periksa [catatan rilis](/guide/release-notes) untuk versi yang ingin Anda tingkatkan untuk melihat apakah ada instruksi tambahan untuk rilis tersebut.
2. Perbarui versi yang ditentukan untuk paket `nuxt` di file `package.json`.

Setelah langkah ini, instruksi bervariasi tergantung pada apakah Anda menggunakan Yarn atau NPM.. _[Yarn](https://yarnpkg.com/en/docs/usage) adalah manajer paket yang lebih disukai untuk bekerja dengan Nuxt karena ini adalah alat pengembangan yang menjadi dasar pengujian._

## Yarn

1. hapus file `yarn.lock`
2. hapus direktori `node_modules`
3. Jalankan perintah `yarn`
4. Setelah penginstalan selesai dan Anda telah menjalankan pengujian, pertimbangkan untuk mengupgrade dependensi lain juga. Jalankan perintah `yarn outdated` dapat digunakan.

## NPM

1. hapus file `package-lock.json`
2. hapus direktori `node_modules`
3. Jalankan perintah `npm install`
4. Setelah penginstalan selesai dan Anda telah menjalankan pengujian, pertimbangkan untuk mengupgrade dependensi lain juga. Jalankan perintah `npm outdated` dapat digunakan.
