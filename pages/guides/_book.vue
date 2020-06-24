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
import groupBy from 'lodash.groupby'
export default {
  async asyncData ({ $content, app, params }) {
    const links = await $content(app.i18n.locale, 'guides', { deep: true })
      .only(['slug', 'title', 'menu', 'category'])
      .sortBy('position', 'asc')
      .sortBy('categoryPosition', 'asc')
      .fetch()

    return {
      links: groupBy(links, 'category')
    }
  }
}

</script>
