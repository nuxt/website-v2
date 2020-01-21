<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4" @mouseover="$store.dispatch('focusMode')" @mouseleave="$store.dispatch('clearFocusMode')">
      <div v-if="page.langFallback" class="p-4 mb-6 bg-orange-200 rounded">
        ⚠️ You are looking at the english version of the page. Help us translate it <a :href="docLink" class="text-orange-600">here</a>.
      </div>
      <nui-article v-if="section === 'examples'">
        <h1>{{ page.attrs.title }}</h1>
        <p class="mb-6">{{ page.attrs.description }}</p>
        <code-sandbox v-if="codeSandBoxLink" :src="codeSandBoxLink" style="margin-bottom: 20px;"/>
        <div>
          <a :href="liveEditLink" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase no-underline rounded hover:bg-nuxt-green hover:shadow-md sm:mr-4 py-3 px-6 text-base" target="_blank" rel="noopener">
            {{ $store.state.lang.links.live_edit }}
          </a>
          <a :href="downloadLink" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase no-underline rounded hover:bg-nuxt-green hover:shadow-md sm:mr-4 py-3 px-6 text-base" target="_blank" rel="noopener">
            {{ $store.state.lang.links.download }}
          </a>
        </div>
        <contribute :doc-link="docLink" :contributors="contributors" />
      </nui-article>
      <nui-article v-else>
        <h1>{{ page.attrs.title }}</h1>
        <responsive-video v-if="page.attrs.youtube" :src="page.attrs.youtube" />
        <html-parser :content="page.body" />
        <contribute :doc-link="docLink" :contributors="contributors" />
      </nui-article>
    </div>
    <nui-affix class="opacity-transition" :class="{ 'opacity-25': $store.state.focusMode }">
      <nui-ads :key="$route.params.slug" class="mx-auto" />
    </nui-affix>
  </div>
</template>

<script>
import nuiAds from '@/components/partials/Ads'
import nuiAffix from '@/components/partials/Affix'
const CodeSandbox = () => import('@/components/commons/CodeSandbox.vue' /* webpackChunkName: "components/CodeSandbox" */)

export default {
  components: {
    nuiAds,
    nuiAffix,
    CodeSandbox
  },
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
        { hid: 'description', name: 'description', content: this.page.attrs.description }
      ]
    }
  }
}
</script>
