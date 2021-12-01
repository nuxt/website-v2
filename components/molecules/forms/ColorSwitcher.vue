<template>
  <AppButton
    slot="placeholder"
    button-class="w-12 h-12 rounded"
    :class="
      $docus.navigation.currentPath.value === '/' ? 'focus:outline-none text-gray-300 hover:text-sky-surface' : 'd-icon'
    "
    aria-label="Color Mode"
    @click.native="switchColor"
  >
    <ClientOnly>
      <IconSun v-if="$colorMode.preference === 'light'" :class="iconClass" />
      <IconMoon v-else-if="$colorMode.preference === 'dark'" :class="iconClass" />
      <IconSystem v-else :class="iconClass" />
      <template #placeholder>...</template>
    </ClientOnly>
  </AppButton>
</template>

<script>
import { defineComponent, useNuxtApp } from '#app'

export default defineComponent({
  props: {
    iconClass: {
      type: String,
      default: 'w-6 h-6 m-auto'
    }
  },
  setup() {
    const { $colorMode } = useNuxtApp().vue2App
    const values = ['system', 'light', 'dark']

    function switchColor() {
      const index = values.indexOf($colorMode.preference)

      if (index === -1) {
        $colorMode.preference = values[0]
      } else {
        const nextIndex = (index + 1) % values.length
        $colorMode.preference = values[nextIndex]
      }
    }

    return {
      switchColor
    }
  }
})
</script>
