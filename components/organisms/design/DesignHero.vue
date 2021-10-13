<template>
  <div class="relative pt-24 pb-32 bg-gray-100 dark:bg-secondary-darkest">
    <div class="flex d-container-content">
      <div class="w-full lg:w-1/2 xl:w-2/3">
        <h1 class="text-display-3 font-serif mb-4">{{ title }}</h1>
        <p class="text-body-xl max-w-3xl">{{ description }}</p>
        <div class="mt-8">
          <AppButton href="https://www.figma.com/@nuxtjs">{{ downloadText }} </AppButton>
        </div>
      </div>
      <img
        loading="lazy"
        :src="`/design-kit/hero-img.svg`"
        class="
          hidden
          lg:block
          absolute
          bottom-0
          right-4
          2xl:right-1/12
          h-4/5
          2xl:h-full
          object-cover
          pointer-events-none
        "
        alt="A landscape image"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    downloadText: {
      type: String,
      default: 'Download Design Kit'
    }
  }
})
</script>
