<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-8">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1 class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4">
            NUXT<span class="text-nuxt-lightgreen">JS</span> Blog
          </h1>
          <h3 class="xl:text-lg light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6">
            Discover articles from the core team and contributors about NuxtJS, tips and tricks included!
          </h3>
        </div>
        <DesignIllustration class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"/>
      </div>
      <section>
        <BlogpostPreviewItem v-for="(post, index) in posts" :key="index" :post="post" />
      </section>
    </div>
  </div>
</template>

<script>
import DesignIllustration from '@/assets/illustrations/design.svg?inline'

export default {
  components: {
    DesignIllustration
  },
  async asyncData ({ $docs, store }) {
    const path = `/${store.state.locale}/blog`
    const posts = await $docs.get(path)
    return { posts }
  },
  head () {
    const title = 'NuxtJS Blog'
    const description = 'Discover articles from the core team and contributors about NuxtJS, tips and tricks included!'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>

<style>
</style>
