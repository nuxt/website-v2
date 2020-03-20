<template>
  <a href="" class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150" @click.stop.prevent="handleClick">
    <img class="inline-block h-6 w-6 rounded-full" :src="author.avatarUrl" alt="" />
    <span class="mx-2 last:mr-0">{{ author.name }}</span>
  </a>
</template>

<script>
export default {
  name: 'BlogPostAuthor',
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick () {
      window.open(this.author.link, '_blank')
    }
  }
}
</script>

<style>

</style>
