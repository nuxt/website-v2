import { ssrRef } from '@nuxtjs/composition-api'
import { v4 } from 'uuid'

const notifications = ssrRef([])

const getLast = () => notifications.value[notifications.length - 1]

const remove = id => (notifications.value = notifications.value.filter(m => m.id !== id))

const add = function (notification) {
  const body = {
    id: v4(),
    ...notification
  }

  notifications.value.push(body)

  return body
}

export function useNotifications() {
  return {
    notifications,
    getLast,
    remove,
    add
  }
}
