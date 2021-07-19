<template>
  <a
    href="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=pre_launch"
    target="_blank"
    rel="noopener"
    class="block bg-black"
  >
    <div class="font-roboto container mx-auto">
      <div
        class="
          h-20
          relative
          flex
          items-center
          justify-center
          font-medium
          text-xs
          md:text-sm
          lg:text-base
          text-white
        "
      >
        <div class="w-12 absolute left-0">
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
        <div class="flex items-center justify-center">
          <p class="text-xl font-medium">
            <span :style="{ color: '#00dc82' }"> Save 40% </span>
            on the completed Mastering Nuxt course!
          </p>
          <div class="flex items-center ml-4">
            <button
              class="
                font-medium
                uppercase
                bg-orange-500
                hover:bg-orange-600
                text-white
                no-underline
                inline-block
                font-bold
                text-xs
                px-3
                py-1
                lg:py-2
                shadow
                uppercase
                rounded
                hover:shadow-md
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
