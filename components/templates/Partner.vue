<template>
  <div>
    <div class="h-80 p-6 flex justify-center items-center bg-sky-darkest">
      <img v-if="page.logoFull" loading="lazy" :src="`${page.logoFull}`" :alt="page.title" class="h-20" />
    </div>

    <div class="d-container-content">
      <div class="relative flex gap-8 -mt-6 sm:-mt-8 pb-8 xl:pb-16">
        <div class="w-24 h-24 sm:w-32 sm:h-32 p-4 bg-cloud-surface dark:bg-sky-darker rounded-md flex">
          <img :src="`/img/companies/square/light/${page.icon}`" :alt="page.title" class="light-img text-white" />
          <img :src="`/img/companies/square/dark/${page.icon}`" :alt="page.title" class="dark-img text-white" />
        </div>
        <div class="flex flex-col justify-end gap-1">
          <h1 class="text-display-5 sm:text-display-4 font-bold">{{ page.title }}</h1>
          <AppLink :href="page.link" rel="noopener">
            <IconExternalLink class="inline w-4 h-4 mr-1" /> {{ websiteDomain }}
          </AppLink>
        </div>
      </div>

      <div class="flex flex-col-reverse gap-8 xl:gap-12 xl:flex-row xl:justify-between">
        <div class="w-full xl:w-[70%]">
          <p class="text-md sm:text-lg">
            <span style="white-space: pre-wrap">{{ page.fullDescription }}</span>
          </p>

          <div
            class="flex flex-col sm:flex-row w-full bg-cloud-surface dark:bg-sky-darker rounded-md mt-8 xl:mt-12 overflow-hidden"
          >
            <div class="text-white p-6" :class="page.emailAddress ? 'sm:w-1/3' : 'w-full'" :style="customBackground">
              <div class="flex flex-col h-full">
                <h2 v-if="page.emailAddress" class="font-semibold text-lg">
                  {{ $t('sustainability.mvp_detail.contact_partner', { partner: page.title }) }}
                </h2>
                <h2 v-else class="font-semibold text-lg">
                  {{ $t('sustainability.mvp_detail.follow_partner', { partner: page.title }) }}
                </h2>
                <span v-if="page.emailAddress" class="block text-gray-100 mt-2">{{
                  $t('sustainability.mvp_detail.they_will_get_back_to_you')
                }}</span>
                <span v-else class="block text-gray-100 mt-2">{{
                  $t('sustainability.mvp_detail.find_them_on_the_web')
                }}</span>
                <div class="flex justify-between" :class="!page.emailAddress ? 'flex-row-reverse' : 'flex-col h-full'">
                  <div>
                    <AppLink :href="page.link" rel="noopener" class="flex items-center mt-4">
                      <IconExternalLink class="inline flex-shrink-0 w-4 h-4 mr-1" />
                      <span class="truncate">{{ websiteDomain }}</span>
                    </AppLink>

                    <AppLink v-if="page.phoneNumber" :href="`tel:${page.phoneNumber}`" class="flex items-center mt-4">
                      <IconPhone class="inline flex-shrink-0 w-4 h-4 mr-1" />
                      <span class="truncate">{{ page.phoneNumber }}</span>
                    </AppLink>
                  </div>

                  <div class="flex gap-10" :class="page.emailAddress ? 'items-end' : 'items-end'">
                    <AppLink
                      v-if="page.twitter"
                      :href="`https://twitter.com/${page.twitter}`"
                      aria-label="twitter link"
                    >
                      <IconTwitter class="inline w-6 h-6" />
                    </AppLink>
                    <AppLink v-if="page.github" :href="`https://github.com/${page.github}`" aria-label="github link">
                      <IconGitHub class="inline w-6 h-6" />
                    </AppLink>
                    <AppLink
                      v-if="page.linkedin"
                      :href="`https://www.linkedin.com/company/${page.linkedin}`"
                      aria-label="linkedin link"
                    >
                      <IconLinkedIn class="inline w-6 h-6" />
                    </AppLink>
                    <AppLink
                      v-if="page.facebook"
                      :href="`https://www.facebook.com/${page.facebook}`"
                      aria-label="facebook link"
                    >
                      <IconFacebook class="inline w-6 h-6" />
                    </AppLink>
                  </div>
                </div>
              </div>
            </div>

            <form
              v-if="page.emailAddress"
              class="contact-form sm:w-2/3 h-full grid grid-cols-1 lg:grid-cols-2 p-6 gap-6"
              @submit.prevent="validateForm"
            >
              <div>
                <label for="firstName" class="block">{{ $t('sustainability.mvp_detail.first_name') }}</label>
                <AppInput id="firstName" v-model="form.first_name" type="text" required />
              </div>
              <div>
                <label for="lastName" class="block">{{ $t('sustainability.mvp_detail.last_name') }}</label>
                <AppInput id="lastName" v-model="form.last_name" type="text" required />
              </div>
              <div>
                <label for="companyName" class="block">{{ $t('sustainability.mvp_detail.company_name') }}</label>
                <AppInput id="companyName" v-model="form.company_name" type="text" required />
              </div>
              <div>
                <label for="email" class="block">{{ $t('sustainability.mvp_detail.email') }}</label>
                <AppInput id="email" v-model="form.email" type="text" required />
              </div>
              <div class="lg:col-span-full">
                <label for="message" class="block">{{ $t('sustainability.mvp_detail.message') }}</label>
                <AppTextarea id="message" v-model="form.message" rows="5" required no-resize />
              </div>
              <div class="lg:col-span-full flex justify-end">
                <AppButton submit>{{ $t('sustainability.mvp_detail.submit') }}</AppButton>
              </div>
              <div v-if="resultText" class="lg:col-span-full rounded-md p-4" :class="resultStyle">
                {{ resultText }}
              </div>
            </form>
          </div>
        </div>

        <div class="relative w-full xl:w-[30%]">
          <div class="xl:sticky xl:top-header px-6 py-3 bg-cloud-surface dark:bg-sky-darker rounded-md">
            <div v-if="page.location" class="py-3">
              <h2 class="font-semibold text-lg mb-2">{{ $t('sustainability.mvp_detail.location') }}</h2>
              <span class="text-sm text-sky-dark dark:text-gray-300">{{ page.location }}</span>
            </div>
            <div v-if="page.services && page.services.length" class="py-3">
              <h2 class="font-semibold text-lg mb-2">{{ $t('sustainability.mvp_detail.services') }}</h2>
              <ul class="flex flex-row flex-wrap gap-3">
                <li
                  v-for="(service, index) in page.services"
                  :key="index"
                  class="text-sm rounded-md bg-cloud-lightest dark:bg-sky-dark px-2 py-1"
                >
                  {{ service }}
                </li>
              </ul>
            </div>
            <div v-if="page.resources && page.resources.length" class="py-3">
              <h2 class="font-semibold text-lg mb-2">{{ $t('sustainability.mvp_detail.resources') }}</h2>
              <ul>
                <li v-for="(link, index) in page.resources" :key="index">
                  <AppLink
                    :href="link.url"
                    rel="noopener"
                    class="inline-flex items-center text-sm text-sky-dark dark:text-gray-300"
                  >
                    <IconExternalLink class="inline w-4 h-4 mr-1" />
                    {{ link.name }}
                  </AppLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-center mt-16 xl:mt-24">
        <img loading="lazy" :src="`/img/partners/banner.svg`" alt="A landscape image" />
        <div class="absolute inset-0 flex lg:flex-col items-center justify-center gap-4 sm:gap-12 lg:gap-8">
          <span class="block text-2xl sm:text-4xl font-bold">{{ $t('sustainability.mvp_detail.join_us') }}</span>
          <AppButton href="mailto:partners@nuxtlabs.com" :size="$mq === 'xs' ? 'small' : 'large'">{{
            $t('partners.become_partner')
          }}</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, computed, onMounted, onBeforeUnmount } from '@nuxtjs/composition-api'
