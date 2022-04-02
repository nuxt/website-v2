<template>
  <Partner :page="page" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

// Some code has been imported from Docus to make this working
// @docus/app/dist/app/pages/_.vue

export default defineComponent({
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
      .where({ slug: { $in: route.params.slug } })
      .fetch()
    if (!pages?.length) {
      return error({
        statusCode: 404,
        message: 'Partner not found'
      })
    }

    const page = pages[0]

    const templateOptions = {
      ...$docus.settings.value.layout,
      aside: false,
      asideClass: ''
    }

    return {
      page,
      templateOptions
    }
  },
  head() {
    const title = this.page.title
    const description = this.page.description

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: `Nuxt - ${title}` },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: `Nuxt - ${title}` },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  },
  created() {
    if (process.client) {
      // Set template options
      this.$docus.layout.value = this.templateOptions

      // Set Docus runtime current page
      this.$docus.currentPage.value = this.page
      // Update navigation path to update currentNav
      this.$docus.currentPath.value = `/${this.$route.params.pathMatch}`
    }
  },
  render(h) {
    return h(this.page.template, {
      props: {
        page: this.page
      }
    })
  }
})
</script>
