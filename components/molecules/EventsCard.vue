<template>
  <div
    class="relative flex flex-col justify-between h-64 p-4 rounded-md shadow-md  group hover:bg-gray-50 hover:dark:bg-opacity-80 dark:bg-sky-darker lg:h-40"
  >
    <div class="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-3">
      <img loading="lazy" :src="avatarUrl" :alt="event.title" class="object-contain w-10 h-10 mt-2" />
      <div class="flex flex-col space-y-1">
        <span class="font-medium">{{ event.title }}</span>
        <div v-if="event.description" class="overflow-y-auto text-sm max-h-20">
          {{ event.description }}
        </div>
      </div>
    </div>
    <div class="z-0 justify-between w-full lg:flex lg:flex-row-reverse">
      <div class="flex items-center w-1/2 space-x-4 text-xs font-medium">
        <span class="flex items-center space-x-2 group">
          {{ event.date }}
        </span>
        <span class="flex items-center space-x-2 group">
          {{ event.lang }}
        </span>
        <NuxtButton
          :to="event.url"
          class="font-medium rounded-md bg-primary inline-flex items-center px-4 py-2.5 text-sm 2xl:text-md"
        >
          Watch
        </NuxtButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    avatarUrl() {
      const { avatar } = this.event

      if (avatar && avatar.startsWith('https://')) {
        return avatar
      }

      return '/icon.png'
    }
  }
})
</script>
