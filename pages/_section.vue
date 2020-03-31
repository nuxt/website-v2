<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <mobile-aside-navigation />
      <nui-aside class="hidden lg:block"/>
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import nuiAside from '@/components/partials/Aside'
import MobileAsideNavigation from '@/components/partials/MobileAsideNavigation'

export default {
  components: {
    nuiAside,
    MobileAsideNavigation
  },
  validate ({ store, params }) {
    return store.state.menu[params.section] !== undefined
  }
}
</script>
