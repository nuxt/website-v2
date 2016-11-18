<template>
  <div class="Code">
    <div v-if="title" class="Code__Title">
      {{ title }}
    </div>
    <pre class="Code__Content"><code ref="code" :class="lang"><slot></slot></code></pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  props: {
    title: String,
    lang: {
      type: String,
      default: 'js'
    }
  },
  mounted () {
    hljs.highlightBlock(this.$refs.code)
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
    padding: 0;
    background-color: #222;
    color: #ddd;
    font-size: 1em;
    code
    {
      display: block;
      line-height: 1.5em;
      padding: 15px 20px;
      margin: 0;
    }
  }
}
</style>
