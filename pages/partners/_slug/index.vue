<template>
  <Partner :page="page" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Some code has been imported from Docus to make this working
// @docus/app/dist/app/pages/_.vue

export default defineComponent({
  async asyncData({ $docus, $config, route, error }) {
    const { slug } = route.params
    const { token } = route.query
    if (!slug) {
      return error({
        statusCode: 404,
        message: 'Partner not found'
      })
    }

    const apiURL = $config.apiNuxtlabsURL || 'https://api.nuxtlabs.com'

    let page
    try {
      page = await $fetch(`${apiURL}/api/partners/${slug}`, {
        params: token ? { token } : {}
      })
    } catch {}

    if (!page) {
      return error({
        statusCode: 404,
        message: 'Partner not found'
      })
    }

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
    const title = this.page.name
    const description = this.page.profile?.shortDescription

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
