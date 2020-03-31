<template>
  <div class="algolia-search">
    <button v-if="!showMobile" class="block md:hidden flex items-center p-2 -m-2 mr-4 justify-center text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen z-10 lg:hidden fill-current transition-colors duration-300 ease-linear" @click="showMobile = true">
      <nui-search-icon class="block h-5 fill-current" />
    </button>
    <nui-search class="hidden md:inline-block align-middle mx-2" appearance="main" />
    <div v-if="showMobile" class="mobile-search flex items-center absolute inset-0 w-full h-full md:hidden z-20">
      <div class="scrim absolute inset-0 bg-light-elevatedSurface dark:bg-dark-elevatedSurface w-full h-full transition-colors duration-300 ease-linear" />
      <nui-search class="md:inline-block w-full align-middle mx-4" :class="[showMobile && 'absolute z-20 inset-0']" appearance="mobile" @close-search="showMobile = false" />
    </div>
  </div>
</template>

<script>
import nuiSearchIcon from '@/components/svg/Search'
import nuiSearch from '@/components/partials/SearchInput'

export default {
  components: {
    nuiSearchIcon,
    nuiSearch
  },
  props: [],
  data () {
    return {
      showMobile: false
    }
  },
  methods: {
    //
  }
}
</script>
