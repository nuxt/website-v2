<template>
  <div class="w-full">
    <div class="flex justify-between">
      <img
        :src="`/logos/nuxt-icon-${$colorMode.value}.png`"
        alt=""
        class="logo"
      />
      <!-- TODO refactor logo to icon for all integrations then remove first v-if
           TODO refactor to be cat image for v-else
           TODO turn into component and use flex position class to change icons round
           -->
      <img
        v-if="integration.logo"
        :src="integration.logo"
        :alt="integration.name"
        class="logo"
      />
      <img
        v-else-if="integration.icon"
        :src="integration.logo"
        :alt="integration.name"
        class="logo"
      />
      <img
        v-else
        :src="`/logos/nuxt-icon-${$colorMode.value}.png`"
        alt="Nuxt"
        class="logo"
      />
    </div>
    <div class="font-medium py-12 px-6 text-center">
      <span class="text-green-500 text-3xl"> Nuxt +</span>
      <h1 class="inline-block text-blue-500 text-4xl capitalize">
        {{ integration.name }}
      </h1>
      <p>{{ integration.description }}</p>
    </div>
    <div class="flex justify-between">
      <!-- TODO refactor logo to icon for all integrations then remove first v-if
           TODO refactor to be cat image for v-else -->
      <img
        v-if="integration.logo"
        :src="integration.logo"
        :alt="integration.name"
        class="logo"
      />
      <img
        v-else-if="integration.icon"
        :src="integration.logo"
        :alt="integration.name"
        class="logo"
      />
      <img
        v-else
        :src="`/logos/nuxt-icon-${$colorMode.value}.png`"
        :alt="integration.name"
        class="logo"
      />
      <img :src="`/logos/nuxt-icon-${$colorMode.value}.png`" alt="Nuxt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    integration: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
img {
  width: 50px;
  height: auto;
}
</style>
