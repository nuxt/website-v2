<template>
  <nui-container class="pt-16">
    <div class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Blog
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Discover articles from the core team and contributors about NuxtJS, tips and tricks included!
        </h3>
      </div>
      <i-design class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <section class="">
      <blogPostPreviewItem v-for="post in posts" :key="post.slug" :post="post" />
    </section>
  </nui-container>
</template>

<script>
import iDesign from '@/components/svg/fogg/design'

export default {
  components: {
    iDesign
  },
  async asyncData ({ $docs, store }) {
    const path = `/${store.state.locale}/blog`
    const posts = await $docs.get(path)
    return { posts }
  }
}
</script>

<style>
</style>
