<template>
  <div class="flex justify-between items-center">
<<<<<<< HEAD:components/commons/blog/postNavigationLinks.global.vue
    <nuxt-link
      :to="previousRoute"
      class="inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear"
    >
      <nuiSvgArrowLeft class="h-5 mr-2"/>
      {{ links.previous.title || 'back to blog list' }}
    </nuxt-link>
    <nuxt-link
      v-if="hasNextLink"
      :to="{ name: 'blog-slug', params: { slug: nextSlug } }"
      class="inline-flex items-center text-right dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear"
    >
      {{ links.next.title }}
      <nuiSvgArrowRight class="h-5 ml-2"/>
    </nuxt-link>
=======
    <NuxtLink
      v-if="prev"
      :to="toLink(prev.slug)"
      class="inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear"
    >
      <ArrowLeftIcon class="h-5 mr-2" />
      {{ prev.title || 'back to blog list' }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="toLink(next.slug)"
      class="inline-flex items-center text-right dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear"
    >
      {{ next.title }}
      <ArrowRightIcon class="h-5 ml-2" />
    </NuxtLink>
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/blog/BlogpostNavigationLinks.vue
  </div>
</template>

<script>
<<<<<<< HEAD:components/commons/blog/postNavigationLinks.global.vue
import nuiSvgArrowLeft from '@/components/svg/ArrowLeft.vue'
import nuiSvgArrowRight from '@/components/svg/ArrowRight.vue'
=======
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?inline'
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/blog/BlogpostNavigationLinks.vue

export default {
  name: 'BlogPostNavigationLinks',
  components: {
    nuiSvgArrowLeft,
    nuiSvgArrowRight
  },
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },
  methods: {
    toLink(slug) {
      if (slug === 'index') {
        return this.localePath('blog')
      }
      return this.localePath({ name: 'blog-slug', params: { slug } })
    }
  }
}
</script>
