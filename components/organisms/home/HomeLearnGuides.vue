<template>
  <section class="relative bg-secondary-black pt-18 sm:pt-20 md:pt-24 xl:pt-40">
    <NuxtContainer class="flex flex-col items-center text-white">
      <div class="flex flex-col w-full items-center col-span-12">
        <div class="mb-2">
          <span class="text-tertiary font-bold text-lg">{{ category }} </span>
        </div>
        <h2 class="font-normal font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2">
          <Markdown use="title" unwrap="p" />
        </h2>
        <p class="font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-4 md:mb-12 text-white">
          <Markdown use="description" unwrap="p" />
        </p>

        <div class="w-full md:my-8">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-20 pb-8">
            <slot />
          </div>
        </div>
      </div>
    </NuxtContainer>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    }
  }
})
</script>
