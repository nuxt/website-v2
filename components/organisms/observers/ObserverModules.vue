<template>
  <div class="observer" ref="root" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  setup(props,{ emit }) {
    let observer = ref(null)
    const root = ref(null)

    onMounted(() => {
      observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit('intersect')
      }
    }, props.options)
      observer.observe(root.value)
    })


    return {
      observer,
      root
    }
  },
})
</script>

<!-- script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    observer: null
  }),
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      }
    }, this.options)

    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  }
}
</script -->
