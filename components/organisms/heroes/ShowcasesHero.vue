<template>
  <div class="relative pt-24 pb-32 bg-gray-100 dark:bg-secondary-darkest">
    <div class="relative d-container-content">
      <h1 class="text-display-3 pb-4 font-serif overflow-ellipsis overflow-hidden">{{ title }}</h1>
      <p class="text-body-xl" :class="{ 'max-w-3xl': !descriptionFullWidth }">{{ description }}</p>
      <div class="mt-4 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
        <Link
          to="https://chrome.google.com/webstore/detail/vue-telescope/neaebjphlfplgdhedjdhcnpjkndddbpd"
          blank
          class="inline-flex items-center gap-2"
        >
          <img loading="lazy" :src="`/img/showcases/chrome.svg`" :alt="type" class="w-12 h-12" />
          <span class="font-medium">{{ $t('showcases.chrome_extension') }}</span>
        </Link>
        <Link
          to="https://addons.mozilla.org/en/firefox/addon/vue-telescope/"
          blank
          class="inline-flex items-center gap-2"
        >
          <img loading="lazy" :src="`/img/showcases/firefox.svg`" :alt="type" class="w-12 h-12" />
          <span class="font-medium">{{ $t('showcases.firefox_extension') }}</span>
        </Link>
      </div>
    </div>

    <img
      loading="lazy"
      :src="`/img/page-hero/dark/mountains.svg`"
      class="absolute -bottom-1px left-0 w-full h-24 object-fill light:hidden pointer-events-none"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/page-hero/light/mountains.svg`"
      class="absolute -bottom-1px left-0 w-full h-24 object-fill dark:hidden pointer-events-none"
      alt="A landscape image"
    />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    descriptionFullWidth: {
      type: Boolean,
      default: false
    }
  }
})
</script>
