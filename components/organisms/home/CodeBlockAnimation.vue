<template>
  <div ref="anim">
    <ul class="flex">
      <li>
        <AppButton button-class="relative mr-8 text-lg font-bold" @click.native="activeCodeBlock = 'fromCLI'">
          {{ $t('home.cli') }}
          <span v-if="activeCodeBlock === 'fromCLI'" class="absolute -bottom-1.5 left-0 h-0.5 bg-primary w-1/3" />
        </AppButton>
      </li>
      <li>
        <AppButton button-class="relative mr-8 text-lg font-bold" @click.native="activeCodeBlock = 'fromScratch'">
          {{ $t('home.scratch') }}
          <span v-if="activeCodeBlock === 'fromScratch'" class="absolute -bottom-1.5 left-0 h-0.5 bg-primary w-1/3" />
        </AppButton>
      </li>
    </ul>

    <!-- Code blocks -->
    <div class="mt-40 mb-40 lg:mt-0 lg:mb-0 w-full" :style="{ height: '300px' }">
      <div ref="codeBlock" class="relative">
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

<script>
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, context) {
    const activeCodeBlock = ref('')
    let anim = ref(null)
    let codeBlock = ref(null)

    onMounted(() => {
      codeBlock = context.refs.codeBlock
      anim = context.refs.anim
      animationObserver()
    })

    function animationObserver() {
      const callback = entries => {
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
