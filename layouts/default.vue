<template>
  <div>
    <nui-header />
    <main class="lg:block relative pt-16 lg:pt-24">
      <nuxt />
    </main>
    <nui-footer />
    <mobile-main-navigation />
  </div>
</template>

<script>
import nuiHeader from '@/components/partials/Header'
import nuiFooter from '@/components/partials/Footer'
import MobileMainNavigation from '@/components/partials/MobileMainNavigation'

export default {
  components: {
    nuiHeader,
    nuiFooter,
    MobileMainNavigation
  },
  head () {
    let canonical = `https://nuxtjs.org${this.$route.path}`
    if (this.$store.state.locale !== 'en') {
      canonical = `https://${this.$store.state.locale}.nuxtjs.org${this.$route.path}`
    }
    const link = [
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
    return {
      htmlAttrs: { lang: this.$store.state.locale },
      link,
      meta: [
        // Open Graph
        { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtJS' },
        { hid: 'og:title', property: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: canonical },
        { hid: 'og:image', property: 'og:image', content: 'https://nuxtjs.org/nuxt-card.png' },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://nuxtjs.org/nuxt-card.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'The NuxtJS Framework' }
      ]
    }
  }
}
</script>
