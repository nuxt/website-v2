<template>
  <div
    class="
      lg:sticky
      top-0
      lg:left-0
      h-full
      pointer-events-auto
      min-h-fill-available
      lg:h-screen lg:top-header
      lg:w-1/5
    "
  >
    <div class="w-auto h-full d-bg-header dark:lg:bg-transparent lg:bg-transparent">
      <nav
        class="
          flex lg:flex-col
          justify-between
          lg:justify-start
          lg:max-w-sm
          w-full
          overflow-y-auto
          text-sm
          font-medium
          lg:h-[reset]
          h-(full-header)
          d-scrollbar
        "
      >
        <div class="py-4 pr-0 lg:pt-10">
          <ul class="flex flex-wrap lg:flex-col">
            <li v-for="category in categories" :key="category.name">
              <button @click="selectCategory(category.name)" class="py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent" :class="{ 'rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10': category.name === selected }">
                <div class="truncate max-w-48 font">{{ category.name }}</div>
                <span v-if="category.name === selected" class="rounded-xl bg-white dark:bg-sky-darkest ml-2 px-2 py-0.5 text-xs">{{ category.count }}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, useFetch } from '@nuxtjs/composition-api'
import { useModules } from '../../../plugins/modulesList'

export default defineComponent({
  props: {
    modules: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    // @ts-ignore
    let selected = ref('')
    let categories = ref([])
    const { getModulesCategories } = useModules()

    //fetch modules
    useFetch(async () => {
      await getModulesCategories(props.modules).then((categs) => {
        categories.value = categs
      })
    })

    onMounted(() => {
      const selectedCateg = (window.location.hash || '').substr(1)
      if (selectedCateg) {
        selectCategory(selectedCateg)
      }
    })

    function selectCategory (category: string) {

      if (selected.value === category) {
        selected.value = null
      } else {
        selected.value = category
      }

      this.$emit('category', selected.value)
    }

    return {
      categories,
      selected,
      selectCategory
    }
  },
})
</script>
