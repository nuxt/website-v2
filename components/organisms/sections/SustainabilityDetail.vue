<template>
  <div class="d-container-content">
    <div class="relative pt-24 pb-4 xl:pb-16">
      <img :src="`/img/companies/square/${icon}`" :alt="title" loading="lazy" class="w-32 h-32" />
      <h1 class="py-8 text-display-5 font-bold">{{ title }}</h1>
    </div>
    <div class="flex flex-col-reverse xl:flex-row xl:justify-between">
      <p class="text-md sm:text-lg w-full xl:w-3/4 pr-20">
        {{ description }}
      </p>
      <div class="w-full xl:w-1/4 flex flex-col pb-12 xl:pl-12">
        <div>
          <span class="font-semibold text-md">{{ $t('sustainability.mvp_detail.services') }}</span>
          <ul class="flex flex-col sm:flex-row sm:space-x-4 mt-4 xl:space-x-0 xl:flex-col">
            <li v-for="(service, index) in services" :key="index">
              <div class="flex space-x-2">
                <IconBadgeCheck class="h-5 w-5 mt-0.5" />
                <span>{{ service }}</span>
              </div>
            </li>
          </ul>
        </div>
        <span class="font-semibold text-md py-4">{{ $t('sustainability.mvp_detail.location') }}</span>
        <span>{{ location }}</span>
      </div>
    </div>
    <div class="flex pt-16 space-x-4 text-sm">
      <AppButton :href="partnerContactUrl">
        {{ $t('sustainability.mvp_detail.contact_partner') }}
      </AppButton>
      <AppButton
        :href="websiteUrl"
        size="large"
        extra-class="
          bg-white
          dark:bg-secondary-black
          hover:light:bg-gray-50 hover:dark:bg-secondary-darkest
          border
          focus:outline-none
        "
      >
        {{ $t('sustainability.mvp_detail.visit_website') }}
      </AppButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    partnerContactUrl: {
      type: String,
      default: ''
    },
    websiteUrl: {
      type: String,
      default: ''
    },
    services: {
      type: Array,
      default: () => []
    },
    location: {
      type: String,
      default: ''
    }
  }
})
</script>
