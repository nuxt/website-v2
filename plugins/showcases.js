import { useState, defineNuxtPlugin } from '#app'
import { $fetch } from 'ohmyfetch'

export default defineNuxtPlugin(ctx => {
  // Showcases reference
  const state = useState('showcases', () => [])

  // Fetch showcases
  const fetch = async id => {
    // Get showcases
    state.value = await $fetch(`https://api.vuetelescope.com/lists/${id}`)

    // Ensure groups & showcases are well sorted
    state.value.groups?.sort((a, b) => Number(a.position) - Number(b.position))
    state.value.groups?.forEach(group => {
      group.showcases.sort((a, b) => Number(a.position) - Number(b.position))
    })

    return state.value
  }

  ctx.provide('showcases', {
    state,
    fetch
  })
})

/**
 * Showcases helpers
 */
export function useShowcases() {
  const { $showcases } = useNuxtApp().vue2App

  return $showcases
}
