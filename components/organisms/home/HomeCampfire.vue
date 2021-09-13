<template>
  <div class="mt-40 overflow-x-hidden">
    <img
      loading="lazy"
      :src="`/img/home/campfire/campfire-illustration-big.svg`"
      class="hidden lg:block absolute left-0 w-full object-cover h-56 -mt-40 z-10"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/home/campfire/campfire-illustration.svg`"
      class="absolute left-0 w-full object-cover h-40 -mt-40 z-10 lg:hidden"
      alt="A landscape image"
    />
    <section class="py-20 bg-sky-darker">
      <NuxtContainer>
        <div class="flex flex-col items-start col-span-12">
          <div class="mb-2">
            <span class="text-primary font-bold text-lg">{{ category }} </span>
          </div>
          <h2 class="mb-2 font-serif font-normal text-display-6 md:text-display-5 2xl:text-display-4">
            <Markdown use="title" unwrap="p" />
          </h2>
          <p class="mb-12 font-normal text-body-base md:text-body-lg 2xl:text-body-xl w-1/2">
            <Markdown use="description" unwrap="p" />
          </p>
          <div class="flex flex-col items-center grid lg:grid-cols-1 lg:grid-cols-12">
            <div class="flex flex-col pr-4 space-y-4 col-span-7">
              <Markdown use="campfire-list" unwrap="p" />
            </div>
            <div v-if="post" class="col-span-5">
              <div>
                <div
                  class="aspect-w-16 aspect-h-8 bg-gray-100 overflow-hidden dark:bg-secondary-darker mb-4 rounded-lg"
                >
                  <NuxtImg :src="post.imgUrl" :alt="post.title" class="object-cover" />
                </div>
                <img
                  :src="`/img/home/campfire/book.svg`"
                  class="absolute bottom-40 right-0 lg:-right-5 lg:bottom-1/5 h-20 lg:h-28"
                />
              </div>
              <span class="text-primary text-body-base lg:text-body-lg font-bold mb-2">{{ articleCategory }}</span>
              <h3 class="text-body-xl lg:text-body-2xl font-bold mb-2">{{ post.title }}</h3>
              <p class="mb-4 text-body-base lg:text-body-lg truncate">{{ post.description }}</p>
              <MarketingLink color="primary" :name="articleLinkTitle" icon="IconChevronRight" :to="post.to" />
            </div>
          </div>
        </div>
      </NuxtContainer>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    },
    articleCategory: {
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
    const post = ref()
    useFetch(async () => {
      const documents = await $docus
        .search('/announcements/', { deep: true })
        .where({ language: i18n.locale })
        .sortBy('position', 'asc')
        .limit(1)
        .fetch()

      post.value = documents[0]
    })
    return {
      post
    }
  }
})
</script>
