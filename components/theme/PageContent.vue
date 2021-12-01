<template>
  <div>
    <slot name="mobile-toc" />
    <div class="px-4 sm:px-6 mt-4 xl:mt-0">
      <TranslatedContentBanner v-if="translated" :page="page" class="mb-8" />
      <DocusContent :document="page" class="docus-content" />
    </div>
  </div>
</template>

<script>
import { defineComponent, useNuxtApp, computed } from '#app'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { i18n } = useNuxtApp().vue2App

    const translated = computed(() => {
      return i18n.locale !== i18n.defaultLocale
    })

    return {
      translated
    }
  }
})
</script>
