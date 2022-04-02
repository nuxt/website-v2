<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
    <AppButton
      to="https://github.com/sponsors/nuxt"
      extra-class="gap-2 app-button-secondary-color"
      icon="IconGitHub"
      size="large"
    >
      {{ github }}
    </AppButton>
    <AppButton
      to="https://opencollective.com/nuxtjs"
      extra-class="gap-2 app-button-secondary-color"
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
