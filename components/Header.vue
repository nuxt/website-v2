<template>
  <header class="Header">
    <div class="container">
      <nuxt-link class="Header__Title" to="/">
        <img src="~static/logo_nav.png" alt="Logo nuxt" class="Header__Title__Logo Header__Title__Logo--desktop"/>
        <img src="~static/logo_nav_mobile.png" alt="Logo nuxt" class="Header__Title__Logo Header__Title__Logo--mobile"/>
        <h1 class="Header__Title__Text">
          NUXT
        </h1>
      </nuxt-link>
      <nav class="Header__Nav" :class="{'Header__Nav--hidden': !visible}">
        <div class="Header__Nav__Search Header__Nav__Search--mobile">
          <nuxt-search label="mobile"></nuxt-search>
        </div>
        <div class="Header__Nav__Lang">
          <img :src="'/flags/' + $store.state.lang.iso + '.png'" :alt="$store.state.lang.iso" class="Header__Nav__Lang__Img">
        </div>
        <ul class="Header__Nav__List">
          <li class="Header__Nav__List__Item">
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
            </nuxt-dropdown>
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
          name: this.$store.state.lang.links.chat,
          path: 'https://gitter.im/nuxt/nuxt.js',
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
  &__Title
  {
    margin: 0;
    font-weight: 300;
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
      width: 0;
      overflow: hidden;
    }
    &__Logo
    {
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
    }
  }
  &__Nav
  {
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
          text-decoration: none;
          letter-spacing: 1px;
          padding: 0 10px;
          &:hover
          {
            color: #41b883;
          }
        }
        .nuxt-link-active, .nuxt-link-active:hover
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
