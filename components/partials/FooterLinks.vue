<template>
  <nav class="nui-footerLinks">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(link, i) in links" :key="i">
        <nuxt-link class="nui-footerLinks-link" to="/">{{ link }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;
$light_grey: #F1F5F8;

.nui-footerLinks {
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: $grey_blue;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 1.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0.5rem 0;
    }
  }
  &-link {
    color: $grey;
    font-weight: 700;
    transition: color 0.25s;
    &:hover {
      transition: color 0.25s;
      text-decoration: none;
      color: $light_green;
    }
  }
}
</style>
