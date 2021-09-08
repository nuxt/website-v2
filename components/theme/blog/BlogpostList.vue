<template>
  <div class="px-6 mt-12 mb-8">
    <div class="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ContentCardTemplate
        v-for="post in posts"
        :key="post.id"
        class=""
        :title="post.title"
        :description="post.description"
        :image="post.imgUrl"
        :href="post.to"
        :category="post.category"
      >
        <div slot="footer" class="px-4 mb-4 mt-auto">
          <div class="flex items-center">
            <div v-if="post.authors" class="flex mr-4">
              <a
                v-for="(author, index) in post.authors"
                :key="index"
                :href="author.link"
                target="_blank"
                rel="noopener noindex nofollow"
                :class="{ '-ml-4': index !== 0 }"
                class="flex items-center justify-end rounded-full border-3 border-white dark:border-secondary-darker"
              >
                <NuxtImg
                  class="inline-block h-10 w-10 rounded-full"
                  height="32"
                  width="32"
                  :src="author.avatarUrl"
                  alt
                />
              </a>
            </div>
            <div class="text-sm flex flex-col">
              <span v-if="post.authors" class="font-bold">{{
                post.authors.length > 1 ? 'Multiple Authors' : post.authors[0].name
              }}</span>
              <time :datetime="post.date" class="font-medium mr-2 text-sm text-gray-500 dark:text-cloud-light">
                {{ formatDateByLocale($i18n.locale, post.date) }}
              </time>
            </div>
          </div>
        </div>
      </ContentCardTemplate>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    slug: {
      type: String,
      required: true
    },
    sortBy: {
      type: Object,
      default() {
        return {
          field: 'date',
          direction: 'desc'
        }
      }
    }
  },
  setup(props) {
    const { $docus, i18n } = useContext()
    const posts = ref()

    useFetch(async () => {
      const documents = await $docus
        .search(props.slug, { deep: true })
        .where({ slug: { $ne: '' }, language: i18n.locale })
        .sortBy(props.sortBy.field, props.sortBy.direction)
        .fetch()

      posts.value = documents
    })

    const formatDateByLocale = (locale, d) => {
      const currentLocale = locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }

    return {
      posts,
      formatDateByLocale
    }
  }
})
</script>
