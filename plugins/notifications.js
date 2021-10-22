import { reactive, readonly } from '@nuxtjs/composition-api'
import { v4 } from 'uuid'

export function useNotifications() {
  const state = reactive({
    notifications: []
  })

  const getLastNotification = function () {
    const notifications = state.notifications.filter(notification => !!notification.undo)

    return notifications[notifications.length - 1]
  }

  const addNotificationMutation = function (notification) {
    const index = state.notifications.findIndex(n => n.id === notification.id)
    if (index === -1) {
      state.notifications.push(notification)
    }
  }

  const removeNotificationMutation = function (id) {
    state.notifications = state.notifications.filter(m => m.id !== id)
  }

  const addNotificationAction = function (notification) {
    console.log('addNotifications')
    const body = {
      id: v4(),
      ...notification
    }
    addNotificationMutation(body)
    return body
  }

  const removeNotificationAction = function (id) {
    removeNotificationMutation(id)
  }

  return {
    state: readonly(state),
    addNotificationMutation,
    removeNotificationMutation,
    addNotificationAction,
    removeNotificationAction,
    getLastNotification
  }
}
