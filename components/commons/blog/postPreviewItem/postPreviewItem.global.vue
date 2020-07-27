<template>
<<<<<<< HEAD:components/commons/blog/postPreviewItem/postPreviewItem.global.vue
  <nuxt-link tag="article" :to="{name: 'blog-slug', params: {slug: post.slug}}" class="light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear" @click.native="whyNavigationDoesntWork">
    <div class="w-full lg:w-2/3 flex flex-col justify-between pr-4">
      <div class="mb-2">
        <h2 class="mb-4 inline-block">
          <nuxt-link :to="{name: 'blog-slug', params: {slug: post.slug}}" class="flex leading-tight light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-semibold text-2xl md:text-3xl transition-colors duration-300 ease-linear">{{ post.title }}</nuxt-link>
=======
  <NuxtLink
    tag="article"
    :to="localePath({ name: 'blog-slug', params: { slug: post.slug } })"
    class="light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear"
    @click.native="whyNavigationDoesntWork"
  >
    <div class="w-full lg:w-2/3 flex flex-col justify-between pr-4">
      <div class="mb-2">
        <h2 class="mb-4 inline-block">
          <NuxtLink
            :to="localePath({ name: 'blog-slug', params: { slug: post.slug } })"
            class="flex leading-tight light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-semibold text-2xl md:text-3xl transition-colors duration-300 ease-linear"
          >
            {{ post.title }}
          </NuxtLink>
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/blog/BlogpostPreviewItem.vue
        </h2>
        <div class="mb-4">
          <p
            class="truncate-multiline-3 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
          >
            {{ post.description }}
          </p>
        </div>
<<<<<<< HEAD:components/commons/blog/postPreviewItem/postPreviewItem.global.vue
        <div class="flex flex-row justify-start mb-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary">
          <span v-for="(tag, id) in post.tags" :key="id" class="flex uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear">{{ tag }}</span>
=======
        <div
          class="flex flex-row flex-wrap justify-start mb-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
        >
          <span
            v-for="(tag, id) in post.tags"
            :key="id"
            class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
          >
            {{ tag }}
          </span>
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/blog/BlogpostPreviewItem.vue
        </div>
      </div>
      <div class="flex flex-col lg:flex-row text-sm">
        <div class="mb-4 lg:mb-0 flex items-center">
<<<<<<< HEAD:components/commons/blog/postPreviewItem/postPreviewItem.global.vue
          <span v-for="(author, index) in post.authors" :key="index" class="flex items-center">
            <img class="inline-block h-6 w-6 rounded-full mr-2" :src="author.avatarUrl" alt="" />
            <span class="leading-none last:mr-0 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear">{{ author.name }}</span>
=======
          <span
            v-for="(author, index) in post.authors"
            :key="index"
            class="flex items-center mr-4"
          >
            <img
              class="inline-block h-6 w-6 rounded-full mr-2"
              :src="author.avatarUrl"
              alt
            />
            <span
              class="leading-none last:mr-0 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
            >
              {{ author.name }}
            </span>
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/blog/BlogpostPreviewItem.vue
          </span>
        </div>
        <div
          class="flex w-full lg:w-auto items-center justify-between leading-none"
        >
          <span
            class="hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
          >
            &bullet;
          </span>
          <span
            class="light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
          >
            {{ formatDateByLocale(post.date) }}
          </span>
          <span
            class="hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
          >
            &bullet;
          </span>
          <span
            class="light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
          >
            {{ post.readingTime.text }}
          </span>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/3 mb-6 lg:mb-0 rounded overflow-hidden">
      <nui-image :src="post.imgUrl" ratio="16:9" />
    </div>
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
    formatDateByLocale(d) {
      const currentLocale = this.$i18n.locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    },
    whyNavigationDoesntWork() {
      this.$router.push(
        this.localePath({
          name: 'blog-slug',
          params: { slug: this.post.slug }
        })
      )
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
