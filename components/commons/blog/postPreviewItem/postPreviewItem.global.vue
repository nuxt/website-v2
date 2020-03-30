<template>
  <nuxt-link tag="article" :to="`/blog/${post.slug}`" class="light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded py-8 px-8 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear">
    <div class="w-full lg:w-3/4 flex flex-col justify-between pr-4">
      <div class="mb-2">
        <h2 class="leading-tight light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-semibold text-xl mb-4 hover:text-nuxt-lightgreen inline-block transition-colors duration-300 ease-linear">
          <nuxt-link :to="`/blog/${post.slug}`" tag="a">{{ post.title }}</nuxt-link>
        </h2>
        <div class="mb-4">
          <p class="truncate-multiline-3 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear">{{ post.description }}</p>
        </div>
        <div class="flex flex-row justify-start mb-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary">
          <span v-for="(tag, id) in post.tags" :key="id" class="flex uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear">{{ tag }}</span>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row text-sm">
        <div class="mb-4 lg:mb-0 flex items-center">
          <a v-for="(author, index) in post.authors" :key="index" :href="author.link" target="_blank" class="flex items-center">
            <img class="inline-block h-6 w-6 rounded-full mr-2" :src="author.avatarUrl" alt="" />
            <span class="leading-none last:mr-0 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear">{{ author.name }}</span>
          </a>
        </div>
        <div class="flex w-full lg:w-auto items-center justify-between leading-none">
          <span class="hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear">&bullet;</span>
          <span class="light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear">{{ formatDateByLocale(post.date) }}</span>
          <span class="hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear">&bullet;</span>
          <span class="light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear">{{ post.readtime.text }}</span>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-1/4 h-48 lg:h-auto mb-6 lg:mb-0 bg-cover bg-center rounded"
      :style="{backgroundImage: `url(${post.imgUrl})` }"
    ></div>
  </nuxt-link>
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
