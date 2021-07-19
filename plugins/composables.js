import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'
import '@snackbar/core/dist/snackbar.css'

export function useNewsletter() {
  // @ts-ignore
  const { $colorMode, query, app } = useContext()

  const { i18n } = app;

  let _timeout
  const email = ref('')
  const error = ref(null)
  const subscribed = ref(false)
  const pending = ref(false)
  const apiURL = process.env.NUXT_API || 'https://api.nuxtjs.com'

  const confirmSubscribtion = async (email, hash) => {
    const isLight = $colorMode.value === 'light'
    const SnackBar = () => import('@snackbar/core' /* webpackChunkName: "snackbar/core" */)
    const { createSnackbar } = await SnackBar()
    const showSnackbar = msg =>
      createSnackbar(msg, {
        timeout: 4000,
        theme: {
          backgroundColor: isLight ? '#012A35' : '#F9FAFB',
          textColor: isLight ? '#FFFFFF' : '#003543',
          actionColor: '#00DC82'
        }
      })

    $fetch(`${apiURL}/newsletter/confirm`, {
      method: 'POST',
      body: { email, hash }
    })
      .then(() => showSnackbar(i18n.t('footer.newsletter.form.subscribed_messages.confirmation')))
      .catch(async err => {
        if (err.data) {
          if (err.data.code === 'member-exists') {
            showSnackbar(i18n.t('footer.newsletter.form.already_registered'))
          }
        }
      })
  }
  const subscribe = async () => {
    // Cancel empty email
    if (!email.value || !email.value.trim()) return

    if (_timeout) clearTimeout(_timeout)
    error.value = null
    pending.value = true

    try {
      await $fetch(`${apiURL}/newsletter`, {
        method: 'POST',
        body: {
          email: email.value
        }
      })

      subscribed.value = email.value
      pending.value = false
    } catch (e) {
      pending.value = false
      subscribed.value = false

      if (e.data) {
        const { code, name } = e.data

        if (code === 'member-exists') error.value = i18n.t('footer.newsletter.form.already_registered')
        if (name === 'ValidationException') error.value = i18n.t('footer.newsletter.form.invalid_address')

        _timeout = setTimeout(() => (error.value = null), 3000)
      }
    }
  }


  if (query.value.email && query.value.hash) {
    confirmSubscribtion(query.value.email, query.value.hash)
  }

  return {
    email,
    error,
    subscribed,
    pending,
    subscribe
  }
}
