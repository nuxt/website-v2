<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4" @mouseover="focus" @mouseleave="blur">
      <div v-if="page.langFallback" class="p-4 mb-6 bg-orange-200 rounded">
        ⚠️ You are looking at the english version of the page. Help us translate it <a :href="docLink" class="text-orange-600">here</a>.
      </div>
      <nui-article>
        <h1>{{ page.attrs.title }}</h1>
        <responsive-video v-if="page.attrs.youtube" :src="page.attrs.youtube" />
        <html-parser :content="page.body" />
        <contribute :doc-link="docLink" />
      </nui-article>
    </div>
    <nui-affix class="opacity-transition" :class="{ 'opacity-50': $store.state.focusMode }">
      <nui-ads :key="$route.params.slug" class="mx-auto" />
    </nui-affix>
  </div>
</template>

<script>
import nuiAds from '@/components/partials/Ads'
import nuiAffix from '@/components/partials/Affix'

export default {
  components: {
    nuiAds,
    nuiAffix
  },
  computed: {
    docLink () {
      let docLink = `https://github.com/nuxt/docs/blob/master${this.path}.md`
      if (this.$i18n.locale === 'ru') {
        docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${this.path}.md`
      } else if (this.$i18n.locale === 'cn') {
        docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${this.path}.md`
      }
      return docLink
    }
  },
  async asyncData ({ $docs, params, store, error, app }) {
    const defaultSlugs = { guide: 'index', api: 'index', examples: 'hello-world', faq: 'external-resources' }
    const slug = params.slug || defaultSlugs[params.section]
    const path = `/${app.i18n.locale}/${params.section}/${slug}`
    const data = { path, page: {} }
    try {
      const page = await $docs.get(path)
      if (!page.attrs.title) { console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) } // eslint-disable-line no-console
      if (!page.attrs.description) { console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) } // eslint-disable-line no-console
      data.page = page
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    return data
  },
  methods: {
    focus () {
      if (this._timeout) {
        return
      }
      this._timeout = setTimeout(() => this.$store.commit('setFocusMode', true), 1300)
    },
    blur () {
      if (this._timeout) {
        clearTimeout(this._timeout)
        delete this._timeout
      }
      this.$store.commit('setFocusMode', false)
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
