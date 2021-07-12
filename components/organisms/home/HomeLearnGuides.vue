<template>
  <section class="relative light:bg-gray-50 dark:bg-secondary-darkest">
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/dark/landscape-discover-modules-t.svg`"
      class="absolute left-0 object-fill w-full h-40 -mt-24 light:hidden"
      alt="A landscape image"
    />
    <NuxtContainer class="pt-20 flex flex-col items-center">
      <div class="flex flex-col w-full items-center col-span-12">
        <div class="mb-2">
          <span class="text-tertiary font-bold text-lg">{{ category }} </span>
        </div>
        <h2 class="font-normal font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2">
          <Markdown use="title" unwrap="p" />
        </h2>
        <p class="font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-12">
          <Markdown use="description" unwrap="p" />
        </p>

        <div class="w-full my-8">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-20 pb-8">
            <slot />
          </div>
        </div>
      </div>
    </NuxtContainer>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    }
  }
})
</script>
