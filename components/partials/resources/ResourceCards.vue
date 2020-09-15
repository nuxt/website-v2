<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <div
      v-for="(item, i) in sortedList"
      :key="`${item.title}-${i}`"
      class="light:bg-light-surface text-center dark:bg-dark-surface rounded p-6 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear"
    >
      <NuxtLink :to="`/with/${item.name}`">
        <img
          v-if="item.logo"
          :src="item.logo"
          :alt="item.name"
          class="inline-block h-16 my-2"
        />
        <img
          v-else-if="item.icon"
          :src="iconUrl(item.icon)"
          :alt="item.name"
          class="inline-block h-16 my-2"
        />
        <img
          v-else
          :src="`/img/resources/${$route.params.category}.svg`"
          class="inline-block h-20"
        />
        <h3 class="text-xl font-semibold py-2">
          {{ item.name }}
        </h3>
        <p class="text-md text-gray-600">
          {{ item.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortedList() {
      return [
        ...this.list.filter(i => i.logo).sort(),
        ...this.list.filter(i => !i.logo).sort()
      ]
    }
  },
  methods: {
    iconUrl(icon) {
      if (/^https?:\/\//.test(icon)) {
        return icon
      }
      return `https://cdn.jsdelivr.net/gh/nuxt/integrations@master/icons/${icon}`
    }
}
</script>
