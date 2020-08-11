<template>
  <div class="">
    <template v-for="(author, i) in authors" class="flex items-center mr-4">
      <a
        v-if="author.link"
        :key="i"
        :href="author.link"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
      >
        <img
          class="inline-block h-6 w-6 rounded-full"
          :src="author.avatarUrl"
          :alt="author.name"
        />
        <span class="mx-2 last:mr-0">{{ author.name }}</span>
      </a>
      <span
        v-else
        :key="i"
        class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
      >
        <img
          class="inline-block h-6 w-6 rounded-full"
          :src="author.avatarUrl"
          :alt="author.name"
        />
        <span class="mx-2 last:mr-0">{{ author.name }}</span>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Authors',
  props: {
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
