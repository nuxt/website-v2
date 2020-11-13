<template>
  <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <navbar></navbar>
    <div :class="{'App--hidden': visible}">
=======
    <navbar/>
    <div class="App" :class="{'App--hidden': visible}">
      <!-- <event-info/> -->
>>>>>>> 018bcc7c (chore(ad): remove event-info and use a page)
      <nuxt/>
    </div>
=======
=======
    <!-- <MasteringNuxtBanner /> -->
>>>>>>> b69ba638 (fix: hide banner)
    <TheHeader />
    <main
      class="lg:block relative pt-16 lg:pt-24 bg-light-elevatedSurface dark:bg-dark-elevatedSurface transition-colors duration-300 ease-linear"
    >
      <Nuxt />
    </main>
    <TheFooter />
    <TheMobileBottomNav />
>>>>>>> 26a70b2b (chore: add guides section (#407))
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from '~/components/Header.vue'
=======
import nuiHeader from '@/components/partials/Header'
import nuiFooter from '@/components/partials/Footer'
>>>>>>> cdec9baa (clean useless components)

export default {
  watch: {
    $route: 'setStore'
  },
  computed: {
    visible() { return this.$store.state.visibleHeader }
  },
  methods: {
    setStore() {
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
    }
  },
  head() {
    let canonical = `https://nuxtjs.org${this.$route.path}`
    if (this.$store.state.locale !== 'en') {
      canonical = `https://${this.$store.state.locale}.nuxtjs.org${this.$route.path}`
    }
    let link = [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'zh', href: `https://zh.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ru', href: `https://ru.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ja', href: `https://ja.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ko', href: `https://ko.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'fr', href: `https://fr.nuxtjs.org${this.$route.path}` },
      { rel: 'alternate', hreflang: 'id', href: `https://id.nuxtjs.org${this.$route.path}` }
    ]
    link.forEach((l) => {
      if (l.href.slice(-1) !== '/') {
        l.href = l.href + '/'
      }
    })
=======
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    // let canonical = `https://nuxtjs.org${this.$route.path}`
    // if (this.$store.state.locale !== 'en') {
    //   canonical = `https://${this.$store.state.locale}.nuxtjs.org${this.$route.path}`
    // }
    // const link = [
    //   { rel: 'canonical', href: canonical },
    //   { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
    //   { rel: 'alternate', hreflang: 'zh', href: `https://zh.nuxtjs.org${this.$route.path}` },
    //   { rel: 'alternate', hreflang: 'ru', href: `https://ru.nuxtjs.org${this.$route.path}` },
    //   { rel: 'alternate', hreflang: 'ja', href: `https://ja.nuxtjs.org${this.$route.path}` },
    //   { rel: 'alternate', hreflang: 'ko', href: `https://ko.nuxtjs.org${this.$route.path}` },
    //   { rel: 'alternate', hreflang: 'fr', href: `https://fr.nuxtjs.org${this.$route.path}` },
    //   { rel: 'alternate', hreflang: 'id', href: `https://id.nuxtjs.org${this.$route.path}` }
    // ]
    // link.forEach((l) => {
    //   if (l.href.slice(-1) !== '/') {
    //     l.href = l.href + '/'
    //   }
    // })
>>>>>>> 26a70b2b (chore: add guides section (#407))
    return {
      // htmlAttrs: { lang: this.$store.state.locale },
      // link,
      meta: [
        // Open Graph
        { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtJS' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('homepage.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('homepage.meta.description')
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        // { hid: 'og:url', property: 'og:url', content: canonical },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://nuxtjs.org/nuxt-card.png'
        },
        // Twitter Card
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('homepage.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('homepage.meta.description')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://nuxtjs.org/nuxt-card.png'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'The NuxtJS Framework'
        }
      ],
      ...i18nSeo
    }
  },
  components: {
<<<<<<< HEAD
    Navbar
=======
    nuiHeader,
    nuiFooter
>>>>>>> cdec9baa (clean useless components)
  }
}
</script>

<style lang="scss" scoped>
.App {
  &--hidden {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}
</style>
