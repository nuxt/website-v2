<template>
  <div class="sticky top-0 lg:left-0 pointer-events-auto lg:h-screen top-header lg:w-1/5 z-10 lg:z-0">
    <nav
      class="
        flex
        lg:flex-col
        justify-end
        lg:justify-start lg:max-w-sm
        w-full
        overflow-y-auto
        text-sm
        font-medium
        lg:h-[reset]
        h-(full-header)
        d-scrollbar d-px-container d-bg-header
        blur-12
        lg:blur-0
      "
    >
      <div class="hidden lg:block py-4 pr-0">
        <ul class="flex lg:flex-col">
          <li v-for="option in options" :key="option.name">
            <AppButton
              button-class="py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent"
              :class="{ 'rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10': option.name === selected }"
              @click.native="$emit('selected', option.name)"
            >
              <div class="truncate max-w-48 font">{{ option.display }}</div>
            </AppButton>
          </li>
        </ul>
      </div>
      <div class="w-full relative py-2">
        <NuxtSelectNative
          :value="selected"
          :options="mappedOptions"
          class="lg:hidden"
          @input="option => $emit('selected', option)"
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: ''
    }
  },
  computed: {
    mappedOptions() {
      return this.options.map(option => ({
        text: option.display,
        value: option.name
      }))
    }
  }
}
</script>
