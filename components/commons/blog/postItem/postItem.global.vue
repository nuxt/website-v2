<template>
  <div>
    <div class="flex items-left justify-between flex-col-reverse lg:flex-row lg:items-center mt-12">
      <div class="flex flex-1 flex-col  mt-4 lg:items-left">
        <h1 class="text-3xl font-semibold mb-2 lg:mb-6">{{ post.title }}</h1>
        <div class="text-sm flex justify-between lg:flex-col">
          <p class="text-nuxt-lightgreen">{{ post.author }}</p>
          <div class="">
            {{ formatDateByLocale(post.date) }}
            <span class="text-xs mx-1">&bullet;</span>
            {{ post.readtime.text }}
          </div>
        </div>
      </div>
      <div class="bg-cover bg-center h-64 w-full lg:w-2/6" :style="{backgroundImage: `url(${post.imgUrl})`}"></div>
    </div>
    <div class="mt-12">
      <article>
        <html-parser :content="post.body" />
      </article>
    </div>
    <div v-if="hasTags" class="border-t border-gray-200 my-10">
      <div class="flex flex-row justify-start my-10">
        <span v-for="(tag, id) in post.tags" :key="id" class="uppercase text-xs px-1 py-1 rounded-sm mr-2 border">{{ tag }}</span>
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
      return this.post.tags
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
