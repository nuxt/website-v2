<template>
  <div class="API">
    <nuxt-affix :list="$store.state.apiMenu" menu="/api"></nuxt-affix>
    <!-- Children -->
    <div class="API__Content" :class="{'API__Content--hidden': visible}">
      <html-parser class="Content" :content="body"></html-parser>
      <p class="API__Contribute">Caught a mistake or want to contribute to the documentation?
        <a :href="'https://github.com/nuxt/docs/blob/master/api/'+path+'.md'" target="_blank">
          Edit this page on Github!
        </a>
      </p>
    </div>
    <div class="API__Footer">
      <nuxt-footer></nuxt-footer>
    </div>
  </div>
</template>

<script>
import marked, { Renderer } from 'marked'
import highlightjs from 'highlight.js'
import fm from 'front-matter'

import NuxtAffix from '~components/Affix.vue'
import NuxtFooter from '~components/Footer.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  components: {
    NuxtAffix,
    NuxtFooter,
    HtmlParser
  },
  data ({ route }, callback) {
    // Default data
    let data = {
      content: '',
      path: route.params.slug || 'index'
    }
    const path = '/docs/api/' + data.path + '.md'
    if (process.BROWSER_BUILD) {
      fetch(path)
      .then((response) => {
        const contenType = response.headers.get('content-type') || ''
        const requestOK = (response.status >= 200 && response.status < 300)
        if (!requestOK || contenType.indexOf('text/x-markdown') === -1) {
          throw new Error('API page not found')
        }
        return response.text()
      })
      .then((content) => {
        data.content = content
        callback(null, data)
      })
      .catch((e) => {
        callback({ statusCode: 404, message: 'API page not found' }, data)
      })
    } else {
      require('fs').readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Documentation page not found' })
        data.content = content
        callback(null, data)
      })
    }
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    page () { return fm(this.content) },
    body () { return marked(this.page.body) }
  },
  head () {
    return {
      title: this.page.attributes.title || 'No title',
      titleTemplate: 'API: %s - Nuxt.js'
    }
  }
}
</script>

<style lang="scss" scoped>
.API
{
  &__Content
  {
    position: relative;
    z-index: 10;
    padding: 15px;
    margin-top: 60px;
    height: 100%;
    @media (min-width: 991px)
    {
      padding: 30px;
      margin-top: 80px;
      margin-left: 300px;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 992px)
      {
        display: block;
      }
    }
  }
  &__Contribute {
    border-top: 1px #dbdfe1 solid;
    padding-top: 20px;
    color: #7f8c8d;
  }
  &__Footer
  {
    display: block;
    @media (min-width: 992px)
    {
      display: none;
    }
  }
}
</style>
