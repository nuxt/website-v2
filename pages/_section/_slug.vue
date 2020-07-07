<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
    >
      <div
        v-if="langFallback"
        class="p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary"
      >
        ⚠️ You are looking at the english version of the page. Help us translate it
        <a
          :href="docLink"
          class="text-orange-600"
          target="_blank"
        >here</a>.
      </div>
      <article v-if="section === 'examples'">
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >{{ page.title }}</h1>
        <p class="mb-6">{{ page.description }}</p>
        <LazyAppCodeSandbox v-if="codeSandBoxLink" :src="codeSandBoxLink" />
        <div>
          <AppButton
            :href="liveEditLink"
            variant="primary"
            class="sm:mr-4 py-3 px-6 text-base mb-4"
          >{{ $t('links.live_edit') }}</AppButton>
          <AppButton
            :href="downloadLink"
            variant="primary"
            class="sm:mr-4 py-3 px-6 text-base mb-4"
          >{{ $t('links.download') }}</AppButton>
        </div>
      </article>
      <article v-else>
        <BaseAlert type="info">
          {{ $t('tryNewDocs.msg1') }}
          <NuxtLink
            class="text-nuxt-lightgreen"
            to="/guides/get-started/installation"
          >{{ $t('tryNewDocs.link') }}</NuxtLink>
          {{ $t('tryNewDocs.msg2') }}
        </BaseAlert>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >{{ page.title }}</h1>
        <AppResponsiveVideo v-if="page.youtube" :src="page.youtube" />
        <nuxt-content :document="page" />
        <AppPrevNext :prev="prev" :next="next" :section="section" class="mt-4" />
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
import { assign } from 'lodash'

export default {
  async asyncData ({ $content, params, store, error, app }) {
    const defaultSlugs = { guide: 'index', api: 'index', examples: 'hello-world', faq: 'external-resources' }
    const slug = params.slug || defaultSlugs[params.section]

    let page, currentPage, prev, next, contributors, langFallback

    const defaultPath = `/${app.i18n.defaultLocale}/${params.section}/${slug}`
    const path = `/${app.i18n.locale}/${params.section}/${slug}`

    try {
      page = await $content(defaultPath).fetch()
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({ statusCode: 500, message: app.i18n.t('common.an_error_occurred') })
      }
      return error({ statusCode: 404, message: app.i18n.t('common.api_page_not_found') })
    }

    try {
      if (path !== defaultPath) {
        currentPage = await $content(path).fetch()
        if (currentPage) {
          assign(page, currentPage)
        }
      }
    } catch (e) {
      langFallback = true
    }

    try {
      contributors = (await fetch('https://contributors-api.onrender.com' + path).then(res => res.json())).map(({ author }) => ({ author }))
    } catch (e) { }

    try {
      [prev, next] = await $content(currentPage ? app.i18n.locale : app.i18n.defaultLocale, params.section)
        .only(['title', 'slug', 'dir'])
        .sortBy('position', 'asc')
        .sortBy('groupPosition', 'asc')
        .surround(slug, { before: 1, after: 1 })
        .fetch()
    } catch (e) { }

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
    docLink () {
      return `https://github.com/nuxt/nuxtjs.org/blob/master/content${this.path}.md`
    },
    codeSandBox () {
      return 'https://codesandbox.io'
    },
    codeSandBoxLink () {
      if (!this.page.github) {
        return ''
      }
      return `${this.codeSandBox}/embed/github/nuxt/nuxt.js/tree/dev/examples/${this.page.github}?autoresize=1&view=editor`
    },
    liveEditLink () {
      return `${this.codeSandBox}/s/github/nuxt/nuxt.js/tree/dev/examples/${this.page.github}?from-embed`
    },
    downloadLink () {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/dev/examples/' + this.page.github
    }
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
