<template>
  <nuxt-link :to="to" class="nui-button" :class="{'nui-button--green': green}">
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    green: Boolean
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;
$light_grey: #F1F5F8;

.nui-button {
  color: $grey;
  display: inline-block;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  background-color: $light_grey;
  box-shadow: 0 0 1px 0 rgba(10, 31, 68, 0.08), 0 3px 4px 0 rgba(10, 31, 68, 0.1);
  transition: color 0.25s, background-color 0.25s;
  .nui-svg {
    fill: $grey;
    margin-right: 0.75rem;
    height: 18px;
    float: left;
  }
  &:hover {
    transition: color 0.25s, background-color 0.25s;
    color: $grey_blue;
    text-decoration: none;
    background-color: darken($light_grey, 5%);
    .nui-svg {
      fill: $grey_blue;
    }
  }
  &--green {
    background-color: $light_green;
    color: #fff;
    .nui-svg {
      fill: #fff;
    }
    &:hover {
      color: #fff;
      background-color: darken($light_green, 5%);
      .nui-svg {
        fill: #fff;
      }
    }
  }
}
</style>
