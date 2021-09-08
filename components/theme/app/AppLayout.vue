<template>
  <div class="relative w-full">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()

    const layout = computed(() => $docus.layout.value)

    return {
      layout
    }
  }
})
</script>
