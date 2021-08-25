<template>
  <div class="d-container-content">
    <div class="mt-8 flex flex-wrap gap-2">
      <button
        class="border border-black dark:border-white rounded-full px-3 py-0.5 focus:outline-none"
        :class="{
          'bg-black dark:bg-white text-white dark:text-black': !selectedCategory
        }"
        @click="selectedCategory = ''"
      >All</button>
      <template
        v-for="category in categories"
      >
        <button
          :key="category"
          class="border border-black dark:border-white rounded-full px-3 py-0.5 focus:outline-none"
          :class="{
            'bg-black dark:bg-white text-white dark:text-black': category === selectedCategory
          }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </template>
    </div>
    <div class="mt-8 grid md:grid-cols-3 gap-8 auto-rows-min">
      <div v-for="showcase in selectedShowcases" :key="showcase.id">
        <ShowcasesCard :showcase="showcase" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useAsync, ref, computed } from '@nuxtjs/composition-api'
import uniqBy from 'lodash/uniqBy'

import { useShowcases } from '../../../plugins/showcases'

export default defineComponent({
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  setup(props) {
    const { id } = props
    const { fetch: fetchShowcases, showcases } = useShowcases({ id })

    useAsync(async () => {
      await fetchShowcases()
    })

    const selectedCategory = ref('')

    const selectedShowcases = computed(() => {
      return uniqBy(showcases?.value?.groups
        ?.filter(group => !selectedCategory.value || group.name === selectedCategory.value)
        ?.flatMap(group => group.showcases)
        ?.sort((a, b) => Number(a.rank) - Number(b.rank)) || [], 'id')
    })

    const categories = computed(() => {
      return showcases?.value?.groups?.map(group => group.name) || []
    })

    function selectCategory (category) {
      if (category === selectedCategory.value) {
        selectedCategory.value = ''
      } else {
        selectedCategory.value = category
      }
    }

    return {
      showcases,
      selectedShowcases,
      categories,
      selectedCategory,
      selectCategory
    }
  }
})
</script>
