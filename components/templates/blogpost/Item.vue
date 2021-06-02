<template>
  <article>
    <header class="flex flex-col justify-between mt-12 items-left">
      <div class="flex flex-col flex-1 mb-8">
        <h1 class="mb-4 text-4xl font-semibold leading-tight">
          {{ post.title }}
        </h1>
        <div class="flex flex-col justify-between text-sm sm:flex-row">
          <div>
            <BlogpostAuthor
              v-for="(author, index) in post.authors"
              :key="index"
              :author="author"
            />
          </div>
          <div
            class="
              mt-1
              dark:text-dark-onSurfaceSecondary
              light:text-light-onSurfaceSecondary
            "
          >
            {{ formatDateByLocale(post.date) }}
            <span class="mx-1 text-xs">&bullet;</span>
            {{ post.readingTime.text }}
          </div>
        </div>
      </div>
      <figure>
        <AppImage
          :src="post.imgUrl"
          ratio="16:9"
          sizes="80vh"
          class="rounded"
        />
        <figcaption
          v-if="post.imgCredits"
          class="mt-3 text-xs text-right text-gray-600"
        >
          Photo by
          <a
            v-if="post.imgCreditsUrl"
            :href="post.imgCreditsUrl"
            target="_blank"
            rel="noreferer noopener"
            >{{ post.imgCredits }}</a
          >
          <span v-else>
            {{ post.imgCredits }}
          </span>
        </figcaption>
      </figure>
    </header>
    <div class="mt-12">
      <NuxtContent :document="post" />
    </div>
    <div
      v-if="hasTags"
      class="my-10 border-t border-light-border dark:border-dark-border"
    >
      <div
        class="
          flex flex-row flex-wrap
          justify-start
          my-10
          light:text-light-onSurfaceSecondary
          dark:text-dark-onSurfaceSecondary
        "
      >
        <span
          v-for="(tag, id) in post.tags"
          :key="id"
          class="
            px-2
            py-1
            mb-2
            mr-2
            font-medium
            tracking-wider
            uppercase
            truncate
            transition-colors
            duration-300
            ease-linear
            border
            rounded-full
            text-ss
            border-light-border
            dark:border-dark-border
          "
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogpostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasTags() {
      return this.post.tags
    }
  },
  methods: {
    formatDateByLocale(d) {
      const currentLocale = this.$i18n.locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }
  }
}
</script>

<style></style>
