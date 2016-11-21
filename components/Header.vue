<template>
  <header class="Header">
    <div class="container">
      <router-link class="Header__Title" to="/">
        <img src="~static/logo_nav.png" alt="Logo nuxt" class="Header__Title__Logo"/>
        <h1 class="Header__Title__Text">
          NUXT
        </h1>
      </router-link>
      <div class="Header__Toggler" @click="visible = !visible">
        <div :class="{'icon menu': !visible, 'icon close': visible}"></div>
      </div>
      <nav class="Header__Nav" :class="{'Header__Nav--hidden': !visible}">
        <ul class="Header__Nav__List">
          <li class="Header__Nav__List__Item">
            <router-link class="Header__Nav__List__Item__Link" to="/guide">
              GUIDE
            </router-link>
          </li>
          <li class="Header__Nav__List__Item">
            <router-link class="Header__Nav__List__Item__Link" to="/examples">
              EXAMPLES
            </router-link>
          </li>
          <li class="Header__Nav__List__Item">
            <a class="Header__Nav__List__Item__Link" href="https://github.com/nuxt/nuxt.js" target="_blank">
              GITHUB
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.Header
{
  width: 100%;
  z-index: 990;
  position: fixed;
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  border-bottom: 1px solid #dbdfe1;
  @media (min-width: 576px)
  {
    position: relative;
    height: 100px;
    line-height: 100px;
    text-align: left;
  }
  &__Title
  {
    margin: 0;
    font-weight: 300;
    color: #505153;
    letter-spacing: 1px;
    display: inline-block;
    @media (min-width: 576px)
    {
      float: left;
    }
    &__Text
    {
      margin: 0;
      font-weight: 300;
      float: right;
      margin-left: 10px;
      font-size: 1.6em;
      @media (min-width: 576px)
      {
        font-size: 2em;
      }
    }
    &__Logo
    {
      height: 24px;
      display: inline-block;
      margin-top: 18px;
      @media (min-width: 576px)
      {
        height: 30px;
        margin-top: 32px;
      }
    }
  }
  &__Toggler
  {
    margin-top: 22px;
    display: block;
    cursor: pointer;
    float: right;
    width: 24px;
    height: 24px;
    @media (min-width: 576px)
    {
      display: none;
    }
  }
  &__Nav
  {
    position: fixed;
    z-index: 990;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: #fff;
    transition: all 1s ease;
    @media (min-width: 576px)
    {
      top: 0;
      height: 99px;
      position: relative;
      display: inline-block;
      float: right;
    }
    &--hidden
    {
      display: none;
      transition: all 1s ease;
      @media (min-width: 576px)
      {
        display: inline-block;
      }
    }
    &__List
    {
      &__Item
      {
        text-align: center;
        display: block;
        height: 64px;
        border-bottom: 1px solid #eee;
        @media (min-width: 576px)
        {
          height: auto;
          display: inline-block;
          padding-left: 30px;
          border-bottom: none;
        }
        &:first-child
        {
          padding-left: 0;
        }
        &__Link
        {
          color: #505153;
          padding: 5px 0;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 1px;
          &:hover
          {
            color: #2e2f30;
          }
        }
        .router-link-active
        {
          border-bottom: 2px solid #00BCD4;
        }
      }
    }
  }
}
</style>
