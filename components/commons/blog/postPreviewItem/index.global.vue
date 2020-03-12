<template>
  <div class="flex flex-col-reverse md:flex-row mb-8 bg-gray-100 hover:bg-gray-200 rounded py-4 px-6">
    <div class="flex flex-col justify-between pr-4">
      <div class="">
        <div class="font-semibold text-xl mb-3">
          <nuxt-link :to="`/blog/${post.slug}`" tag="a">{{ post.title }}</nuxt-link>
        </div>
        <div class="mb-3">
          <p class="">{{ post.description }}</p>
        </div>
        <div class="flex flex-row justify-start mb-3">
          <span v-for="(tag, id) in post.tags" :key="id" class="uppercase text-xs px-1 py-1 rounded-sm mr-2 bg-gray-300">{{ tag }}</span>
        </div>
      </div>
      <div class="text-xs">
        <span class="text-nuxt-lightgreen">{{ post.author }}</span>
        <span class="text-xs mx-2">&bullet;</span>
        <span class="">{{ formatDateByLocale(post.date) }}</span>
        <span class="text-xs mx-2">&bullet;</span>
        <span class="">{{ post.readtime.text }}</span>
      </div>
    </div>
    <div
      class="w-auto h-48 md:h-auto md:w-3/4 mb-4 md:mb-0 bg-cover bg-center"
      :style="{backgroundImage: `url(${post.imgUrl})` }"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostPreviewItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDateByLocale (d) {
      const currentLocale = this.$store.state.locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }
  }
}
</script>

<style>
</style>
