<template>
  <nui-container class="py-16">
    <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">Nuxt<span class="text-nuxt-lightgreen">JS</span> Design</h1>
    <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-8">
        NuxtJS is an MIT licensed open source project and completely free to use.<br>
        You can freely use our logos as long as you mention NuxtJS and link to nuxtjs.org.
    </h3>
    <div class="logos">
      <figure class="transparent">
        <img src="/logos/nuxt.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt.svg" target="_blank" rel="noopener">nuxt.svg</a> / <a href="/logos/nuxt-square.svg" target="_blank" rel="noopener">nuxt-square.svg</a></figcaption>
      </figure>
      <div>
        <figure class="transparent">
          <img src="/logos/nuxtjs-typo.svg" alt="nuxt-logo" />
          <figcaption><a href="/logos/nuxtjs-typo.svg" target="_blank" rel="noopener">nuxtjs-typo.svg</a></figcaption>
        </figure>
        <figure class="transparent" style="margin-top: 20px;">
          <img src="/logos/built-with-nuxt.svg" alt="built-with-nuxt-logo" />
          <figcaption><a href="/logos/built-with-nuxt.svg" target="_blank" rel="noopener">built-with-nuxt.svg</a></figcaption>
        </figure>
      </div>
      <figure class="transparent">
        <img src="/logos/nuxt-icon.png" srcset="/logos/nuxt-icon@2x.png 2x" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-icon.png" target="_blank" rel="noopener">nuxt-icon.png</a></figcaption>
        <span class="dimensions">512 x 512</span>
      </figure>
      <figure class="transparent">
        <img src="/logos/nuxt-emoji.png" srcset="/logos/nuxt-emoji@2x.png 2x" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-emoji.png" target="_blank" rel="noopener">nuxt-emoji.png</a></figcaption>
        <span class="dimensions">128 x 128</span>
      </figure>
      <figure class="dark">
        <img src="/logos/nuxt-white.svg" alt="nuxt-logo" />
        <figcaption><a href="/logos/nuxt-white.svg" target="_blank" rel="noopener">nuxt-white.svg</a> / <a href="/logos/nuxt-square-white.svg" target="_blank" rel="noopener">nuxt-square-white.svg</a></figcaption>
      </figure>
      <div>
        <figure class="dark">
          <img src="/logos/nuxtjs-typo-white.svg" alt="nuxt-logo" />
          <figcaption><a href="/logos/nuxtjs-typo-white.svg" target="_blank" rel="noopener">nuxtjs-typo-white.svg</a></figcaption>
        </figure>
        <figure class="dark" style="margin-top: 20px;">
          <img src="/logos/built-with-nuxt-white.svg" alt="built-with-nuxt-logo" />
          <figcaption><a href="/logos/built-with-nuxt-white.svg" target="_blank" rel="noopener">built-with-nuxt-white.svg</a></figcaption>
        </figure>
      </div>
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
  </nui-container>
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

<style scoped>
.logos {
  @apply pb-4;
  & figure {
    @apply mb-4;
  }
}
@screen md {
  .logos {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    & figure {
      @apply mb-0;
    }
  }
}
@screen lg {
  .logos {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
figure {
  @apply relative p-4 shadow-md text-center text-gray-500 table w-full;
  &:hover {
    & .dimensions {
      @apply opacity-100;
      top: 10px;
    }
  }
  & img {
    @apply inline-block;
  }
  & figcaption {
    @apply pt-4;
  }
  &.transparent {
    &:hover {
      background-color: #f0f0f0;
    }
  }
  &.dark {
    @apply bg-nuxt-gray;
    &:hover {
      background-color: #233a4d;
    }
  }
  & .dimensions {
    @apply font-normal absolute top-0 opacity-0;
    right: 20px;
    transition-property: all;
    transition-duration: 0.3s;
  }
}
a {
  @apply text-nuxt-lightgreen font-normal;
  &:hover {
    @apply underline;
  }
}
</style>
