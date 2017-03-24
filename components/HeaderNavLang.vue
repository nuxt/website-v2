<template>
  <div class="Lang">
    <div class="Lang__Current" @click="show = !show">
      <div class="flag " :class="flag"></div>
    </div>
    <ul class="Lang__List" :class="{ 'Lang__List--visible': show }">
      <li class="Lang__List__Item" v-for="lang in langs" v-if="lang.iso !== $store.state.lang.iso">
        <a class="flag " :class="lang.class" :href="lang.url + $route.path"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return { show: false }
  },
  computed: {
    flag () { return 'flag-' + this.$store.state.lang.iso },
    langs () {
      return [
        { iso: 'cn', class: 'flag-cn', url: 'https://cn.nuxtjs.org' },
        { iso: 'en', class: 'flag-en', url: 'https://nuxtjs.org' },
        { iso: 'jp', class: 'flag-jp', url: 'https://jp.nuxtjs.org' },
        { iso: 'ru', class: 'flag-ru', url: 'https://ru.nuxtjs.org' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Lang
{
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 991px)
  {
    &:hover
    {
      .Lang__List
      {
        display: flex;
      }
    }
  }
  &__Current
  {
    height: 60px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px)
    {
      padding: 0;
      height: 100%;
      border-bottom: none;
    }
  }
  &__List
  {
    display: none;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (min-width: 991px)
    {
      width: 82px;
      position: absolute;
      top: 100%;
      left: -1px;
      background-color: #fff;
      border-top: 1px solid #dbdfe1;
      border-left: 1px solid #dbdfe1;
      border-right: 1px solid #dbdfe1;
    }
    &--visible
    {
      display: flex;
      @media (min-width: 991px)
      {
        display: none;
      }
    }
    &__Item
    {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #dbdfe1;
    }
  }
}
</style>
