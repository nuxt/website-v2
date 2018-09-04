<template>
  <ul class="nList" :class="{'nList--dropdown': dropdown}">
    <li v-for="(item, index) in list" :key="index" class="nList_Item">
      <nuxt-link v-if="item.target === 'self'" :to="item.path">{{ item.text }}</nuxt-link>
      <a v-else-if="item.target === 'blank'" :href="item.path" target="_blank" rel=noopener>{{ item.text }}</a>
      <a v-else href="">{{ item.text }}</a>
      <n-list v-if="item.target === 'dropdown'" :list="item.path" dropdown/>
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
    dropdown: Boolean
  },
  compoenents: {
    nList: () => import('./list.vue')
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
  &--dropdown {
    position: absolute;
    top: 40px;
    width: 200px;
    background-color: $--color-white;
    box-shadow: $box-shadow-base;
    flex-direction: column;
    .nList_Item {
      margin: 0;
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid $background-color-medium;

    }
  }
}
</style>
