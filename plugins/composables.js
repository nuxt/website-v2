import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'
import '@snackbar/core/dist/snackbar.css'

export function useNewsletter() {
  // @ts-ignore
  const { query } = useContext()
  const email = ref('')
  const result = ref(null)
  const apiURL = process.env.NUXT_API || 'https://api.nuxtjs.org'

  const subscribe = async () => {
    // Cancel empty email
    if (!email.value || !email.value.trim()) return

    result.value = 'pending'

    await $fetch(`${apiURL}/api/newsletter/confirm`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: {
        email: email.value
      }
    })
      .then(() => {
        result.value = 'confirm'
      })
      .catch(err => {
        const { statusCode } = err.data
        result.value = 'failure'

        if (statusCode === 406) result.value = 'member-exists'
        if (statusCode === 422) result.value = 'invalid-email'
      })
      .finally(() => {
        setTimeout(() => {
          result.value = null
        }, 4000)
      })
  }

  const confirmSubscribtion = email => {
    $fetch(`${apiURL}/api/newsletter/subscribe`, {
      method: 'POST',
      body: { email }
    })
      .then(() => {
        result.value = 'suscribed'
      })
      .catch(err => {
        const { statusCode } = err.data
        result.value = 'failure'

        if (statusCode === 406) result.value = 'member-exists'
        if (statusCode === 422) result.value = 'invalid-email'
      })
      .finally(() => {
        setTimeout(() => {
          result.value = null
        }, 4000)
      })
  }

  if (query.value.hash && query.value.email) {
    confirmSubscribtion(query.value.email)
  }

  return {
    email,
    result,
    subscribe
  }
}
