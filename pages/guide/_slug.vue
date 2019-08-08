<template>
  <div class="flex justify-end">
    <nui-article class="w-10/12 p-8 mr-auto bg-gray-100 rounded">
      <h1>{{ attrs.title }}</h1>
      <responsive-video v-if="attrs.youtube" :src="attrs.youtube"/>
      <html-parser :content="body"/>
      <contribute :doc-link="docLink"/>
    </nui-article>
    <nui-affix>
      <nui-ads class="mx-auto" :key="$route.params.slug"/>
    </nui-affix>
  </div>
</template>

<script>
import nuiAds from '@/components/partials/Ads'
import nuiAffix from '@/components/partials/Affix'

export default {
  async asyncData({ $docs, params, store, error, app }) {
    const slug = params.slug || 'index'
    const path = `/${app.i18n.locale}/guide/${slug}`
    let data = { docLink: `https://github.com/nuxt/docs/blob/master${path}.md` }
    if (app.i18n.locale === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    } else if (app.i18n.locale === 'cn') {
      data.docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${path}.md`
    }
    try {
      let page = await $docs.get(path)
      data.attrs = page.attrs
      data.body = page.body
      if (!data.attrs.title) console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) // eslint-disable-line no-console
      if (!data.attrs.description) console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) // eslint-disable-line no-console
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    return data
  },
  scrollToTop: true,
  head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  components: {
    nuiAds,
    nuiAffix
  }
}
</script>
