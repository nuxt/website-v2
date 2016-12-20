<template>
  <header class="Header">
    <div class="container">
      <router-link class="Header__Title" to="/">
        <h1 class="Header__Title__Site">
          NUXT
        </h1>
        <img src="~static/logo_nav.png" alt="Logo nuxt" class="Header__Title__Logo"/>
      </router-link>
<<<<<<< HEAD
      <nav class="Header__Nav">
=======
      <nav class="Header__Nav" :class="{'Header__Nav--hidden': !visible}">
        <div class="Header__Nav__Search Header__Nav__Search--mobile">
          <nuxt-search label="mobile"></nuxt-search>
        </div>
        <div class="Header__Nav__Lang">
          <img :src="'/flags/' + $store.state.lang.iso + '.png'" :alt="$store.state.lang.iso" class="Header__Nav__Lang__Img">
        </div>
>>>>>>> 925b7850 (navbar)
        <ul class="Header__Nav__List">
          <li class="Header__Nav__List__Item">
<<<<<<< HEAD
            <router-link class="Header__Nav__List__Item__Link" to="/guide">
              Guide
            </router-link>
          </li>
          <li class="Header__Nav__List__Item">
            <router-link class="Header__Nav__List__Item__Link" to="/examples">
              Examples
            </router-link>
          </li>
          <li class="Header__Nav__List__Item">
<<<<<<< HEAD
            <a class="Header__Nav__List__Item__Link" href="https://github.com/nuxt/nuxt.js" target="_blank">
              GITHUB
            </a>
=======
            <nuxt-dropdown :list="ecosystemLinks" title="Ecosystem" class="Header__Nav__List__Item__Link">
=======
            <nuxt-link class="Header__Nav__List__Item__Link" to="/guide">
              {{ $store.state.lang.links.guide }}
            </nuxt-link>
          </li>
          <li class="Header__Nav__List__Item">
            <nuxt-link class="Header__Nav__List__Item__Link" to="/api">
              {{ $store.state.lang.links.api }}
            </nuxt-link>
          </li>
          <li class="Header__Nav__List__Item">
            <nuxt-link class="Header__Nav__List__Item__Link" to="/examples">
              {{ $store.state.lang.links.examples }}
            </nuxt-link>
          </li>
          <li class="Header__Nav__List__Item">
            <nuxt-dropdown :list="ecosystemLinks" :title="$store.state.lang.links.ecosystem" class="Header__Nav__List__Item__Link">
>>>>>>> 3d1d3d02 (new architecture)
            </nuxt-dropdown>
>>>>>>> 925b7850 (navbar)
          </li>
        </ul>
        <div class="Header__Nav__Search Header__Nav__Search--desktop">
          <nuxt-search label="desktop"></nuxt-search>
        </div>
      </nav>
      <div class="Header__Toggler" @click="toggle">
        <div :class="{'icon menu': !visible, 'icon close': visible}"></div>
      </div>
    </div>
  </header>
</template>

