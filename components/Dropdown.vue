<template>
  <div class="Dropdown">
    <div class="Dropdown__Title" @click="show = !show" :class="{'Dropdown__Title--mobile': show}">
      {{ title }}
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
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.Dropdown
{
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
  &__List
  {
    display: none;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    @media (min-width: 991px)
    {
      min-width: 100%;
      position: absolute;
      background-color: #fff;
      border: 1px solid #dbdfe1;
      border-bottom: none;
      right: 0;
    }
    &--visible
    {
      display: block;
      @media (min-width: 991px)
      {
        display: none;
      }
    }
    &__Item
    {
      text-align: center;
      display: block;
      height: auto;
      line-height: normal;
      border-bottom: 1px solid #dbdfe1;
      &__Link
      {
        height: auto;
        line-height: normal;
        display: block;
        color: #35495e;
        padding: 12px 0;
        font-size: 15px;
        text-decoration: none;
        letter-spacing: 1px;
        &:hover
        {
          color: #41b883;
        }
      }
    }
  }
  &__Title
  {
    @media (min-width: 991px)
    {
      padding-right: 15px;
    }
    &:after
    {
      content: " ";
      width: 0;
      height: 0;
      top: 15px;
      right: -5px;
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
}
</style>
