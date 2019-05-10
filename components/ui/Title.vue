<template>
  <h2 class="nui-title">
    <slot/>
  </h2>
</template>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;

.nui-title {
  color: $grey_blue;
  display: inline-block;
  position: relative;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  margin: 0;
  margin-bottom: 6.5rem;
  span {
    color: $light_green;
  }
  &::before {
    content: " ";
    width: 60%;
    height: 4px;
    bottom: -1.5rem;
    left: 20%;
    position: absolute;
    border-radius: 4px;
    background-color: $light_green;
  }
}
</style>
