<script>
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import Star from '../../atoms/Star'

export default defineComponent({
  name: 'ShootingStar',
  mixins: [Star],
  setup() {
    const star = ref(null)

    onMounted(() => {
      const starStart = Math.floor(Math.random() * (document.documentElement.clientWidth * (2 / 3)))
      star.value.style.setProperty('--star-start', `${starStart}px`)
    })
    return {
      star
    }
  }
})
</script>

<style lang="postcss" scoped>
:root {
  --star-start: 0px;
}

div {
  @apply absolute rounded-full opacity-100 bg-white;
  left: 0 !important;
  height: 2px !important;
  width: 0;
  animation: move 3s ease !important;
  animation-delay: 0s !important;
  box-shadow: 0px 0px 2px 1px white;
}
</style>
