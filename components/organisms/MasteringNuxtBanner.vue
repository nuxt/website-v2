<template>
  <a
    href="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=pre_launch"
    target="_blank"
    rel="noopener"
    class="block"
    :style="{ backgroundColor: '#21272d' }"
  >
    <div class="font-roboto lg:container lg:mx-auto">
      <div
        class="
          h-20
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
        <div class="w-12 md:absolute md:left-0">
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
            <img
              src="/img/banners/masteringnuxt/cup.png"
              :style="{ width: '62px' }"
            />
          </div>
          <p
            class="
              leading-tight
              text-sm
              font-bold
              max-w-72
              md:text-xl
              lg:max-w-full
            "
          >
            <span :style="{ color: '#00dc82' }"> Save 40% </span>
            on the completed Mastering Nuxt course!
          </p>
          <div class="flex items-center">
            <button
              class="
                font-bold
                uppercase
                bg-orange-500
                hover:bg-orange-600
                text-white
                no-underline
                inline-block
                px-3
                py-3
                md:px-6
                uppercase
                rounded
                white-space-nowrap
              "
            >
              Get Access
            </button>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
