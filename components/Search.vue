<template>
  <div class="Search">
    <input class="Search__Input" type="text" name="search" id="search" placeholder="Search" v-model="q"/>
    <label for="search" class="Search__Label" @click="q = ''">
      <div :class="{'icon search': !q.length, 'icon remove': q.length}"></div>
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      q: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.Search
{
  position: relative;
  &__Input
  {
    width: 100%;
    display: block;
    border: 1px solid #dbdfe1;
    font-weight: 300;
    height: 40px;
    color: #9aabb1;
    font-size: 1em;
    padding: 0 10px;
    padding-right: 35px;
    background-color: #fff;
  }
  &__Label
  {
    cursor: pointer;
    width: 30px;
    height: 40px;
    padding-top: 10px;
    position: absolute;
    float: right;
    top: 0;
    right: 0;
  }
}
</style>
