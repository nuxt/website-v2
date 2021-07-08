<template>
  <Link
    to="/3"
    class="
      group
      block
      flex
      items-center
      transition-height
      delay-200
      bg-gradient-to-t
      light:from-cloud-surface light:to-cloud-lightest
      dark:from-sky-darkest dark:to-sky-darker
      hover:from-cloud-lightest hover:dark:from-sky-darker
    "
    :class="[$route.path === localePath('/') ? 'h-8' : 'h-0']"
  >
    <p
      class="
        dark:text-gray-100
        group-hover:text-white
        sm:top-1.5
        w-full
        pl-4
        sm:text-center
        font-semibold
        text-sm
      "
    >
      Is Nuxt 3 ready?
    </p>
  </Link>
</template>

<script>
import { defineComponent, useRoute, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const showBanner = computed(() => {
      return route.value.path === localePath('/')
    })
  },
})
</script>
