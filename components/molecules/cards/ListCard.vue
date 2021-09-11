<template>
  <div class="ListCard">
    <div class="ListCard-body flex">
      <nuxt-img :alt="`${item.title} logo`" src="/img/icons/ext.svg" class="w-12 h-12 mr-4" />
      <div class="ListCard-body-content">
        <h3 class="font-bold text-xl pb-2">{{ item.title || 'Title' }}</h3>
        <p class="max-h-20 overflow-y-auto">{{ item.description || 'Description' }}</p>
      </div>
    </div>
    <div class="ListCard-foot hidden">Foot</div>
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
  @apply group relative hover:bg-gray-50 hover:dark:bg-opacity-80 dark:bg-sky-darker rounded-md shadow-md py-6 px-4 flex flex-col justify-between;
}
</style>
