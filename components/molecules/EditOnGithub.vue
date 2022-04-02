<template>
  <div>
    <div v-if="link" class="flex flex-col justify-between d-secondary-text mt-8 mb-4 px-4 sm:px-6 sm:flex-row">
      <AppLink :href="link" class="flex items-center mb-2 text-sm sm:mb-0 hover:underline">
        <IconEdit class="w-3 h-3 mr-1" />
        <span>
          {{ $t('article.github') }}
        </span>
      </AppLink>

      <span class="flex items-center text-sm">
        {{ $t('article.updatedAt') }} {{ $d(Date.parse(page.mtime), 'long') }}
      </span>
    </div>
    <div v-if="contributors.length" class="px-4 sm:px-6">
      <AppLink
        v-for="contributor of contributors"
        :key="contributor.login"
        :href="`https://github.com/${contributor.login}`"
        class="
          inline-flex
          mb-2
          mr-2
          overflow-hidden
          transition-colors
          duration-300
          ease-linear
          border
          rounded
          text-light-onSurfacePrimary
          dark:text-dark-onSurfacePrimary
          bg-light-surfaceElevated
          light:hover:bg-gray-300
          dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface
          border-light-border
          dark:border-dark-border
        "
      >
        <NuxtImg
          :alt="contributor.name"
          :srcset="`https://github.com/${contributor.login}.png?size=32 1x, https://github.com/${contributor.login}.png?size=64 2x`"
          :src="`https://github.com/${contributor.login}.png?size=32`"
          loading="lazy"
          class="h-8"
        />
        <span class="inline-block px-2 leading-loose">
          {{ contributor.name }}
        </span>
      </AppLink>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'
import { joinURL } from 'ufo'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const contributors = ref([])
    const { $docus, $config } = useContext()

    const apiURL = $config.apiURL || 'https://api.nuxtjs.org'

    const { value: settings } = computed(() => $docus.settings)

    const repoUrl = computed(() => joinURL(settings.value.github.url, settings.value.github.repo))

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
    const path = [
      settings.value.github.repo,
      settings.value.github.branch,
      settings.value.contentDir,
      props.page.source
    ].join('/')
    useFetch(async () => {
      contributors.value = await $fetch(`${apiURL}/api/github/contributors/${path}`)
    })
    return {
      link,
      contributors
    }
  }
})
</script>
