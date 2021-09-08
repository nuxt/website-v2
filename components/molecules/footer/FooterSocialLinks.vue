<template>
  <ul class="flex items-center space-x-4 xl:space-x-5">
    <li v-for="(social, key) in socials" :key="key">
      <NuxtHref :href="social.href" :aria-label="social.icon">
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
        href: 'https://github.com/nuxt',
        icon: 'IconGitHub'
      },
      {
        href: 'https://twitter.com/nuxt_js',
        icon: 'IconTwitter'
      },
      {
        href: 'https://discord.com/invite/ps2h6QT',
        icon: 'IconDiscord'
      }
    ]

    return {
      socials
    }
  }
})
</script>
