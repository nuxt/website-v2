import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'
import '@snackbar/core/dist/snackbar.css'

export function useTechnicalSupport() {
  // @ts-ignore
  const { $colorMode, query, app, $recaptcha } = useContext()

  const { i18n } = app;

  let _timeout
  const status = ref()
  const company = ref('')
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const subject = ref('')
  const message = ref('')
  const error = ref(null)
  const sent = ref(false)
  const pending = ref(false)
  const apiURL = process.env.NUXT_API || 'https://api.nuxtjs.com'

  const confirmSending = async (email, hash) => {
    const isLight = $colorMode.value === 'light'
    const SnackBar = () => import('@snackbar/core')
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

    $fetch(`${apiURL}/technicalSupport/confirm`, {
      method: 'POST',
      body: { email, hash }
    })
      .then(() => showSnackbar(i18n.t('support.confirm_sending')))
      .catch(async err => {
        if (err.data) {
          showSnackbar(i18n.t('support.error_sending'))
        }
      })
  }
  const send = async () => {

    // Cancel empty input
    if (!status.value || !status.value.trim()) return
    if (!company.value || !company.value.trim()) return
    if (!name.value || !name.value.trim()) return
    if (!email.value || !email.value.trim()) return
    if (!phone.value || !phone.value.trim()) return
    if (!subject.value || !subject.value.trim()) return
    if (!message.value || !message.value.trim()) return

    if (_timeout) clearTimeout(_timeout)
    error.value = null
    pending.value = true

    const token = await $recaptcha.execute('login')

    try {
      await $fetch(`${apiURL}/techninalSupport`, {
        method: 'POST',
        body: {
          status: status.value,
          company: company.value,
          name: name.value,
          email: email.value,
          phone: phone.value,
          subject: subject.value,
          message: message.value
        }
      })

      sent.value = email.value
      pending.value = false
    } catch (e) {
      pending.value = false
      sent.value = false

      if (e.data) {
        const { code, name } = e.data

        if (name === 'ValidationException') error.value = i18n.t('support.invalid_address')

        _timeout = setTimeout(() => (error.value = null), 3000)
      }
    }
  }


  if (query.value.email && query.value.hash) {
    confirmSending(query.value.email, query.value.hash)
  }

  return {
    email,
    status,
    company,
    phone,
    name,
    message,
    subject,
    error,
    send,
    pending,
    sent
  }
}
