<template>
  <nuxt-link v-if="to" :to="to" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md">
    <div class="inline-block fill-current stroke-current mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </nuxt-link>
  <a v-else :href="href" target="_blank" rel="noopener" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md">
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
    }
  }
}
</script>

<style>

</style>
