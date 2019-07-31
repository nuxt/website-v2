<template>
  <!-- <nuxt-theme :theme="$store.state.theme"> -->
  <div class="font-sans font-medium bg-gray-100 text-nuxt-gray">
    <nui-header v-model="mobileNav"/>
    <main class="lg:block relative z-0" :class="{'hidden': mobileNav}">
      <!-- <event-info/> -->
      <nuxt/>
    </main>
    <nui-footer class="lg:block" :class="{'hidden': mobileNav}"/>
  </div>
  <!-- </nuxt-theme> -->
</template>

<script>
// import nuxtTheme from '@/themes/_switcher' // nouveau composant nuxt-theme ?
import nuiHeader from '@/components/partials/Header'
import nuiFooter from '@/components/partials/Footer'

export default {
  data () {
    return {
      mobileNav: false
    }
  },
  watch: {
    $route () {
      this.mobileNav = false
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
    return {
      htmlAttrs: { lang: this.$store.state.locale },
      link
    }
  },
  components: {
    // nuxtTheme,
    nuiHeader,
    nuiFooter
  }
}
</script>

