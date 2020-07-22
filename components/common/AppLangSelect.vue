<template>
  <div
    class="nui-select text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary inline-block rounded-full transition-colors duration-300 ease-linear"
  >
    <div class="flex items-center content-center px-4">
      <div class="-mr-4">
        <slot name="icon" />
      </div>
      <template>
        <select
          :value="$i18n.locale"
          class="bg-transparent cursor-pointer font-medium h-10 appearance-none focus:outline-none pl-6 pr-8 z-10"
          :aria-label="label"
          @change="onChange"
        >
          <option
            v-for="(locale, i) in $i18n.locales"
            :key="i"
            :value="locale.code"
          >
            {{ getLocaleDescription(locale) }}
          </option>
        </select>
        <CaretDownIcon class="-ml-4" />
      </template>
    </div>
  </div>
</template>

<script>
import CaretDownIcon from '~/assets/icons/caret-down.svg?inline'

const Modes = Object.freeze({
  SLIM: 'slim',
  NORMAL: 'normal'
})

export default {
  components: {
    CaretDownIcon
  },
  props: {
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
  methods: {
    onChange(event) {
      const locale = this.$i18n.locales.find(
        locale => locale.code === event.target.value
      )

      window.location.href = locale.domain
    },
    getLocaleDescription(locale) {
      switch (this.mode) {
        case Modes.SLIM:
          return locale.code.toLocaleUpperCase()
        case Modes.NORMAL:
        default:
          return locale.name
      }
    }
  }
}
</script>
