<template>
  <div>
    <carbon-ads v-if="!isDev && $store.state._lang === 'en'" :key="$route.params.slug"></carbon-ads>
    <h1>{{ attrs.title }}</h1>
    <blockquote>
      <p>{{ attrs.description }}</p>
    </blockquote>
    <div class="video" v-if="attrs.youtube">
      <iframe class="youtube" :src="attrs.youtube" frameborder="0" allowfullscreen></iframe>
    </div>
    <h2>{{ $store.state.lang.examples.source_code }}</h2>
    <nuxt-files-tree :example="attrs.github" :key="attrs.github"></nuxt-files-tree>
    <div>
      <a v-if="attrs.livedemo" :href="attrs.livedemo" class="button" target="_blank">
        <span><div class="icon eye"></div></span>
        {{ $store.state.lang.links.live_demo }}
      </a>
      <a v-if="attrs.liveedit" :href="attrs.liveedit" class="button" target="_blank">
        <span><div class="icon edit"></div></span>
        {{ $store.state.lang.links.live_edit }}
      </a>
      <a :href="downloadLink" class="button" target="_blank">
        <span><div class="icon download"></div></span>
        {{ $store.state.lang.links.download }}
      </a>
    </div>
    <html-parser :content="body"></html-parser>
  </div>
</template>

<script>
import axios from 'axios'
import CarbonAds from '~components/CarbonAds.vue'
import NuxtFilesTree from '~components/FilesTree.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  async data ({ route, store, error, isDev }) {
    // Default data
    let data = {
      attrs: {},
      body: '',
      isDev: isDev
    }
    let slug = route.params.slug || 'async-datas'
    const path = `/${store.state.lang.iso}/examples/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: 'An error occured' })
      }
      return error({ statusCode: 404, message: 'Example page not found' })
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    if (!data.attrs.title) console.error(`[${path}] Please define a title in the front matter.`)
    if (!data.attrs.description) console.error(`[${path}] Please define a description in the front matter.`)
    return data
  },
  computed: {
    downloadLink () {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/master/examples/' + this.attrs.github
    }
  },
  scrollToTop: true,
  head () {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js Examples',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  components: {
    CarbonAds,
    NuxtFilesTree,
    HtmlParser
  }
}
</script>

<style lang="scss" scoped>
.button
{
  height: 48px;
  line-height: 46px;
  font-size: 14px;
  margin-bottom: 15px;
  margin-right: 35px;
  &:before
  {
    border-right: 24px solid;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    left: -24px;
    border-right-color: #35495e;
  }
  &:after
  {
    border-left: 24px solid;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    right: -24px;
    border-left-color: #35495e;
  }
  &:hover
  {
    &:before
    {
      border-right-color: darken(#35495e, 5%);
    }
    &:after
    {
      border-left-color: darken(#35495e, 5%);
    }
  }
  &:last-child
  {
    margin-right: 0;
  }
  .icon, .icon:before, .icon:after
  {
    color: #fff;
  }
}
</style>
