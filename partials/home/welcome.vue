<template>
  <section class="nWelcome">
    <div class="container">
      <div class="row">
        <div class="nWelcome_Content">
          <h1 class="nWelcome_Content_Title" v-html="$store.state.homepage.welcome.attrs.title">
            <!-- {{ $store.state.lang.homepage.title }} -->
          </h1>
          <h4 class="nWelcome_Content_Subtitle">
            {{ $store.state.lang.homepage.welcome.app_types_prefix }}<transition name="fade" mode="out-in"><span class="nWelcome_Content_Subtitle_Type" v-for="(appType, index) of appTypes" :key="appType" v-if="index === current">{{ appType }}</span></transition>{{ $store.state.lang.homepage.welcome.app_types_suffix }}
          </h4>
          <p class="nWelcome_Content_Description" v-html="$store.state.homepage.welcome.body">
          </p>
          <div class="nWelcome_Content_Links">
            <nuxt-link class="nWelcome_Content_Links_Button nWelcome_Content_Links_Button--green" to="/guide/installation">
              {{ $store.state.lang.links.get_started }}
            </nuxt-link>
            <a class="nWelcome_Content_Links_Button" href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener">
              {{ $store.state.lang.links.github }} <span class="version">{{ $store.state.ghVersion }}</span>
            </a>
          </div>
        </div>
        <figure class="nWelcome_Figure">
          <responsive-video src="https://player.vimeo.com/video/311756540" style="margin: 0;"/>
          <p v-html="$store.state.homepage.welcome_figure.body"></p>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveVideo from '~/components/ResponsiveVideo.vue'

export default {
  data() {
    return {
      appTypes: this.$store.state.lang.homepage.welcome.app_types,
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
    ResponsiveVideo
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
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: stretch;
  @media (min-width: $--md) {
    flex-direction: row;
  }
}

.nWelcome {
  // margin-top: 80px;
  padding: 5rem 1rem;
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  @media (min-width: $--md) {
    padding: 10rem 0;
  }
  &_Content {
    width: 100%;
    padding-bottom: 30px;
    @media (min-width: $--md) {
      width: 45%;
      padding-bottom: 0;
    }
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
        margin-right: 0;
        margin-bottom: 1rem;
        background-color: $background-color-lighter;
        @media (min-width: $--md) {
          margin-bottom: 0;
          margin-right: 30px;
        }
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
    margin: 0;
    width: 100%;
    @media (min-width: $--md) {
      width: 45%;
    }
    p {
      font-style: italic;
      color: #666;
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
