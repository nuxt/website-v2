---
title: 'Metode fetch'
description: Metode `fetch` digunakan untuk mengisi penyimpanan sebelum merender halaman, ini seperti metode `asyncData` kecuali ia tidak menyetel data komponen.
menu: Metode Fetch
category: components-glossary
position: 0
---

## Nuxt >= 2.12

Nuxt.js `v2.12` memperkenalkan hook baru yang disebut `fetch` **di salah satu komponen Vue Anda**.

<base-alert>

`fetch(context)` sudah tidak digunakan lagi, sebagai gantinya Anda dapat menggunakan [anonymous middleware](/docs/2.x/components-glossary/pages-middleware#anonymous-middleware) di halaman Anda: `middleware(context)`

</base-alert>

### Kapan menggunakan fetch?

Every time you need to get **asynchronous** data. `fetch` is called on server-side when rendering the route, and on client-side when navigating.

It exposes `$fetchState` at the component level:

Setiap kali Anda perlu mendapatkan data **asynchronous**. Sedangkan `fetch` dipanggil di sisi server saat merender route dan di client-side saat menavigasi.

Ini memperlihatkan `$fetchState` di tingkat komponen:

- `$fetchState.pending`: `Boolean`, memungkinkan Anda untuk menampilkan placeholder saat `fetch` dipanggil di _client-side_.
- `$fetchState.error`: `null` atau `Error`, memungkinkan Anda untuk menampilkan pesan kesalahan.
- `$fetchState.timestamp`: `Integer`, adalah stempel waktu pengambilan terakhir, berguna untuk penyimpanan dalam cache `keep-alive`

Jika Anda ingin memanggil hook `fetch` dari template Anda, gunakan:

```html
<button @click="$fetch">Refresh</button>
```

atau metode komponen:

```javascript
// dari metode komponen di bagian skrip
export default {
  methods: {
    refresh() {
      this.$fetch()
    }
  }
}
```

Anda dapat mengakses Nuxt [context](/docs/2.x/internals-glossary/context) di dalam fetch hook menggunakan `this.$nuxt.context`.

### Pilihan

- `fetchOnServer`: `Boolean` atau `Function` (default: `true`), memanggil `fetch()` saat server merender halaman.
- `fetchKey`: `String` or `Function` (defaults to the component scope ID or component name), a key (or a function that produces a unique key) that identifies the result of this component's fetch (available on Nuxt 2.15+) [More information available in original PR](https://github.com/nuxt/nuxt.js/pull/8466).
- `fetchDelay`: `Integer` (default: `200`), atur waktu eksekusi minimum dalam milidetik (untuk menghindari flash cepat).

<div class="Alert Alert--green">

Jika `fetchOnServer` false (`false` atau mengembalikan `false`), `fetch` hanya akan dipanggil di sisi klien dan `$fetchState.pending` akan mengembalikan `true` saat server merender komponen.

</div>

```html
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: 'site-sidebar',
    // alternatively, for more control, a function can be passed with access to the component instance
    // It will be called in `created` and must not depend on fetched data
    fetchKey(getCounter) {
      // getCounter is a method that can be called to get the next number in a sequence
      // as part of generating a unique fetchKey.
      return this.someOtherData + getCounter('sidebar')
    }
  }
</script>
```

<base-alert type="next">

For more info on the Fetch Hook checkout the [data fetching](/docs/2.x/features/data-fetching) chapter of our Features book

</base-alert>
