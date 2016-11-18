<template>
  <p class="Paragraphe">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
.Paragraphe
{
  color: #505153;
  text-align: justify;
  line-height: 2em;
  a
  {
    text-decoration: none;
    color: #00BCD4;
    &:hover
    {
      text-decoration: underline;
    }
  }
}
</style>
