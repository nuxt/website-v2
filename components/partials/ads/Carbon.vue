<template>
  <div class="Carbon" ref="carbonads"></div>
</template>

<script>
export default {
  mounted() {
<<<<<<< HEAD:components/partials/ads/Carbon.vue
    if (['en', 'fr'].indexOf(this.$store.state.locale) !== -1 && this.$refs.carbonads) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg')
=======
    // if (['en', 'fr'].includes(this.$i18n.locale) && this.$refs.carbonads) {
    if (this.$refs.carbonads) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute(
        'src',
        '//cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg'
      )
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/ads/CarbonAds.vue
      script.setAttribute('id', '_carbonads_js')
      this.$refs.carbonads.appendChild(script)
    }
  }
}
</script>

<style lang="scss">
<<<<<<< HEAD
.Carbon {
  @apply bg-white p-4 flex flex-col w-40;
  .carbon-img {
  }
  .carbon-text {
    @apply text-sm m-0 text-gray-600 block pt-2 leading-relaxed;
    &:hover {
      @apply no-underline text-gray-700;
    }
  }
  .carbon-wrap {
  }
  .carbon-poweredby {
    @apply text-xs text-right text-gray-400 block pt-2;
=======
[data-theme='dark'] .Carbon {
  background-color: theme('colors.dark.surface');

  .carbon-text {
    color: theme('colors.dark.onSurfacePrimary');

    &:hover {
      color: theme('colors.dark.onSurfaceSecondary');
    }
  }
}

[data-theme='light'] .Carbon {
  background-color: theme('colors.gray.200');

  .carbon-text {
    @apply text-gray-600;

    &:hover {
      @apply text-gray-800;
    }
  }
}

.Carbon {
  @apply p-4 flex flex-col ml-auto mt-4;

  max-width: 100%;

  @screen sm {
    max-width: 320px;
  }

  @screen lg {
    @apply mt-0 mx-auto;

    max-width: 160px;
  }

  #carbonads span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .carbon-wrap {
      display: flex;
      flex: 1;
      flex-direction: column;

      @screen xs {
        flex-direction: row;
      }

      @screen lg {
        flex-direction: column;
      }

      .carbon-img {
        align-items: flex-start;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;

        @screen xs {
          margin-bottom: 0;
        }

        @screen lg {
          margin-bottom: 1rem;
        }
      }

      .carbon-text {
        @apply flex-1 text-sm w-full m-0 text-left block leading-relaxed;

        &:hover {
          @apply no-underline;
        }

        @screen xs {
          margin-left: 1rem;
        }

        @screen lg {
          margin-left: 0;
        }
      }
    }
  }

  img {
    @apply w-full;
  }

  & .carbon-poweredby {
    @apply ml-2 text-xs text-right text-gray-400 block pt-2;
<<<<<<< HEAD:components/partials/ads/Carbon.vue
>>>>>>> 1b87907b (feat: dark mode (#303))
=======

>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/ads/CarbonAds.vue
    &:hover {
      @apply no-underline text-gray-500;
    }
  }
<<<<<<< HEAD:components/partials/ads/Carbon.vue
<<<<<<< HEAD
}
=======
=======

>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/ads/CarbonAds.vue
  @media (max-width: 1023px) {
    // margin: 1rem 0;
    & .carbon-img {
      // float: left;
      display: block;
    }

    & .carbon-text {
      display: block;
      width: 150px;
    }

    & .carbon-poweredby {
      display: block;
      // float: right;
      text-align: right;
    }
  }
}
<<<<<<< HEAD:components/partials/ads/Carbon.vue

>>>>>>> 1b87907b (feat: dark mode (#303))
=======
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/partials/ads/CarbonAds.vue
</style>
