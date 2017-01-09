<template>
  <div class="Content">
    <!-- <div class="carbonads"></div> -->
    <h1>{{ attrs.title }}</h1>
    <div class="video" v-if="attrs.youtube">
      <iframe class="youtube" :src="attrs.youtube" frameborder="0" allowfullscreen></iframe>
    </div>
    <html-parser :content="body"></html-parser>
    <p class="contribute">{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank">{{ $store.state.lang.guide.edit_on_github }}</a></p>
  </div>
</template>

<script>
import axios from 'axios'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  scrollToTop: true,
  async data ({ route, store, error }) {
    // Default data
    let data = {
      attrs: {},
      body: ''
    }
    const slug = route.params.slug || 'index'
    const path = `/${store.state.lang.iso}/guide/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: 'An error occured' })
      }
      return error({ statusCode: 404, message: 'Guide page not found' })
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    data.docLink = `https://github.com/nuxt/docs/blob/master${path}.md`
    if (!data.attrs.title) console.error(`[${path}] Please define a title in the front matter.`)
    if (!data.attrs.description) console.error(`[${path}] Please define a description in the front matter.`)
    return data
  },
  head () {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js Guide',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  components: {
    HtmlParser
  }
}
</script>

<style lang="scss" scoped>
// .carbonads
// {
//   float: right;
//   margin-left: 25px;
//   width: 125px;
//   height: 200px;
//   background-color: #ddd;
//   @media (min-width: 992px)
//   {
//     position: fixed;
//     bottom: 30px;
//     right: 30px;
//   }
// }
</style>
