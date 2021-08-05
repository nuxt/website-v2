import { ref, useContext, watch } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Nuxt API URL
const apiURL = 'https://api.nuxtjs.org/api'

// Universal $fetch workaround (server/client side)
const _fetch = typeof fetch === "undefined" ? require('ohmyfetch/node').$fetch : $fetch

// Errored reference
const error = ref(false)

// Modules reference
const modules = ref()

// Categories reference
const categories = ref()

/**
 * Modules helpers
 */
export function useModules() {
  // Fetch modules and categories
  const fetch = async () => {
    // Get modules
    modules.value = await _fetch(`${apiURL}/modules`)

    // Extract categories out of modules
    categories.value = Object.entries(modules.value
      .reduce((result, current) => {
        result[current.category] = (result[current.category] || 0) + 1
        return result
      }, {}))
      .map(categ => ({ name: categ[0], count: categ[1] }))
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  }

  return {
    fetch,
    error,
    modules,
    categories
  }
}
