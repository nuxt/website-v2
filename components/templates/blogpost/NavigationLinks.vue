<template>
  <div class="flex justify-between items-center">
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
  </div>
</template>

<script>
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?inline'

export default {
  name: 'BlogpostNavigationLinks',
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
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
