<template>
  <a
    v-if="show"
    href="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=black_friday"
    target="_blank"
    rel="noopener"
    class="group block relative h-10"
    :style="{ background: '#21272D' }"
  >
    <div class="absolute z-0 h-full w-full flex justify-center">
      <img
        :src="`/img/banners/mastering-nuxt/bg-desktop.png`"
        class="h-full hidden xl:inline-block"
        alt="Banner Background"
      />
      <img
        :src="`/img/banners/mastering-nuxt/bg-tablet.png`"
        class="h-full md:inline-block xl:hidden"
        alt="Banner Background"
      />
    </div>
    <div class="relative z-10 h-full inset-0 text-white font-bold flex justify-between items-center px-1 md:px-6">
      <div>
        <img :src="`/img/banners/mastering-nuxt/logo.png`" alt="Mastering Nuxt Logo" class="w-10" />
      </div>
      <div class="flex items-center justify-center gap-2 text-center md:text-left md:gap-6">
        <div>
          Black Friday Sale!
          <span class="block md:inline"
            >Get the Mastering Nuxt Course at <span :style="{ color: '#00dc82' }">40% OFF</span></span
          >
        </div>
        <div class="whitespace-nowrap py-1 px-3 rounded-md bg-azure-radiance group-hover:bg-indigo">Get Discount</div>
      </div>
      <div @click.stop.prevent="close">
        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.69.321a1.057 1.057 0 0 0-1.498 0L7 5.503 1.808.31A1.057 1.057 0 1 0 .31 1.808L5.503 7 .31 12.192a1.057 1.057 0 1 0 1.497 1.497L7 8.497l5.192 5.192a1.057 1.057 0 1 0 1.497-1.497L8.497 7l5.192-5.192a1.064 1.064 0 0 0 0-1.487z"
            fill="#FFF"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = !localStorage.getItem('VS_BF21_BANNER_CLOSED')
  },
  methods: {
    close() {
      this.show = false
      localStorage.setItem('VS_BF21_BANNER_CLOSED', 1)
    }
  }
}
</script>

<style scoped>
a {
  font-size: 10px;
  @screen md {
    @apply text-sm;
  }
}
</style>
