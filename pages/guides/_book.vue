<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavNewDocs :links="links" />
      <TheAsideNavNewDocs :links="links" class="hidden lg:block" />
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
  async asyncData({ $content, app, params, redirect }) {
    let pages = []

    try {
      pages = await $content(app.i18n.defaultLocale, 'guides', { deep: true })
        .only(['slug', 'title', 'menu', 'category', 'position'])
        .sortBy('position')
        .sortBy('title')
        .sortBy('menu')
        .fetch()

      // if (app.i18n.locale !== app.i18n.defaultLocale) {
      //   const newPages = await $content(app.i18n.locale, 'guides', { deep: true })
      //     .only(['slug', 'title', 'menu', 'category', 'position'])
      //     .sortBy('position')
      //     .sortBy('title')
      //     .sortBy('menu')
      //     .fetch()

      //   pages = pages.map((page) => {
      //     const newPage = newPages.find(newPage => newPage.slug === page.slug)

      //     return newPage || page
      //   })
      // }
    } catch (e) {}

    return {
      links: groupBy(pages, 'category')
    }
  }
}
</script>
