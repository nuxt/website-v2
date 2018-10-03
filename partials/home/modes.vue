<template>
  <section class="nModes">
    <div class="container">
      <h2 class="nModes_Title"><span>Production modes</span></h2>
      <div class="row">
        <ul class="nModes_Tabs">
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected-first': mode === 0}" @click="mode = 0">Single Page</li>
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected': mode === 1}" @click="mode = 1">Static Generated</li>
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected-last': mode === 2}" @click="mode = 2">Server Rendered</li>
        </ul>
        <div class="nModes_Content">
          <div v-show="mode === 0">
            <h3 class="nModes_Content_Title">Single Page Application (SPA)</h3>
            <p class="nModes_Content_Description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est harum id vero nulla unde voluptatum quae sit aperiam alias similique facere assumenda debitis rerum, hic obcaecati, maiores iste aliquam?
            </p>
          </div>
          <div v-show="mode === 1">
            <h3 class="nModes_Content_Title">Static Generated (Pre Rendering)</h3>
            <p class="nModes_Content_Description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est harum id vero nulla unde voluptatum quae sit aperiam alias similique facere assumenda debitis rerum, hic obcaecati, maiores iste aliquam?
            </p>
          </div>
          <div v-show="mode === 2">
            <h3 class="nModes_Content_Title">Server Rendered (Universal SSR)</h3>
            <p class="nModes_Content_Description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est harum id vero nulla unde voluptatum quae sit aperiam alias similique facere assumenda debitis rerum, hic obcaecati, maiores iste aliquam?
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
      mode: 2
    }
  }
}
</script>

<style lang="scss">
.nModes {
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  padding: 6rem 0;
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
    width: 30%;
    list-style: none;
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
    width: 60%;
    &_Title {

    }
    &_Description {

    }
  }
}
</style>
