<template>
  <div class="flex items-center gap-1">
    <FooterLocaleSelector class="hidden xl:flex flex-shrink-0" />
    <LangSwitcher class="hidden lg:inline-flex xl:hidden relative justify-center w-12 h-12" />
    <FooterColorModeSelector class="hidden xl:flex flex-shrink-0" />
    <ColorSwitcher class="hidden lg:inline-flex xl:hidden items-center justify-center w-12 h-12" />
    <AlgoliaSearchBox
      v-if="settings && settings.algolia"
      :options="settings.algolia"
      :settings="settings"
    />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    settings: {
      type: Object,
      default: null
    }
  }
})
</script>
