<template>
  <div class="nui-select">
    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    selected: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss">
$light_grey: #F1F5F8;
$grey: #606F7B;

.nui-select {
  color: $grey;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Quicksand';
  background-color: $light_grey;
  height: 38px;
  border-radius: 18px;
  padding: 0 1rem;
  select {
    background-color: $light_grey;
    height: 38px;
    border: none;
  }
}
</style>
