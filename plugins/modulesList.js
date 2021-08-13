import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'
// Universal $fetch workaround (server/client side)
const _fetch = typeof fetch === "undefined" ? require('ohmyfetch/node').$fetch : $fetch

export function useModules() {
  const apiURL = 'https://api.nuxtjs.org/api'

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
