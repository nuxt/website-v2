<template>
  <div class="flex items-center pt-4 space-x-3 font-medium">
    <div class="px-2.5 rounded-full bg-secondary-black"><span>{{ number }}</span></div>
    <span>{{ text }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    number: {
      type: String,
      default: '1'
    },
    text: {
      type: String,
      default: 'Please choose your status'
    }
  }
})
</script>
