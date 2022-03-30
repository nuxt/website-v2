<template>
  <a
    href="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=banner&utm_campaign=summer21"
    target="_blank"
    rel="noopener"
    :class="isOpen ? 'block' : 'hidden'"
    :style="{ backgroundColor: '#21272d' }"
  >
    <div class="font-roboto lg:container lg:mx-auto">
      <div
        class="
          h-12
          relative
          flex
          items-center
          justify-center
          text-xs
          mx-4
          md:mx-10 md:text-sm
          lg:text-base lg:mx-0
          text-white
        "
      >
        <div class="w-10 md:absolute md:left-0">
          <svg viewBox="0 0 49 32" xmlns="http://www.w3.org/2000/svg">
            <g fill-rule="nonzero" fill="none">
              <path
                d="M19.504 0a2.8 2.8 0 012.418 1.374l4.706 11.493v12.986L19.504 7.697 6.384 30.069a.998.998 0 01-.862.494H1.744a1 1 0 01-.863-1.505L17.087 1.374A2.8 2.8 0 0119.504 0z"
                fill="#FFF"
              />
              <path
                d="M31.613 5.855a2.8 2.8 0 012.417 1.374l12.875 21.996a1 1 0 01-.863 1.505h-3.785a1 1 0 01-.862-.494l-9.783-16.684-4.986 12.295V12.88l2.57-5.651a2.8 2.8 0 012.417-1.374z"
                fill="#01C58E"
              />
            </g>
          </svg>
        </div>
        <div class="flex items-center justify-center space-x-2 md:space-x-4">
          <div class="hidden md:block">
            <img src="/img/banners/masteringnuxt/cup.png" class="w-8" />
          </div>
          <p
            class="
              leading-tight
              font-bold
              max-w-72
              text-xs
              md:text-base md:max-w-full
            "
          >
            Less than
            <span :style="{ color: '#00dc82' }"> 48 hours </span>
            for the Nuxt video course offer!
          </p>
          <div class="flex items-center">
            <button
              :style="{ 'white-space': 'nowrap' }"
              class="
                font-bold
                uppercase
                bg-orange-500
                hover:bg-orange-600
                text-white
                no-underline
                inline-block
                px-3
                py-1
                text-sm
                uppercase
                rounded
              "
            >
              Get Access
            </button>
          </div>
        </div>
        <div
          class="hidden w-3 absolute right-0 md:block"
          @click.prevent.stop="close"
        >
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
