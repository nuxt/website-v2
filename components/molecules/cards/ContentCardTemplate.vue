<template>
  <article
    class="
      flex flex-col
      shadow
      rounded-lg
      overflow-hidden
      hover:bg-gray-50
      dark:hover:bg-secondary-darker
      cursor-pointer
      dark:bg-secondary-darkest
    "
    @click="navigateToUrl(href)"
  >
    <div class="aspect-h-9 bg-gray-100 dark:bg-secondary-darker mb-4">
      <NuxtImg :src="imgUrl" width="864" height="378" :alt="title" loading="lazy" />
    </div>

    <div v-if="tags.length" class="px-4 mb-1">
      <span v-for="(tag, i) in tags" :key="tag" class="text-gray-500 dark:text-cloud-light font-medium text-sm">
        <span>{{ tag }}</span>
        <span v-if="(i === 0 && tags.length > 1) || i !== tags.length - 1"> – </span>
      </span>
    </div>

    <div v-else-if="category" class="px-4 mb-1">
      <span class="text-gray-500 dark:text-cloud-light font-medium text-sm">
        {{ category }}
      </span>
    </div>

    <h1 class="font-bold text-body-xl mb-2 px-4">
      <AppLink :to="href">
        {{ title }}
      </AppLink>
    </h1>

    <p class="pb-8 px-4 text-gray-500 dark:text-cloud-lighter truncate sm:whitespace-normal">
      {{ description }}
    </p>

    <div class="px-4 mt-auto mb-4">
      <Markdown use="footer" unwrap="p" />
    </div>
  </article>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const imgUrl = computed(() => props.image || 'https://source.unsplash.com/random')

    function navigateToUrl(href) {
      const isInternal = href.startsWith('/') && href.startsWith('//') === false
      if (isInternal) {
        this.$router.push(this.localePath(href))
      } else {
        window.open(href, '_blank')
      }
    }
    return { navigateToUrl, imgUrl }
  }
})
</script>
