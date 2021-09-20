<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
    <Link
      to="https://github.com/sponsors/nuxt"
      blank
      class="inline-flex items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
    >
      <component :is="'IconGitHub'" class="h-5 w-5" />
      <span class="font-medium">{{ github }}</span>
    </Link>
    <Link
      to="https://opencollective.com/nuxtjs"
      blank
      class="inline-flex items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
    >
      <component :is="'IconOpenCollective'" class="h-5 w-5" />
      <span class="font-medium">{{ opencollective }}</span>
    </Link>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    github: {
      type: String,
      default: 'Sponsor on GitHub'
    },
    opencollective: {
      type: String,
      default: 'Sponsor on Open Collective'
    }
  }
})
</script>
