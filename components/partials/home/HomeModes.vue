<template>
  <div class="bg-light-surface dark:bg-dark-surface">
    <div class="container mx-auto px-4 pb-12">
      <section class="rounded py-6 sm:p-6">
        <!-- why modes i18n -->
        <i18n
          path="homepage.modes.title"
          tag="h2"
          class="text-3xl text-center pt-10 font-medium"
        >
          <template v-slot:nuxt>
            <AppTitle />
          </template>
        </i18n>
        <div class="flex flex-wrap">
          <div class="lg:w-1/2 p-4 lg:p-8">
            <FireIcon
              class="text-nuxt-green dark:text-nuxt-lightgreen mx-auto my-8 w-32"
            />
            <h4 class="text-center uppercase text-2xl pt-8 pb-4 font-medium">
              {{ $t('homepage.modes.ssr.title') }}
            </h4>

            <!-- ssr modes i18n -->
            <i18n
              path="homepage.modes.ssr.description"
              tag="p"
              class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            >
              <template v-slot:break>
                <br />
                <br />
              </template>
            </i18n>
          </div>
          <div class="lg:w-1/2 p-4 lg:p-8">
            <SnowIcon class="mx-auto my-8 w-32" />
            <h4 class="text-center uppercase text-2xl pt-8 pb-4 font-medium">
              {{ $t('homepage.modes.ssg.title') }}
            </h4>

            <!-- why ssg i18n -->
            <i18n
              path="homepage.modes.ssg.description"
              tag="p"
              class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            >
              <template v-slot:proverbial>
                <span class="text-gray-600">
                  ({{ $t('homepage.modes.ssg.proverbial') }} 🐦🐦)
                </span>
                <br /><br />
              </template>
            </i18n>
          </div>
        </div>
        <div class="px-4 lg:p-8">
          <h4 class="uppercase text-2xl pt-8 pb-4 font-medium">
            {{ $t('homepage.modes.spa.title') }}
          </h4>
          <p
            class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          >
            {{ $t('homepage.modes.spa.description') }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SnowIcon from '~/assets/icons/snow.svg?inline'
import FireIcon from '~/assets/icons/fire.svg?inline'

export default {
  components: {
    SnowIcon,
    FireIcon
  }
}
</script>
