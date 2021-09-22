<template>
  <div class="overflow-x-hidden sm:overflow-x-visible">
    <PageHero>
      <template #title>
        {{ page.title }}
      </template>
      <template #description>
        {{ page.description }}
      </template>
    </PageHero>
    <div class="d-container px-6">
      <div
        v-for="release of releases"
        :key="release.name"
        class="border-b dark:border-sky-darker dark:lg:border-transparent lg:border-transparent"
      >
        <div class="relative lg:flex py-8 lg:py-16 lg:border-b lg:dark:border-sky-darker">
          <div class="self-start w-full lg:w-1/4 lg:sticky lg:top-0 lg:pt-38 lg:-mt-32 lg:mb-6">
            <h2 class="mb-3 text-3xl font-light text-tw-gray-900">
              {{ $t('releases.version') }} <span class="font-bold">{{ release.name }}</span>
            </h2>
            <p class="text-xs font-semibold uppercase text-tw-gray-400">
              {{ $t('releases.released_on') }}
              {{
                new Date(release.date).toLocaleDateString($i18n.locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              }}
            </p>
          </div>

          <DocusContent :document="release" class="lg:w-3/4 px-8 lg:px-0 pt-4 lg:pt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { $docus } = useContext()
    const releases = ref()

    useFetch(async () => {
      const document = await $docus.data('github-releases')

      releases.value = document.body?.releases
    })

    return {
      releases
    }
  }
})
</script>
