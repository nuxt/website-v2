import { ssrRef, computed, watch, useRoute, useRouter } from '@nuxtjs/composition-api'

// Sorting function
const sort = (a, b, asc) => (asc ? a - b : b - a)
// Default ordering
const ORDERS = {
  DESC: 'desc',
  ASC: 'asc'
}
// Incrementing interval
const MODULE_INCREMENT_LOADING = 24
// Sorting fields
const sortFields = ['downloads', 'stars']
// Modules
const modules = ssrRef([])
// Filtered modules
const filteredModules = ssrRef([])
// Query reference
const query = ssrRef(undefined, 'fuseQueryRef')
// Ordered by
const orderedBy = ssrRef('desc', 'fuseOrderRef')
// Sorted by
const sortedBy = ssrRef('downloads', 'fuseSortedByRef')
// Currently selected category
const selectedCategory = ssrRef(undefined, 'fuseSortByCategoryRef')
// Amount of modules loaded
const modulesLoaded = ssrRef(MODULE_INCREMENT_LOADING, 'fuseModulesLoadedRef')
// Sorting options
const sortByComp = computed(() => sortFields[sortedBy.value])

// Fuzzy search to avoid using Fuse
// https://stackoverflow.com/a/39905590/3926832
const fuzzySearch = (value, query, ratio = 0.75) => {
  const string = value.toLowerCase()
  const compare = query.toLowerCase()
  let matches = 0
  if (string.includes(compare)) return true
  for (let i = 0; i < compare.length; i++) {
    string.includes(compare[i]) ? (matches += 1) : (matches -= 1)
  }
  return matches / string.length >= ratio || query === ''
}

/**
 * Modules helpers
 * NOTE: We still use a paramater instead of a direct reference to modules.js/modules
 *       as this composable could be used with other kind of datas afterwards.
 */
export function useFuse() {
  // Context
  const route = useRoute()
  const router = useRouter()

  // Watch local references and sync URL on changes
  watch([selectedCategory, query, orderedBy, sortedBy], () => {
    updateList()
    syncURL()
  })

  // Watch modules count to display and update list accordingly
  watch(modulesLoaded, () => updateList())

  // Update modules list
  function updateList() {
    let filteredModulesList = Object.assign([], modules.value)

    // Filter by query
    if (query.value) {
      filteredModulesList = filteredModulesList.filter(item =>
        [
          item.name,
          item.npm,
          item.category,
          item.maintainers.name,
          item.maintainers.github,
          item.description,
          item.repo
        ]
          .filter(Boolean)
          .some(attribute => fuzzySearch(attribute, query.value))
      )
    }

    // Filter by sorting type
    if (sortedBy.value) {
      filteredModulesList = filteredModulesList.sort((a, b) =>
        sort(a[sortedBy.value], b[sortedBy.value], orderedBy.value === ORDERS.ASC)
      )
    }

    // Filter by categories
    if (selectedCategory.value) {
      filteredModulesList = filteredModulesList.filter(module => module.category === selectedCategory.value)
    }

    // Splice with intersection observer count value
    filteredModulesList = filteredModulesList.splice(0, modulesLoaded.value)

    // Assign to displayed list
    filteredModules.value = filteredModulesList
  }

  // Initialize modules
  function init(loadedModules) {
    modules.value = loadedModules.value
  }

  function syncModules() {
    // Get selected category from hash location
    selectedCategory.value = route.value.hash.substr(1)

    // Get other query params
    const { q, sortBy, orderBy } = route.value.query

    if (q) query.value = q

    if (sortBy) sortedBy.value = sortBy

    if (orderBy) orderedBy.value = orderBy
  }

  // Sync page URL with current page state
  function syncURL() {
    const url = route.value.path

    let q = ''

    if (query.value) q += `?q=${query.value}`

    if (orderedBy.value !== ORDERS.DESC) q += `${q ? '&' : '?'}orderBy=${orderedBy.value}`

    if (sortedBy.value !== sortFields[0]) q += `${q ? '&' : '?'}sortBy=${sortedBy.value}`

    if (selectedCategory.value) q += `#${selectedCategory.value}`

    // Rewrite url
    router.replace(
      `${url}${q}`,
      () => {},
      () => {}
    )
  }

  // Select current category
  function getCategory(category) {
    selectedCategory.value = category
  }

  // Toggle sorting type
  function toggleOrderBy() {
    orderedBy.value = orderedBy.value === ORDERS.ASC ? ORDERS.DESC : ORDERS.ASC
  }

  // Select sorting type
  function selectSortBy(field) {
    sortedBy.value = field
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

  // Reset filters
  function clearFilters() {
    selectedCategory.value = null
    query.value = null
  }

  return {
    // References
    query,
    orderedBy,
    sortedBy,
    selectedCategory,
    modulesLoaded,
    // Data
    sortFields,
    // Computed
    filteredModules,
    // Functions
    init,
    updateList,
    syncModules,
    syncURL,
    getCategory,
    clearFilters,
    toggleOrderBy,
    selectSortBy,
    selectCategory,
    loadModules
  }
}
