<template>
  <div class="relative pt-10 lg:pt-24 pb-16 lg:pb-32 bg-gray-100 dark:bg-secondary-darkest">
    <div class="relative d-container-content z-10">
      <DocusContent :document="page" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  }
})
</script>
