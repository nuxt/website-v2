<template>
  <HomeSection class="">
    <template #header-illustration>
      <img
        loading="lazy"
        :src="`/img/home/testimonials/landscape-community.svg`"
        class="w-full h-20 object-cover -mt-12 pointer-events-none"
        alt="A landscape image"
      />
    </template>

    <template #section-content>
      <SectionContent class="pt-20 text-secondary-black">
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
          <Markdown use="testimonials" unwrap="p" />
        </template>
      </SectionContent>
    </template>
  </HomeSection>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    }
  }
})
</script>
