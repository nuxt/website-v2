<template>
  <div class="relative w-full">
    <AppBanner />
    <AppHeader :links="headerLinks" />
    <Notifications />
    <div class="lg:flex" :class="{ 'd-container': layout.aside }">
      <slot v-if="['xs', 'sm', 'md'].includes($mq) || layout.aside" name="aside">
        <AppAside :links="headerLinks" :class="layout.asideClass" />
      </slot>
      <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <slot />
      </div>
    </div>
    <AppFooter :links="footerLinks" :class="{ 'pb-16 md:pb-12': showCookieBanner }" />

    <CookieBanner
      v-if="showCookieBanner"
      class="fixed bottom-0 inset-x-0 z-40"
      @cookie-banner="showCookieBanner = false"
    />
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
  mounted() {
    const cookieBanner = 'cookieconsent_status'
    const docCookies = `; ${document.cookie}`

    this.showCookieBanner = !docCookies.includes(cookieBanner)
  }
})
</script>
