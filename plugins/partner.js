import { ref, useContext, reactive } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function usePartnerContact(partnerSlug) {
  // @ts-ignore
  const { $recaptcha, $config } = useContext()

  const apiURL = $config.apiNuxtlabsURL || 'https://api.nuxtlabs.com'

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
        submitForm(partnerSlug, token)
      })
      .catch(() => {
        result.value = 'failure'
        setTimeout(() => {
          result.value = null
        }, 4000)
      })
  }

  const submitForm = (partnerSlug, recaptchaToken) => {
    $fetch(`${apiURL}/api/organizations/${partnerSlug}/contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: {
        token: recaptchaToken,
        ...form
      }
    })
      .then(() => {
        result.value = 'success'
        setTimeout(() => {
          result.value = null
        }, 4000)

        form.first_name = ''
        form.last_name = ''
        form.company_name = ''
        form.email = ''
        form.message = ''
      })
      .catch(() => {
        result.value = 'failure'
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
