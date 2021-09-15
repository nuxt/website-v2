import { ssrRef } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Universal $fetch workaround (server/client side)
const _fetch = typeof fetch === 'undefined' ? require('ohmyfetch/node').$fetch : $fetch

// Showcases reference
const showcases = ssrRef([], 'showcasesRef')

/**
 * Showcases helpers
 */
export function useShowcases({ id }) {
  // Fetch showcases
  const fetch = async () => {
    // Get showcases
    showcases.value = await _fetch(`https://api.vuetelescope.com/lists/${id}`)

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
