<template>
  <div class="Code">
    <div v-if="title" class="Code__Title">
      {{ title }}
    </div>
    <pre class="Code__Content">
      <code>
        <slot></slot>
      </code>
    </pre>
  </div>
</template>
<script>
// import NuxtAlert from '~components/Alert.vue'

export default {
  props: {
    title: String
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
.Code
{
  border-left: 3px solid #00BCD4;
  &__Title
  {
    font-weight: 300;
    letter-spacing: 1px;
    padding: 15px 20px;
    color: #ccc;
    background-color: #111;
  }
  &__Content
  {
    margin: 0;
    padding: 10px 15px;
    background-color: #222;
    color: #ddd;
    font-size: 1em;
    code
    {
      display: block;
      overflow-x: auto;
    }
  }
}
</style>
