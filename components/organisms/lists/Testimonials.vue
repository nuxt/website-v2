<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4 lg:gap-8 pt-16 pb-8 px-6 sm:px-20 md:px-6">
    <li
      v-for="testimonial in testimonials"
      :key="testimonial.author"
      class="
        relative
        flex flex-col
        items-center
        justify-between
        space-y-4
        border-2 border-gray-200
        dark:border-secondary-dark
        md:transition-all md:ease-out
        rounded-lg
        p-4
      "
    >
      <NuxtLabel tag="p" class="text-left" v-html="testimonial.testimonial"></NuxtLabel>
      <div class="flex w-full justify-between items-center">
        <a :href="testimonial.authorUrl" target="_blank" rel="noopener">
          <img
            loading="lazy"
            :src="`/img/home/testimonials/${testimonial.authorIcon}.png`"
            :alt="testimonial.author"
            width="48"
            height="48"
            class="h-12 w-12"
          />
        </a>
        <a :href="testimonial.authorUrl" target="_blank" rel="noopener" class="flex flex-1 pl-4 text-left flex-col">
          <NuxtLabel tag="span" class="font-bold text-base">{{ testimonial.author }}</NuxtLabel>
          <NuxtLabel tag="span" class="text-sm dark:text-cloud-lighter">{{ testimonial.job }}</NuxtLabel>
        </a>
        <a :href="testimonial.jobUrl" target="_blank" rel="noopener sponsored" class="hidden xl:block">
          <img
            loading="lazy"
            :src="`/img/home/testimonials/${testimonial.jobIcon}.svg`"
            :alt="testimonial.jobIcon"
            width="28"
            height="28"
            :class="{ 'light-img': testimonial.jobIconDark }"
          />
          <img
            v-if="testimonial.jobIconDark"
            loading="lazy"
            :src="`/img/home/testimonials/${testimonial.jobIconDark}.svg`"
            :alt="testimonial.jobIconDark"
            width="28"
            height="28"
            class="dark-img"
          />
        </a>
      </div>
    </li>
  </ul>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  }
})
</script>
