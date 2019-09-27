<template>
  <nuxt-link v-if="to" :to="to" class="inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md" :class="classes">
    <div class="inline-block fill-current stroke-current mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </nuxt-link>
  <a v-else :href="href" target="_blank" rel="noopener" class="inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md" :class="classes">
    <div class="inline-block fill-current stroke-current mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </a>
</template>

<script>
export default {
  name: 'NuiButton',
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'green'
    }
  },
  computed: {
    classes () {
      if (this.variant === 'gray') {
        return 'bg-gray-200 text-nuxt-gray hover:bg-gray-300'
      }
      return 'bg-nuxt-lightgreen text-white hover:bg-nuxt-green'
    }
  }
}
</script>

<style>

</style>
