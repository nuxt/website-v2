<template>
  <AppLink
    :href="showcase.url"
    class="
      flex flex-col
      justify-between
      group
      hover:bg-gray-50 hover:dark:bg-sky-darkest
      dark:bg-sky-darker
      rounded-md
      shadow-md
      hover:shadow-lg
      overflow-hidden
      transition-all
      duration-200
      ease-in-out
    "
  >
    <div class="relative aspect-w-4 aspect-h-3">
      <NuxtImg
        :src="`https://res.cloudinary.com/nuxt/image/upload/f_auto,q_auto/${showcase.screenshotUrl}`"
        width="800"
        height="600"
        :alt="showcase.hostname"
        loading="lazy"
        class="object-cover"
      />
      <div
        class="
          absolute
          inset-0
          bg-gray-700
          dark:bg-black
          opacity-0
          group-hover:opacity-10 group-hover:dark:opacity-20
          transition-opacity
          duration-200
          ease-in-out
        "
      />
    </div>
    <h2 class="font-bold py-2 px-4 truncate">{{ showcase.hostname }}</h2>
  </AppLink>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    showcase: {
      type: Object,
      required: true
    }
  }
})
</script>
