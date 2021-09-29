<template>
  <Partner :page="page" />
</template>

<script>
export default {
  async asyncData({ $docus, i18n, route, error }) {
    const { slug } = route.params
    if (!slug) {
      return error({
        statusCode: 404,
        message: 'Partner not found'
      })
    }

    const pages = await $docus
      .search('/collections/partners', { deep: true })
      .where({ slug: { $in: route.params.slug }, language: i18n.locale })
      .fetch()
    if (!pages?.length) {
      return error({
        statusCode: 404,
        message: 'Partner not found'
      })
    }

    const page = pages[0]

    return {
      page
    }
  }
}
</script>
