<template>
  <footer class="relative z-10" :class="{ 'mt-64': !home }" aria-label="footerHeading">
    <div class="select-none absolute bottom-full w-full">
      <img
        v-if="!home"
        loading="lazy"
        :src="`/img/footer/dark/landscape.svg`"
        class="w-full h-12 sm:h-20 lg:h-40 object-fill dark-img pointer-events-none"
        alt="A landscape image"
      />
      <img
        v-if="!home"
        loading="lazy"
        :src="`/img/footer/light/landscape.svg`"
        class="w-full h-12 sm:h-20 lg:h-40 object-fill light-img pointer-events-none"
        alt="A landscape image"
      />
    </div>
    <div :class="!home ? 'bg-gray-50 dark:bg-secondary-black' : 'bg-secondary-darker'">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="group in links" :key="group.title">
          <h3
            class="font-semibold text-lg"
            :class="!home ? 'light:text-gray-500 dark:text-cloud-light' : 'text-cloud-light'"
          >
            {{ group.title }}
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in group.items" :key="link.title">
              <NuxtHref
                :href="link.href"
                :to="localePath(link.to)"
                :aria-label="link.title"
                class=""
                :class="
                  !home
                    ? 'light:text-gray-500 dark:text-white hover:d-primary-text-hover'
                    : 'text-white hover:text-cloud-light'
                "
                >{{ link.title }}</NuxtHref
              >
            </li>
          </ul>
        </div>
        <div>
          <section id="subscribe-to-newsletter">
            <div>
              <h3
                class="font-semibold text-lg"
                :class="!home ? 'light:text-gray-500 dark:text-cloud-light' : 'text-cloud-light'"
              >
                {{ $t('footer.newsletter.title') }}
              </h3>
              <p
                class="mt-2 text-base"
                :class="!home ? 'text-gray-500 dark:text-secondary-surface' : 'text-secondary-surface'"
              >
                {{ $t('footer.newsletter.description') }}
              </p>
            </div>
            <div class="relative">
              <InputGroupButton
                v-model="email"
                class="justify-end sm:justify-start"
                :placeholder="$t('footer.newsletter.form.email')"
                @submit="subscribe"
              >
                {{ pending ? $t('footer.newsletter.form.subscribing') : $t('footer.newsletter.form.subscribe') }}
              </InputGroupButton>
              <p v-if="subscribed" class="pt-1 text-green-400">
                {{ $t('footer.newsletter.form.subscribed_messages.pre') }}
                {{ subscribed }}
              </p>
              <p v-else-if="error" class="pt-1 text-sm text-yellow-500">{{ error }}</p>
            </div>
          </section>
          <ul class="flex items-center space-x-4 xl:space-x-5 mt-4">
            <li v-for="(social, key) in socials" :key="key">
              <NuxtHref :href="social.href" :aria-label="social.icon" class="block">
                <Component
                  :is="social.icon"
                  class="w-6 h-6 hover:text-primary"
                  :class="!home ? 'text-gray-400 dark:text-cloud-lighter' : 'text-gray-300'"
                />
              </NuxtHref>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'
import { useNewsletter } from '~/plugins/composables'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { email, error, subscribe, pending, subscribed } = useNewsletter()
    const { $docus, app, route } = useContext()
    const socials = [
      {
        href: 'https://twitter.com/nuxt_js',
        icon: 'IconTwitter'
      },
      {
        href: 'https://discord.com/invite/ps2h6QT',
        icon: 'IconDiscord'
      },
      {
        href: 'https://github.com/nuxt',
        icon: 'IconGitHub'
      }
    ]
    const home = computed(() => route.value.path === app.localePath('/'))
    return {
      socials,
      email,
      pending,
      subscribe,
      subscribed,
      error,
      home
    }
  }
})
</script>
