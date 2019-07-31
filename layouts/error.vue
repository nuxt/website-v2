<template>
  <div class="relative py-24">
    <nui-container>
      <div class="flex justify-between">
        <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left">
          <h1 class="text-6xl font-medium leading-normal text-nuxt-lightgreen">
            {{ error.statusCode }}
          </h1>
          <h3 class="text-3xl text-nuxt-gray font-medium leading-relaxed mb-6">
            {{ error.message }}
          </h3>
          <!-- <div class="py-4">
            <nui-button to="/" green class="mr-4">
              <nui-svg-play/>
              get started
            </nui-button>
            <nui-button to="/">
              <nui-svg-gh/>
              20K+ github stars
            </nui-button>
          </div> -->
        </div>
        <div class="hidden lg:block lg:w-5/12">
          <mountains-globe/>
        </div>
      </div>
    </nui-container>
  </div>
</template>

<script>
import mountainsGlobe from '@/components/svg/streamline/montains-globe'

export default {
  props: ['error'],
  components: {
    mountainsGlobe
  }
}
</script>
