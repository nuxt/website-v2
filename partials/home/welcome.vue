<template>
  <section class="nWelcome">
    <div class="container">
      <div class="row">
        <div class="nWelcome_Content">
          <h1 class="nWelcome_Content_Title">
            The <span class="nWelcome_Content_Title_Primary">Vue.js</span> Framework
          <!-- {{ $store.state.lang.homepage.title }} -->
          </h1>
          <h4 class="nWelcome_Content_Subtitle">
            For <transition name="fade" mode="out-in"><span class="nWelcome_Content_Subtitle_Type" v-for="(appType, index) of appTypes" :key="appType" v-if="index === current">{{ appType }}</span></transition>.
          </h4>
          <p class="nWelcome_Content_Description">
            Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.
          </p>
          <div class="nWelcome_Content_Links">
            <nuxt-link class="nWelcome_Content_Links_Button nWelcome_Content_Links_Button--green" to="/guide/installation">
              {{ $store.state.lang.links.get_started }}
            </nuxt-link>
            <a class="nWelcome_Content_Links_Button" href="https://github.com/nuxt/nuxt.js" target="_blank">
              {{ $store.state.lang.links.github }} <span class="version">{{ $store.state.ghVersion }}</span>
            </a>
          </div>
        </div>
        <figure class="nWelcome_Figure">
          <youtube src="https://www.youtube.com/embed/kmf-p-pTi40"/>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import Youtube from '~/components/Youtube.vue'

export default {
  data() {
    return {
      appTypes: ['Universal Applications', 'Static Generated Applications', 'Single Page Applications', 'Desktop Applications', 'Mobile Applications', 'Progressive Web App'],
      current: 0
    }
  },
  mounted() {
    this._timer = setInterval(() => {
      this.current = (this.current + 1) % this.appTypes.length
    }, 2500)
  },
  destroyed() {
    clearInterval(this._timer)
  },
  components: {
    Youtube
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 $font-size-xs;
  margin: 0 auto;
  @media (min-width: $--xs) {
    padding: 0 $font-size-sm;
    max-width: $--xs;
  }
  @media (min-width: $--sm) {
    padding: 0 $font-size-base;
    max-width: $--sm;
  }
  @media (min-width: $--md) {
    padding: 0 $font-size-lg;
    max-width: $--md;
  }
  @media (min-width: $--lg) {
    padding: 0 $font-size-xl;
    max-width: $--lg;
  }
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  align-items: stretch;
}

.nWelcome {
  margin-top: 80px;
  padding: 10rem 0;
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  &_Content {
    width: 45%;
    &_Title {
      margin-top: 0;
      color: $color-text-primary;
      font-size: $h1-font-size;
      font-weight: $font-weight-light;
      line-height: normal;
      margin-bottom: 15px;
      &_Primary {
        color: $color-vue-green;
      }
    }
    &_Subtitle {
      margin-top: 0;
      color: $color-text-regular;
      font-size: $h4-font-size;
      font-weight: $font-weight-light;
      line-height: normal;
      &_Type {
        display: inline-block;
        font-weight: $font-weight-semibold;
        color: $color-vue-green;
      }
    }
    &_Description {
      margin: 30px 0;
    }
    &_Links {
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
  }
  &_Figure {
    width: 45%;
    margin: 0;
    // height: 0;
    // /* 9/16 */
    // padding-bottom: 56.25%;
    // overflow: hidden;
    // position: relative;
    iframe, embed, object {
      width: 100%;
      height: 100%;
      // position: absolute;
      // top: 0;
      // left: 0;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  transform: translateX(-5px)
}
.fade-leave-to {
  transform: translateX(5px)
}
</style>
