<template>
  <div class="lg:sticky top-0 lg:left-0 h-full pointer-events-auto lg:h-screen lg:top-header lg:w-1/5">
    <div class="w-auto h-full d-bg-header dark:lg:bg-transparent lg:bg-transparent">
      <nav
        class="
          flex
          lg:flex-col
          justify-between
          lg:justify-start lg:max-w-sm
          w-full
          overflow-y-auto
          text-sm
          font-medium
          lg:h-[reset]
          h-(full-header)
          d-scrollbar
        "
      >
        <div class="py-4 pr-0">
          <ul class="flex lg:flex-col">
            <li v-for="option in options" :key="option.name">
              <button
                class="py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent"
                :class="{ 'rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10': option.name === selected }"
                @click="$emit('selected', option)"
              >
                <div class="truncate max-w-48 font">{{ option.display }}</div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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
  }
}
</script>