import { usePartnerContact } from '~/plugins/partner'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      app: { i18n },
      $recaptcha
    } = useContext()
    const { validateForm, result, form } = usePartnerContact(props.page.emailAddress)

    const resultText = computed(() => {
      switch (result.value) {
        case 'success':
          return i18n.t('partners.contact_success')
        case 'failure':
          return i18n.t('common.an_error_occurred')
      }
      return ''
    })
    const resultStyle = computed(() => {
      switch (result.value) {
        case 'success':
          return 'bg-green-500 text-black'
        case 'failure':
          return 'bg-red-500 text-white'
      }
      return ''
    })

    const websiteDomain = computed(() => {
      let domain

      if (props.page.link.includes('//')) {
        domain = props.page.link.split('/')[2]
      } else {
        domain = props.page.link.split('/')[0]
      }

      return domain
    })

    if (!process.dev) {
      onMounted(() => $recaptcha.init().catch(() => console.error('recaptcha error')))
      onBeforeUnmount(() => $recaptcha.destroy())
    }

    const customBackground = computed(() => {
      if (typeof props.page.color === 'object') {
        if (props.page.color?.length === 1) {
          return `background-color: ${props.page.color[0]}`
        }
        const colors = props.page.color
          .map((value, index) => `${value} ${Math.round((index / (props.page.color.length - 1)) * 100)}%`)
          .join(', ')
        return `background: radial-gradient(100% 100% at 0% 0%, ${colors})`
      } else if (props.page.color) {
        return `background-color: ${props.page.color}`
      } else {
        return 'background-color: #255461' // sky-dark
      }
    })

    return {
      websiteDomain,
      customBackground,
      form,
      resultText,
      resultStyle,
      validateForm
    }
  }
})
</script>

<style scoped>
.contact-form {
  & label {
    @apply text-sm mb-1 font-medium;
  }
  & input {
    @apply bg-cloud-lightest dark:bg-sky-dark px-3;
  }
  & textarea {
    @apply bg-cloud-lightest dark:bg-sky-dark text-base px-3;
  }
  & button {
    @apply border-2 border-transparent focus:border-black;
  }
}
</style>
