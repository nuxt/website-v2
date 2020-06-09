<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNav />
      <TheAsideNav class="hidden lg:block"/>
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  validate ({ store, params }) {
    return store.state.menu[params.section] !== undefined
  }
}
</script>
