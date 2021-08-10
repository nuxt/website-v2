<template>
  <div class="d-container-content">
    <div
      class="
        w-full
        flex-col flex
        md:flex-row
        space-y-8
        pl-4
        md:pl-0 md:space-y-0
        justify-between
        md:border-b
        border-b-sky-dark
        pb-2
      "
    >
      <div class="flex flex-row space-x-4 items-center justify-start">
        <IconSearch alt="Search Icon" class="text-sky-darker dark:text-white w-4 h-4" />
        <NuxtTextInput
          v-model="query"
          v-focus
          type="search"
          placeholder="Search a module (name, category, username, etc.)"
          class="bg-transparent border-none w-full md:w-md xl:w-4xl outline-none"
        />
      </div>
      <div class="flex space-x-2 items-center">
        <span>Sort by</span>
        <NuxtSelectNative
          v-model="sortedBy"
          :options="sortFields"
          select-class="appearance-none block w-full bg-none dark:bg-transparent light:bg-white py-2 pl-3 pr-10 text-base focus:outline-none light:focus:ring-black dark:focus:ring-white light:focus:border-gray-400 dark:focus:border-secondary-light sm:text-md font-medium"
        />
        <button class="focus:outline-none focus:ring-transparent" @click="toggleOrderBy">
          <IconSortDesc
            v-if="orderedBy === 'desc'"
            alt="Descending sort"
            class="text-sky-darker dark:text-white w-4 h-4"
          />
          <IconSortAsc v-else alt="Ascending sort" class="text-sky-darker dark:text-white w-4 h-4" />
        </button>
      </div>
    </div>
    <div class="lg:flex">
      <AsideModules />
      <div
        class="
          w-full
          px-4
          md:px-0
          lg:w-4/5
          min-w-0 min-h-0
          lg:static lg:overflow-visible
          mt-8
          grid
          md:grid-cols-2
          gap-8
          lg:ml-20
          auto-rows-min
        "
      >
        <div v-for="module in filteredModules" :key="module.name">
          <LazyHydrate when-visible>
            <ModulesCard :module="module" />
          </LazyHydrate>
        </div>
        <ObserverModules @intersect="loadModules" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch, onMounted, nextTick } from '@nuxtjs/composition-api'
import LazyHydrate from 'vue-lazy-hydration'
import { useModules } from '../../../plugins/modules'
import { useFuse } from '../../../plugins/fuse'

export default defineComponent({
  components: { LazyHydrate },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  setup(_) {
    // Modules composable
    const { fetch: fetchModules, modules } = useModules()

    // Fuse composable
    const {
      query,
      orderedBy,
      sortedBy,
      selectedCategory,
      filteredModules,
      clearFilters,
      sortByComp,
      selectSortBy,
      init,
      sortFields,
      toggleOrderBy,
      loadModules
    } = useFuse(modules)

    // Fetch modules
    useFetch(async () => await fetchModules())

    // Init client side
    onMounted(() => nextTick(init))

    return {
      filteredModules,
      sortByComp,
      sortedBy,
      clearFilters,
      sortFields,
      toggleOrderBy,
      orderedBy,
      selectSortBy,
      selectedCategory,
      query,
      loadModules
    }
  }
})
</script>
