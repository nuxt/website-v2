<template>
  <ul class="nui-headerLinks">
    <li v-for="link in links" :key="link">
      <nuxt-link class="nui-headerLinks-link" :to="'/' + link">
        {{ $store.state.lang.links[link] || 'modules' }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      links: ['guide', 'api', 'examples', 'faq', 'modules']
    }
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;

.nui-headerLinks {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  li {
    padding: 1rem 0.5rem;
  }
  &-link {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    color: $grey_blue;
    transition: color 0.25s;
    &:hover {
      transition: color 0.25s;
      text-decoration: none;
      color: $light_green;
    }
  }
  .nuxt-link-active {
    color: $light_green;
  }
}
</style>
