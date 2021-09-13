<template>
  <footer class="relative" aria-label="footerHeading">
    <div class="select-none pt-24 absolute w-full bottom-full">
      <img
        loading="lazy"
        :src="`/img/footer/dark/landscape.svg`"
        class="w-full h-20 lg:h-40 object-fill light:hidden pointer-events-none"
        alt="A landscape image"
      />
      <img
        loading="lazy"
        :src="`/img/footer/${$colorMode.value}/landscape.svg`"
        class="w-full h-20 lg:h-40 object-fill dark:hidden pointer-events-none"
        alt="A landscape image"
      />
    </div>
    <div class="bg-gray-50 dark:bg-secondary-black">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="group in links" :key="group.title">
          <h3 class="font-semibold light:text-gray-500 dark:text-cloud-light text-lg">
            {{ group.title }}
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in group.items" :key="link.title">
              <NuxtHref
                :href="link.href"
                :to="localePath(link.to)"
                :aria-label="link.title"
                class="light:text-gray-500 dark:text-white hover:d-primary-text-hover"
                >{{ link.title }}</NuxtHref
              >
            </li>
          </ul>
        </div>
        <div>
          <section id="subscribe-to-newsletter">
            <div>
              <h3 class="font-semibold light:text-gray-500 dark:text-cloud-light text-lg">
                {{ $t('footer.newsletter.title') }}
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-secondary-surface">
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
              <p v-else-if="error" class="absolute text-sm pt-1 text-yellow-500">{{ error }}</p>
            </div>
          </section>
          <ul class="flex items-center space-x-4 xl:space-x-5 mt-4">
            <li v-for="(social, key) in socials" :key="key">
              <NuxtHref :href="social.href" :aria-label="social.icon">
                <Component :is="social.icon" class="w-6 h-6 text-gray-400 dark:text-cloud-lighter hover:text-primary" />
              </NuxtHref>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, useContext, useFetch, ref } from '@nuxtjs/composition-api'
import { useNewsletter } from '~/plugins/composables'

export default defineComponent({
  setup() {
    const { email, error, subscribe, pending, subscribed } = useNewsletter()
    const { $docus, i18n } = useContext()
    const results = ref()
    const links = ref([])
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
    useFetch(async () => {
      results.value = await $docus
        .search('/collections/navigations/', { deep: true })
        .where({ slug: { $in: 'footer' }, language: i18n.locale })
        .fetch()
      links.value = results.value[0].links
    })
    return {
      links,
      socials,
      email,
      pending,
      subscribe,
      subscribed,
      error
    }
  }
})
</script>
