<template>
  <nav class="Affix">
    <template v-for="(links, title) in list">
      <h3 class="Affix__Title">{{ title }}</h3>
      <ul class="Affix__List">
        <li class="Affix__List__Item" v-for="link in links">
          <router-link class="Affix__List__Item__Link" :to="menu + link.to" exact>
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: String,
      required: true
    },
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Affix
{
  width: 100%;
  padding-bottom: 30px;
  height: 100%;
  overflow-y: auto;
  float: left;
  font-size: 1em;
  background-color: #fff;
  @media (min-width: 992px)
  {
    width: 240px;
    border-right: 1px solid #dbdfe1;
  }
  &__Title
  {
    margin: 0;
    margin-top: 30px;
    text-transform: uppercase;
    color: #9aabb1;
    font-weight: 400;
    font-size: 1.05em;
    letter-spacing: 1px;
  }
  &__List
  {
    margin-top: 12px;
    &__Item
    {
      padding: 5px 0;
      &__Link
      {
        text-decoration: none;
        color: #35495e;
        &:hover
        {
          color: #111;
        }
      }
      .router-link-active
      {
        color: #41b883;
      }
    }
  }
}
</style>
