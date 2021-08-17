<template>
  <nav class="relative flex items-center justify-center w-full h-full">
    <Link
      v-for="{ title, href, slug, blank, icon } in links"
      :key="slug"
      :aria-label="title"
      class="relative flex flex-col items-center justify-center h-full px-4 font-medium text-center capitalize group"
      :to="href"
      :blank="blank"
      :class="{
        'text-primary': currentSlug === slug,
        'hover:d-primary-text-hover': currentSlug !== slug
      }"
    >
    <div class="flex items-center">
      {{ $t(`header.${title}`) }}
      <Component v-if="icon" :is="icon" class="w-4 h-4 ml-2 opacity-0 lg:group-hover:opacity-100" />
    </div>
    </Link>
  </nav>
</template>
<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'Docs',
          slug: 'docs',
          href: '/docs'
        },
        {
          title: 'Examples',
          slug: 'examples',
          href: '/examples'
        },
        {
          title: 'Modules',
          slug: 'modules',
          href: '/modules'
        },
        {
          title: 'Resources',
          slug: 'resources',
          href: '/resources'
        },
        {
          title: 'Partners',
          slug: 'partners',
          href: '/sponsors-nuxtjs'
        }
      ]
    }
  },
  setup() {
    const route = useRoute()
    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })
    return {
      currentSlug
    }
  }
})
</script>
<style scoped lang="postcss">
.nuxt-link-active {
  color: rgba(52, 211, 153);
}
.menu li {
  display: block;
  position: relative;
}
</style>
