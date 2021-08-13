<template>
  <li class="w-full p-4 rounded-md shadow-lg dark:bg-sky-darker">
    <div class="flex items-center justify-between h-24">
      <div class="flex items-center space-x-4">
        <img :src="`/img/support/${imgName}.svg`" class="h-20" />
        <div class="flex flex-col">
          <h2 class="text-2xl font-medium">{{ title }}</h2>
          <span>{{ description }}</span>
        </div>
      </div>
      <div class="flex flex-col justify-end pr-4">
        <SectionButton
          :to="button.to"
          @click.native="form ? show() : showForm = false"
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
    imgName: {
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

    function show() {
      showForm.value = !showForm.value
      console.log(showForm.value)
    }

    return {
      showForm,
      show
    }
  },
})
</script>
