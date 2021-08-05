<template>
  <footer class="" aria-labelledby="footerHeading">
    <div class="select-none pt-24">
      <img
        loading="lazy"
        :src="`/img/footer/dark/landscape.svg`"
        class="w-full h-40 object-fill light:hidden pointer-events-none"
        alt="A landscape image"
      />
      <img
        loading="lazy"
        :src="`/img/footer/${$colorMode.value}/landscape.svg`"
        class="w-full h-40 object-fill dark:hidden pointer-events-none"
        alt="A landscape image"
      />
    </div>
    <div class="bg-gray-50 dark:bg-secondary-black">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-4">
            <div v-for="i in 2" :key="i">
              <FooterLink
                :links="i === 1 ? links.slice(0, 2) : links.slice(2, 4)"
                class="md:grid md:grid-cols-2 md:gap-8"
              />
            </div>
          </div>
          <div class="mt-12 xl:mt-0">
            <h3 class="text-lg font-semibold light:text-gray-400 dark:text-cloud-light">{{ $t('common.settings') }}</h3>
            <FooterLocaleSelector class="mt-4 sm:max-w-xs" />
            <FooterColorModeSelector class="mt-4 sm:max-w-xs" />
          </div>
        </div>
        <FooterNewsLetter
          class="
            border-t
            light:border-gray-200
            dark:border-secondary-darker
            pt-8
            lg:flex lg:items-center lg:justify-between
            xl:mt-0
          "
        />
        <FooterFoot
          class="
            mt-8
            border-t border-gray-200
            dark:border-secondary-darker
            pt-8
            md:flex md:items-center md:justify-between
            flex-row-reverse
          "
        />
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const links = [
      {
        title: 'About',
        subLinks: [
          {
            title: 'Blog',
            to: '/blog'
          },
          {
            title: 'Support',
            to: '/support'
          },
          {
            title: 'Design Kit',
            to: '/design'
          },
          {
            title: 'Contact Us',
            href: 'https://twitter.com/nuxt_js'
          }
        ]
      },
      {
        title: 'Ressources',
        subLinks: [
          {
            title: 'Examples',
            to: '/examples'
          },
          {
            title: 'Deployments',
            to: '/docs/deployment'
          },
          {
            title: 'Modules',
            to: '/resources/modules'
          },
          {
            title: 'Themes',
            to: '/resources/themes'
          },
          {
            title: 'Telemetry',
            href: 'https://stats.nuxtjs.org/'
          }
        ]
      },
      {
        title: 'Community',
        subLinks: [
          {
            title: 'Team',
            to: '/team'
          },
          {
            title: 'Sustainability',
            to: '/sponsor-nuxtjs'
          },
          {
            title: 'Vue Telescope',
            href: 'https://vuetelescope.com/'
          },
          {
            title: 'Videos courses',
            to: '/resources/video-courses'
          }
        ]
      }
    ]

    return { links }
  }
})
</script>
