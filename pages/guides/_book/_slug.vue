<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
    >
      <LangFallback :doc-link="docLink" :lang-fallback="langFallback" />

      <article>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >
          {{ page.title }}
        </h1>
        <nuxt-content :document="page" />

        <LazyAppPrevNextNew
          :prev="prev"
          :next="next"
          section="guides"
          class="mt-4"
        />
        <AppContribute :doc-link="docLink" :contributors="contributors" />
      </article>
    </div>
    <AffixBlock>
      <AppToc
        v-if="page.toc && page.toc.length"
        :toc="page.toc"
        class="mb-8 block"
      />
    </AffixBlock>
  </div>
</template>

<script>
import copyCodeBlock from '~/mixins/copyCodeBlock'

export default {
  mixins: [copyCodeBlock],
  async asyncData({ $content, params, store, error, app }) {
    let path = `/${app.i18n.defaultLocale}/guides/${params.book}`
    let page, prev, next, contributors, langFallback

    try {
      page = await $content(path, params.slug).fetch()
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({
          statusCode: 500,
          message: app.i18n.t('common.an_error_occurred')
        })
      }

      return error({
        statusCode: 404,
        message: app.i18n.t('common.api_page_not_found')
      })
    }

    if (
      process.env.NODE_ENV !== 'production' &&
      app.i18n.defaultLocale !== app.i18n.locale
    ) {
      try {
        path = `/${app.i18n.locale}/guides/${params.book}`
        page = await $content(path, params.slug).fetch()
      } catch (err) {
        langFallback = true
        path = `/${app.i18n.defaultLocale}/guides/${params.book}`
      }
    }

    try {
      contributors = (
        await fetch(
          `https://contributors-api.onrender.com${path}/${params.slug}`
        ).then(res => res.json())
      ).map(({ author }) => ({ author }))
    } catch (e) {}

    try {
      ;[prev, next] = await $content(
        `/${app.i18n.defaultLocale}/guides/${params.book}`
      )
        .only(['title', 'slug', 'dir', 'menu'])
        .sortBy('position')
        .sortBy('title')
        .sortBy('menu')
        .surround(params.slug, { before: 1, after: 1 })
        .fetch()
    } catch (e) {}

    // if (page && page.questions) {
    //   page.questions = shuffle(page.questions.map(question => ({ ...question, answers: shuffle(question.answers) })))
    // }

    return {
      path,
      showModal: false,
      langFallback,
      section: params.section,
      book: params.book,
      page,
      prev,
      next,
      contributors
    }
  },
  computed: {
    docLink() {
      return `https://github.com/nuxt/nuxtjs.org/blob/master/content/${this.path}/${this.$route.params.slug}.md`
    }
  },
  scrollToTop: true,
  head() {
    return {
      title: this.page.title,
      titleTemplate: '%s - NuxtJS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
article h1 {
  @apply font-medium relative text-3xl table mb-8;

  &::after {
    content: ' ';
    width: 80%;

    @apply block border-2 border-nuxt-lightgreen mt-2 mb-1 rounded;
  }
}
</style>
