<template>
  <div ref="carbonads" class="Carbon" />
</template>

<script>
export default {
  mounted () {
    // if (['en', 'fr'].includes(this.$store.state.locale) && this.$refs.carbonads) {
    if (this.$refs.carbonads) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg')
      script.setAttribute('id', '_carbonads_js')
      this.$refs.carbonads.appendChild(script)
    }
  }
}
</script>

<style>
.Carbon {
  @apply p-4 flex flex-col mx-auto bg-gray-200 mt-4;
  max-width: 100%;
  & .carbon-text {
    @apply text-sm m-0 text-left text-gray-600 block pt-2 leading-relaxed;
    &:hover {
      @apply no-underline text-gray-700;
    }
  }
  & .carbon-poweredby {
    @apply text-xs text-right text-gray-400 block pt-2;
    &:hover {
      @apply no-underline text-gray-500;
    }
  }
  @media (max-width: 1023px) {
    margin: 1rem 0;
    & .carbon-img {
      float: left;
      display: block;
    }
    & .carbon-text {
      width: 150px;
      display: block;
      float: left;
      padding: 0.25rem 1rem;
      padding-right: 0;
    }
    & .carbon-poweredby {
      display: block;
      float: right;
      text-align: right;
    }
  }
}
@screen sm {
  .Carbon {
    max-width: 320px;
  }
}
@screen lg {
  .Carbon {
    @apply bg-white mt-0;
    max-width: 160px;
  }
}
</style>
