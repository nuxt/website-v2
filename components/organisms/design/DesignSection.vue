<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col light:text-secondary-dark dark:text-white py-8">
      <h2 class="font-semibold text-xl">
        <Markdown use="title" unwrap="p" />
      </h2>
      <hr class="mt-2 mb-4" />
      <Markdown use="description" class="text-lg" />
      <Component :is="sectionComponent" :buttonText="buttonText" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    sectionComponent: {
      type: String,
      default: null
    },
    buttonText: {
      type: String,
      default: 'Download Color System'
    }
  }
})
</script>
