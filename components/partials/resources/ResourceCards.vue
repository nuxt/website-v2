<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="(item, i) in sortedList"
      :key="`${item.title}-${i}`"
      class="light:bg-light-surface dark:bg-dark-surface rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear"
    >
      <NuxtLink
        :to="`/integrations/${item.name}`"
      >
        <img
          v-if="item.logo"
          :src="item.logo"
          :alt="item.name"
          class="pb-2"
        />
        <p v-else class="pb-2" style="font-size: 2em">
          🧩
        </p>
        <h3 class="pb-2 font-bold">
          {{ item.name }}
        </h3>
        <p class="pb-2">
          {{ item.description }}
        </p>
      </h3>
</h1>
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
  }
}
</script>

<style scoped>
img {
  max-height: 50px;
}
</style>
