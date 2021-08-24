<template>
  <a
    href="https://nuxtnation.com/?utm_source=nuxt&utm_medium=banner"
    target="_blank"
    rel="noopener"
    :class="isOpen ? 'block' : 'hidden'"
    :style="{ backgroundColor: '#183042' }"
  >
    <div class="font-roboto lg:container lg:mx-auto">
      <div
        class="
          h-12
          relative
          flex
          items-center
          justify-between
          text-xs
          mx-4
          md:mx-10 md:text-sm
          lg:text-base lg:mx-4
          text-white
        "
      >
        <div class="w-10">
          <svg width="22" height="26" xmlns="http://www.w3.org/2000/svg">
            <g fill-rule="nonzero" fill="none">
              <path
                d="M.792 0h3.247c.691 0 1.356.264 1.856.736l9.962 9.426v7.04L6.043 7.996v16.826L.877 19.715A2.946 2.946 0 0 1 0 17.618L.019.763C.019.342.365 0 .792 0z"
                fill="#06BA8A"
              />
              <path
                d="M21.108 25.198h-3.247a2.702 2.702 0 0 1-1.859-.736l-9.959-9.426v-7.04l9.814 9.205V.375l5.165 5.108c.564.557.88 1.312.878 2.1l-.02 16.854a.769.769 0 0 1-.772.761z"
                fill="#FFF"
              />
            </g>
          </svg>
        </div>
        <div
          class="flex items-center justify-between space-x-2 md:space-x-4 mx-4"
        >
          <p class="leading-tight font-bold text-xs md:text-sm md:max-w-full">
            🚀 Join us for the Nuxt Nation 2021 conference
          </p>
          <div
            :style="{ 'white-space': 'nowrap' }"
            class="
              font-bold
              text-primary-base
              hover:text-primary-light
              underline
              inline-block
              px-3
              py-1
              rounded
            "
          >
            Register Now →
          </div>
        </div>
        <div class="w-3" @click.prevent.stop="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              d="M13.69.321a1.059 1.059 0 00-1.498 0L7 5.503 1.808.311a1.056 1.056 0 00-1.497 0 1.056 1.056 0 000 1.497L5.503 7 .311 12.192a1.056 1.056 0 000 1.497 1.056 1.056 0 001.497 0L7 8.497l5.192 5.192a1.056 1.056 0 001.497 0 1.056 1.056 0 000-1.497L8.497 7l5.192-5.192a1.064 1.064 0 000-1.487z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.isOpen = !localStorage.getItem('mn-banner-closed')
  },
  methods: {
    close() {
      this.isOpen = false
      localStorage.setItem('mn-banner-closed', 1)
    }
  }
}
</script>
