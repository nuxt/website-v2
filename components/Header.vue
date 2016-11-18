<template>
  <header class="Header">
    <div class="container">
      <router-link class="Header__Title" to="/">
        <h1 class="Header__Title__Site">
          NUXT
        </h1>
        <img src="~static/logo_nav.png" alt="Logo nuxt" class="Header__Title__Logo"/>
      </router-link>
      <nav class="Header__Nav">
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

<style lang="scss" scoped>
.Header
{
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #dbdfe1;
  &__Title
  {
    margin: 0;
    font-weight: 300;
    color: #fff;
    letter-spacing: 1px;
    float: left;
    &__Site
    {
      width: 0;
      height: 0;
      overflow: hidden;
      margin: 0;
    }
    &__Logo
    {
      height: 30px;
      display: inline-block;
      margin-top: 32px;
    }
  }
  &__Nav
  {
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
          text-decoration: none;
          letter-spacing: 1px;
          &:hover
          {
            color: #2e2f30;
          }
        }
        .router-link-active
        {
          border-bottom: 2px solid #505153;
        }
      }
    }
  }
}
</style>
