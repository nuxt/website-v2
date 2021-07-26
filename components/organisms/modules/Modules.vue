<template>
  <div v-if="!pending" class="d-container">
    <div class="w-full flex justify-between border-b border-b-sky-dark pb-2">
      <div class="flex space-x-1 items-center">
        <IconSearch alt="Search Icon" class="text-sky-darker dark:text-white w-4 h-4" />
        <NuxtTextInput class="bg-transparent border-none w-full outline-none" />
      </div>
      <div>
        Sort by
      </div>
    </div>
    <div class="lg:flex">
      <AsideModules :categories="categories" v-on:category="filterModules" />
      <div class="w-4/5 min-w-0 min-h-0 lg:static lg:overflow-visible mt-8 grid grid-cols-2 gap-8 ml-20 auto-rows-min">
        <div v-for="module in filteredModules" :key="module.name">
          <ModulesCard :module="module" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch, computed } from '@nuxtjs/composition-api'
import { useModules } from '../../../plugins/modulesList'

export default defineComponent({
  setup() {
    const { i18n } = useContext()
    const { getModules } = useModules()
    const modules = ref(null)
    const filteredModules = ref(null)
    const error = ref(null)
    const pending = ref(false)

    useFetch(async () => {

      pending.value = true

      await getModules().then((res) => {
          pending.value = false
          modules.value = res
          filteredModules.value = modules.value
        })
        .catch(() => {
          pending.value = false
          error.value = i18n.t('modules.error')
        })
    })

    //get categories, remove duplicate and count
    const categories = computed(() => {
      let categoriesArray = []

      const modulesCategories = Object.entries(modules.value.reduce((result: any, current: any) => {
        result[current['category']] = (result[current['category']] || 0) + 1;
        return result;
      }, {}));

      categoriesArray = modulesCategories.map(categ => ({ name: categ[0], count: categ[1] as number }))
      categoriesArray = categoriesArray.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

      return categoriesArray
    })

    //filter categories by category
    function filterModules(category: string) {
      category ?
        filteredModules.value = modules.value.filter((mod: { category: string }) => mod.category === category) :
        filteredModules.value = modules.value
    }

    return {
      modules,
      error,
      pending,
      categories,
      filterModules,
      filteredModules
    }
  },
})
</script>
