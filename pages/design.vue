<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            <AppTitle /> {{ $t('design.title') }}
          </h1>
          <i18n
            path="design.description"
            tag="h3"
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            <template v-slot:break>
              <br />
            </template>
          </i18n>
        </div>
        <DesignIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 p-4">
          <section class="bg-gray-100 rounded p-6">
            <h2 class="text-2xl text-nuxt-gray font-medium leading-normal mb-6">
              Light theme
            </h2>
            <figure class="rounded hover:bg-gray-200">
              <img src="/logos/nuxt.svg" alt="nuxt-logo" />
              <figcaption>
                <a href="/logos/nuxt.svg" target="_blank" rel="noopener">
                  nuxt.svg
                </a>
                /
                <a href="/logos/nuxt-square.svg" target="_blank" rel="noopener">
                  nuxt-square.svg
                </a>
              </figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img
                src="/logos/nuxt-icon.png"
                srcset="/logos/nuxt-icon@2x.png 2x"
                alt="nuxt-logo"
              />
              <figcaption>
                <a href="/logos/nuxt-icon.png" target="_blank" rel="noopener">
                  nuxt-icon.png
                </a>
              </figcaption>
              <span class="dimensions">512 x 512</span>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img
                src="/logos/nuxt-emoji.png"
                srcset="/logos/nuxt-emoji@2x.png 2x"
                alt="nuxt-logo"
              />
              <figcaption>
                <a href="/logos/nuxt-emoji.png" target="_blank" rel="noopener">
                  nuxt-emoji.png
                </a>
              </figcaption>
              <span class="dimensions">128 x 128</span>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img src="/logos/nuxtjs-typo.svg" alt="nuxt-logo" />
              <figcaption>
                <a href="/logos/nuxtjs-typo.svg" target="_blank" rel="noopener">
                  nuxtjs-typo.svg
                </a>
              </figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img
                src="/logos/built-with-nuxt.svg"
                alt="built-with-nuxt-logo"
              />
              <figcaption>
                <a
                  href="/logos/built-with-nuxt.svg"
                  target="_blank"
                  rel="noopener"
                >
                  built-with-nuxt.svg
                </a>
              </figcaption>
            </figure>
          </section>
        </div>
        <div class="w-full lg:w-1/2 p-4">
          <section class="bg-nuxt-gray rounded p-6">
            <h2 class="text-2xl text-white font-medium leading-normal mb-6">
              Dark theme
            </h2>
            <figure class="rounded hover:bg-gray-800">
              <img src="/logos/nuxt-white.svg" alt="nuxt-logo" />
              <figcaption>
                <a href="/logos/nuxt-white.svg" target="_blank" rel="noopener">
                  nuxt-white.svg
                </a>
                /
                <a
                  href="/logos/nuxt-square-white.svg"
                  target="_blank"
                  rel="noopener"
                >
                  nuxt-square-white.svg
                </a>
              </figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img
                src="/logos/nuxt-icon-white.png"
                srcset="/logos/nuxt-icon-white@2x.png 2x"
                alt="nuxt-logo"
              />
              <figcaption>
                <a
                  href="/logos/nuxt-icon-white.png"
                  target="_blank"
                  rel="noopener"
                >
                  nuxt-icon-white.png
                </a>
              </figcaption>
              <span class="dimensions">512 x 512</span>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img
                src="/logos/nuxt-emoji-white.png"
                srcset="/logos/nuxt-emoji-white@2x.png 2x"
                alt="nuxt-logo"
              />
              <figcaption>
                <a
                  href="/logos/nuxt-emoji-white.png"
                  target="_blank"
                  rel="noopener"
                >
                  nuxt-emoji-white.png
                </a>
              </figcaption>
              <span class="dimensions">128 x 128</span>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img src="/logos/nuxtjs-typo-white.svg" alt="nuxt-logo" />
              <figcaption>
                <a
                  href="/logos/nuxtjs-typo-white.svg"
                  target="_blank"
                  rel="noopener"
                >
                  nuxtjs-typo-white.svg
                </a>
              </figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img
                src="/logos/built-with-nuxt-white.svg"
                alt="built-with-nuxt-logo"
              />
              <figcaption>
                <a
                  href="/logos/built-with-nuxt-white.svg"
                  target="_blank"
                  rel="noopener"
                >
                  built-with-nuxt-white.svg
                </a>
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
      <i18n
        path="design.other_download_message"
        tag="p"
        class="text-center mt-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
      >
        <template v-slot:favicon>
          <a href="/favicon.ico" target="_blank" rel="noopener">favicon</a>
        </template>
        <template v-slot:sketch>
          <a href="/logos/nuxt-logos.sketch" target="_blank" rel="noopener">
            Sketch
          </a>
        </template>
      </i18n>
    </div>
  </div>
</template>

<script>
import DesignIllustration from '~/assets/illustrations/design.svg?inline'

export default {
  transition: 'logos',
  components: {
    DesignIllustration
  },
  head() {
    const title = 'Design Resources - NuxtJS'
    const description =
      'Download NuxtJS design resources (SVG, icons, emoji and favicon).'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>

<style scoped>
figure {
  @apply relative p-4 text-center text-gray-500 table w-full;

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

  & .dimensions {
    @apply font-normal absolute top-0 opacity-0;

    right: 20px;
    transition-duration: 0.3s;
    transition-property: all;
  }
}

a {
  @apply text-nuxt-lightgreen font-normal;

  &:hover {
    @apply underline;
  }
}
</style>
