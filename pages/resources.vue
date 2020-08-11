<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavResources :links="categories" />
      <TheAsideNavResources :links="categories" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
      >
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'

export default {
  async asyncData({ $content, app, params }) {
    let categories = []
    try {
      categories = await $content(app.i18n.defaultLocale, 'resources', {
        deep: true
      })
        .only(['category'])
        .fetch()
    } catch (e) {}
    return {
      categories: Object.keys(groupBy(categories, 'category'))
    }
  }
}
</script>
