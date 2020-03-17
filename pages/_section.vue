<template>
  <!-- <nui-container class="mb-12 bg-gray-100 lg:bg-transparent rounded">
    <section class="lg:bg-gray-100 rounded py-6 sm:p-6"> -->
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <nui-aside class="hidden lg:block"/>
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </div>
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
