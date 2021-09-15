<template>
  <div class="flex space-x-4 justify-between items-center rounded-md shadow-lg p-8 dark:bg-sky-darker">
    <component :is="icon" class="hidden sm:block w-12 h-12 object-contain" />
    <span class="font-bold text-sm sm:text-lg truncate">{{ text }}</span>
    <SectionButton
      :href="url"
      :aria-label="text"
      size="lg"
      class="bg-primary text-gray-800 hover:bg-primary-400 focus:bg-primary-400 text-sm"
      >{{ $t('sustainability.tiers.donations') }}</SectionButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
})
</script>
