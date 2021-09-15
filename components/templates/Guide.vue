<template>
  <AppPage class="d-container">
    <PageContent :page="page">
      <template #mobile-toc>
        <PageMobileToc :title="page.body.toc.title" :toc="page.body.toc.links" />
      </template>
    </PageContent>

    <EditOnGithub v-if="repoUrl" :page="page" />

    <template #toc>
      <PageToc v-if="!page.body.hideToc" :title="page.body.toc.title" :toc="page.body.toc.links" />
    </template>
  </AppPage>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { useGitHub, scrollToHeading } from '@docus/theme/runtime'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { repoUrl } = useGitHub()

    onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '')

        // do not remove setTimeout (wrong scroll pos)
        setTimeout(() => {
          scrollToHeading(hash, '--docs-scroll-margin-block')
        }, 300)
      }

      // do not remove setTimeout (no headers)
      setTimeout(() => {
        const headings = [
          ...document.querySelectorAll('.docus-content h1'),
          ...document.querySelectorAll('.docus-content h2'),
          ...document.querySelectorAll('.docus-content h3')
        ]
        headings.forEach(heading => {
          heading.addEventListener('click', e => {
            e.preventDefault()
            const hash = e.target.href.split('#').pop()
            scrollToHeading(hash, '--docs-scroll-margin-block')
          })
        })
      }, 500)
    })

    return {
      repoUrl
    }
  }
})
</script>
