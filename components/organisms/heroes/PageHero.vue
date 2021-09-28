<template>
  <div class="relative pt-10 lg:pt-24 pb-16 lg:pb-32 bg-gray-100 dark:bg-secondary-darkest">
    <div class="relative d-container-content z-10">
      <h1
        class="
          text-display-5
          sm:text-display-4
          md:text-display-3
          pb-1
          sm:pb-2
          md:pb-6
          font-serif
          overflow-ellipsis overflow-hidden
        "
      >
        <Markdown use="title" unwrap="p" />
      </h1>
      <p class="text-body-md sm:text-body-lg md:text-body-xl" :class="{ 'max-w-3xl': !descriptionFullWidth }">
        <Markdown use="description" unwrap="p" />
      </p>
      <div v-if="$slots.bottom || $scopedSlots.bottom" class="mt-8">
        <Markdown use="bottom" />
      </div>
      <div v-if="$slots.bottomDesktop || $scopedSlots.bottomDesktop" class="hidden lg:block mt-8">
        <Markdown use="bottomDesktop" />
      </div>
    </div>

    <img
      loading="lazy"
      :src="`/img/page-hero/dark/mountains.svg`"
      class="absolute -bottom-1px left-0 w-full h-12 md:h-24 object-fill light:hidden pointer-events-none z-0"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/page-hero/light/mountains.svg`"
      class="absolute -bottom-1px left-0 w-full h-12 md:h-24 object-fill dark:hidden pointer-events-none z-0"
      alt="A landscape image"
    />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    descriptionFullWidth: {
      type: Boolean,
      default: false
    }
  }
})
</script>
