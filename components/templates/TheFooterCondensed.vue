<template>
  <footer
    class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear"
  >
    <div class="container mx-auto px-6 pt-6 lg:pt-8">
      <div class="pb-6 xl:grid xl:grid-cols-2 xl:gap-24">
        <div
          class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-16 lg:gap-48 xl:gap-4"
        >
          <nav v-for="(l, title) in links" :key="title" class="text-left">
            <h3
              class="font-bold uppercase text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-lg pb-4 transition-colors duration-300 ease-linear"
            >
              {{ $t(`footer.links.${title}.title`) }}
            </h3>
            <ul
              class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
            >
              <li v-for="(link, i) in l" :key="i" class="py-2">
                <a
                  v-if="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-nuxt-lightgreen"
                >
                  {{ link.key }}
                </a>
                <NuxtLink
                  v-else
                  :to="link.to"
                  class="hover:text-nuxt-lightgreen"
                >
                  {{ link.key }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex justify-center text-center xl:text-left mt-8 xl:mt-0 xl:ml-32">
          <NewsletterFormNew />
        </div>
      </div>
      <div
        class="container mx-auto flex flex-row items-center content-center justify-between py-6 mb-16 lg:mb-0 border-t border-gray-200"
      >
        <div class="flex-1 flex">
          <DarkModeToggle />
        </div>
        <div class="flex-1 text-center text-sm hidden sm:block">
          © 2020 <b>NuxtJS</b>. All rights reserved.
          <a
            class="inline-block"
            href="https://url.netlify.com/B1Mh093Iv"
            target="_blank"
          >
            Deployed on <b>Netlify</b>.
          </a>
        </div>
        <div class="flex-1 text-right">
          <AppLangSelect
            :value="$i18n.locale"
            :options="$i18n.locales"
            label="Select language"
          >
            <template v-slot:icon>
              <GlobeIcon />
            </template>
          </AppLangSelect>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import GlobeIcon from '~/assets/icons/globe.svg?inline'

export default {
  components: {
    GlobeIcon
  },
  data() {
    return {
      links: {
        discover: [
          {
            key: this.$t('footer.links.about.team'),
            to: this.localePath('/team')
          },
          {
            key: this.$t('footer.links.about.design'),
            to: this.localePath('/design')
          },
          {
            key: this.$t('footer.links.about.contact'),
            href: 'https://twitter.com/nuxt_js'
          }
        ],
        about: [
          {
            key: this.$t('footer.links.support.faq'),
            to: this.localePath('/faq')
          },
          {
            key: this.$t('footer.links.support.discord'),
            href: 'https://discord.nuxtjs.org'
          },
          {
            key: this.$t('footer.links.support.contributionGuide'),
            href:
              'https://github.com/nuxt/nuxtjs.org/blob/master/content/en/_archives/guide/contribution-guide.md'
          }
        ],
        support: [
          {
            key: this.$t('footer.links.discover.shop'),
            to: this.localePath('/shop')
          },
          {
            key: this.$t('footer.links.discover.sponsorNuxt'),
            to: this.localePath('/sponsor-nuxtjs')
          },
          {
            key: this.$t('footer.links.discover.consulting'),
            to: this.localePath('/support')
          }
        ]
      }
    }
  }
}
</script>
