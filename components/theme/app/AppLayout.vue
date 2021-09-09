<template>
  <div class="relative w-full">
    <AppHeader />

    <div class="lg:flex" :class="{ 'd-container': layout.aside }">
      <!-- TODO: to improve -->
      <div :class="{ 'lg:hidden': !layout.aside }">
        <slot name="aside">
          <AppAside :class="layout.asideClass" />
        </slot>
      </div>

      <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <slot />
      </div>
    </div>

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
