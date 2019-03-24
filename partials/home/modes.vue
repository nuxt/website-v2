<template>
  <section class="nModes">
    <div class="container">
      <h2 class="nModes_Title"><span>{{ $store.state.homepage.modes.attrs.title }}</span></h2>
      <div class="row">
        <ul class="nModes_Tabs">
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected-first': mode === 0}" @click="mode = 0">{{ $store.state.homepage.modes_server_side_rendering.attrs.title }}</li>
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected': mode === 1}" @click="mode = 1">{{ $store.state.homepage.modes_statically_generated.attrs.title }}</li>
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected-last': mode === 2}" @click="mode = 2">{{ $store.state.homepage.modes_single_page_app.attrs.title }}</li>
        </ul>
        <div class="nModes_Content">
          <div v-show="mode === 0">
            <h3 class="nModes_Content_Title">{{ $store.state.homepage.modes_server_side_rendering.attrs.content_title }}</h3>
            <p class="nModes_Content_Description" v-html="$store.state.homepage.modes_server_side_rendering.body">
            </p>
          </div>
          <div v-show="mode === 1">
            <h3 class="nModes_Content_Title">{{ $store.state.homepage.modes_statically_generated.attrs.content_title }}</h3>
            <p class="nModes_Content_Description" v-html="$store.state.homepage.modes_statically_generated.body">
            </p>
          </div>
          <div v-show="mode === 2">
            <h3 class="nModes_Content_Title">{{ $store.state.homepage.modes_single_page_app.attrs.content_title }}</h3>
            <p class="nModes_Content_Description" v-html="$store.state.homepage.modes_single_page_app.body">
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      mode: 0
    }
  }
}
</script>

<style lang="scss">
.nModes {
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  padding: 5rem 1rem;
  @media (min-width: $--md) {
    padding: 8rem 0;
  }
  &_Title {
    text-align: center;
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h2-font-size;
    font-weight: $font-weight-regular;
    line-height: normal;
    margin-bottom: 6rem;
    span {
      padding-bottom: 10px;
      border-bottom: 4px solid $color-vue-green;
      border-radius: 4px;
    }
  }
  &_Tabs {
    width: 100%;
    padding: 0;
    list-style: none;
    @media (min-width: $--md) {
      width: 30%;
    }
    &_Option {
      position: relative;
      color: $color-text-regular;
      cursor: pointer;
      padding: 10px 0;
      font-size: $font-size-lg;
      font-weight: $font-weight-light;
      border-bottom: 1px solid $background-color-dark;
      margin-bottom: 15px;
      &:after {
        content: " ";
        width: 0;
        height: 0;
        top: 10px;
        right: 0;
        position: absolute;
        border-bottom: 20px solid $background-color-dark;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
      }
      &:hover, &--selected {
        color: $color-text-primary;
        border-bottom: 1px solid $color-nuxt-green;
        &:after {
          border-bottom: 20px solid $color-nuxt-green;
        }
      }
      &:first-child:hover, &--selected-first {
        color: $color-text-primary;
        border-bottom: 1px solid $color-vue-green;
        &:after {
          border-bottom: 20px solid $color-vue-green;
        }
      }
      &:last-child:hover, &--selected-last {
        color: $color-text-primary;
        border-bottom: 1px solid $color-vue-grey;
        &:after {
          border-bottom: 20px solid $color-vue-grey;
        }
      }
    }
  }
  &_Content {
    width: 100%;
    @media (min-width: $--md) {
      width: 60%;
    }
    &_Title {
      line-height: 32px;
    }
    &_Description {

    }
  }
}
</style>
