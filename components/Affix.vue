<template>
  <nav class="Affix" :class="{'Affix--hidden': !visible}">
    <div class="Affix__Toggler" :class="{'Affix__Toggler--hidden': visible}" @click="toggle">
      <div class="icon more-vertical"></div>
    </div>
    <h2 class="Affix__Version">
      Version {{ $store.state.version }}
      <div class="Affix__Version__Toggler" @click="toggle">
        <div class="icon close"></div>
      </div>
    </h2>
    <template v-for="(links, title) in list">
      <h3 class="Affix__Title">{{ title }}</h3>
      <ul class="Affix__List">
        <li class="Affix__List__Item" v-for="link in links">
          <nuxt-link class="Affix__List__Item__Link"
                     :class="{'nuxt-link-active': $route.path === menu + link.to}"
                     :to="menu + link.to" exact>
            {{ link.name }}
          </nuxt-link>
          <ul v-if="link.contents && $route.path === menu + link.to" class="Affix__List__Item__Contents">
            <li v-for="content in link.contents" class="Affix__List__Item__Contents__Item">
              <a :href="menu + link.to + content.to" class="Affix__List__Item__Contents__Item__Link">
                {{ content.name }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    menu () { return '/' + (this.$route.params.category || 'examples') }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleAffix') }
  }
}
</script>

<style lang="scss" scoped>
.Affix
{
  width: 100%;
  top: 60px;
  left: 0;
  bottom: 0;
  position: fixed;
  padding: 15px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 990;
  @media (min-width: 992px)
  {
    top: 80px;
    width: 300px;
    padding: 20px 30px;
    border-right: 1px solid #dbdfe1;
  }
  &--hidden
  {
    left: -100%;
    @media (min-width: 992px)
    {
      left: 0;
    }
  }
  &__Toggler
  {
    background-color: rgba(53, 73, 94, 0.70);
    width: 18px;
    height: 30px;
    position: fixed;
    top: 75px;
    right: 20px;
    z-index: 980;
    cursor: pointer;
    .icon
    {
      color: #fff;
      margin-left: 7px;
      margin-top: 13px;
    }
    &:before, &:after
    {
      content: " ";
      width: 0;
      height: 0;
      top: 0;
      position: absolute;
    }
    &:before
    {
      border-right: 10px solid;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      left: -10px;
      border-right-color: rgba(53, 73, 94, 0.70);
    }
    &:after
    {
      border-left: 10px solid;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      right: -10px;
      border-left-color: rgba(53, 73, 94, 0.70);
    }
    &--hidden
    {
      display: none;
    }
    @media (min-width: 992px)
    {
      display: none;
    }
  }
  &__Version
  {
    position: relative;
    font-size: 15px;
    font-weight: 400;
    color: #35495e;
    margin: 0;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    &__Toggler
    {
      width: 25px;
      height: 22px;
      cursor: pointer;
      display: block;
      float: right;
      @media (min-width: 992px)
      {
        display: none;
      }
    }
  }
  &__Title
  {
    margin: 10px 0;
    // margin-top: 30px;
    text-transform: uppercase;
    color: #9aabb1;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 1px;
  }
  &__List
  {
    list-style: none;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    &__Item
    {
      padding: 2px 0;
      &__Link
      {
        display: block;
        font-size: 15px;
        text-decoration: none;
        color: #35495e;
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 0.25px;
        &:hover
        {
          color: #111;
          background-color: #eee;
        }
      }
      .nuxt-link-active
      {
        color: #fff;
        background-color: #41b883;
      }
      &__Contents
      {
        margin: 0;
        padding: 0;
        padding-top: 3px;
        padding-left: 20px;
        list-style: none;
        &__Item
        {
          position: relative;
          padding: 2px 0;
          &:before
          {
            content: " ";
            width: 0;
            height: 0;
            top: 8px;
            left: -13px;
            position: absolute;
            border-left: 5px solid lighten(#35495e, 5%);
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
          &__Link
          {
            display: block;
            font-size: 14px;
            color: lighten(#35495e, 5%);
            text-decoration: none;
            letter-spacing: 0.25px;
            &:hover
            {
              color: #41b883;
            }
          }
        }
      }
    }
  }
}
</style>
