<template>
  <div ref="anim">
    <ul class="flex">
      <li>
        <button class="relative mr-8 text-lg font-bold light:text-gray-800" @click="activeCodeBlock = 'fromCLI'">
          From CLI
          <span v-if="activeCodeBlock === 'fromCLI'" class="absolute -bottom-1.5 left-0 h-0.5 bg-primary w-1/3" />
        </button>
      </li>
      <li>
        <button class="relative mr-8 text-lg font-bold light:text-gray-800" @click="activeCodeBlock = 'fromScratch'">
          From Scratch
          <span v-if="activeCodeBlock === 'fromScratch'" class="absolute -bottom-1.5 left-0 h-0.5 bg-primary w-1/3" />
        </button>
      </li>
    </ul>

    <!-- Code blocks -->
    <div class="mt-40 mb-40 lg:mt-0 lg:mb-0 w-full" :style="{ height: '300px' }">
      <div class="relative" ref="codeBlock">
        <Transition name="fade">
          <AnimFromCliCodeblock v-if="activeCodeBlock === 'fromCLI'" />
        </Transition>

        <Transition name="fade">
          <AnimFromScratchCodeblock v-if="activeCodeBlock === 'fromScratch'" />
        </Transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(_, context) {

    let activeCodeBlock = ref('')
    let anim = ref(null)
    let codeBlock = ref(null)

    onMounted(() => {
      codeBlock = context.refs.codeBlock as Element
      anim = context.refs.anim as Element
      animationObserver()
    })
    function animationObserver() {
      const callback = (entries) => {
        entries.forEach(({ _, isIntersecting }) => {
          if (isIntersecting) {
            activeCodeBlock.value = 'fromCLI'
          }
        })
      }
      const observer = new IntersectionObserver(callback, {
        root: anim.value
      })
      observer.observe(codeBlock)
    }
    return {
      activeCodeBlock,
      anim,
      animationObserver
    }
  }
})
</script>
