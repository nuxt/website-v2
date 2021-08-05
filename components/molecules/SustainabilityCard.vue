<template>
  <div class="p-4 w-full dark:bg-sky-darker rounded-md shadow-lg flex space-x-4 items-center dark:text-white">
    <!-- img :src="`/img/sponsors/${$colorMode.value}/${sponsor.img}`" :alt="sponsor.title" :class="sponsor.size" / -->
    <img :src="`/img/sponsors/sponsors-square/${sponsor.img}`" :alt="sponsor.title" :class="sponsor.size" class="w-1/4 object-contain" />
    <div class="flex w-3/4" :class="{ 'justify-between items-center': sponsor.link }">
      <div class="flex flex-col items-start">
        <span class="font-medium">
          {{ sponsor.title }}
        </span>
        <!--TODO: sponsor description
        < span class="text-sm">
        </span -->
      </div>
      <IconChevronRight v-if="sponsor.link" class="w-4 h-4"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    sponsor: {
      type: Object,
      required: true
    }
  },
  setup() {

  },
})
</script>
