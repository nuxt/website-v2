<template>
  <div>
    <div class="flex items-center justify-between mt-12">
      <div class="flex-1">
        <h1 class="text-3xl font-semibold mb-6">{{ post.attrs.title }}</h1>
        <div class="text-sm">
          <p class="text-nuxt-lightgreen">{{ post.attrs.author }}</p>
          <div class="">
            {{ formatDateByLocale(post.attrs.date) }}
            <span class="text-xs mx-1">&bullet;</span>
            {{ post.readtime.text }}
          </div>
        </div>
      </div>
      <div class="bg-cover bg-center w-2/6 h-64" :style="{backgroundImage: `url(${post.attrs.imgUrl})`}"></div>
    </div>
    <div class="mt-12">
      <article>
        <html-parser :content="post.body" />
      </article>
    </div>
    <div v-if="hasTags" class="border-t border-gray-200 my-10">
      <div class="flex flex-row justify-start my-10">
        <span v-for="(tag, id) in post.attrs.tags" :key="id" class="uppercase text-xs px-1 py-1 rounded-sm mr-2 bg-gray-200">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasTags () {
      return this.post.attrs.tags
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

<style></style>
