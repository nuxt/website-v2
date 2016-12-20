<template>
  <div class="Guide">
<<<<<<< HEAD
    <nuxt-header></nuxt-header>
    <div class="container">
      <nuxt-affix></nuxt-affix>
      <nuxt-content>
        <div :is="content"></div>
      </nuxt-content>
=======
    <nuxt-affix :list="$store.state.guideMenu" menu="/guide"></nuxt-affix>
    <!-- Children -->
    <div class="Guide__Content" :class="{'Guide__Content--hidden': visible}">
      <html-parser class="Content" :content="body"></html-parser>
      <p class="Guide__Contribute">Caught a mistake or want to contribute to the documentation?
        <a :href="'https://github.com/nuxt/docs/blob/master/guide/'+path+'.md'" target="_blank">
          Edit this page on Github!
        </a>
      </p>
    </div>
    <div class="Guide__Footer">
      <nuxt-footer></nuxt-footer>
>>>>>>> 2eed1dad (affix)
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import NuxtHeader from '~components/Header.vue'
=======
import marked, { Renderer } from 'marked'
import highlightjs from 'highlight.js'
import fm from 'front-matter'

>>>>>>> 2eed1dad (affix)
import NuxtAffix from '~components/Affix.vue'
import NuxtContent from '~components/Content.vue'

import index from '~pages/guide/_index.vue'
import releasenotes from '~pages/guide/_release-notes.vue'

export default {
  components: {
<<<<<<< HEAD
    NuxtHeader,
=======
>>>>>>> 2eed1dad (affix)
    NuxtAffix,
    NuxtContent,
    index,
    releasenotes
  },
  computed: {
<<<<<<< HEAD
    content () {
      let content = this.$route.params.slug || 'index'
      return content.replace('-', '')
=======
    visible () { return this.$store.state.visibleAffix },
    page () { return fm(this.content) },
    body () { return marked(this.page.body) }
  },
  head () {
    return {
      title: this.page.attributes.title || 'No title',
      titleTemplate: '%s - Nuxt.js'
>>>>>>> 2eed1dad (affix)
    }
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD

=======
.Guide
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
>>>>>>> 2eed1dad (affix)
</style>
