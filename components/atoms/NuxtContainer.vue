<template>
  <Component :is="tag" class="relative w-full d-container-content">
    <slot />
  </Component>
</template>

<script>
import { defineComponent } from '#app'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
})
</script>
