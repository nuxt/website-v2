<template>
  <section class="pb-20 pt-20 bg-sky-darker text-white">
    <NuxtContainer>
      <div class="flex flex-col items-center xl:items-start col-span-12">
        <div class="mb-2">
          <span class="text-primary font-bold text-lg">{{ category }} </span>
        </div>
        <h2 class="mb-2 font-serif font-normal text-display-6 md:text-display-5 2xl:text-display-4">
          <Markdown use="title" unwrap="p" />
        </h2>
        <p class="mb-12 font-normal text-body-base md:text-body-lg 2xl:text-body-xl w-1/2 text-center xl:text-left">
          <Markdown use="description" unwrap="p" />
        </p>
        <ul class="flex flex-col items-start grid grid-cols-1 sm:grid-cols-2 gap-8">
          <li v-for="(post, index) in posts" :key="index">
            <div v-if="post">
              <div class="aspect-w-16 aspect-h-8 bg-gray-100 overflow-hidden dark:bg-secondary-darker mb-4 rounded-lg">
                <NuxtImg :src="post.imgUrl || post.logo" :alt="post.title" loading="lazy" class="object-cover" />
              </div>
              <span class="text-primary text-body-base lg:text-body-lg font-bold mb-2">{{
                index > 0 ? eventsCategory : announcementsCategory
              }}</span>
              <h3 class="text-body-xl lg:text-body-2xl font-bold mb-2">{{ post.title }}</h3>
              <p class="mb-4 text-body-base lg:text-body-lg truncate">{{ post.description }}</p>
              <MarketingLink :name="articleLinkTitle" :to="post.to || post.link" />
            </div>
          </li>
        </ul>
      </div>
    </NuxtContainer>
  </section>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    },
    announcementsCategory: {
      type: String,
      default: ''
    },
    eventsCategory: {
      type: String,
      default: ''
    },
    articleLinkTitle: {
      type: String,
      default: ''
    }
  },
  setup() {
    const { $docus, i18n } = useContext()
    const posts = ref([])

    useFetch(async () => {
      const announcements = await $docus
        .search('/announcements', { deep: true })
        .where({ language: i18n.locale })
        .sortBy('position', 'asc')
        .limit(1)
        .fetch()

      const events = await $docus
        .search('/collections/events', { deep: true })
        .where({ slug: { $ne: '' }, language: i18n.locale })
        .sortBy('position', 'desc')
        .limit(1)
        .fetch()

      posts.value.push(announcements[0])
      posts.value.push(events[0].events[events[0].events.length - 1])
    })

    return {
      posts
    }
  }
})
</script>
