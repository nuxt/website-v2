<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen lg:w-4/4 w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full"
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
          section="examples"
          class="mt-4"
        />
        <AppContribute :doc-link="docLink" :contributors="contributors" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $content, $contributors, params, store, error, app }) {
    const slug = params.slug || 'hello-world'

    let path = `/${app.i18n.defaultLocale}/examples`
    let page, prev, next, langFallback

    try {
      page = await $content(path, slug).fetch()
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({
          statusCode: 500,
          message: app.i18n.t('common.an_error_occurred')
        })
      }

      return error({
        statusCode: 404,
        message: app.i18n.t('common.page_not_found')
      })
    }

    if (
      app.i18n.locale !== app.i18n.defaultLocale &&
      (['pt', 'es'].includes(app.i18n.locale) ||
        process.env.NODE_ENV !== 'production')
    ) {
      try {
        path = `/${app.i18n.locale}/examples/`
        page = await $content(path, params.slug).fetch()
      } catch (err) {
        langFallback = true
        path = `/${app.i18n.defaultLocale}/examples/`
      }
    }

    const contributors = await $contributors(`/content${path}/${slug}`)

    try {
      ;[prev, next] = await $content(
        ['pt', 'es'].includes(app.i18n.locale)
          ? path
          : `/${app.i18n.defaultLocale}/examples/`
      )
        .only(['title', 'slug', 'dir', 'menu'])
        .sortBy('position')
        .sortBy('title')
        .sortBy('menu')
        .surround(params.slug, { before: 1, after: 1 })
        .fetch()
    } catch (e) {}

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
  },
  computed: {
    docLink() {
      return `https://github.com/nuxt/nuxtjs.org/blob/master/content${this.path}/${this.$route.params.slug}.md`
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
