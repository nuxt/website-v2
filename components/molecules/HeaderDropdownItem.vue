<template>
  <div
    class="py-1 px-2 rounded-md w-full"
    :class="isHome ? 'hover:bg-sky-black' : 'hover:dark:bg-sky-black hover:bg-cloud-lightest'"
  >
    <div class="flex space-x-2 items-center">
      <div class="rounded-md w-8 h-8 p-2" :class="colorClass">
        <img :src="`/img/header/${icon}`" :alt="title" />
      </div>
      <div>
        <h5 class="font-bold text-sm">{{ title }}</h5>
        <p class="text-xs">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    colorClass: {
      type: String,
      required: true
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
