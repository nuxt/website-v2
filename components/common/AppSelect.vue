<template>
  <div class="nui-select text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary inline-block rounded-full transition-colors duration-300 ease-linear">
    <div class="flex items-center content-center px-4">
      <div class="-mr-4">
        <slot name="icon" />
      </div>
      <template v-if="options.length > 1">
        <!-- <label :for="id">Choose a pet:</label> -->
        <select v-model="selected" class="bg-transparent cursor-pointer font-medium h-10 appearance-none focus:outline-none pl-6 pr-8 z-10" :aria-label="label">
          <option v-for="(option, i) in options" :key="i" :value="i">
            {{ getOptionDescription(option) }}
          </option>
        </select>
        <CaretDownIcon class="-ml-4" />
      </template>
      <div v-else class="font-medium h-10 pl-6 py-2 pr-4">
        {{ options[0].text }}
      </div>
    </div>
  </div>
</template>

<script>
import CaretDownIcon from '@/assets/icons/caret-down.svg?inline'

const Modes = Object.freeze({
  SLIM: 'slim',
  NORMAL: 'normal'
})

export default {
  components: {
    CaretDownIcon
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
    },
    label: {
      type: String,
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
