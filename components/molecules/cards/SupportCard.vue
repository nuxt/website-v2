<template>
  <li class="w-full p-4 rounded-md shadow-lg dark:bg-sky-darker">
    <div class="flex flex-col space-y-4 sm:flex-row sm:items-center justify-between xl:h-24">
      <div class="flex flex-col sm:w-2/3 xl:flex-row justify-start items-start xl:items-center space-x-4">
        <img loading="lazy" :src="`/img/support/${image}.svg`" class="h-20" />
        <div class="flex flex-col">
          <h2 class="text-xl lg:text-2xl font-medium">
            <Markdown use="title" unwrap="p" />
          </h2>
          <p class="text-sm md:text-base sm:w-full">
            <Markdown use="description" unwrap="p" />
          </p>
        </div>
      </div>
      <div class="pr-4 ml-4 sm:ml-0 py-2 sm:py-0">
        <Link
          :to="button.url"
          :aria-label="button.text"
          size="md"
          blank
          class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400 px-5 py-3 rounded-md font-medium"
          >{{ button.text }}</Link
        >
      </div>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    image: {
      type: String,
      default: ''
    },
    button: {
      type: Object,
      default: () => ({
        text: '',
        url: ''
      })
    }
  }
})
</script>
