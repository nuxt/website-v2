import { ssrRef } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Showcases reference
const showcases = ssrRef([], 'showcasesRef')

/**
 * Showcases helpers
 */
export function useShowcases({ id }) {
  // Fetch showcases
  const fetch = async () => {
    // Get showcases
    showcases.value = await $fetch(`https://api.vuetelescope.com/lists/${id}`)

    // ensure groups & showcases are well sorted
    showcases.value.groups?.sort((a, b) => Number(a.position) - Number(b.position))
    showcases.value.groups?.forEach(group => {
      group.showcases.sort((a, b) => Number(a.position) - Number(b.position))
    })

    return showcases
  }

  return {
    fetch,
    showcases
  }
}
