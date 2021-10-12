<template>
  <Link
    class="button-link"
    :class="[customClass, size, bold ? 'font-semibold' : 'font-medium']"
    :to="href"
    :blank="blank"
  >
    <Component :is="icon" v-if="icon" class="mr-2" :class="{ 'w-5 h-5': size === 'large' }" />

    <Markdown unwrap="p ul li" />

    <IconExternalLink v-if="blank && externalIcon" class="w-4 h-4 ml-2" />
  </Link>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    href: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    },
    externalIcon: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    bold: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: 'text-black bg-primary-500 hover:bg-primary-400 focus:ring-primary-600 '
    }
  }
})
</script>

<style lang="postcss" scoped>
a.button-link {
  @apply inline-flex items-center flex-none rounded-md px-4 py-2.5 text-xs leading-4 transition-colors duration-200 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:outline-none;
  &.medium {
    @apply text-sm leading-4;
  }
  &.large {
    @apply text-base leading-6;
  }
}
</style>
