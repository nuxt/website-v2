<template>
  <div class="ListCard group">
    <template v-if="item.to || item.link">
      <div v-if="item.link" class="ListCard-external group-hover:opacity-100">
        <slot name="external">
          <NuxtImg alt="external_link" src="/img/icons/ext.svg" />
        </slot>
      </div>
      <AppLink :to="item.to || item.link" :aria-label="item.title" class="absolute inset-0" />
    </template>
    <div class="ListCard-body">
      <div class="w-full flex flex-row justify-between">
        <NuxtImg
          v-if="item.logo && item.logo.dark"
          :alt="`${item.title} logo`"
          :src="item.logo.dark"
          class="dark-img w-12 h-12 mr-4 rounded-md"
        />
        <NuxtImg
          v-if="item.logo && item.logo.light"
          :alt="`${item.title} logo`"
          :src="item.logo.light"
          class="light-img w-12 h-12 mr-4 rounded-md"
        />
        <NuxtImg
          v-if="typeof item.logo === 'string'"
          :alt="`${item.title} logo`"
          :src="item.logo || ''"
          class="w-12 h-12 mr-4 rounded-md"
        />
        <span v-if="item.location" class="text-cloud-lighter">{{ item.location }}</span>
      </div>
      <h3 class="font-bold text-xl py-2">{{ item.title || 'Title' }}</h3>
      <p class="text-sm">{{ item.description || 'Description' }}</p>
    </div>
    <slot name="footer" />
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
  @apply transition-opacity duration-200 opacity-0 absolute top-4 right-4 cursor-pointer h-6;
}
</style>
