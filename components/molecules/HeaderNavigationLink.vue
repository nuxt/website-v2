<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component
    v-bind="linkProps"
    :key="link.slug"
    :aria-label="link.title"
    class="flex font-medium capitalize group whitespace-nowrap"
    :class="{
      'text-primary': currentSlug === link.slug,
      'hover:d-primary-text-hover': currentSlug !== link.slug
    }"
  >
    {{ $t(`header.${link.title}`) }}
  </component>
</template>

<script>
import { defineComponent, useRoute, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    const linkProps = computed(() => {
      const { to, href } = props.link
      if (to?.length) {
        return {
          is: 'Link',
          to
        }
      } else if (href?.length) {
        return {
          is: 'Link',
          static: true,
          to: '',
          href,
          blank: true
        }
      } else {
        return {
          is: 'span'
        }
      }
    })

    return {
      currentSlug,
      linkProps
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
