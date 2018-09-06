<template>
  <ul class="nList">
    <li v-for="(item, index) in list" :key="index" class="nList_Item">
      <nuxt-link v-if="item.target === 'self'" :to="item.path">{{ item.text }}</nuxt-link>
      <a v-else-if="item.target === 'blank'" :href="item.path" target="_blank" rel=noopener>{{ item.text }}</a>
      <p v-else href="">{{ item.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'n-list',
  props: {
    list: {
      type: Array,
      required: true
    },
  }
}
</script>

<style lang="scss">
.nList {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: stretch;
  align-content: flex-end;
  flex-direction: row;
  &_Item {
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: 1.5rem;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
