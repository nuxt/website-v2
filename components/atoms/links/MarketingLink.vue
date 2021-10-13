<template>
  <Link
    class="relative inline-flex items-center font-bold group flex-nowrap max-w-max"
    :class="'text-' + color"
    :to="`${to}`"
    :blank="blank"
  >
    <span
      :class="[{ 'text-md 2xl:text-base ': size === 'sm' }, { 'text-lg': size === 'md' }, { 'text-xl': size === 'lg' }]"
      >{{ name }}</span
    >

    <Component :is="icon" class="ml-2" :class="size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'" />

    <span class="absolute -bottom-2 h-0.5 w-8 group-hover:w-full transition-all" :class="'bg-' + color" />
  </Link>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'IconChevronRight'
    },
    blank: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md'
    }
  }
})
</script>
