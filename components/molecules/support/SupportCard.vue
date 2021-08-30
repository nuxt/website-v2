<template>
  <li class="w-full p-4 rounded-md shadow-lg dark:bg-sky-darker">
    <div class="flex flex-col space-y-4 sm:flex-row sm:items-center justify-between xl:h-24">
      <div class="flex flex-col sm:w-2/3 xl:flex-row justify-start items-start xl:items-center space-x-4">
        <img :src="`/img/support/${image}.svg`" class="h-20" />
        <div class="flex flex-col">
          <h2 class="text-xl lg:text-2xl font-medium">{{ title }}</h2>
          <span class="text-sm md:text-base sm:w-full">{{ description }}</span>
        </div>
      </div>
      <div class="pr-4 ml-4 sm:ml-0 py-2 sm:py-0">
        <SectionButton
          :to="button.to"
          @click.native="form ? showForm = !showForm : showForm = false"
          :aria-label="button.text"
          size="md"
          class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400"
          >{{ button.text }}</SectionButton
        >
      </div>
    </div>
    <Markdown v-if="showForm" use="form" unwrap="p" />
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    image: {
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
    button: {
      type: Object,
      default: {
        text: '',
        to: ''
      }
    },
    form: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const showForm = ref(false)

    return {
      showForm
    }
  },
})
</script>
