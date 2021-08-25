<template>
  <Link :to="showcase.url" target="blank" class="hover:bg-gray-50 hover:dark:bg-opacity-80 dark:bg-sky-darker rounded-md shadow-md overflow-hidden flex flex-col justify-between">
    <div class="aspect-w-4 aspect-h-3">
      <img :src="`https://res.cloudinary.com/nuxt/image/upload/f_auto,q_auto/${showcase.screenshotUrl}`" />
    </div>
    <h3 class="font-bold p-2 truncate">{{ showcase.hostname }}</h3>
  </Link>
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
