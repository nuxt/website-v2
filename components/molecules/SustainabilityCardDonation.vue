<template>
  <div class="flex justify-between items-center rounded-md shadow-lg p-8 dark:bg-sky-darker">
    <component :is="icon" class="h-12 w-12 object-contain" />
    <span class="font-bold text-lg">{{ text }}</span>
    <SectionButton
      :to="url"
      :aria-label="text"
      size="lg"
      class="bg-primary text-gray-800 hover:bg-primary-400 focus:bg-primary-400"
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
  },
  setup() {

  },
})
</script>
