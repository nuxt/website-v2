import Fuse from 'fuse.js/dist/fuse.basic.esm'
import { ssrRef, computed, watch, useContext } from '@nuxtjs/composition-api'

// Sorting function
const sort = (a, b, asc) => (asc ? a - b : b - a)
// Default ordering
const ORDERS = {
  DESC: 'desc',
  ASC: 'asc'
}
// Incrementing interval
const MODULE_INCREMENT_LOADING = 12
// Sorting fields
const sortFields = [
  { text: 'Downloads', value: 'downloads' },
  { text: 'Stars', value: 'stars' }
]
// Fuse instance
const fuse = ssrRef(undefined, 'fuseInstanceRef')
// Query reference
const query = ssrRef(undefined, 'fuseQueryRef')
// Ordered by
const orderedBy = ssrRef(ORDERS.DESC, 'fuseOrderRef')
// Sorted by
const sortedBy = ssrRef(sortFields[0].value, 'fuseSortedByRef')
// Sort by menu
const sortByMenuVisible = ssrRef(false, 'fuseSortByMenuVisible')
// Currently selected category
const selectedCategory = ssrRef('', 'fuseSortByCategoryRef')
// Amount of modules loaded
const modulesLoaded = ssrRef(MODULE_INCREMENT_LOADING, 'fuseModulesLoadedRef')

/**
 * Modules helpers
 * NOTE: We still use a paramater instead of a direct reference to modules.js/modules
 *       as this composable could be used with other kind of datas afterwards.
 */
export function useFuse(modules) {
  // Context
  const { route } = useContext()

  // Filtered modules list
  const filteredModules = computed(() => {
    let filteredModulesList = modules.value

    // Filter modules w/ Fuse
    if (filteredModulesList) {
      if (query.value) {
        filteredModulesList = fuse.value.search(query.value).map(r => r.item)
      } else {
        filteredModulesList = filteredModulesList.sort((a, b) =>
          sort(a[sortedBy.value], b[sortedBy.value], orderedBy.value === ORDERS.ASC)
        )
      }

      if (selectedCategory.value) {
        filteredModulesList = filteredModulesList.filter(module => module.category === selectedCategory.value)
      }
    }

    return (filteredModulesList || []).splice(0, modulesLoaded.value)
  })

  // Sorting options
  const sortByComp = computed(() => sortFields[sortedBy.value])

  // Watch local references and sync URL on changes
  watch([selectedCategory, query, orderedBy, sortedBy], syncURL)

  // Initialize Fuse
  function init() {
    const fuseOptions = {
      threshold: 0.1,
      keys: ['name', 'npm', 'category', 'maintainers.name', 'maintainers.github', 'description', 'repo']
    }

    const index = Fuse.createIndex(fuseOptions.keys, modules.value)

    fuse.value = new Fuse(modules.value, fuseOptions, index)

    selectedCategory.value = (window.location.hash || '').substr(1)

    const { q, sortBy, orderBy } = route.value.query

    if (q) {
      query.value = q
    }

    if (sortBy) {
      sortedBy.value = sortBy
    }

    if (orderBy) {
      orderedBy.value = orderBy
    }

    modulesLoaded.value = MODULE_INCREMENT_LOADING
  }

  // Sync page URL with current page state
  function syncURL() {
    const url = route.value.path
    let q = ''
    resetModulesLoaded()
    modulesLoaded.value = MODULE_INCREMENT_LOADING

    if (query.value) {
      q += `?q=${query.value}`
    }

    if (orderedBy.value !== ORDERS.DESC) {
      q += `${q ? '&' : '?'}orderBy=${orderedBy.value}`
    }

    if (sortedBy.value !== sortFields[0].value) {
      q += `${q ? '&' : '?'}sortBy=${sortedBy.value}`
    }

    if (selectedCategory.value) {
      q += `#${selectedCategory.value}`
    }

    window.history.pushState('', '', `${url}${q}`)
  }

  // Select current category
  function getCategory(category) {
    selectedCategory.value = category
  }

  // Reset filters
  function clearFilters() {
    selectedCategory.value = null
    query.value = null
    resetModulesLoaded()
  }

  // Reset modules list incrementing
  function resetModulesLoaded() {
    modulesLoaded.value = MODULE_INCREMENT_LOADING
  }

  // Toggle sorting type
  function toggleOrderBy() {
    orderedBy.value = orderedBy.value === ORDERS.ASC ? ORDERS.DESC : ORDERS.ASC
  }

  // Select sorting type
  function selectSortBy(field) {
    sortedBy.value = field
    sortByMenuVisible.value = false
  }

  // Update selected category
  function selectCategory(category) {
    if (selectedCategory.value === category) selectedCategory.value = null
    else selectedCategory.value = category
  }

  // Intersection observer callback
  function loadModules() {
    modulesLoaded.value += MODULE_INCREMENT_LOADING
  }

  return {
    // References
    fuse,
    query,
    orderedBy,
    sortedBy,
    sortByMenuVisible,
    selectedCategory,
    modulesLoaded,
    // Computed
    filteredModules,
    sortByComp,
    // Functions
    init,
    syncURL,
    getCategory,
    clearFilters,
    resetModulesLoaded,
    toggleOrderBy,
    selectSortBy,
    selectCategory,
    loadModules
  }
}
