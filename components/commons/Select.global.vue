<template>
  <div class="nui-select inline-block rounded-full">
    <div class="flex items-center content-center px-4">
      <div class="-mr-4">
        <slot name="icon" />
      </div>
      <template v-if="options.length > 1">
        <select v-model="selected" class="bg-transparent cursor-pointer font-medium h-10 appearance-none focus:outline-none pl-6 pr-8 z-10">
          <option v-for="(option, i) in options" :key="i" :value="i">
            {{ getOptionDescription(option) }}
          </option>
        </select>
        <nui-caret-down class="-ml-4" />
      </template>
      <div v-else class="font-medium h-10 pl-6 py-2 pr-4">
        {{ options[0].text }}
      </div>
    </div>
  </div>
</template>

<script>
import nuiCaretDown from '@/components/svg/CaretDown'

const Modes = Object.freeze({
  SLIM: 'slim',
  NORMAL: 'normal'
})

export default {
  name: 'NuiSelect',
  components: {
    nuiCaretDown
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: Modes.NORMAL
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
  },
  methods: {
    getOptionDescription (option) {
      switch (this.mode) {
        case Modes.SLIM:
          return option.locale.toLocaleUpperCase()
        case Modes.NORMAL:
        default:
          return option.text
      }
    }
  }
}
</script>
