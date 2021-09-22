<template>
  <div class="relative w-full">
    <AppBanner />

    <AppHeader :links="headerLinks" />

    <div class="lg:flex" :class="{ 'd-container': layout.aside }">
      <!-- TODO: to improve -->
      <div :class="{ 'lg:hidden': !layout.aside }">
        <slot name="aside">
          <AppAside :links="headerLinks" :class="layout.asideClass" />
        </slot>
      </div>

      <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <slot />
      </div>
    </div>

    <AppFooter :links="footerLinks" />

    <CookieBanner class="w-full fixed bottom-0 left-0 mt-8 z-40" @cookie-banner="showCookieBanner = false" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      headerLinks: [],
      footerLinks: [],
      showCookieBanner: false
    }
  },
  async fetch() {
    const { $docus, $i18n } = this
    this.headerLinks = (
      await $docus
        .search('/collections/navigations', { deep: true })
        .where({ slug: { $in: 'header' }, language: $i18n.locale })
        .fetch()
    )[0].links
    this.footerLinks = (
      await $docus
        .search('/collections/navigations/', { deep: true })
        .where({ slug: { $in: 'footer' }, language: $i18n.locale })
        .fetch()
    )[0].links
  },
  computed: {
    layout() {
      return this.$docus.layout.value
    }
  },
  watch: {
    '$i18n.locale'() {
      this.$fetch()
    }
  },
  onMounted() {
    const cookieBanner = 'cookieconsent_status'
    const docCookies = `; ${document.cookie}`

    this.showCookieBanner = !docCookies.includes(cookieBanner)
  }
})
</script>
