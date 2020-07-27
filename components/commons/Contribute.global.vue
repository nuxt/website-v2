<template>
  <div class="pt-4">
<<<<<<< HEAD:components/commons/Contribute.global.vue
    <div class="clearfix">
      <span v-if="prevLink" class="text-primary-base hover:underline">← <nuxt-link :to="baseLink + prevLink.to">{{ prevLink.name }}</nuxt-link></span>
      <span v-if="nextLink" class="inline-block float-right text-primary-base hover:underline"><nuxt-link :to="baseLink + nextLink.to">{{ nextLink.name }}</nuxt-link> →</span>
    </div>
=======
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/common/AppContribute.vue
    <div class="pt-3 mt-6 border-t border-light-border dark:border-dark-border">
      <h3
        v-if="contributors.length"
        class="empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
      >
        {{ $t('contribute.title') }}
      </h3>
      <div v-if="contributors.length">
        <a
          v-for="contributor of contributors"
          :key="contributor.author"
          :href="`https://github.com/${contributor.author}`"
          rel="noopener"
          target="_blank"
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary bg-light-surfaceElevated light:hover:bg-gray-300 dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface rounded overflow-hidden inline-flex mb-2 mr-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
        >
          <img
            :alt="contributor.author"
            :srcset="`https://github.com/${contributor.author}.png?size=32 1x, https://github.com/${contributor.author}.png?size=64 2x`"
            :src="`https://github.com/${contributor.author}.png?size=32`"
            class="h-8"
          />
          <span class="inline-block px-2 leading-loose">
            {{ contributor.author }}
          </span>
        </a>
      </div>
<<<<<<< HEAD:components/commons/Contribute.global.vue
      <p v-if="docLink" class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-1 mb-8 transition-colors duration-300 ease-linear">{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank" rel="noopener" class="text-primary-base hover:underline">{{ $store.state.lang.guide.edit_on_github }}</a></p>
      <carbon-ads-text :key="$route.path" />
=======
      <BaseAlert
        v-if="
          !$route.path.startsWith('/guides') && !$route.path.startsWith('/blog')
        "
        type="warning"
        class="my-4"
      >
        {{ $t('contribute.msg1') }}
        <NuxtLink
          class="text-nuxt-lightgreen"
          to="/guides/get-started/installation"
        >
          {{ $t('contribute.link') }}
        </NuxtLink>
        {{ $t('tryNewDocs.msg2') }}
      </BaseAlert>
      <p
        v-if="docLink && $route.params.book"
        class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-1 mb-8 transition-colors duration-300 ease-linear"
      >
        {{ $t('contribute.docs') }}
        <a
          :href="docLink"
          target="_blank"
          rel="noopener"
          class="text-primary-base hover:underline"
        >
          {{ $t('contribute.edit_on_github') }}
        </a>
      </p>
      <p
        v-else-if="docLink && $route.path.startsWith('/blog')"
        class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-1 mb-8 transition-colors duration-300 ease-linear"
      >
        {{ $t('contribute.blog') }}
        <a
          :href="docLink"
          target="_blank"
          rel="noopener"
          class="text-primary-base hover:underline"
        >
          {{ $t('contribute.edit_on_github') }}
        </a>
      </p>

      <CarbonAdsText :key="$route.path" />
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/common/AppContribute.vue
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD:components/commons/Contribute.global.vue
import CarbonAdsText from '@/components/partials/ads/CarbonText'

=======
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/common/AppContribute.vue
export default {
  components: {
    CarbonAdsText
  },
  props: {
    docLink: {
      type: String,
      required: false,
      default: ''
    },
    contributors: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    baseLink() {
      return '/' + this.$route.params.section
    },
    lastPathPart() {
      return this.$route.path.replace(/\/$/, '').split('/')[2] || ''
    }
  }
}
</script>
