<template>
  <header class="nHeader">
    <div class="container row nHeader_Content">
      <nuxt-link to="/" class="nHeader_Content_Logo">
        <n-logo/>
      </nuxt-link>
      <h1 class="nHeader_Content_Title">NUXT</h1>
      <nav class="nHeader_Content_Nav">
        <ul class="nHeader_Content_Nav_List">
          <li class="nHeader_Content_Nav_List_Item">
            <nuxt-link to="/guide">documentation</nuxt-link>
          </li>
          <li class="nHeader_Content_Nav_List_Item">
            <nuxt-link to="/resources">resources</nuxt-link>
          </li>
          <li class="nHeader_Content_Nav_List_Item">
            <nuxt-link to="/cmty">community</nuxt-link>
          </li>
          <li class="nHeader_Content_Nav_List_Item">
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import nLogo from '@/components/svg/nuxt'

export default {
  components: {
    nLogo
  }
}
</script>

<style lang="scss">
.nHeader {
  z-index: $--z-index-deep;
  box-shadow: $box-shadow-base;
  background-color: $background-color-lighter;
  padding: $font-size-xs 0;
  &_Logo {
    margin-right: $font-size-xs;
  }
  &_Content {
    margin-top: -4px;
    align-items: stretch;
    &_Title {
      margin: 0;
      width: 0;
      height: 0;
      overflow: hidden;
    }
    &_Nav {
      display: flex;
      color: $color-text-regular;
      align-items: stretch;
      // flex-grow: 1;
      &_List {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: stretch;
        align-content: flex-end;
        flex-direction: row;
        &_Item {
          position: relative;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          margin-left: 2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          font-weight: $font-weight-semibold;
          color: $color-text-primary;
          // &:first-child {
          //   margin-left: 0;
          // }
        }
      }
    }
  }
  @media (min-width: $--xs) {
    padding: $font-size-sm 0;
    &_Logo {
      margin-right: $font-size-sm;
    }
  }
  @media (min-width: $--sm) {
    padding: $font-size-base 0;
    &_Logo {
      margin-right: $font-size-base;
    }
  }
  @media (min-width: $--md) {
    padding: $font-size-lg 0;
    &_Logo {
      margin-right: $font-size-lg;
    }
  }
  @media (min-width: $--lg) {
    padding: $font-size-xl 0;
    &_Logo {
      margin-right: $font-size-xl;
    }
  }
}
</style>
