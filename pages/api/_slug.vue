<template>
  <div>
    <!-- <div class="carbonads"></div> -->
    <html-parser :content="body"></html-parser>
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
    const path = `/${store.state.lang.iso}/api/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: 'An error occured' })
      }
      return error({ statusCode: 404, message: 'API page not found' })
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    return data
  },
  head () {
    return {
      title: this.attrs.title || 'No title',
      titleTemplate: 'API : %s - Nuxt.js'
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
