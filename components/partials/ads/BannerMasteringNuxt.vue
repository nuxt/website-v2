<template>
  <a
    href="https://masteringnuxt.com"
    rel="noreferrer"
    target="_blank"
    class="banner-mn h-20 fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-3 md:px-5 lg:px-10"
  >
    <div class="flex-shrink-0">
      <img
        src="/img/banners/masteringnuxt/mn-logo.svg"
        class="w-10 md:w-auto"
      />
    </div>
    <div class="flex items-center md:pl-12 md:pr-10 lg:p-0">
      <div
        class="ml-3 md:ml-0 text-white uppercase font-medium text-sm text-left md:text-xl"
      >
        <span> Learn Nuxt.js </span>
        <span class="mx-2 md:mx-3 lg:mx-5"> &bull; </span>
        <span> Advanced Course </span>
        <span class="hidden mx-4 lg:inline"> &bull; </span>
        <span>
          Register <span class="underline">today</span> for Exclusive Offer
        </span>
      </div>
      <div class="hidden flex-shrink-0 md:block">
        <div
          class="banner-mn-button flex items-center px-4 py-2 rounded-lg ml-10"
        >
          <span class="text-white font-bold text-xl mr-2 whitespace-no-wrap">
            SIGN UP
          </span>
          <img src="/img/banners/masteringnuxt/arrow-right.svg" />
        </div>
      </div>
    </div>
    <div
      class="text-white text-3xl hover:opacity-75"
      @click.prevent.stop="close"
    >
      &times;
    </div>
  </a>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.commit('setMasteringNuxtBanner', false)
      localStorage.setItem('MN_BANNER_CLOSED', false)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.banner-mn {
  background: #7a29ff;
  font-family: 'Roboto', sans-serif;

  .banner-mn-button {
    background-color: #ffa61b;
    &:hover {
      background-color: #e29114;
    }
  }
}
</style>
