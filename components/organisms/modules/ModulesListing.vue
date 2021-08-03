<template>
  <div v-if="pageFilteredModulesList" class="d-container-content">
    <div class="w-full flex-col flex md:flex-row space-y-8 pl-4 md:pl-0 md:space-y-0 justify-between md:border-b border-b-sky-dark pb-2">
      <div class="flex flex-row space-x-4 items-center justify-start">
        <IconSearch alt="Search Icon" class="text-sky-darker dark:text-white w-4 h-4" />
        <NuxtTextInput
          v-model="q"
          v-focus
          type="search"
          placeholder="Search a module (name, category, username, etc.)"
          class="bg-transparent border-none w-full md:w-md xl:w-4xl outline-none"
        />
      </div>
      <div class="flex space-x-2 items-center">
        <span>Sort by</span>
        <NuxtSelectNative
          v-model="sortBy"
          :options="sortFields"
          select-class="appearance-none block w-full bg-none dark:bg-transparent light:bg-white py-2 pl-3 pr-10 text-base focus:outline-none light:focus:ring-black dark:focus:ring-white light:focus:border-gray-400 dark:focus:border-secondary-light sm:text-md font-medium"
        />
        <button @click="toggleOrderBy" class="focus:outline-none focus:ring-transparent">
          <IconSortDesc v-if="orderBy === 'desc'" alt="Descending sort" class="text-sky-darker dark:text-white w-4 h-4"/>
          <IconSortAsc v-else alt="Ascending sort" class="text-sky-darker dark:text-white w-4 h-4"/>
        </button>
      </div>
    </div>
    <div class="lg:flex">
      <AsideModules :modules="modules" @category="getCategory" />
      <div class="w-full px-4 md:px-0 lg:w-4/5 min-w-0 min-h-0 lg:static lg:overflow-visible mt-8 grid md:grid-cols-2 gap-8 lg:ml-20 auto-rows-min">
        <div v-for="module in pageFilteredModulesList" :key="module.name">
          <LazyHydrate when-visible>
            <ModulesCard :module="module" />
          </LazyHydrate>
        </div>
        <ObserverModules @intersect="intersectedModulesLoading" />
      </div>
    </div>
  </div>
  <div v-else class="text-center">Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch, computed, watch } from '@nuxtjs/composition-api'
import { useModules } from '../../../plugins/modulesList'
import LazyHydrate from 'vue-lazy-hydration'
import Fuse from 'fuse.js/dist/fuse.basic.esm'

const sort = (a: number, b: number, asc: boolean) => asc ? a - b : b - a

const ORDERS = {
  DESC: 'desc',
  ASC: 'asc'
}

const MODULE_INCREMENT_LOADING = 12

export default defineComponent({
  components: { LazyHydrate },
  directives: {
    focus: {
      // directive definition
      inserted (el) {
        el.focus()
      }
    }
  },

  setup() {
    const { route } = useContext()
    const { getModules } = useModules()
    const sortFields = [{ text: 'Downloads' , value: 'downloads' }, { text: 'Stars', value: 'stars' }]
    const pending = ref(false)
    let modules = ref(null)
    let categories = ref(null)
    let fuse = null
    let q = ref(null)
    let orderBy = ref(ORDERS.DESC)
    let sortBy = ref(sortFields[0].value)
    let sortByMenuVisible = ref(false)
    let selectedCategory = ref('')
    let pageFilteredModulesList = ref(null)
    let moduleLoaded = MODULE_INCREMENT_LOADING

    // fetch modules
    useFetch(async () => {
      await getModules().then((mods) => {
        modules.value = mods
        init()
      })
    })

    const filteredModules = computed(() => {

      let filteredModulesList = modules.value

      if (filteredModulesList) {
        if (q.value) {
          filteredModulesList = fuse.search(q.value).map((r: { item: any }) => r.item)
        } else {
          filteredModulesList = filteredModulesList.sort((a: number, b: number) => sort(a[sortBy.value], b[sortBy.value], orderBy.value === ORDERS.ASC))
        }

        if (selectedCategory.value) {
          filteredModulesList = filteredModulesList.filter((module: { category: string }) => module.category === selectedCategory.value)
        }
      }

      return filteredModulesList
    })

    const sortByComp = computed(() => {
      return sortFields[sortBy.value]
    })

    const sortByOptions = computed(() => {
      const options = {}

      for (const field in sortFields) {
        if (field === sortBy.value) { continue }

        options[field] = {
          ...sortFields[field]
        }
      }
      return options
    })

    watch(selectedCategory, () => {
      syncURL()
    })

    watch(q, () => {
      syncURL()
    })

    watch(orderBy, () => {
      syncURL()
    })

    watch(sortBy, () => {
      syncURL()
    })

    function init() {
      const fuseOptions = {
        threshold: 0.1,
        keys: [
          'name',
          'npm',
          'category',
          'maintainers.name',
          'maintainers.github',
          'description',
          'repo'
        ]
      }
      const index = Fuse.createIndex(fuseOptions.keys, modules.value)
      fuse = new Fuse(modules.value, fuseOptions, index)

      const { query, sortedBy, orderedBy } = route.value.query
      if (query) {
        q.value = query
      }

      if (sortedBy) {
        sortBy.value = sortedBy as any
      }

      if (orderedBy) {
        orderBy.value = orderedBy as any
      }

      setPageFilteredModules(MODULE_INCREMENT_LOADING)
    }

    function syncURL () {
      const url = route.value.path
      let query = ''
      resetModuleLoaded()
      setPageFilteredModules(MODULE_INCREMENT_LOADING)

      if (q.value) {
        query += `?q=${q.value}`
      }

      if (orderBy.value !== ORDERS.DESC) {
        query += `${query ? '&' : '?'}orderBy=${orderBy.value}`
      }

      if (sortBy.value !== sortFields[0].value) {
        query += `${query ? '&' : '?'}sortBy=${sortBy.value}`
      }

      if (selectedCategory.value) {
        query += `#${selectedCategory.value}`
      }

      window.history.pushState('', '', `${url}${query}`)
    }

    function getCategory(category: string) {
      selectedCategory.value = category
    }

    function clearFilters () {
      selectedCategory.value = null
      q.value = null
      resetModuleLoaded()
    }

    function resetModuleLoaded () {
      moduleLoaded = MODULE_INCREMENT_LOADING
    }

    function toggleOrderBy () {
      orderBy.value = (orderBy.value === ORDERS.ASC) ? ORDERS.DESC : ORDERS.ASC
    }

    function selectSortBy (field: any) {
      sortBy.value = field
      sortByMenuVisible.value = false
    }

    function intersectedModulesLoading () {
      moduleLoaded += MODULE_INCREMENT_LOADING
      setPageFilteredModules(moduleLoaded)
    }

    function setPageFilteredModules (moduleLoaded: number) {
      pageFilteredModulesList.value = Object.assign([], filteredModules.value).splice(0, moduleLoaded)
    }

    return {
      filteredModules,
      pageFilteredModulesList,
      sortByComp,
      sortByOptions,
      sortBy,
      clearFilters,
      sortFields,
      toggleOrderBy,
      orderBy,
      selectSortBy,
      selectedCategory,
      intersectedModulesLoading,
      pending,
      q,
      categories,
      getCategory,
      modules
    }
  }
})
</script>
