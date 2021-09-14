<template>
  <div class="relative pt-24 pb-32 bg-gray-100 dark:bg-secondary-darkest">
    <div class="relative d-container-content">
      <h1 class="text-display-3 pb-8 font-serif overflow-ellipsis overflow-hidden">{{ title }}</h1>
      <p class="text-body-lg max-w-3xl">
        <Markdown use="description" unwrap="p" />
      </p>
      <div class="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
        <Link
          to="https://chrome.google.com/webstore/detail/vue-telescope/neaebjphlfplgdhedjdhcnpjkndddbpd"
          blank
          class="inline-flex items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
        >
          <img loading="lazy" :src="`/img/showcases/chrome.svg`" alt="chrome" class="w-5 h-5" />
          <span class="font-medium">{{ $t('showcases.chrome_extension') }}</span>
        </Link>
        <Link
          to="https://addons.mozilla.org/en/firefox/addon/vue-telescope/"
          blank
          class="inline-flex items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
        >
          <img loading="lazy" :src="`/img/showcases/firefox.svg`" alt="firefox" class="w-5 h-5" />
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
