<template>
  <div class="overflow-hidden mt-12 mb-6">
    <div class="relative d-container-content">
      <div class="mb-4">
        <Link v-if="backPath" :to="$contentLocalePath(`/${backPath}`)">
          <span
              class="
                text-sm
                sm:text-base
                leading-none
                text-gray-900
                dark:text-gray-100
                hover:text-gray-500 hover:dark:text-gray-400
                font-medium
              "
              >← Back</span>
        </Link>
      </div>
      <h1 class="text-display-4 font-serif mb-4">{{ title }}</h1>
      <p class="text-body-lg max-w-3xl">{{ description }}</p>
    </div>
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
    backPath: {
      type: String,
      default: ''
    }
  }
})
</script>
