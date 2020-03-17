<template>
  <div class="flex justify-between items-center">
    <nui-button
      :to="previousRoute"
      class="inline-flex items-center shadow-none hover:shadow-none"
      variant="gray"
    >
      <nuiSvgArrowLeft slot="icon" class="h-5 mr-1"/>
      {{ post.prevLink || 'blog' }}
    </nui-button>
    <nuxt-link
      v-if="post.nextLink"
      :to="{ name: 'blog-slug', params: { slug: nextSlug } }"
      class="inline-flex items-center hover:text-nuxt-lightgreen"
    >
      {{ post.nextLink }}
      <nuiSvgArrowRight class="h-5 ml-2"/>
    </nuxt-link>
  </div>
</template>

<script>
import nuiSvgArrowLeft from '@/components/svg/ArrowLeft.vue'
import nuiSvgArrowRight from '@/components/svg/ArrowRight.vue'

export default {
  name: 'BlogPostNavigationLinks',
  components: {
    nuiSvgArrowLeft,
    nuiSvgArrowRight
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    previousRoute () {
      if (this.post.prevLink) {
        return {
          name: 'blog-slug',
          params: { slug: this.post.prevLink.split('/')[2].replace(/\.md$/, '') }
        }
      } else {
        return { name: 'blog' }
      }
    },
    nextSlug () {
      return this.post.nextLink.split('/')[2].replace(/\.md$/, '')
    }
  }
}
</script>
