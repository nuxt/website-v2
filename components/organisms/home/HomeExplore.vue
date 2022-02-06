<template>
  <div class="relative pb-20 sm:pb-28 md:pb-36 lg:pb-48">
    <section class="relative z-10">
      <img
        loading="lazy"
        :src="`/img/home/explore/landscape-explore.svg`"
        class="left-0 bottom-0 object-cover w-full h-40 -mt-16"
        alt="A landscape image"
      />
      <NuxtContainer class="flex flex-col items-center py-20 text-secondary-black">
        <div class="flex flex-col items-center w-full col-span-12">
          <div class="mb-2">
            <span class="text-cloud font-bold text-lg">{{ category }} </span>
          </div>
          <h2 class="mb-2 font-serif font-normal text-center text-display-6 md:text-display-5 2xl:text-display-4">
            <Markdown use="title" unwrap="p" />
          </h2>
          <p class="mb-12 font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl">
            <Markdown use="description" unwrap="p" />
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-20 pb-8">
            <slot />
          </div>
        </div>
      </NuxtContainer>
    </section>
    <img
      loading="lazy"
      :src="`/img/home/campfire/campfire-illustration-big.svg`"
      class="hidden xl:block absolute bottom-0 left-0 w-full object-fit"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/home/campfire/campfire-illustration.svg`"
      class="absolute left-0 bottom-0 w-full object-fit xl:hidden"
      alt="A landscape image"
    />
  </div>
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
