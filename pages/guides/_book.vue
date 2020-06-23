<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavNewDocs :links="links" />
      <TheAsideNavNewDocs :links="links" class="hidden lg:block" />
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
// import throttle from 'lodash/throttle'
import groupBy from 'lodash.groupby'
// import slugify from 'slugify'
// import TimesIcon from '@/assets/icons/times.svg?inline'
// import CaretDownIcon from '@/assets/icons/caret-down.svg?inline'
export default {
  // validate ({ store, params }) {
  //   return store.state.menu[params.section] !== undefined
  // }
  async asyncData ({ $content, app, params }) {
    const links = await $content(app.i18n.locale, 'guides', { deep: true })
      .only(['slug', 'title', 'category'])
      .sortBy('categoryPosition', 'asc')
      .sortBy('position', 'asc')
      .fetch()

    return {
      links: groupBy(links, 'category')
    }
  }
}

</script>
