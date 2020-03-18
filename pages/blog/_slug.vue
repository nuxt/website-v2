<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface">
    <div class="container mx-auto p-4">
      <nuxt-link :to="{ name: 'blog' }" class="inline-flex items-center hover:text-nuxt-lightgreen">
        <nuiSvgArrowLeft class="h-5 mr-2"/>
        back to blog list
      </nuxt-link>
      <blogPostItem :post="post" />
      <blogPostNavigationLinks :links="post.links" />
    </div>
  </div>
</template>

<script>
import nuiSvgArrowLeft from '@/components/svg/ArrowLeft.vue'

export default {
  components: {
    nuiSvgArrowLeft
  },
  async asyncData ({ $docs, params, store, error }) {
    const slug = params.slug
    const path = `/${store.state.locale}/blog/${slug}`
    const data = {
      path,
      post: {}
    }
    try {
      const post = await $docs.get(path)
      if (!post.title) { console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) } // eslint-disable-line no-console
      if (!post.description) { console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) } // eslint-disable-line no-console
      data.post = post
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    return data
  }
}
</script>

<style></style>
