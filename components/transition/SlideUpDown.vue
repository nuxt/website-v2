<script setup lang="ts">
// Found in https://github.com/craigrileyuk/vue3-slide-up-down/issues/16#issuecomment-1397442075
const emit = defineEmits<{
  (e: 'open-start'): void;
  (e: 'close-start'): void;
  (e: 'open-end'): void;
  (e: 'close-end'): void;
}>()
const props = withDefaults(
  defineProps<{
    active: boolean;
    duration?: number;
    timingFunction?: string;
    tag?: string;
  }>(),
  {
    active: false,
    duration: 500,
    timingFunction: 'ease-in-out',
    tag: 'div'
  }
)
// Template ref for the slide-up-down container
const containerRef = ref<HTMLElement>()
// Whether to apply the overflow-y: hidden style to the component
const shouldHideOverflow = ref(false)
// The measured height of the contents of the container
const contentHeight = ref(0)
// The currently rendered height of the container
const currentHeight = ref<number | null>(null)
// Is the slide animation currently playing
const isTransitioning = ref(false)
/**
 * Wait until the synchronous loop is cleared before executing action
 *
 * @param {Function} fn - The callback function to execute.
 */
const delayAction = (fn: any) => {
  setTimeout(() => {
    window.requestAnimationFrame(fn)
  }, 0)
}
/**
 * Update the contentHeight value to the current height of the contents inside the container
 */
const updateContainerHeight = () => {
  if (containerRef.value) {
    contentHeight.value = containerRef.value.scrollHeight
  }
}
/**
 * Perform the animations between open, close and shift states
 */
const updateDisplay = () => {
  updateContainerHeight()
  if (isTransitioning.value) {
    if (!props.active) {
      currentHeight.value = 0
    }
    return transitionEnd({ target: containerRef.value })
  }
  currentHeight.value = contentHeight.value
  if (!props.active) {
    shouldHideOverflow.value = true
    emit('close-start')
    delayAction(() => {
      currentHeight.value = 0
    })
  } else {
    emit('open-start')
  }
  isTransitioning.value = true
}
/**
 * @constant { computed<object> } generatedBaseStyles  - Computed style object for the container
 */
const generatedBaseStyles = computed(() => ({
  transition: `height ${props.duration}ms ${props.timingFunction}`,
  height: currentHeight.value !== null ? `${currentHeight.value}px` : null,
  overflowY: shouldHideOverflow.value ? 'hidden' : null
  // "--content-height": contentHeight.value,
}))
/**
 * @constant { computed<object> } generatedBaseAttributes  - Computed attributes object for the container
 */
const generatedBaseAttributes = computed(() => ({
  'aria-hidden': !props.active,
  tabindex: !props.active ? '-1' : null
}))
/**
 * Called when the CSS transition animation is complete.
 *
 * @param {Event} event - ontransitionend JS event.
 */
const transitionEnd = (event: any) => {
  if (event.target !== containerRef.value) {
    return
  }
  if (props.active) {
    currentHeight.value = null
    shouldHideOverflow.value = false
    emit('open-end')
  } else {
    emit('close-end')
  }
  isTransitioning.value = false
}
// init state
if (!props.active) {
  currentHeight.value = 0
  shouldHideOverflow.value = true
}
onMounted(() => {
  updateContainerHeight()
})
watch(
  () => props.active,
  updateDisplay
)
const attrs = useAttrs()
const slots = useSlots()
const SlideUpDownRender = () =>
  h(
    props.tag,
    {
      ...Object.assign({}, attrs, { style: generatedBaseStyles.value }),
      class: 'slide-up-down__container',
      onTransitionend: transitionEnd,
      ...generatedBaseAttributes.value,
      ref: containerRef
    },
    slots.default!()
  )
</script>

<template>
  <SlideUpDownRender />
</template>
