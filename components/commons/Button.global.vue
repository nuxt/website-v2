<template>
  <nuxt-link :to="to" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md">
    <div class="inline-block fill-current stroke-current mr-1">
      <slot name="icon"/>
    </div>
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
    }
  }
}
</script>

<style>

</style>
