<template>
  <AppPage class="min-h-screen-sm relative z-0 h-full mb-4 sm:mb-8 lg:mb-20 bg-secondary-black text-white">
    <div class="relative flex flex-col items-center justify-center px-4 mt-48 md:px-0 z-10">
      <h1 class="font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4">{{ error.message }}</h1>
      <p class="mt-4 mb-4 text-center">{{ $t('common.page_not_found') }}</p>
      <NuxtLink
        to="/"
        size="md"
        class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400 font-medium rounded-md px-4 py-2.5"
      >
        {{ $t('common.go_home') }}
      </NuxtLink>
    </div>
    <NuxtImg
      class="hidden lg:block absolute w-full bottom-0 left-0 z-0 select-none"
      :src="`/img/error/bg-error_desktop.svg`"
    />
    <NuxtImg
      class="hidden sm:block lg:hidden absolute w-full bottom-0 left-0 z-0 select-none"
      :src="`/img/error/bg-error_tablet.svg`"
    />
    <NuxtImg
      class="block sm:hidden absolute w-full bottom-0 left-0 z-0 select-none"
      :src="`/img/error/bg-error_mobile.svg`"
    />
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
