import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function useNewsletter() {
  // @ts-ignore
  const { query, $config } = useContext()
  const email = ref('')
  const newsletterResult = ref('')
  const pending = ref(false)

  const apiURL = $config.apiURL || 'https://api.nuxtjs.org'

  const subscribe = () => {
    // Cancel empty email
    if (!email.value || !email.value.trim()) return

    pending.value = true

    $fetch(`${apiURL}/api/newsletter/confirm`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: {
        email: email.value
      }
    })
      .then(() => {
        newsletterResult.value = 'confirm'
      })
      .catch(err => {
        newsletterError(err)
      })
      .finally(() => (pending.value = false))
  }

  const confirmSubscribtion = email => {
    pending.value = true

    $fetch(`${apiURL}/api/newsletter/subscribe`, {
      method: 'POST',
      body: { email }
    })
      .then(() => {
        newsletterResult.value = 'subscribed'
      })
      .catch(err => {
        newsletterError(err)
      })
      .finally(() => (pending.value = false))
  }

  if (query.value.hash && query.value.email) {
    confirmSubscribtion(query.value.email)
  }

  const newsletterError = err => {
    const { statusCode } = err.data
    newsletterResult.value = 'failure'

    if (statusCode === 419) newsletterResult.value = 'member-exists'
    if (statusCode === 420) newsletterResult.value = 'sending-error'
    if (statusCode === 422) newsletterResult.value = 'invalid-email'
  }

  return {
    email,
    newsletterResult,
    pending,
    subscribe
  }
}
