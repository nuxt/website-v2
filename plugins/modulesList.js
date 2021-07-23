import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function useModules() {
  // @ts-ignore
  const { query, app } = useContext()

  const { i18n } = app;

  let _timeout
  const error = ref(null)
  const pending = ref(false)
  const apiURL = 'https://api.nuxtjs.org/api'

  const modules = async () => {

    if (_timeout) clearTimeout(_timeout)
      error.value = null
      pending.value = true

    try {
      await $fetch(`${apiURL}/modules`)
      pending.value = false

    } catch (e) {
      console.log('exception', e)
      pending.value = false
      error.value = i18n.t('modules.error')
      _timeout = setTimeout(() => (error.value = null), 3000)
    }
  }

  return {
    modules
    error,
    pending
  }
}
