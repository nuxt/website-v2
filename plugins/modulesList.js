import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function useModules() {
  const apiURL = 'https://api.nuxtjs.org/api'

  const getModules = async () => {
    return await $fetch(`${apiURL}/modules`)
  }

  return {
    getModules
  }
}
