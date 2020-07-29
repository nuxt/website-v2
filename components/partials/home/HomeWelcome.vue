<template>
  <div
    class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt relative"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between py-16 sm:py-24">
        <div
          class="w-full lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0"
        >
          <!--welcome title i18n -->
          <i18n
            path="homepage.welcome.title"
            tag="h1"
            class="text-4xl xl:text-5xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal leading-tight mb-6"
          >
            <template v-slot:br>
              <br />
            </template>
            <template v-slot:frameworkType>
              <span class="text-nuxt-lightgreen">
                Vue
              </span>
            </template>
          </i18n>
          <!--welcome description i18n -->
          <i18n
            path="homepage.welcome.description"
            tag="h2"
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            <template v-slot:openSource>
              <span title="Under MIT license">
                {{ $t('homepage.welcome.openSource') }}
              </span>
            </template>
          </i18n>

          <div class="flex flex-col sm:block py-4">
            <AppButton
              :to="{
                name: 'guides-book-slug',
                params: {
                  book: 'get-started',
                  slug: 'installation'
                }
              }"
              variant="primary"
              data-cy="get-started"
              class="sm:mr-4 py-3 px-6 text-base mb-4"
            >
              <MeteorIcon slot="icon" class="h-5 -mb-1 mr-1" />
              {{ $t('homepage.welcome.get_started') }}
            </AppButton>
            <AppButton
              href="https://github.com/nuxt/nuxt.js"
              variant="secondary"
              class="sm:mr-4 py-3 px-6 text-base"
              data-cy="github-stars"
            >
              <GithubIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $config.nuxtStars }} github stars
            </AppButton>
          </div>
          <div
            class="flex flex-col sm:block text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          >
            <a
              href="#subscribe-to-newsletter"
              class="hover:text-light-onSurfacePrimary dark:hover:text-dark-onSurfacePrimary"
            >
              {{ $t('homepage.welcome.get_updates') }} 💌
            </a>
          </div>
        </div>
        <figure class="hidden lg:block lg:w-5/12">
          <AppMedia
            src="https://player.vimeo.com/video/311756540"
            class="mb-4"
          />
          <!--welcome video i18n -->
          <i18n
            path="homepage.welcome.video"
            tag="p"
            class="font-medium py-2 text-xs xl:text-sm text-center text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          >
            <template v-slot:company>
              <span>
                <a
                  href="https://www.vuemastery.com"
                  target="_blank"
                  rel="noopener"
                >
                  Vue Mastery
                </a>
              </span>
            </template>
            <template v-slot:cheatSheet>
              <span>
                <a
                  href="https://www.vuemastery.com/nuxt-cheat-sheet/"
                  target="_blank"
                  rel="noopener"
                >
                  {{ $t('homepage.welcome.cheatSheet') }}
                </a>
              </span>
            </template>
          </i18n>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import MeteorIcon from '~/assets/icons/meteor.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'

export default {
  components: {
    MeteorIcon,
    GithubIcon
  }
}
</script>
