<template>
  <div
    ref="container"
    v-on-clickaway="close"
    :class="typeof wrapperClass === 'string' ? wrapperClass : 'relative inline-block text-left'"
    @keydown.escape="open = false"
    @mouseover="mode === 'hover' ? mouseover() : () => {}"
    @mouseleave="mode === 'hover' ? mouseleave() : () => {}"
  >
    <div class="flex items-center">
      <slot name="trigger" :toggle="toggle" :open="open" />
    </div>

    <transition
      appear
      enter-class="transform scale-95 opacity-0"
      enter-active-class="transition duration-100 ease-out"
      enter-to-class="transform scale-100 opacity-100"
      leave-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="open && (items.length || $slots.header || $scopedSlots.header)"
        ref="tooltip"
        :class="[
          dropdownClass,
          mode === 'hover' && 'pt-2'
        ]"
        class="z-30 rounded-md shadow-lg"
      >
        <div
          class="overflow-y-auto rounded-md bg-white dark:bg-secondary-darkest divide-y divide-gray-100 dark:divide-gray-700"
          :class="[
            dropdownMenuClass
          ]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <slot name="header" />
          <div v-if="items.length" class="divide-y divide-gray-100 dark:divide-gray-700">
            <div v-for="(subItems, index) of items" :key="index" class="py-1">
              <div
                v-for="(item, i) of subItems"
                :key="i"
                role="menuitem"
                @click="!item.disabled ? click(item) : (() => {})()"
              >
                <slot name="item" :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
import { directive as onClickaway } from 'vue-clickaway'

export default {
  directives: {
    onClickaway
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'solid/chevron-down'
    },
    items: {
      type: Array,
      default: () => []
    },
    variant: {
      type: String,
      default: 'white'
    },
    size: {
      type: String,
      default: 'md',
      validator (value) {
        return ['', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      }
    },
    mode: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].includes(value)
      }
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    strategy: {
      type: String,
      default: 'absolute'
    },
    wrapperClass: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    customLinkClass: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    dropdownClass: {
      type: String,
      default: 'w-48'
    },
    dropdownMenuClass: {
      type: String,
      default: 'max-h-56'
    },
    openDelay: {
      type: Number,
      default: 100
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    preventOverflow: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      open: false,
      instance: null,
      openTimeout: null,
      closeTimeout: null
    }
  },
  watch: {
    disabled (value) {
      if (value && open) { this.close() }
    },
    open (value) {
      if (!value) {
        return
      }

      if (this.instance) {
        this.instance.destroy()
        this.instance = null
      }

      this.instance = createPopper(this.$refs.container, this.$refs.tooltip, {
        strategy: this.strategy,
        placement: this.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: this.mode === 'click' ? [0, 8] : 0
            }
          },
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: false,
              adaptive: false
            }
          },
          {
            name: 'preventOverflow',
            options: {
              padding: this.preventOverflow
            }
          }
        ]
      })
    }
  },
  beforeDestroy () {
    if (this.instance) {
      this.instance.destroy()
      this.instance = null
    }
  },
  methods: {
    click (link) {
      if (link.click) {
        link.click()
      }
      if (link.click || link.to) {
        this.toggle()
      }
    },
    mouseover () {
      clearTimeout(this.closeTimeout)
      this.closeTimeout = null
      this.openTimeout = this.openTimeout || setTimeout(() => {
        this.open = true
        this.openTimeout = null
      }, this.openDelay)
    },
    mouseleave () {
      clearTimeout(this.openTimeout)
      this.openTimeout = null
      this.closeTimeout = this.closeTimeout || setTimeout(() => {
        this.close()
        this.closeTimeout = null
      }, this.closeDelay)
    },
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  }
}
</script>
