<template>
  <div class="overflow-x-hidden sm:overflow-x-visible">
    <section class="py-20 border-b mx-0 lg:mx-6 border-sky-darker">
      <h1 class="flex-1 text-4xl pl-6 lg:pl-0 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {{ page.title }}
      </h1>
      <p v-if="page.description" class="mt-4 text-lg font-medium text-gray-500 dark:text-gray-400">
        {{ page.description }}
      </p>
    </section>

    <div class="divide-tw-gray-200">
      <div v-for="release of releases" :key="release.name" class="px-6 border-b dark:border-sky-darker dark:lg:border-transparent lg:border-transparent">
        <div class="relative lg:flex py-12 lg:py-16 lg:border-b lg:dark:border-sky-darker">
          <div class="self-start w-full lg:w-1/4 lg:sticky lg:top-0 lg:pt-38 lg:-mt-32 lg:mb-6">
            <h2 class="mb-3 text-3xl font-light text-tw-gray-900">Version <span class="font-bold">{{ release.name }}</span></h2>
            <p class="text-xs font-semibold uppercase text-tw-gray-400">Released on {{ new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          </div>

          <DocusContent :document="release" class="lg:w-3/4 px-8 lg:px-0 pt-8 lg:pt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch, onMounted } from '@nuxtjs/composition-api'

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

      releases.value = document.releases
    })

    return {
      releases
    }
  }
})
</script>
