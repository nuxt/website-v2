<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
    >
      <h1
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
      >
        {{ document.title }}
      </h1>

      <ResourceCards :list="document.categories" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const document = await $content(
      app.i18n.locale + '/resources/' + params.category
    ).fetch()
    return { document }
  }
}
</script>

<style scoped></style>
