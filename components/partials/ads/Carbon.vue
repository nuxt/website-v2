<template>
  <div class="Carbon" ref="carbonads"></div>
</template>

<script>
export default {
  mounted() {
    if (['en', 'fr'].indexOf(this.$store.state.locale) !== -1 && this.$refs.carbonads) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg')
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
      flex-direction: column;
      @screen xs {
        flex-direction: row;
      }
      @screen lg {
        flex-direction: column;
      }
      flex: 1;
      .carbon-img {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 1rem;
        @screen xs {
          margin-bottom: 0rem;
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
>>>>>>> 1b87907b (feat: dark mode (#303))
    &:hover {
      @apply no-underline text-gray-500;
    }
  }
<<<<<<< HEAD
}
=======
  @media (max-width: 1023px) {
    // margin: 1rem 0;
    & .carbon-img {
      // float: left;
      display: block;
    }
    & .carbon-text {
      width: 150px;
      display: block;
    }
    & .carbon-poweredby {
      display: block;
      // float: right;
      text-align: right;
    }
  }
}

>>>>>>> 1b87907b (feat: dark mode (#303))
</style>
