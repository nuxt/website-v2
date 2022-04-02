<template>
  <div class="lg:sticky top-0 lg:left-0 h-full pointer-events-auto lg:h-screen lg:top-header lg:w-1/5">
    <div class="w-auto h-full d-bg-header dark:lg:bg-transparent lg:bg-transparent">
      <nav
        class="
          flex
          lg:flex-col
          justify-between
          lg:justify-start lg:max-w-sm
          w-full
          overflow-y-auto
          text-sm
          font-medium
          lg:h-[reset]
          h-(full-header)
          d-scrollbar
        "
      >
        <div class="py-4 pr-0">
          <ul class="flex flex-wrap lg:flex-col">
            <li v-for="category in categories" :key="category.name" class="px-1">
              <AppButton
                button-class="py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent"
                :class="{
                  'rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10': category.name === selectedCategory
                }"
                @click.native="selectCategory(category.name)"
              >
                <span class="truncate max-w-48 font">{{ category.name }}</span>
                <span
                  v-if="category.name === selectedCategory"
                  class="rounded-xl bg-white dark:bg-sky-darkest ml-2 px-2 py-0.5 text-xs"
                >
                  {{ category.count }}
                </span>
              </AppButton>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useFuse } from '~/plugins/fuse'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    modules: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { selectedCategory, selectCategory } = useFuse(props.modules)

    return {
      selectedCategory,
      selectCategory
    }
  }
})
</script>
