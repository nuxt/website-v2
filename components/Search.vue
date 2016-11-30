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
  height: 100%;
  position: relative;
  &__Input
  {
    width: 100%;
    display: block;
    border: none;
    font-weight: 300;
    height: 100%;
    color: #35495e;
    font-size: 1em;
    padding: 0 10px;
    letter-spacing: 0.5px;
    padding-right: 35px;
    background-color: #fff;
  }
  &__Label
  {
    cursor: pointer;
    width: 30px;
    height: 100%;
    padding-top: 10px;
    padding-left: 10px;
    position: absolute;
    float: right;
    top: 0;
    right: 0;
    @media (min-width: 768px)
    {
      padding-top: 15px;
    }
  }
}
</style>
