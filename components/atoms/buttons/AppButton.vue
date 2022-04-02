<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <Component v-bind="buttonProps" :class="buttonClass ? buttonClass : ['app-button', extraClass, size]">
    <Component :is="icon" v-if="icon" class="mr-2 icon" :class="size" />

    <Markdown unwrap="p" />

    <IconExternalLink v-if="externalIcon" class="ml-2 icon" :class="size" />
  </Component>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    externalIcon: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String,
      default: ''
    },
    extraClass: {
      type: String,
      default: 'app-button-primary-color'
    },
    buttonClass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const buttonProps = computed(() => {
      const { to, href } = props
      if (to?.length) {
        return {
          is: 'AppLink',
          to
        }
      } else if (href?.length) {
        return {
          is: 'AppLink',
          href
        }
      } else {
        return {
          is: 'button'
        }
      }
    })

    return {
      buttonProps
    }
  }
})
</script>

<style lang="postcss" scoped>
.app-button {
  @apply inline-flex items-center flex-none rounded-md px-4 py-2.5 text-sm font-medium leading-4 transition-colors duration-200 border border-transparent focus:outline-none;
  &.small {
    @apply text-xs leading-2 py-2;
  }
  &.large {
    @apply text-base leading-6;
  }
}

.icon {
  @apply w-4 h-4;
  &.large {
    @apply w-5 h-5;
  }
}
</style>
