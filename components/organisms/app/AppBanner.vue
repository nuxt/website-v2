<template>
  <Link
    to="/v3"
    class="
      group
      block
      flex
      items-center
      transition-height
      delay-200
      bg-primary
      hover:bg-primary-400
    "
    :class="[$route.path === localePath('/') ? 'h-10' : 'h-0']"
  >
    <p
      class="
        text-sky-darkest
        group-hover:text-black
        sm:top-1.5
        w-full
        pl-4
        sm:text-center
        text-sm
      "
    >
      <b>Nuxt 3</b> is coming... Discover more about it <b>here</b>!
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
