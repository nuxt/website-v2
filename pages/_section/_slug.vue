<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
      @mouseover="$store.dispatch('focusMode')"
      @mouseleave="$store.dispatch('clearFocusMode')"
    >
      <!-- <div
        v-if="page.langFallback"
        class="p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary"
      >
        ⚠️ You are looking at the english version of the page. Help us translate it
        <a :href="docLink" class="text-orange-600">here</a>.
      </div>-->
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
        <!-- <AppContribute :doc-link="docLink" :contributors="contributors" /> -->
      </article>
      <article v-else>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >{{ page.title }}</h1>
        <AppResponsiveVideo v-if="page.youtube" :src="page.youtube" />
        <!-- <AppHtmlParser :content="page.body" /> -->
        <nuxt-content :document="page" />
        <!-- <AppContribute :doc-link="docLink" :contributors="contributors" /> -->
      </article>
    </div>
    <AffixBlock class="opacity-transition" :class="{ 'opacity-25': $store.state.focusMode }">
      <AdsBlock :key="$route.params.slug" />
    </AffixBlock>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, store, error, app }) {
    const defaultSlugs = { guide: 'index', api: 'index', examples: 'hello-world', faq: 'external-resources' }
    const slug = params.slug || defaultSlugs[params.section]
    const path = `/${app.i18n.locale}/${params.section}/${slug}`
    const data = {
      path,
      section: params.section,
      page: {}
    }
    try {
      data.page = await $content(path).fetch()
      data.contributors = (await fetch('https://contributors-api.onrender.com' + path).then(res => res.json())).map(({ author }) => ({ author }))
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({ statusCode: 500, message: app.i18n.t('common.an_error_occurred') })
      }
      return error({ statusCode: 404, message: app.i18n.t('common.api_page_not_found') })
    }
    return data
  },
  computed: {
    docLink () {
      let docLink = `https://github.com/nuxt/docs/blob/master${this.path}.md`
      if (this.$i18n.locale.locale === 'ru') {
        docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${this.path}.md`
      } else if (this.$i18n.locale.locale === 'cn') {
        docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${this.path}.md`
      }
      return docLink
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
