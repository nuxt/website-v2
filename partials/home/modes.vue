<template>
  <section class="nModes">
    <div class="container">
      <h2 class="nModes_Title"><span>Rendering modes</span></h2>
      <div class="row">
        <ul class="nModes_Tabs">
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected-first': mode === 0}" @click="mode = 0">Server Rendered</li>
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected': mode === 1}" @click="mode = 1">Static Generated</li>
          <li class="nModes_Tabs_Option" :class="{'nModes_Tabs_Option--selected-last': mode === 2}" @click="mode = 2">Single Page App</li>
        </ul>
        <div class="nModes_Content">
          <div v-show="mode === 0">
            <h3 class="nModes_Content_Title">Server Rendered (Universal SSR)</h3>
            <p class="nModes_Content_Description">
              You can use Nuxt.js as a framework to handle all the UI rendering of your project.
              <br/>
              When launching nuxt, it will start a development server with hot-reloading and Vue Server Renderer configured to automatically server-render your application.
            </p>
          </div>
          <div v-show="mode === 1">
            <h3 class="nModes_Content_Title">Static Generated (Pre Rendering)</h3>
            <p class="nModes_Content_Description">
              The big innovation of Nuxt.js comes with the nuxt generate command.
              <br/>
              When building your application, it will generate the HTML for every one of your routes and store it in an HTML file.
              This way, you have both benefits from server-side rendering and CDN serving.
            </p>
          </div>
          <div v-show="mode === 2">
            <h3 class="nModes_Content_Title">Single Page Application (SPA)</h3>
            <p class="nModes_Content_Description">
              If, for any reason, you prefer not to use server side rendering or need static hosting for your application, you can simply use SPA mode using <code>nuxt --spa</code>. In combination with the generate feature, it gives you a powerful SPA deployment mechanism without the need to use a Node.js runtime or any special server handling.
              <br/>
              Take a look at the commands to learn more about usage.
              <br/>
              If you already have a server, you can plug Nuxt.js by using it as a middleware. There is no restriction at all when using Nuxt.js for developing your Universal Web Applications. See the Using Nuxt.js Programmatically guide.
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
  padding: 8rem 0;
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
