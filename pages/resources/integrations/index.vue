<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <i18n
            path="resources.integrations.title"
            tag="h1"
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            <template v-slot:nuxt>
              <AppTitle />
            </template>
          </i18n>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            {{ $t('resources.integrations.description') }}
          </h3>
        </div>
        <IntegrationsIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-1/3 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <section class="flex flex-wrap -mx-4 py-4">
        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="{
            name: 'resources-integrations-category',
            params: { category }
          }"
          class="block w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
        >
          <div
            class="block bg-light-surface dark:bg-dark-surface hover:bg-gray-200 rounded p-4 text-center transition-colors duration-300 ease-linear"
          >
            <h2
              class="text-xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium uppercase pt-2 pb-4 transition-colors duration-300 ease-linear"
            >
              {{ category }}
            </h2>
            <img
              :src="`/img/resources/${category}.svg`"
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary inline-block w-2/3 xl:w-5/6 transition-colors duration-300 ease-linear"
            />
          </div>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script>
import uniq from 'lodash/uniq'

import IntegrationsIllustration from '~/assets/illustrations/integrations.svg?inline'

export default {
  components: {
    IntegrationsIllustration
  },
  async asyncData({ $content, app, params }) {
    const integrations = await $content('integrations')
      .only(['name', 'categories'])
      .fetch()
    const categories = uniq(
      [].concat(...integrations.map(r => r.categories)).sort()
    )
    return {
      categories
    }
  },
  head() {
    const title = this.$t('resources.integrations.meta.title')
    const description = this.$t('resources.integrations.meta.description')

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
