<template>
  <nuxt-link :to="to" class="flex items-end bg-nuxt-lightgreen text-white font-bold text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md">
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  name: 'nui-button',
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    green: Boolean
  }
}
</script>
