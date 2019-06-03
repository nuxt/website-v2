<template>
  <div class="container">
    <h1><span>NuxtJS Logos</span></h1>
    <div class="logos">
      <figure class="transparent">
        <img src="/logos/nuxt.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt.svg" target="_blank" rel="noopener">nuxt.svg</a> / <a href="/logos/nuxt-square.svg" target="_blank" rel="noopener">nuxt-square.svg</a></figcaption>
      </figure>
      <figure>
        <img src="/logos/nuxt-icon.png" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-icon.png" target="_blank" rel="noopener">nuxt-icon.png</a></figcaption>
        <span class="dimensions">512 x 512</span>
      </figure>
      <figure>
        <img src="/logos/nuxt-emoji.png" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-emoji.png" target="_blank" rel="noopener">nuxt-emoji.png</a></figcaption>
        <span class="dimensions">128 x 128</span>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-white.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-white.svg" target="_blank" rel="noopener">nuxt-white.svg</a> / <a href="/logos/nuxt-square-white.svg" target="_blank" rel="noopener">nuxt-square-white.svg</a></figcaption>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-icon-white.png" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-icon-white.png" target="_blank" rel="noopener">nuxt-icon-white.png</a></figcaption>
        <span class="dimensions">512 x 512</span>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-emoji-white.png" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-emoji-white.png" target="_blank" rel="noopener">nuxt-emoji-white.png</a></figcaption>
        <span class="dimensions">128 x 128</span>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 40px;
  color: $color-text-primary;
  font-size: $h2-font-size;
  font-weight: $font-weight-regular;
  line-height: normal;
  margin-bottom: 3rem;
  span {
      padding-bottom: 10px;
      border-bottom: 4px solid $color-vue-green;
      border-radius: 4px;
  }
}
.logos {
}
figure {
  position: relative;
  margin: 0;
  padding: 20px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  max-width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-sizing: border-box;
  &.dark {
    background-color: #2F495E;
  }
  figcaption {
    color: $--color-grey-8;
  }
  .dimensions {
    position: absolute;
    top: 0px;
    right: 10px;
    color: $--color-grey-8;
    opacity: 0;
    transition-property: all;
    transition-duration: 0.3s;
  }
  &:hover .dimensions {
    opacity: 1;
    top: 10px;
  }
  img {
    width: 100%;
  }
  figcaption {
    text-align: center;
  }
}
</style>
