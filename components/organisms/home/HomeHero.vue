<template>
  <div class="overflow-hidden relative bg-sky-black text-white -mt-14 pt-14 md:-mt-18 md:pt-18">
    <HeroParallax />
    <!-- Stars -->
    <div class="absolute left-0 w-full h-full overflow-hidden -top-24 z-0">
      <Star v-for="star in 80" :key="star" />
    </div>
    <div class="flex flex-wrap justify-center py-0 section relative z-20">
      <section class="flex flex-col justify-start w-full px-4 pt-36 pb-48 md:pt-44 lg:pb-56 lg:pt-36 text-center">
        <h1 class="font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 mb-6">
          <Markdown use="title" unwrap="p" />
        </h1>
        <h2
          class="
            font-normal
            text-body-base
            xs:text-body-lg
            md:text-body-xl
            2xl:text-body-2xl
            mb-8
            px-8
            sm:px-0
            text-cloud-lighter
          "
        >
          <Markdown use="description" unwrap="p" />
        </h2>
        <div
          class="
            flex flex-col
            sm:flex-row
            flex-wrap
            items-center
            justify-center
            space-y-3
            xs:space-y-0 xs:space-x-3
            xl:space-x-4
          "
        >
          <SectionButton
            :href="primary.url"
            :aria-label="primary.text"
            size="lg"
            class="bg-sky-black hover:bg-sky-darker z-20"
            :icon-left="primary.icon"
            >{{ primary.text }}</SectionButton
          >
          <SectionButton
            ref="copy"
            :aria-label="secondary.text"
            size="lg"
            class="bg-sky-darker bg-opacity-100 hover:bg-sky-dark rounded-md shadow-sm font-mono cursor-pointer z-20"
            :icon-right="state === 'copied' ? 'IconCheck' : secondary.icon"
            >{{ state === 'copied' ? $t('common.copied') : secondary.text }}</SectionButton
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import Clipboard from 'clipboard'

export default defineComponent({
  props: {
    primary: {
      type: Object,
      default: () => ({
        text: '38K+ GitHub stars',
        url: '/https://github.com',
        icon: 'IconGitHub'
      })
    },
    secondary: {
      type: Object,
      default: () => ({
        text: 'npm init nuxt-app',
        url: '/docs',
        icon: 'IconCopy'
      })
    }
  },
  setup() {
    const copy = ref()
    const state = ref('init')

    onMounted(() => {
      const copyCode = new Clipboard(copy.value.$el, {
        target(trigger) {
          return trigger
        }
      })

      copyCode.on('success', event => {
        event.clearSelection()

        state.value = 'copied'

        window.setTimeout(() => {
          state.value = 'init'
        }, 2000)
      })
    })

    return {
      state,
      copy
    }
  }
})
</script>
