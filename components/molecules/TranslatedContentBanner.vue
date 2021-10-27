<template>
  <div class="flex items-center rounded-md px-6 py-3 bg-gray-100 dark:bg-sky-darker">
    <IconTranslate class="d-secondary-text w-8 h-8 mr-6" />
    <div class="flex flex-col">
      <span class="font-bold">{{ $t('translated_pages.title') }}</span>
      <span class="text-sm">{{ $t('translated_pages.content_outdated') }}</span>
      <div class="flex items-center gap-4 mt-1">
        <NuxtLink :to="switchLocalePath('en')" class="inline text-sm font-medium hover:underline">
          {{ $t('translated_pages.read_original_page') }}
        </NuxtLink>
        <AppLink :href="pageGitHubLink" class="text-sm font-medium hover:underline">
          {{ $t('translated_pages.contribute') }}
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'
import { joinURL } from 'ufo'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { $docus } = useContext()

    const { value: settings } = computed(() => $docus.settings)

    const repoUrl = computed(() => joinURL(settings.value.github.url, settings.value.github.repo))

    // Picked from `EditOnGithub.vue`
    const link = computed(() => {
      if (!settings.value.github) return

      // TODO: Fix source; regression from split
      const key = props.page.key.split(':')
      const dir = key.slice(1, key.length - 1).join('/')
      const source = key[key.length - 1]

      return [
        repoUrl.value,
        'edit',
        settings.value.github.branch,
        settings.value.github.dir || '',
        settings.value.contentDir,
        dir,
        `${source}`.replace(/^\//g, '')
      ]
        .filter(Boolean)
        .join('/')
    })

    return {
      pageGitHubLink: link
    }
  }
})
</script>
