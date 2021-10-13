<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
    <AppButton
      to="https://github.com/sponsors/nuxt"
      button-class="gap-2 bg-gray-500 bg-opacity-10 hover:bg-opacity-20"
      icon="IconGitHub"
      size="large"
    >
      {{ github }}
    </AppButton>
    <AppButton
      to="https://opencollective.com/nuxtjs"
      button-class="gap-2 bg-gray-500 bg-opacity-10 hover:bg-opacity-20"
      icon="IconOpenCollective"
      size="large"
    >
      {{ opencollective }}
    </AppButton>
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
