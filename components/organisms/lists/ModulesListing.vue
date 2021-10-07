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
        mb-2
      "
    >
      <div class="flex flex-row space-x-4 items-center justify-start">
        <IconSearch alt="Search Icon" class="text-sky-darker dark:text-white w-4 h-4" />
        <NuxtTextInput
          v-model="query"
          v-focus
          type="search"
          :placeholder="$t('modules.search')"
          class="bg-transparent border-none w-full md:w-md xl:w-4xl outline-none"
        />
      </div>
      <div class="flex space-x-1 items-center">
        <span>{{ $t('modules.sort_by') }}</span>
        <NuxtSelectNative
          v-model="sortedBy"
          :options="sortFields"
          select-class="appearance-none block w-full bg-none dark:bg-transparent light:bg-white ml-2 py-2 pl-3 pr-10 text-base focus:outline-none light:focus:ring-black dark:focus:ring-white light:focus:border-gray-400 dark:focus:border-secondary-light sm:text-md font-medium"
        />
        <button
          class="focus:outline-none focus:ring-transparent pl-3 pr-3 md:pr-0 py-3"
          aria-label="reverseSortButton"
          @click="toggleOrderBy"
        >
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
      <AsideModules :categories="categories" :modules="modules" />
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
          <ModulesCard :module="module" />
        </div>

        <ObserverModules @intersect="loadModules" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch } from '@nuxtjs/composition-api'
import { useModules } from '~/plugins/modules'
import { useFuse } from '~/plugins/fuse'

export default defineComponent({
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  setup(_) {
    // Modules composable
    const { fetch: fetchModules, categories, modules } = useModules()

    // Fuse composable
    const { query, orderedBy, sortedBy, filteredModules, sortFields, toggleOrderBy, loadModules, updateList } =
      useFuse(modules)

    useFetch(async () => {
      const modules = await fetchModules()
      updateList(modules)
    })

    return {
      categories,
      modules,
      filteredModules,
      sortedBy,
      sortFields,
      toggleOrderBy,
      orderedBy,
      query,
      loadModules
    }
  }
})
</script>
