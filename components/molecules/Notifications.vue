<template>
  <div class="fixed bottom-0 right-0 flex flex-col justify-end w-full z-50 sm:w-96">
    <div v-if="notifications.length" class="px-4 py-6 space-y-3 overflow-y-auto sm:px-6 lg:px-8">
      <div
        v-for="(notification, index) of notifications"
        v-show="index === notifications.length - 1"
        :key="notification.id"
      >
        <Notification
          v-bind="notification"
          :class="notification.click && 'cursor-pointer'"
          @click.native="notification.click && notification.click(notification)"
          @close="remove(notification.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useNotifications } from '~/plugins/notifications'

export default defineComponent({
  setup() {
    const { notifications, remove } = useNotifications()

    return {
      remove,
      notifications
    }
  }
})
</script>
