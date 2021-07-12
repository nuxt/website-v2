<template>
  <div class="flex flex-col items-center transition duration-200 p-6" :class="{ 'group hover:bg-[#fefefe] dark:hover:bg-secondary-darkest hover:shadow-inner': hover }">
    <InjectComponent :component="image" class="mb-4 transition duration-200 text-primary group-hover:text-primary-400" :class="imageClass">
      <img :src="image" :alt="`A ${title} image`" />
    </InjectComponent>
    <h3 class="mb-1 text-center text-body-lg lg:text-body-xl font-bold">{{ title }}</h3>
    <p class="text-center text-sm lg:text-base d-secondary-text mb-4">{{ description }}</p>
    <MarketingLink v-if="to" color="primary" :name="linkName" icon="IconChevronRight" :to="localePath(to)" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    hover: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    linkName: {
      type: String,
      default: 'Learn More'
    }
  }
})
</script>
