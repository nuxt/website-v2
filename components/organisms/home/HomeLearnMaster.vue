<template>
  <HomeSection secondary class="py-20">
    <template #section-content>
      <SectionContent>
        <template #category>
          <span class="text-tertiary font-bold text-lg">{{ category }}</span>
        </template>

        <template #title>
          <h2
            class="font-normal text-center md:text-left font-serif text-display-6 md:text-display-5 2xl:text-display-4"
          >
            <Markdown use="title" unwrap="p" />
          </h2>
        </template>

        <template #paragraph>
          <p class="text-center font-normal text-body-base md:text-body-lg 2xl:text-body-xl">
            <Markdown use="description" unwrap="p" />
          </p>
        </template>

        <template #content>
          <CodeBlockAnimation class="w-full text-gray-50" />
        </template>

        <template #button>
          <div class="w-full self-start">
            <Markdown use="bottom" unwrap="p" />
          </div>
        </template>
      </SectionContent>
    </template>
  </HomeSection>
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    }
  }
})
</script>
