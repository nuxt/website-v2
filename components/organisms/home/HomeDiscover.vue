<template>
  <div>
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/dark/landscape-discover-modules-t.svg`"
      class="absolute left-0 object-fill w-full h-40 -mt-24"
      alt="A landscape image"
    />
    <HomeSection class="pt-32 pb-32">
      <template #section-content>
        <SectionContent class="col-span-6 flex items-center md:items-start pt-16 md:pt-0" position="left">
          <template #category>
            <span class="text-lg font-bold text-tertiary">{{ category }}</span>
          </template>

          <template #title>
            <h2
              class="
                font-serif font-normal
                text-center
                md:text-left
                text-display-6
                md:text-display-5
                2xl:text-display-4
              "
            >
              <Markdown use="title" unwrap="p" />
            </h2>
          </template>

          <template #paragraph>
            <p class="w-full pt-4 font-normal text-center md:text-left text-body-base md:text-body-lg 2xl:text-body-xl">
              <Markdown use="description" unwrap="p" />
            </p>
          </template>
          <template #button>
            <SectionButton
              href="#"
              :aria-label="buttonText"
              size="lg"
              class="bg-primary text-gray-800 hover:bg-primary-400 focus:bg-primary-400 text-sm"
              >{{ buttonText }}</SectionButton
            >
          </template>
        </SectionContent>
      </template>
      <template #left-illustration>
        <div class="col-span-6 h-full md:pr-16 flex flex justify-center">
          <img :src="`/img/home/discover/discover.svg`" />
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
      class="absolute left-0 z-10 object-fill w-full h-40 md:-mt-20 dark:hidden"
      alt="A landscape image"
    />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Discover Nuxt'
    }
  }
})
</script>
