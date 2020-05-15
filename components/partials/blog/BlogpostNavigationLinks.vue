<template>
  <div class="flex justify-between items-center">
    <NuxtLink
      :to="previousRoute"
      class="inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear"
    >
      <ArrowLeftIcon class="h-5 mr-2"/>
      {{ links.previous.title || 'back to blog list' }}
    </NuxtLink>
    <NuxtLink
      v-if="hasNextLink"
      :to="{ name: 'blog-slug', params: { slug: nextSlug } }"
      class="inline-flex items-center text-right dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear"
    >
      {{ links.next.title }}
      <ArrowRightIcon class="h-5 ml-2"/>
    </NuxtLink>
  </div>
</template>

<script>
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?inline'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?inline'

export default {
  name: 'BlogpostNavigationLinks',
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
  },
  props: {
    links: {
      type: Object,
      required: true
    }
  },
  computed: {
    previousRoute () {
      if (this.hasPreviousLink) {
        return {
          name: 'blog-slug',
          params: { slug: this.links.previous.slug }
        }
      } else {
        return { name: 'blog' }
      }
    },
    nextSlug () {
      return this.links.next.slug
    },
    hasNextLink () {
      return this.links.next && this.links.next.title && this.links.next.slug
    },
    hasPreviousLink () {
      return this.links.previous && this.links.previous.title && this.links.previous.slug
    }
  }
}
</script>
