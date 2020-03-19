<template>
  <div class="bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded py-4 px-6 hover:bg-gray-200 transition-colors duration-300 ease-linear">
    <div class="w-full lg:w-3/4 flex flex-col justify-between pr-4">
      <div class="">
        <div class="font-semibold text-xl mb-3">
          <nuxt-link :to="`/blog/${post.slug}`" tag="a">{{ post.title }}</nuxt-link>
        </div>
        <div class="mb-3">
          <p class="truncate-multiline-3">{{ post.description }}</p>
        </div>
        <div class="flex flex-row justify-start mb-3">
          <span v-for="(tag, id) in post.tags" :key="id" class="uppercase text-xs px-1 py-1 rounded-sm mr-2 border">{{ tag }}</span>
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
      class="w-full lg:w-1/4 h-48 lg:h-auto mb-4 lg:mb-0 bg-cover bg-center rounded"
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
.truncate-multiline-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
