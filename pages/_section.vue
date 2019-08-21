<template>
  <!-- <nui-container class="mb-12 bg-gray-100 lg:bg-transparent rounded">
    <section class="lg:bg-gray-100 rounded py-6 sm:p-6"> -->
  <nui-container>
    <div class="lg:flex">
      <nui-aside />
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </nui-container>
</template>

<script>
import nuiAside from '@/components/partials/Aside'

export default {
  components: {
    nuiAside
  },
  validate ({ store, params }) {
    return store.state.menu[params.section] !== undefined
  }
}
</script>
