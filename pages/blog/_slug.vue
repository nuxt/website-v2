<template>
  <nui-article class="blog-post-container">
    <div class="blog-post-header">
      <div class="blog-post-title">{{ page.attrs.title }}</div>
      <div class="flex items-baseline justify-between text-sm text-gray-600 mb-8">
        <div class="blog-post-author">{{ page.attrs.author }}</div>
        <div class="blog-post-readtime">{{ page.readtime.text }}</div>
      </div>
      <div class="blog-post-description">{{ page.attrs.description }}</div>
    </div>
    <div class="blog-post-content">
      <html-parser :content="page.body" />
    </div>
    <div class="blog-post-footer">
      <ul class="blog-post-tags">
        <li v-for="(tag, i) in page.attrs.tags" :key="i" class="blog-post-tag">
          {{ tag }}
        </li>
      </ul>
    </div>
  </nui-article>
</template>

<script>
export default {
  async asyncData ({ $docs, params, store, error }) {
    const slug = params.slug
    const path = `/${store.state.locale}/blog/${slug}`
    const data = {
      path,
      page: {}
    }
    try {
      const page = await $docs.get(path)
      if (!page.attrs.title) { console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) } // eslint-disable-line no-console
      if (!page.attrs.description) { console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) } // eslint-disable-line no-console
      data.page = page
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

<style lang="postcss">
.blog-post-container {
  @apply max-w-2xl mx-auto mt-4
}
.blog-post-header {}
.blog-post-title {
  @apply font-bold text-nuxt-gray text-4xl
}
.blog-post-author {}
.blog-post-description {
  @apply mb-8
}
.blog-post-content h1, h2, h3, h4, h5, h6 {
  @apply font-semibold
}
.blog-post-footer {
  @apply mt-4 border-t border-gray-300 pt-2
}
.blog-post-tags {
  @apply flex list-none p-0 mt-4
}
.blog-post-tag {
  @apply text-nuxt-gray text-xs py-1 px-3 bg-gray-200 rounded-sm mt-0 mb-0 ml-1 mr-1
}
.blog-post-tag:first-of-type {
  @apply ml-0
}
@media (max-width: 376px) {
  .blog-post-container {
    @apply max-w-xs mt-10
  }
}
</style>
