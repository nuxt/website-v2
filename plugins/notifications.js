import { useState, defineNuxtPlugin } from '#app'
import { v4 } from 'uuid'

export default defineNuxtPlugin(ctx => {
  const state = useState('notifications', () => [])

  const remove = id => (state.value = state.value.filter(m => m.id !== id))

  const add = function (notification) {
    const body = {
      id: v4(),
      ...notification
    }

    state.value.push(body)

    return body
  }

  // Inject menu
  ctx.provide('notifications', {
    state,
    remove,
    add
  })
})

export function useNotifications() {
  const { $notifications } = useNuxtApp().vue2App

  return $notifications
}
