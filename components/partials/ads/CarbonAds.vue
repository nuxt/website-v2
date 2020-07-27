<template>
  <div ref="carbonads" class="Carbon" />
</template>

<script>
export default {
  mounted() {
    // if (['en', 'fr'].includes(this.$i18n.locale) && this.$refs.carbonads) {
    if (this.$refs.carbonads) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute(
        'src',
        '//cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg'
      )
      script.setAttribute('id', '_carbonads_js')
      this.$refs.carbonads.appendChild(script)
    }
  }
}
</script>

<style lang="scss">
.dark-mode .Carbon {
  background-color: theme('colors.dark.surface');

  .carbon-text {
    color: theme('colors.dark.onSurfacePrimary');

    &:hover {
      color: theme('colors.dark.onSurfaceSecondary');
    }
  }
}

.light-mode .Carbon {
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

    &:hover {
      @apply no-underline text-gray-500;
    }
  }

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
</style>
