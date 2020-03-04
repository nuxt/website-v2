<template>
  <nui-container class="pt-16">
    <div class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Blog<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Discover articles from the core team and contributors about NuxtJS, tips and tricks included!
        </h3>
      </div>
      <img src="#" alt="Blog" class="hidden w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8">
    </div>
    <section class="post-feed">
      <article v-for="(post, p) in posts" :key="p" class="post-card-container hover:shadow-nuxt">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug }}" tag="div" class="post-card">
          <header class="post-card-header">
            <div class="post-card-title">{{ post.title }}</div>
            <div class="post-card-date">{{ formatDateByLocale(post.date) }}</div>
          </header>
          <div class="post-card-content">
            <div class="post-card-description">{{ post.description }}</div>
          </div>
          <footer class="post-card-footer">
            <ul class="post-card-tags">
              <li v-for="(tag, t) in post.tags" :key="t" class="post-card-tag">
                {{ tag }}
              </li>
            </ul>
            <div class="flex items-baseline justify-between mt-4">
              <div class="post-card-author">
                {{ post.author }}
              </div>
              <div class="post-card-readtime">
                {{ post.readtime }} min
              </div>
            </div>
          </footer>
        </nuxt-link>
      </article>
    </section>
  </nui-container>
</template>

<script>

export default {
  async asyncData ({ $docs, store }) {
    const path = `/${store.state.locale}/blog`
    const posts = await $docs.get(path)
    return { posts }
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

<style lang="postcss" scoped>
.post-feed {
 @apply max-w-2xl mx-auto

}
.post-card-container {
  @apply p-3 border border-gray-300 rounded mb-8 cursor-pointer
}
.post-card {
  @apply mx-4 my-2
}
.post-card-header {
  @apply flex items-baseline justify-between
}
.post-card-title {
  @apply text-xl text-nuxt-gray font-semibold mb-2
}
.post-card-content {}
.post-card-description {
  @apply text-gray-600
}
.post-card-footer {
  @apply mt-2
}
.post-card-date {
  @apply text-sm
}
.post-card-author {
  @apply text-sm
}
.post-card-tags {
  @apply flex list-none p-0 mt-4
}
.post-card-tag {
  @apply text-nuxt-gray text-xs py-1 px-3 bg-gray-200 rounded-sm mt-0 mb-0 ml-1 mr-1
}
.post-card-tag:first-of-type {
  @apply ml-0
}
.post-card-readtime {
  @apply text-sm
}
</style>
