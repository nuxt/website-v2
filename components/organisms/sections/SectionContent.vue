<template>
  <div
    class="flex flex-col w-full col-span-12"
    :class="{
      'items-start': position === 'left',
      'items-center jtext-center': position === 'center',
      'items-end': position === 'right'
    }"
  >
    <slot name="icon" />
    <div v-if="$scopedSlots.category" class="mb-2">
      <slot name="category" />
    </div>
    <div v-if="$scopedSlots.title" class="mb-2">
      <slot name="title" />
    </div>
    <div v-if="$scopedSlots.paragraph" class="mb-8">
      <slot name="paragraph" />
    </div>
    <div v-if="$scopedSlots.content" class="w-full my-8">
      <slot name="content" />
    </div>
    <slot name="link" />
    <slot name="banner" />
    <slot name="button" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    position: {
      type: String,
      default: 'center',
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      }
    }
  }
})
</script>
