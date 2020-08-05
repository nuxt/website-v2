<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
    >
      <div class="flex justify-between items-stretch">
        <pre>{{ page }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const document = await $content(
      app.i18n.locale + '/resources/' + params.category
    ).fetch()
    const page = document.categories.find(
      category => category.slug === params.slug
    )

    return { page }
  }
}
</script>

<style scoped>
img {
  max-width: 40px;
  max-height: 40px;
}
</style>
