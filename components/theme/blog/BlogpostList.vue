<template>
  <div class="px-6 mt-12 mb-8">
    <div class="flex grid flex-wrap grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ContentCardTemplate
        v-for="post in posts"
        :key="post.id"
        class=""
        :title="post.title"
        :description="post.description"
        :image="post.imgUrl"
        :href="post.to"
        :category="post.target || post.category"
      >
        <div slot="footer">
          <div class="flex items-center">
            <div v-if="post.authors" class="flex mr-4">
              <AppLink
                v-for="(author, index) in post.authors"
                :key="index"
                :href="author.link"
                rel="noopener noindex nofollow"
                :class="{ '-ml-4': index !== 0 }"
                class="flex items-center justify-end border-white rounded-full border-3 dark:border-secondary-darker"
              >
                <NuxtImg
                  class="inline-block w-10 h-10 rounded-full"
                  height="32"
                  width="32"
                  loading="lazy"
                  :src="author.avatarUrl"
                  :alt="author.name"
                />
              </AppLink>
            </div>
            <div class="flex flex-col text-sm">
              <span v-if="post.authors" class="font-bold">{{
                post.authors.length > 1 ? $t('common.multiple_authors') : post.authors[0].name
              }}</span>
              <time
                v-if="post.date"
                :datetime="post.date"
                class="mr-2 text-sm font-medium text-gray-500 dark:text-cloud-light"
              >
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
