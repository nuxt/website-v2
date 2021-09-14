<template>
  <div class="relative w-full">
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
  </div>
</template>

<script>
import { computed, defineComponent, useContext, useFetch, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus, i18n } = useContext()

    const layout = computed(() => $docus.layout.value)

    const headerLinks = ref([])
    const footerLinks = ref([])

    async function loadNavigation() {
      headerLinks.value = (
        await $docus
          .search('/collections/navigations', { deep: true })
          .where({ slug: { $in: 'header' }, language: i18n.locale })
          .fetch()
      )[0].links
      footerLinks.value = (
        await $docus
          .search('/collections/navigations/', { deep: true })
          .where({ slug: { $in: 'footer' }, language: i18n.locale })
          .fetch()
      )[0].links
    }

    useFetch(loadNavigation)

    watch(() => i18n.locale, loadNavigation)

    return {
      headerLinks,
      footerLinks,
      layout
    }
  }
})
</script>
