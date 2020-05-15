<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4" @mouseover="$store.dispatch('focusMode')" @mouseleave="$store.dispatch('clearFocusMode')">
      <div v-if="page.langFallback" class="p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary">
        ⚠️ You are looking at the english version of the page. Help us translate it <a :href="docLink" class="text-orange-600">here</a>.
      </div>
      <article v-if="section === 'examples'">
        <h1 class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ page.attrs.title }}</h1>
        <p class="mb-6">{{ page.attrs.description }}</p>
        <LazyAppCodeSandbox v-if="codeSandBoxLink" :src="codeSandBoxLink"/>
        <div>
          <AppButton :href="liveEditLink" variant="primary" class="sm:mr-4 py-3 px-6 text-base mb-4">
            {{ $store.state.lang.links.live_edit }}
          </AppButton>
          <AppButton :href="downloadLink" variant="primary" class="sm:mr-4 py-3 px-6 text-base mb-4">
            {{ $store.state.lang.links.download }}
          </AppButton>
        </div>
        <AppContribute :doc-link="docLink" :contributors="contributors" />
      </article>
      <article v-else>
        <h1 class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ page.attrs.title }}</h1>
        <AppResponsiveVideo v-if="page.attrs.youtube" :src="page.attrs.youtube" />
        <AppHtmlParser :content="page.body" />
        <AppContribute :doc-link="docLink" :contributors="contributors" />
      </article>
    </div>
    <AffixBlock class="opacity-transition" :class="{ 'opacity-25': $store.state.focusMode }">
      <AdsBlock :key="$route.params.slug" />
    </AffixBlock>
  </div>
</template>

<script>
export default {
  async asyncData ({ $docs, params, store, error, app }) {
    const defaultSlugs = { guide: 'index', api: 'index', examples: 'hello-world', faq: 'external-resources' }
    const slug = params.slug || defaultSlugs[params.section]
    const path = `/${store.state.locale}/${params.section}/${slug}`
    const data = {
      path,
      section: params.section,
      page: {}
    }
    try {
      const page = await $docs.get(path)
      data.contributors = (await fetch('https://contributors-api.onrender.com' + path).then(res => res.json())).map(({ author }) => ({ author }))
      if (!page.attrs.title) { console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) } // eslint-disable-line no-console
      if (!page.attrs.description) { console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) } // eslint-disable-line no-console
      data.page = page
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    return data
  },
  computed: {
    docLink () {
      let docLink = `https://github.com/nuxt/docs/blob/master${this.path}.md`
      if (this.$store.state.locale === 'ru') {
        docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${this.path}.md`
      } else if (this.$store.state.locale === 'cn') {
        docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${this.path}.md`
      }
      return docLink
    },
    codeSandBox () {
      return 'https://codesandbox.io'
    },
    codeSandBoxLink () {
      if (!this.page.attrs.github) {
        return ''
      }
      return `${this.codeSandBox}/embed/github/nuxt/nuxt.js/tree/dev/examples/${this.page.attrs.github}?autoresize=1&view=editor`
    },
    liveEditLink () {
      return `${this.codeSandBox}/s/github/nuxt/nuxt.js/tree/dev/examples/${this.page.attrs.github}?from-embed`
    },
    downloadLink () {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/dev/examples/' + this.page.attrs.github
    }
  },
  scrollToTop: true,
  head () {
    return {
      title: this.page.attrs.title,
      titleTemplate: '%s - NuxtJS',
      meta: [
        { hid: 'description', name: 'description', content: this.page.attrs.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.attrs.title },
        { hid: 'og:description', property: 'og:description', content: this.page.attrs.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.page.attrs.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.page.attrs.description }
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
