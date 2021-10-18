import { ref, useContext, reactive } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function usePartnerContact(partnersEmail) {
  // @ts-ignore
  const { app, $recaptcha } = useContext()

  const { i18n } = app

  const apiURL = process.env.NUXT_ORG_API || 'https://api.nuxtjs.org'

  const form = reactive({
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    message: ''
  })

  const result = ref(null)

  const validateForm = () => {
    $recaptcha
      .execute('login')
      .then(token => {
        submitForm(partnersEmail, token)
      })
      .catch(() => {
        result.value = { text: i18n.t('common.an_error_occurred'), class: 'bg-red-500' }
        setTimeout(() => {
          result.value = null
        }, 4000)
      })
  }

  const submitForm = (partnersEmail, recaptchaToken) => {
    $fetch(`${apiURL}/api/partners/contact`, {
      method: 'POST',
      body: {
        partner_email: partnersEmail,
        token: recaptchaToken,
        ...form
      }
    })
      .then(() => {
        result.value = { text: i18n.t('partners.contact_success'), class: 'bg-green-500 text-black' }
        setTimeout(() => {
          result.value = null
        }, 4000)
      })
      .catch(() => {
        result.value = { text: i18n.t('common.an_error_occurred'), class: 'bg-red-500' }
        setTimeout(() => {
          result.value = null
        }, 4000)
      })
  }

  return {
    validateForm,
    result,
    form
  }
}
