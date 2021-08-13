import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Nuxt API URL
const apiURL = 'https://api.nuxtjs.org/api'

// Universal $fetch workaround (server/client side)
const _fetch = typeof fetch === 'undefined' ? require('ohmyfetch/node').$fetch : $fetch

let modules = null
export function useModules() {
  const getModules = async () => {
    if (modules) return modules
    modules = await $fetch(`${apiURL}/modules`)
    return modules
  }

  async function getModulesCategories (modules) {
    return Object.entries(modules
      .reduce((result, current) => {
        result[current.category] = (result[current.category] || 0) + 1
        return result
      }, {}))
      .map(categ => ({ name: categ[0], count: categ[1] }))
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  }

  return {
    getModules,
    getModulesCategories
  }
}
