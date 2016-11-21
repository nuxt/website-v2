<template>
  <div class="Bar">
    <div class="container">
      <div class="Bar__Left">
        <span class="Bar__Left__Text">Version 1.0</span>
        <div class="Bar__Left__Toggler" @click="toggle">
          <div :class="{'outdent icon': visible, 'indent icon': !visible}"></div>
        </div>
      </div>
      <div class="Bar__Right">
        <nuxt-search></nuxt-search>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtSearch from '~components/Search.vue'

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  },
  components: {
    NuxtSearch
  }
}
</script>

<style lang="scss" scoped>
.Bar
{
  top: 60px;
  width: 100%;
  z-index: 990;
  position: fixed;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #dbdfe1;
  @media (min-width: 576px)
  {
    top: 90px;
    height: 50px;
    line-height: 50px;
  }
  &__Left
  {
    color: #505153;
    letter-spacing: 0.5px;
    float: left;
    font-size: 1.05em;
    border-right: 1px solid #dbdfe1;
    @media (min-width: 992px)
    {
      width: 240px;
    }
    &__Text
    {
      display: none;
      @media (min-width: 992px)
      {
        display: block;
      }
    }
    &__Toggler
    {
      display: block;
      width: 40px;
      height: 40px;
      cursor: pointer;
      padding-top: 9px;
      @media (min-width: 576px)
      {
        padding-top: 15px;
        width: 50px;
        height: 50px;
      }
      @media (min-width: 992px)
      {
        display: none;
      }
    }
  }
  &__Right
  {
    padding-left: 15px;
    height: 39px;
    overflow: hidden;
    @media (min-width: 576px)
    {
      height: 49px;
    }
  }
}
</style>
