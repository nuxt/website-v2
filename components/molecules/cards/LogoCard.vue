<template>
  <div class="ListCard group">
    <template v-if="item.link">
      <Link :to="item.link" :aria-label="item.title" target="_blank" class="absolute inset-0" />
      <nuxt-img class="ListCard-external group-hover:opacity-100" alt="external_link" src="/img/icons/ext.svg" />
    </template>
    <Link v-else :to="item.to || ''" :aria-label="item.title" class="absolute inset-0" />
    <div class="ListCard-body">
      <nuxt-img :alt="`${item.title} logo`" :src="item.logo || ''" class="w-12 h-12 mr-4 rounded-md" />
      <h3 class="font-bold text-xl py-2">{{ item.title || 'Title' }}</h3>
      <p class="text-sm">{{ item.description || 'Description' }}</p>
    </div>
    <div class="ListCard-foot">
      <slot name="footer" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="postcss">
.ListCard {
  @apply relative hover:bg-gray-50 hover:dark:bg-opacity-80 dark:bg-sky-darker rounded-md shadow-md py-6 px-4 flex flex-col justify-between;
}
.ListCard-external {
  @apply transition-opacity duration-200 opacity-0 absolute top-4 right-4 cursor-pointer h-6 w-6;
}
</style>
