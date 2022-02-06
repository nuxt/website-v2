<template>
  <div class="relative" :class="{ 'sm:pb-20 lg:pb-28 xl:pb-40 2xl:pb-60': isHome }">
    <img
      v-if="isHome"
      loading="lazy"
      :src="`/img/home/discover/dx/discover-mountain.svg`"
      class="absolute left-0 bottom-0 object-cover w-full"
      alt="A landscape image"
    />

    <section class="py-40" :class="isHome ? 'bg-white text-secondary-black' : 'text-white light:text-secondary-black'">
      <NuxtContainer class="flex flex-col items-center">
        <div class="flex flex-col w-full items-center col-span-12">
          <div class="mb-2">
            <span class="text-cloud font-bold text-lg">{{ category }} </span>
          </div>
          <h2 class="font-normal text-center font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2">
            <Markdown use="title" unwrap="p" />
          </h2>
          <p class="font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-12">
            <Markdown use="description" unwrap="p" />
          </p>

          <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <slot />
          </div>
        </div>
      </NuxtContainer>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    }
  },
  setup() {
    const { isHome } = useNav()

    return {
      isHome
    }
  }
})
</script>
