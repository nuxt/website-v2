<template>
  <header class="sticky w-full top-0 z-50 ">
    <div class="d-header -mt-0.5 lg:-mt-0">
      <div class="flex flex-none d-container-content pt-1 md:pt-2.5">
        <NavigationButton v-if="aside" />

        <Link
          :class="[aside ? 'justify-center' : 'justify-start']"
          class="flex items-center flex-1 lg:flex-none lg:mr-28"
          :to="localePath('/')"
        >
          <Logo :settings="settings" class="h-5 sm:h-6 md:h-7" />
        </Link>

        <div class="items-center hidden lg:flex lg:flex-1">
          <HeaderNavigation />
        </div>

        <div class="flex items-center justify-end lg:flex-none lg:w-60">
          <AlgoliaSearchBox
            v-if="settings.algolia"
            :options="settings.algolia"
            :settings="settings"
            class="w-14 lg:px-2 ml-auto"
          />
        </div>
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
