<template>
  <section class="nCodesandbox">
    <div class="container">
      <h2 class="nCodesandbox_Title"><span>{{ $store.state.lang.homepage.codesandbox_title }}</span></h2>
      <code-sandbox src="https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?autoresize=1&hidenavigation=1&view=preview" />
      <div class="nCodesandbox_Content">
        <a class="nCodesandbox_Content_Button nCodesandbox_Content_Button--green" href="https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?autoresize=1&hidenavigation=1&view=preview" target="_blank" rel="noopener">
          {{ $store.state.lang.homepage.codesandbox_open }}
        </a>
        <nuxt-link class="nCodesandbox_Content_Button" to="/examples">
          {{ $store.state.lang.homepage.codesandbox_examples }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import CodeSandbox from '~/components/CodeSandbox.vue'

export default {
  components: {
    CodeSandbox
  }
}
</script>

<style lang="scss">
.nCodesandbox {
  position: relative;
  background-color: $background-color-light;
  padding: 8rem 0;
  text-align: center;
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
  &_Content {
    padding-top: 3rem;
    &_Button {
      color: $color-text-regular;
      display: inline-block;
      padding: 1rem 2rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: $font-weight-bold;
      box-shadow: $--box-shadow-1;
      border-radius: 4px;
      margin-right: 30px;
      background-color: $background-color-lighter;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-decoration: none;
        color: $color-text-primary;
        box-shadow: $--box-shadow-2;
      }
      &--green {
        color: $background-color-lighter;
        background-color: $color-vue-green;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  &_Link {
    border: 1px solid #41B883;
    padding: 10px 20px;
    font-size: 20px;
    position: relative;
    right: 0;
    margin: 10px 0;
    text-decoration: none;
    display: inline-flex;
    align-self: center;
    &:hover {
      background: #41B883;
      color: #141618;
      .fill {
        fill: #141618;
      }
      .stroke {
        stroke: #141618;
      }
    }
  }
  &_Examples {
    color: #999;
    text-decoration: underline;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@media (max-width: 991px) {
  .nCodesandbox iframe {
    display: none;
  }
}
</style>
