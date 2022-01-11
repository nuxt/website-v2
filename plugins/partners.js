import { useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function usePartners() {
  const { $config } = useContext()

  const apiURL = $config.apiNuxtlabsURL || 'https://api.nuxtlabs.com'

  const fetch = async type => {
    return await $fetch(`${apiURL}/api/partners`, {
      params: type ? { type } : {}
    })
  }

  return {
    fetch
  }
}
