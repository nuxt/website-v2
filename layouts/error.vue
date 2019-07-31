<template>
  <div class="relative">
    <nui-container>
      <div class="flex items-center justify-between">
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-6xl font-medium leading-normal text-nuxt-lightgreen">
            {{ error.statusCode }}
          </h1>
          <h3 class="text-4xl text-nuxt-gray font-medium leading-relaxed mb-6">
            {{ error.message }}
          </h3>
          <div class="inline-block py-4">
            <nui-button to="/" green class="mr-4">
              Go back home...
            </nui-button>
          </div>
        </div>
        <div class="hidden lg:block lg:w-5/12 xl:w-4/12">
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
