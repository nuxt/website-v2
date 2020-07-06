
<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
    >
      <article>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >{{ page.title }}</h1>
        <nuxt-content :document="page" />

        <LazyAppPrevNextNew :prev="prev" :next="next" section="guides" class="mt-4" />
        <AppContribute :doc-link="docLink" :contributors="contributors" />
      </article>
    </div>
    <AffixBlock>
      <AppToc v-if="page.toc && page.toc.length" :toc="page.toc" class="mb-8 hidden lg:block" />
      <SponsorsBlock />
      <AdsBlock :key="$route.params.slug" />
    </AffixBlock>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import Clipboard from 'clipboard'

export default {
  async asyncData ({ $content, params, store, error, app }) {
    const slug = params.slug
    const path = `/${app.i18n.locale}/guides/${params.book}/${slug}`
    const data = {
      showModal: false,
      path,
      section: params.section,
      book: params.book,
      page: {}
    }
    try {
      data.page = await $content(path).fetch()
      data.contributors = (await fetch('https://contributors-api.onrender.com' + path).then(res => res.json())).map(({ author }) => ({ author }))
      const [prev, next] = await $content(app.i18n.locale, 'guides', { deep: true })
        .only(['title', 'slug', 'dir'])
        .sortBy('position', 'asc')
        .sortBy('categoryPosition', 'asc')
        .surround(slug, { before: 1, after: 1 })
        .fetch()

      data.prev = prev
      data.next = next
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({ statusCode: 500, message: app.i18n.t('common.an_error_occurred') })
      }
      return error({ statusCode: 404, message: app.i18n.t('common.api_page_not_found') })
    }
    if (data.page && data.page.questions) {
      data.page.questions = shuffle(data.page.questions.map(question => ({ ...question, answers: shuffle(question.answers) })))
    }
    return data
  },
  computed: {
    docLink () {
      return `https://github.com/nuxt/nuxtjs.org/blob/master/content${this.path}.md`
    }
  },
  mounted () {
    const blocks = document.getElementsByClassName('nuxt-content-highlight')
    for (const block of blocks) {
      const pre = block.getElementsByTagName('pre')[0]
      const button = document.createElement('button')
      button.className = 'copy'
      button.textContent = 'Copy'
      pre.appendChild(button)
    }
    const copyCode = new Clipboard('.copy', {
      target (trigger) {
        return trigger.previousElementSibling
      }
    })
    copyCode.on('success', function (event) {
      event.clearSelection()
      event.trigger.textContent = 'Copied!'
      window.setTimeout(function () {
        event.trigger.textContent = 'Copy'
      }, 2000)
    })
  },

  scrollToTop: true,
  head () {
    return {
      title: this.page.title,
      titleTemplate: '%s - NuxtJS',
      meta: [
        { hid: 'description', name: 'description', content: this.page.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        { hid: 'og:description', property: 'og:description', content: this.page.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.page.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.page.description }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
article h1 {
  @apply font-medium relative text-3xl table mb-8;
  &::after {
    content: " ";
    width: 80%;
    @apply block border-2 border-nuxt-lightgreen mt-2 mb-1 rounded;
  }
}
</style>
