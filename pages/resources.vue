<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <i18n
            path="resources.title"
            tag="h1"
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            {{ $t('resources.title') }}
            <template v-slot:nuxt>
              <AppTitle />
            </template>
          </i18n>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            {{ $t('resources.description') }}
          </h3>
        </div>
        <ThemesIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <section class="flex flex-wrap -mx-4">
        <NuxtLink :to="{ name: 'themes' }" class="block w-full lg:w-1/2 p-4">
          <div
            class="block bg-light-surface dark:bg-dark-surface hover:bg-gray-200 rounded p-8 text-center transition-colors duration-300 ease-linear"
          >
            <h2
              class="text-2xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium uppercase mb-8 transition-colors duration-300 ease-linear"
            >
              {{ $t('resources.themes.title') }}
            </h2>
            <ThemingIllustration
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary inline-block w-auto h-40 sm:h-56 xl:h-64 transition-colors duration-300 ease-linear"
            />
          </div>
        </NuxtLink>
        <NuxtLink :to="{ name: 'video-courses' }" class="w-full lg:w-1/2 p-4">
          <div
            class="block bg-light-surface dark:bg-dark-surface hover:bg-gray-200 rounded p-8 text-center transition-colors duration-300 ease-linear"
          >
            <h2
              class="text-2xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium uppercase mb-8 transition-colors duration-300 ease-linear"
            >
              {{ $t('resources.videos.title') }}
            </h2>
            <VideosIllustration
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary inline-block w-auto h-40 sm:h-56 xl:h-64 transition-colors duration-300 ease-linear"
            />
          </div>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script>
import ThemesIllustration from '~/assets/illustrations/themes.svg?inline'
import ThemingIllustration from '~/assets/illustrations/theming.svg?inline'
import VideosIllustration from '~/assets/illustrations/videos.svg?inline'

export default {
  components: {
    ThemesIllustration,
    ThemingIllustration,
    VideosIllustration
  },
  head() {
    const title = this.$t('resources.meta.title')
    const description = this.$t('resources.meta.description')

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>
