<template>
  <!-- <nui-container class="mb-12 bg-gray-100 lg:bg-transparent rounded">
    <section class="lg:bg-gray-100 rounded py-6 sm:p-6"> -->
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
    <div class="container mx-auto px-4 lg:flex pb-12">
<<<<<<< HEAD
      <nui-aside class="hidden lg:block"/>
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
=======
      <TheMobileAsideNav :links="links" />
      <TheAsideNav :links="links" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
      >
>>>>>>> 26a70b2b (chore: add guides section (#407))
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import nuiAside from '@/components/partials/Aside'

export default {
  components: {
    nuiAside
  },
  validate ({ store, params }) {
    return store.state.menu[params.section] !== undefined
=======
import groupBy from 'lodash.groupby'

export default {
  async asyncData({ $content, app, params }) {
    let pages = []

    try {
      pages = await $content(app.i18n.defaultLocale, params.section)
        .only(['slug', 'title', 'position', 'menu', 'category'])
        .sortBy('position')
        .fetch()

      if (app.i18n.locale !== app.i18n.defaultLocale) {
        const newPages = await $content(app.i18n.locale, params.section)
          .only(['slug', 'title', 'position', 'menu', 'category'])
          .sortBy('position')
          .fetch()

        pages = pages.map(page => {
          const newPage = newPages.find(newPage => newPage.slug === page.slug)

          return newPage || page
        })
      }
    } catch (e) {}

    return {
      links: groupBy(pages, 'category')
    }
>>>>>>> 26a70b2b (chore: add guides section (#407))
  }
}
</script>
