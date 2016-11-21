<template>
  <div class="Guide">
    <nuxt-header></nuxt-header>
    <nuxt-bar :visible="visible" v-on:toggle="toggle"></nuxt-bar>
    <div class="Guide__Left" :class="{'Guide__Left--hidden': !visible}">
      <div class="container">
        <nuxt-affix></nuxt-affix>
      </div>
    </div>
    <div class="container">
      <div class="Guide__Right" :class="{'Guide__Right--hidden': visible}">
        <div :is="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtHeader from '~components/Header.vue'
import NuxtBar from '~components/Bar.vue'
import NuxtAffix from '~components/Affix.vue'

import index from '~pages/docs/_index.vue'
import releasenotes from '~pages/docs/_release-notes.vue'

export default {
  components: {
    NuxtHeader,
    NuxtBar,
    NuxtAffix,
    index,
    releasenotes
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    content () {
      let content = this.$route.params.slug || 'index'
      return content.replace('-', '')
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.Guide
{
  &__Left
  {
    z-index: 900;
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    @media (min-width: 576px)
    {
      top: 140px;
    }
    @media (min-width: 992px)
    {
      z-index: 1;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 992px)
      {
        display: block;
      }
    }
    .container
    {
      height: 100%;
    }
  }
  &__Right
  {
    position: relative;
    z-index: 10;
    padding: 30px 0;
    padding-top: 130px;
    height: 100%;
    @media (min-width: 576px)
    {
      padding-top: 170px;
    }
    @media (min-width: 992px)
    {
      margin-left: 270px;
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
}
</style>
