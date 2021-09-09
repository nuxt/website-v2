<template>
  <AppPage class="min-h-screen-sm">
    <div class="flex flex-col items-center justify-center px-4 mt-48 md:px-0">
      <h1 class="font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4">{{ error.message }}</h1>
      <p class="mt-4 mb-4 text-center">{{ $t('common.page_not_found') }}</p>
      <SectionButton to="/" size="md" class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400">
        {{ $t('common.go_home') }}
      </SectionButton>
    </div>
  </AppPage>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.error.message
    }
  }
})
</script>
