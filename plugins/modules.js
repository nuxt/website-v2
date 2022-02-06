import { useContext, ssrRef } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Modules reference
const modules = ssrRef([], 'modulesRef')

// Categories reference
const categories = ssrRef([], 'categoriesRef')

/**
 * Modules helpers
 */
export function useModules() {
  const { $config } = useContext()

  // Nuxt API URL
  const apiURL = $config.apiURL || 'https://api.nuxtjs.org'

  // Fetch modules and categories
  const fetch = async () => {
    // Get modules
    modules.value = await $fetch(`${apiURL}/api/modules`)

    // Extract categories out of modules
    categories.value = Object.entries(
      modules.value.reduce((result, current) => {
        result[current.category] = (result[current.category] || 0) + 1
        return result
      }, {})
    )
      .map(categ => ({ name: categ[0], count: categ[1] }))
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

    return modules
  }

  return {
    fetch,
    modules,
    categories
  }
}
