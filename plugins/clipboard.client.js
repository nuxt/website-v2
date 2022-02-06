import { useNotifications } from '~/plugins/notifications'

export default ({ $t }, inject) => {
  const { add: addNotification } = useNotifications()

  inject('clipboard', {
    copy: (text, successMsg, failureMsg) => {
      if (!navigator.clipboard) {
        return false
      }

      navigator.clipboard.writeText(text).then(
        function () {
          addNotification({
            type: 'success',
            title: successMsg || $t('common.copied'),
            timer: 3000
          })
        },
        function () {
          addNotification({
            type: 'error',
            title: failureMsg || $t('common.an_error_occurred'),
            timer: 3000
          })
        }
      )
      return true
    }
  })
}
