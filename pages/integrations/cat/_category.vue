<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
    >
      <h2
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
      >
        {{ $integrations.formatCategory(category) }} ({{ integrations.length }})
      </h2>
      <ResourceCards :list="integrations" />
    </div>
  </div>
</template>
<script>
export default {
  transition: 'resources',
  async asyncData({ $content, params }) {
    const category = params.category || 'all'
    const query =
      category === 'all' ? {} : { categories: { $contains: category } }
    const integrations = await $content('integrations')
      .where(query)
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
      category,
      integrations
    }
  },

  computed: {
    featured() {
      return this.integrations.filter(r => r.image)
    }
  }
}
</script>
