<template>
  <div class="p-4 dark:bg-sky-darker rounded-md shadow-lg flex space-x-4 items-center dark:text-white">
    <img
      :src="`/img/companies/square/dark/${sponsor.img_square}`"
      :alt="sponsor.title"
      loading="lazy"
      :class="sponsor.size"
      class="dark-img h-10 object-contain"
    />
    <img
      :src="`/img/companies/square/light/${sponsor.img_square}`"
      :alt="sponsor.title"
      loading="lazy"
      :class="sponsor.size"
      class="light-img h-10 object-contain"
    />
    <div class="flex w-3/4" :class="{ 'justify-between items-center': sponsor.link }">
      <div class="flex flex-col items-start">
        <span class="font-medium">
          {{ sponsor.title }}
        </span>
        <!--TODO: sponsor description
        < span class="text-sm">
        </span -->
      </div>
      <IconChevronRight v-if="sponsor.link" class="w-4 h-4" />
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
  setup() {}
})
</script>
