<template>
  <ul class="flex items-center space-x-4 xl:space-x-5">
    <li v-for="(social, key) in socials" :key="key">
      <NuxtHref :href="social.href" :title="social.name">
        <Component :is="social.icon" class="w-6 h-6 text-gray-400 dark:text-cloud-lighter hover:text-primary" />
      </NuxtHref>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const socials = [
      {
        name: 'Nuxt Youtube',
        href: 'https://www.youtube.com/channel/UCJ9jj5YMzo-HsyM6WG9Q_Lg',
        icon: 'IconYoutube'
      },
      {
        name: 'Nuxt Discord',
        href: 'https://discord.com/invite/ps2h6QT',
        icon: 'IconDiscord'
      },
      {
        name: 'Nuxt Twitter',
        href: 'https://twitter.com/nuxt_js',
        icon: 'IconTwitter'
      },
      {
        name: 'Nuxt GitHub',
        href: 'https://github.com/nuxt',
        icon: 'IconGitHub'
      }
    ]

    return {
      socials
    }
  }
})
</script>
