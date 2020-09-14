<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavResources :categories="categories" />
      <TheAsideNavResources :categories="categories" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
      >
        <div class="container mx-auto px-4 lg:flex pb-12">
          <div
            class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
          >
            <h2
              class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
            >
              {{ $integrations.formatCategory($route.params.category) }} ({{
                integrations.length
              }})
            </h2>
            <ResourceCards :list="integrations" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniq from 'lodash/uniq'

export default {
  transition: 'resources',
  async asyncData({ $content, params }) {
    const rawCategories = await $content('integrations')
      .only(['name', 'categories'])
      .fetch()
    const categories = uniq(
      [].concat(...rawCategories.map(r => r.categories)).sort()
    )

    const integrations = await $content('integrations')
      .where({ categories: { $contains: params.category } })
      .only([
        'name',
        'title',
        'logo',
        'icon',
        'image',
        'category',
        'description'
      ])
      .fetch()

    return {
      categories,
      integrations
    }
  }
}
</script>
