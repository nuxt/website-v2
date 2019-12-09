<template>
  <div>
    <nui-header v-model="action" />
    <main class="lg:block relative pt-16 lg:pt-24" :class="{'hidden': action}">
      <nuxt />
    </main>
    <nui-footer class="pb-16 lg:pb-0 lg:block" :class="{'hidden': action}" />
  </div>
</template>

<script>
import nuiHeader from '@/components/partials/Header'
import nuiFooter from '@/components/partials/Footer'

export default {
  components: {
    nuiHeader,
    nuiFooter
  },
  data () {
    return {
      action: ''
    }
  },
  watch: {
    $route () {
      this.action = ''
    }
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
      link
    }
  }
}
</script>