<<<<<<< HEAD
<style lang="scss" scoped>
.Header
{
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #dbdfe1;
=======
<script>
import NuxtSearch from '~components/Search.vue'
import NuxtDropdown from '~components/Dropdown.vue'

export default {
  computed: {
    visible () { return this.$store.state.visibleHeader },
    ecosystemLinks() {
      return [
        {
          name: this.$store.state.lang.links.github,
          path: 'https://github.com/nuxt/nuxt.js',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.twitter,
          path: 'https://twitter.com/nuxt_js',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.blog,
          path: 'https://medium.com/@nuxt_js',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.vuejs,
          path: 'https://vuejs.org',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.vue_jobs,
          path: 'https://vuejobs.com/?ref=nuxtjs',
          target: '_blank'
        }
      ]
    }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleHeader') }
  },
  components: {
    NuxtSearch,
    NuxtDropdown
  }
}
</script>

<style lang="scss" scoped>
.Header
{
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 995;
  position: fixed;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #dbdfe1;
  @media (min-width: 991px)
  {
    height: 80px;
    line-height: 80px;
    text-align: left;
  }
>>>>>>> 925b7850 (navbar)
  &__Title
  {
    margin: 0;
    font-weight: 300;
<<<<<<< HEAD
    color: #fff;
    letter-spacing: 1px;
    float: left;
    &__Site
    {
=======
    color: #505153;
    float: left;
    @media (min-width: 991px)
    {
      width: 190px;
      border-right: 1px solid #dbdfe1;
    }
    &__Text
    {
      margin: 0;
>>>>>>> 925b7850 (navbar)
      width: 0;
      height: 0;
      overflow: hidden;
      margin: 0;
<<<<<<< HEAD
=======
      font-weight: 300;
      float: right;
      margin-left: 10px;
>>>>>>> b7025782 (Fix logo)
    }
    &__Logo
    {
<<<<<<< HEAD
      height: 30px;
      display: inline-block;
      margin-top: 32px;
=======
      float: left;
      &--mobile
      {
        margin-top: 16px;
        display: inline-block;
        @media (min-width: 991px)
        {
          display: none;
        }
      }
      &--desktop
      {
        display: none;
        @media (min-width: 991px)
        {
          margin-top: 22px;
          display: inline-block;
        }
      }
>>>>>>> 925b7850 (navbar)
    }
  }
  &__Nav
  {
<<<<<<< HEAD
    float: right;
    &__List
    {
      list-style: none;
      margin: 0;
      padding: 0;
      &__Item
      {
        display: inline-block;
        padding-left: 30px;
        &:first-child
        {
          padding-left: 0;
        }
        &__Link
        {
          color: #505153;
          padding: 5px 0;
          text-transform: uppercase;
=======
    position: fixed;
    z-index: 995;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: #fff;
    @media (min-width: 991px)
    {
      top: 0;
      position: relative;
      height: 79px;
      overflow-y: visible;
      margin-left: 190px;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 991px)
      {
        display: block;
      }
    }
    &__Lang
    {
      margin: 0;
      float: none;
      text-align: center;
      height: 60px;
      line-height: 70px;
      border-bottom: 1px solid #dbdfe1;
      @media (min-width: 991px)
      {
        float: left;
        height: 79px;
        line-height: 90px;
        width: 80px;
        border-bottom: none;
        border-right: 1px solid #dbdfe1;
      }
      &__Img
      {
        display: inline-block;
      }
    }
    &__Search
    {
      margin: 0;
      float: none;
      text-align: center;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #dbdfe1;
      @media (min-width: 991px)
      {
        height: 79px;
        line-height: 79px;
        border-bottom: none;
        overflow: hidden;
        height: inherit;
      }
      &--mobile
      {
        display: block;
        @media (min-width: 991px)
        {
          display: none;
        }
      }
      &--desktop
      {
        display: none;
        @media (min-width: 991px)
        {
          display: block;
        }
      }
    }
    &__List
    {
      height: inherit;
      margin: 0;
      padding: 0;
      position: relative;
      display: block;
      @media (min-width: 991px)
      {
        float: right;
        border-left: 1px solid #dbdfe1;
      }
      &__Item
      {
        position: relative;
        float: none;
        text-align: center;
        display: block;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #dbdfe1;
        @media (min-width: 991px)
        {
          float: left;
          height: 79px;
          line-height: 79px;
          display: block;
          padding-left: 30px;
          border-bottom: none;
        }
        &__Link
        {
          cursor: pointer;
          height: inherit;
          line-height: inherit;
          display: block;
          color: #35495e;
          font-size: 16px;
>>>>>>> 925b7850 (navbar)
          text-decoration: none;
          letter-spacing: 1px;
          padding: 0 10px;
          &:hover
          {
<<<<<<< HEAD
            color: #2e2f30;
          }
        }
        .router-link-active
        {
          border-bottom: 2px solid #505153;
        }
=======
            color: #41b883;
          }
        }
        .router-link-active, .router-link-active:hover
        {
          color: #41b883;
          @media (min-width: 991px)
          {
            &:after
            {
              content: " ";
              width: 0;
              height: 0;
              bottom: 0;
              position: absolute;
              border-right: 11px solid transparent;
              border-bottom: 11px solid #dbdfe1;
              border-left: 11px solid transparent;
              left: 54%;
            }
          }
        }
>>>>>>> 925b7850 (navbar)
      }
    }
  }
  &__Toggler
  {
    float: right;
    display: block;
    margin-top: 20px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    @media (min-width: 991px)
    {
      display: none;
    }
  }
}
</style>
