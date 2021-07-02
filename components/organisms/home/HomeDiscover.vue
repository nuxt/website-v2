<template>
  <div>
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/dark/landscape-discover-modules-t.svg`"
      class="absolute left-0 object-fill w-full h-40 -mt-24 light:hidden"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/light/landscape-discover-modules-t.svg`"
      class="absolute left-0 object-fill w-full h-40 -mt-24 dark:hidden"
      alt="A landscape image"
    />

    <HomeSection class="pt-40 light:bg-gray-50 dark:bg-secondary-darkest">
      <template #section-content>
        <SectionContent class="items-center justify-center col-span-6 md:items-start">
          <template #category>
            <span class="text-lg font-bold text-tertiary">{{ category }}</span>
          </template>

          <template #title>
            <h2
              class="font-serif font-normal text-center md:text-left text-display-6 md:text-display-5 2xl:text-display-4"
            >
              <Markdown use="title" unwrap="p" />
            </h2>
          </template>

          <template #paragraph>
            <p class="py-4 w-full font-normal text-body-base md:text-body-lg 2xl:text-body-xl">
              <Markdown use="description" unwrap="p" />
            </p>
          </template>
        </SectionContent>
      </template>
      <template #right-illustration>
        <div class="col-span-12">
          <div class="flex flex-col items-center justify-center md:flex-row">
            <div
              class="grid items-center grid-cols-3 gap-8 space-x-4 md:gap-0 md:flex md:flex-col md:items-start md:space-x-0 md:space-y-2 md:w-2/5 xl:w-1/5"
            >
              <div v-for="(animation, index) in animations" :key="animation.name">
                <div class="flex flex-col-reverse items-center justify-center space-x-2 md:flex-row">
                  <img
                    :src="`/img/home/discover/diamond.svg`"
                    alt="diamond"
                    class="h-3.5 w-5 pl-1.5 opacity-0"
                    :class="{ 'opacity-100': index === currentIndex }"
                  />
                  <button
                    class="font-semibold focus:outline-none"
                    :class="
                      index === currentIndex ? 'text-gray-700 dark:text-white' : 'text-gray-400 dark:text-gray-400'
                    "
                    @click="changeAnimation(index)"
                  >
                    {{ animation.name }}
                  </button>
                </div>
              </div>
            </div>
            <div class="anim">
              <div ref="lottieAnim" class="h-96" />
                       <p class="z-20"> {{ animationsText[currentIndex]}} </p>
            </div>
          </div>
        </div>
      </template>
    </HomeSection>

    <img
      loading="lazy"
      :src="`/img/home/discover/modules/dark/landscape-discover-modules-b.svg`"
      class="absolute left-0 z-10 object-fill w-full h-40 -mt-20 light:hidden"
      alt="A landscape image"
    />
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/light/landscape-discover-modules-b.svg`"
      class="absolute left-0 z-10 object-fill w-full h-40 -mt-20 dark:hidden"
      alt="A landscape image"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watch, useContext, computed } from '@nuxtjs/composition-api'
import lottie, { AnimationItem, AnimationSegment } from 'lottie-web'
export default defineComponent({
  props: {
    category: {
      type: String,
      default: ''
    },
    animationsText: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(_, context) {
    const { $colorMode } = useContext() as any
    const lottieAnimPathLight = 'https://assets10.lottiefiles.com/private_files/lf30_8cv6lgcx.json'
    const lottieAnimPathDark = 'https://assets10.lottiefiles.com/private_files/lf30_obsnpogu.json'
    const animations = ref([
      {
        name: 'Pages',
        segment: [1, 238] as AnimationSegment
      },
      {
        name: 'UI',
        segment: [238, 448] as AnimationSegment
      },
      {
        name: 'Data',
        segment: [447, 688] as AnimationSegment
      },
      {
        name: 'Modules',
        segment: [688, 928] as AnimationSegment
      },
      {
        name: 'Deployment',
        segment: [928, 1167] as AnimationSegment
      }
    ])
    const lottieAnim = ref(null)
    const currentIndex = ref(0)
    const animFrames = ref([0, 238, 448, 688, 928])
    let anim: AnimationItem

    /* computed */
    const colorMode = computed(() => {
      return $colorMode.value
    })

    /* function */
    // if user clicks on section, stop loop and play specified segment
    function changeAnimation(index: number) {
      currentIndex.value = index
      anim.loop = false
      anim.playSegments(animations.value[index].segment, true)
    }

    function loadAnimation() {
      anim?.destroy()
      /**
       * Temporary use `context.ref` this should replace by Vue3 ref
       */
      lottieAnim.value = context.refs.lottieAnim as Element

      anim = lottie.loadAnimation({
        container: lottieAnim.value,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: colorMode.value === 'dark' ? lottieAnimPathDark : lottieAnimPathLight
      })

      anim.addEventListener('DOMLoaded', function () {
        // play animation when lottie container is visible otherwise pause it
        animationObserver()
      })

      anim.addEventListener('enterFrame', function () {
        const currentIndexFrame = animFrames.value.indexOf(Math.round(anim.currentFrame))

        if (currentIndexFrame !== -1 && anim.loop === true) {
          currentIndex.value = currentIndexFrame
        }
      })

      anim.addEventListener('loopComplete', function () {
        currentIndex.value = 0
      })
    }

    function animationObserver() {
      const callback = entries => {
        entries.forEach(({ _, isIntersecting }) => {
          if (!isIntersecting) {
            anim.pause()
          } else {
            anim.play()
          }
        })
      }

      const observer = new IntersectionObserver(callback, {
        root: document.querySelector('anim'),
        threshold: 0.8 // isIntersecting when 80% of container is visible
      })

      observer.observe(lottieAnim.value)
    }

    /* watcher */
    // reload anim with new path according color mode
    watch(colorMode, (_, __) => {
      loadAnimation()
    })

    onMounted(() => setTimeout(loadAnimation, 250))

    return {
      lottieAnim,
      anim,
      loadAnimation,
      changeAnimation,
      animations,
      currentIndex,
      animationObserver
    }
  }
})
</script>
<style lang="postcss" scoped>
.anim {
  @apply w-full flex flex-col justify-center items-center md:justify-end w-full;
}
</style>
