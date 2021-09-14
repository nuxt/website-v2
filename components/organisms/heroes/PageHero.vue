<template>
  <div class="relative pt-24 pb-32 bg-gray-100 dark:bg-secondary-darkest">
    <div class="relative d-container-content">
      <h1 class="text-display-3 pb-6 font-serif overflow-ellipsis overflow-hidden">{{ title }}</h1>
      <p class="text-body-xl" :class="{ 'max-w-3xl': !descriptionFullWidth }">{{ description }}</p>
      <Link
        v-if="button && button === 'partners'"
        to="mailto:partners@nuxtlabs.com"
        blank
        class="inline-flex mt-6 items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
      >
        <component is="IconStar" class="h-5 w-5 -mt-1 text-currentColor" />
        <span class="font-medium">Become a Partner</span>
      </Link>
    </div>

    <img
      loading="lazy"
      :src="`/img/page-hero/dark/mountains.svg`"
      class="absolute -bottom-1px left-0 w-full h-24 object-fill light:hidden pointer-events-none"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/page-hero/light/mountains.svg`"
      class="absolute -bottom-1px left-0 w-full h-24 object-fill dark:hidden pointer-events-none"
      alt="A landscape image"
    />
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
    descriptionFullWidth: {
      type: Boolean,
      default: false
    },
    button: {
      type: String,
      default: ''
    }
  }
})
</script>
