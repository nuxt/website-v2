<template>
  <footer class="relative z-10" :class="{ 'mt-28 sm:mt-36 md:mt-48 lg:mt-64': !isHome }" aria-label="footerHeading">
    <div class="select-none absolute bottom-full w-full">
      <img
        v-if="!isHome"
        loading="lazy"
        :src="`/img/footer/dark/landscape.svg`"
        class="w-full h-12 sm:h-20 lg:h-40 object-fill dark-img pointer-events-none"
        alt="A landscape image"
      />
      <img
        v-if="!isHome"
        loading="lazy"
        :src="`/img/footer/light/landscape.svg`"
        class="w-full h-12 sm:h-20 lg:h-40 object-fill light-img pointer-events-none"
        alt="A landscape image"
      />
    </div>
    <div :class="!isHome ? 'bg-gray-50 dark:bg-secondary-black' : 'bg-secondary-darker'">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="group in links" :key="group.title">
          <h3
            class="font-semibold text-lg"
            :class="!isHome ? 'light:text-gray-500 dark:text-cloud-light' : 'text-cloud-light'"
          >
            {{ group.title }}
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in group.items" :key="link.title">
              <AppLink
                :to="localePath(link.to)"
                :href="link.href"
                :aria-label="link.title"
                :class="
                  !isHome
                    ? 'light:text-gray-500 dark:text-white hover:d-primary-text-hover'
                    : 'text-white hover:text-cloud-light'
                "
                >{{ link.title }}</AppLink
              >
            </li>
          </ul>
        </div>
        <div>
          <section id="subscribe-to-newsletter">
            <div>
              <h3
                class="font-semibold text-lg"
                :class="!isHome ? 'light:text-gray-500 dark:text-cloud-light' : 'text-cloud-light'"
              >
                {{ $t('footer.newsletter.title') }}
              </h3>
              <p
                class="mt-2 text-base"
                :class="!isHome ? 'text-gray-500 dark:text-secondary-surface' : 'text-secondary-surface'"
              >
                {{ $t('footer.newsletter.description') }}
              </p>
            </div>
            <form class="mt-4 sm:flex sm:justify-start" @submit.prevent="subscribe">
              <AppInput v-model="email" :placeholder="$t('footer.newsletter.form.email')" />
              <AppButton
                type="sumbit"
                extra-class="mt-2 sm:mt-0 sm:ml-2 bg-primary text-gray-800 font-semibold hover:bg-primary-400 focus:bg-primary-300"
                submit
              >
                {{ pending ? $t('footer.newsletter.form.subscribing') : $t('footer.newsletter.form.subscribe') }}
              </AppButton>
            </form>
          </section>
          <ul class="flex items-center space-x-4 xl:space-x-5 mt-4">
            <li v-for="(social, key) in socials" :key="key">
              <AppLink :href="social.href" :aria-label="social.title" :title="social.title" class="block">
                <Component
                  :is="social.icon"
                  class="w-6 h-6 hover:text-primary"
                  :class="!isHome ? 'text-gray-400 dark:text-cloud-lighter' : 'text-gray-300'"
                />
              </AppLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, useContext, watch } from '@nuxtjs/composition-api'
import { useNewsletter } from '~/plugins/newsletter'
import { useNav } from '~/plugins/nav'
import { useNotifications } from '~/plugins/notifications'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { i18n } = useContext()
    const { email, newsletterResult, subscribe, pending } = useNewsletter()
    const { isHome } = useNav()
    const { add: addNotification } = useNotifications()

    const socials = [
      {
        href: 'https://twitter.com/nuxt_js',
        icon: 'IconTwitter',
        title: 'Follow us on Twitter!'
      },
      {
        href: 'https://discord.com/invite/ps2h6QT',
        icon: 'IconDiscord',
        title: 'Join our Discord server!'
      },
      {
        href: 'https://github.com/nuxt',
        icon: 'IconGitHub',
        title: 'See our works on GitHub!'
      }
    ]

    watch(newsletterResult, newVal => {
      if (newVal !== '') showNotification(newVal)
    })

    function showNotification(result) {
      let notificationOptions = { text: '', type: '', timer: 0 }

      switch (result) {
        case 'failure':
          notificationOptions = {
            text: i18n.t('common.an_error_occurred'),
            type: 'error'
          }
          break
        case 'invalid-email':
          notificationOptions = {
            text: i18n.t('footer.newsletter.form.invalid_address'),
            type: 'warning'
          }
          break
        case 'sending-error':
          notificationOptions = {
            text: i18n.t('footer.newsletter.form.subscribed_messages.error'),
            type: 'warning'
          }
          break
        case 'member-exists':
          notificationOptions = {
            text: i18n.t('footer.newsletter.form.already_registered'),
            type: 'warning'
          }
          break
        case 'subscribed':
          notificationOptions = {
            text: i18n.t('footer.newsletter.form.subscribed_messages.confirmation'),
            type: 'success'
          }
          break
        case 'confirm':
          notificationOptions = {
            text: i18n.t('footer.newsletter.form.subscribed_messages.pre'),
            type: 'success',
            timer: 5000
          }
          break
      }

      addNotification({
        title: i18n.t('footer.newsletter.title'),
        description: notificationOptions.text,
        type: notificationOptions.type,
        timeout: notificationOptions.timer || 4000
      })

      newsletterResult.value = ''
    }

    return {
      socials,
      email,
      isHome,
      subscribe,
      pending
    }
  }
})
</script>
