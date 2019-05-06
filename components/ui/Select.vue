<template>
  <div class="nui-select">
    <nui-row>
      <component :is="currentIcon" v-if="currentIcon"/>
      <select v-model="selected">
        <option v-for="option in options" :value="option" :key="option.value">{{ option.name }}</option>
      </select>
      <nui-caret-down/>
    </nui-row>
  </div>
</template>

<script>
import nuiRow from '@/components/ui/Row'
import nuiGlobe from '@/components/svg/Globe'
import nuiCaretDown from '@/components/svg/CaretDown'

export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    icon: String
  },
  computed: {
    selected: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    currentIcon () {
      return this.selected.icon ? 'nui-' + this.selected.icon : (this.icon ? 'nui-' + this.icon : null)
    }
  },
  components: {
    nuiRow,
    nuiGlobe,
    nuiCaretDown,
    nuiSun: () => import('@/components/svg/Sun'),
    nuiMoon: () => import('@/components/svg/Moon')
  }
}
</script>

<style lang="scss">
$light_grey: #F1F5F8;
$grey: #606F7B;

.nui-select {
  background-color: $light_grey;
  height: 38px;
  border-radius: 18px;
  padding: 0 1rem;
  display: inline-block;
  position: relative;
  .nui-row {
    align-items: center;
  }
  .nui-svg {
    margin-right: 0.75rem;
    fill: $grey;
  }
  .nui-svg-caret-down {
    margin: 0;
    right: 1rem;
    position: absolute;
    z-index: 1;
  }
  select {
    background-color: transparent;
    font-family: 'Quicksand';
    appearance: none;
    height: 38px;
    border: none;
    color: $grey;
    font-size: 1rem;
    font-weight: 500;
    text-align: right;
    padding-right: 30px;
    z-index: 2;
  }
}
</style>
