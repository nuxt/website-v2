<template>
  <div
    class="
      fixed
      top-0
      left-0
      h-full
      overflow-auto
      pointer-events-auto
      min-h-fill-available
      lg:h-screen lg:sticky lg:top-header
      lg:w-1/5
    "
  >
    <div class="w-auto h-full overflow-auto d-bg-header dark:lg:bg-transparent lg:bg-transparent">
      <nav
        class="
          flex flex-col
          justify-between
          lg:justify-start
          max-w-sm
          overflow-y-auto
          text-sm
          font-medium
          lg:h-[reset]
          h-(full-header)
          d-scrollbar
        "
      >
        <div class="py-4 pl-4 pr-24 sm:pl-6 lg:pr-0 lg:pt-10">
          <ul>
            <li v-for="category in categories" :key="category.name">
              <button @click="selectCategory(category.name)" class="py-2 px-4 flex justify-between w-full" :class="{ 'rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10': category.name === selectedCategory }">
                <div class="truncate max-w-48 font">{{ category.name }}</div>
                <span v-if="category.name === selectedCategory" class="rounded-xl bg-white dark:bg-sky-darkest ml-2 px-2 py-0.5 text-xs">{{ category.count }}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      required: true
    },
  },
  setup(props) {
    // @ts-ignore
    let selectedCategory = ref('')

    function selectCategory(category: any) {
      if (category === selectedCategory.value) {
        category = null
        selectedCategory.value = ''
      } else {
        selectedCategory.value = category
      }

      this.$emit('category', category)
    }

    return {
      selectedCategory,
      selectCategory
    }
  },
})
</script>
