<template>
  <div class="Dropdown">
    <div class="Dropdown__Title" @click="show = !show" :class="{'Dropdown__Title--mobile': show}">
      {{ $store.state.lang.links.ecosystem }}
    </div>
    <ul class="Dropdown__List" :class="{ 'Dropdown__List--visible': show }">
      <li class="Dropdown__List__Item" v-for="item in list">
        <a class="Dropdown__List__Item__Link" :href="item.path" :target="item.target">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    list () {
      return [
        {
          name: this.$store.state.lang.links.github,
          path: 'https://github.com/nuxt',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.twitter,
          path: 'https://twitter.com/nuxt_js',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.blog,
          path: 'https://medium.com/@nuxt_js',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.chat,
          path: 'https://gitter.im/nuxt/nuxt.js',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.vuejs,
          path: 'https://vuejs.org',
          target: '_blank'
        },
        {
          name: this.$store.state.lang.links.vue_jobs,
          path: 'https://vuejobs.com/?ref=nuxtjs',
          target: '_blank'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Dropdown
{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 991px)
  {
    &:hover
    {
      .Dropdown__List
      {
        display: block;
      }
    }
  }
  &__Title
  {
    height: 60px;
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #35495e;
    font-size: 16px;
    text-decoration: none;
    letter-spacing: 0.25px;
    @media (min-width: 991px)
    {
      height: 100%;
      padding-right: 15px;
    }
    &:after
    {
      content: " ";
      width: 0;
      height: 0;
      top: 2px;
      right: -10px;
      position: relative;
      border-right: 6px solid transparent;
      border-top: 6px solid #35495e;
      border-left: 6px solid transparent;
      @media (min-width: 991px)
      {
        top: 38px;
        right: 0;
        position: absolute;
      }
    }
    &:hover, &:focus
    {
      color: #41b883;
      &:after
      {
        border-top: 6px solid #41b883;
      }
    }
    &--mobile
    {
      color: #41b883;
      &:after
      {
        border-top: 6px solid #41b883;
      }
      @media (min-width: 991px)
      {
        color: #35495e;
        &:after
        {
          border-top: 6px solid #35495e;
        }
      }
    }
  }
  &__List
  {
    width: 100%;
    display: none;
    flex-wrap: wrap;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    @media (min-width: 991px)
    {
      min-width: 100%;
      position: absolute;
      background-color: #fff;
      border: 1px solid #dbdfe1;
      border-top: none;
      top: 100%;
      right: 0;
      &::before
      {
        display: block;
        position: absolute;
        content: "";
        width: 14px;
        height: 14px;
        background: #fff;
        z-index: 2;
        top: -7px;
        border-top: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        border-radius: 2px;
        left: 45%;
      }
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
      width: 100%;
      display: flex;
      height: 50px;
      border-top: 1px solid #dbdfe1;
      &__Link
      {
        width: 100%;
        display: flex;
        color: #35495e;
        padding: 12px 0;
        font-size: 15px;
        text-decoration: none;
        letter-spacing: 0.25px;
        align-items: center;
        justify-content: center;
        &:hover
        {
          color: #41b883;
        }
      }
    }
  }
}
</style>
