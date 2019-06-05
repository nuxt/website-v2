<template>
  <div class="container">
    <h1><span>NuxtJS Logos</span></h1>
    <div class="logos">
      <figure class="transparent">
        <img src="/logos/nuxt.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt.svg" target="_blank" rel="noopener">nuxt.svg</a> / <a href="/logos/nuxt-square.svg" target="_blank" rel="noopener">nuxt-square.svg</a></figcaption>
      </figure>
      <figure class="transparent">
        <img src="/logos/nuxtjs-typo.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxtjs-typo.svg" target="_blank" rel="noopener">nuxtjs-typo.svg</a></figcaption>
      </figure>
      <figure>
        <img src="/logos/nuxt-icon.png" srcset="/logos/nuxt-icon@2x.png 2x" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-icon.png" target="_blank" rel="noopener">nuxt-icon.png</a></figcaption>
        <span class="dimensions">512 x 512</span>
      </figure>
      <figure>
        <img src="/logos/nuxt-emoji.png" srcset="/logos/nuxt-emoji@2x.png 2x" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-emoji.png" target="_blank" rel="noopener">nuxt-emoji.png</a></figcaption>
        <span class="dimensions">128 x 128</span>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-white.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-white.svg" target="_blank" rel="noopener">nuxt-white.svg</a> / <a href="/logos/nuxt-square-white.svg" target="_blank" rel="noopener">nuxt-square-white.svg</a></figcaption>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxtjs-typo-white.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxtjs-typo-white.svg" target="_blank" rel="noopener">nuxtjs-typo-white.svg</a></figcaption>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-icon-white.png" srcset="/logos/nuxt-icon-white@2x.png 2x" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-icon-white.png" target="_blank" rel="noopener">nuxt-icon-white.png</a></figcaption>
        <span class="dimensions">512 x 512</span>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-emoji-white.png" srcset="/logos/nuxt-emoji-white@2x.png 2x" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-emoji-white.png" target="_blank" rel="noopener">nuxt-emoji-white.png</a></figcaption>
        <span class="dimensions">128 x 128</span>
      </figure>
    </div>
    <p class="info">You can also download our <a href="/favicon.ico" target="_blank" rel="noopener">favicon</a> or our  <a href="/logos/nuxt-logos.sketch" target="_blank" rel="noopener">Sketch file</a>.</p>
  </div>
</template>

<script>
export default {
  transition: 'logos',
  head: {
    title: 'Logos',
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { hid: 'description', name: 'description', content: 'Download Nuxt.js logos (SVG, icons, emoji and favicon).' },
      { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
    ]
  }
}
</script>

<style lang="scss" scoped>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media (min-width: $--sm) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: $--md) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
figure {
  position: relative;
  margin: 0;
  padding: 20px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  max-width: 300px;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  display: table;
  &.dark {
    background-color: #2F495E;
    &:hover {
      background-color: #233A4D;
    }
  }
  &:hover {
    background-color: rgb(240, 240, 240);
  }
  figcaption {
    padding-top: 5px;
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
    max-width: 100%;
  }
  figcaption {
    text-align: center;
  }
}
.info {
  padding: 5px 10px;
  border-left: 3px solid $color-vue-green;
}
</style>
