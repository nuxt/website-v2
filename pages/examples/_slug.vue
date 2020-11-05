<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
    >
      <article>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >
          {{ page.title }}
        </h1>
        <p class="mb-6">
          {{ page.description }}
        </p>
        <LazyAppCodeSandbox v-if="codeSandBoxLink" :src="codeSandBoxLink" />
        <div>
          <AppButton
            :href="liveEditLink"
            variant="primary"
            class="sm:mr-4 py-3 px-6 text-base mb-4"
          >
            {{ $t('links.live_edit') }}
          </AppButton>
          <AppButton
            :href="downloadLink"
            variant="primary"
            class="sm:mr-4 py-3 px-6 text-base mb-4"
          >
            {{ $t('links.download') }}
          </AppButton>
        </div>
      </article>
    </div>
    <AffixBlock>
      <SponsorsBlock />
      <AdsBlock :key="$route.params.slug" />
    </AffixBlock>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $contributors, params, store, error, app }) {
    const slug = params.slug || 'hello-world'

    let path = `/${app.i18n.defaultLocale}/examples`
    let page, prev, next, langFallback

    try {
      page = await $content(path, slug).fetch()
    } catch (err) {
      return error({
        statusCode: 404,
        message: app.i18n.t('common.page_not_found')
      })
    }

    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        path = `/${app.i18n.locale}/examples`
        page = await $content(path, slug).fetch()
      } catch (err) {
        langFallback = true
        path = `/${app.i18n.defaultLocale}/examples`
      }
    }

    const contributors = await $contributors(`/content${path}/${slug}`)

    try {
      ;[prev, next] = await $content(path)
        .only(['title', 'slug', 'dir'])
        .sortBy('position')
        .surround(slug, { before: 1, after: 1 })
        .fetch()
    } catch (e) {}

    return {
      langFallback,
      path,
      section: params.section,
      page,
      prev,
      next,
      contributors
    }
  },
  computed: {
    docLink() {
      return `https://github.com/nuxt/nuxtjs.org/blob/master/content${this.path}.md`
    },
    codeSandBox() {
      return 'https://codesandbox.io'
    },
    codeSandBoxLink() {
      if (!this.page.github) {
        return ''
      }
      return `${this.codeSandBox}/embed/github/nuxt/nuxt.js/tree/dev/examples/${this.page.github}?autoresize=1&view=editor`
    },
    liveEditLink() {
      return `${this.codeSandBox}/s/github/nuxt/nuxt.js/tree/dev/examples/${this.page.github}?from-embed`
    },
    downloadLink() {
      return (
        'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/dev/examples/' +
        this.page.github
      )
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
