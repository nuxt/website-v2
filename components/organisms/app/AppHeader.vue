<template>
  <header class="d-header">
    <div class="flex h-full max-w-7xl mx-auto px-1 sm:px-3 lg:px-6">
      <NavigationButton aria-label="mobileMenu" v-if="aside" class="px-2.5" />

      <div
        :class="[aside ? 'justify-center lg:justify-start' : 'justify-start']"
        class="flex items-center flex-1"
      >
        <Link
          :to="localePath('/')"
          aria-label="homeLink"
        >
          <!-- "mr-4 lg:mr-0" to optically center logo text -->
          <Logo class="h-5 sm:h-6 md:h-7 mr-4 lg:mr-0" />
        </Link>
      </div>

      <div class="items-center hidden lg:flex">
        <HeaderNavigation />
      </div>

      <div class="flex items-center justify-end lg:flex-1">
        <HeaderActions :settings="settings" />
      </div>
    </div>
  </header>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    aside: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { $docus } = useContext()
    const settings = computed(() => $docus.settings.value)

    return { settings }
  }
})
</script>
