<template>
  <nav class="relative flex items-center justify-center w-full h-full">
    <Link
      v-for="{ title, href, slug, blank, icon, to } in links"
      :key="slug"
      :aria-label="title"
      class="relative flex flex-col items-center justify-center h-full px-4 font-medium text-center capitalize group "
      :to="href || to"
      :blank="blank"
      :class="{
        'text-primary': currentSlug === slug,
        'hover:d-primary-text-hover': currentSlug !== slug
      }"
    >
      <div class="flex items-center">
          {{ title }}
          <Component v-if="icon" :is="icon" class="w-4 h-4 ml-2 text-gray-400 opacity-0 lg:group-hover:opacity-100"/>
        </div>

    </Link>
  </nav>
</template>
<script>
import { computed, defineComponent, useRoute, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(props) {
    const route = useRoute()
    const { $docus } = useContext()
    let links = [
      ...$docus.currentNav.value.links,
    {
      title: 'Mastering Nuxt',
      href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link',
      blank: true,
      icon: 'IconExternalLink'
    }]
    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })
    return {
      currentSlug,
      links
    }
  }
})
</script>
<style scoped lang="postcss">
.nuxt-link-active {
  color: rgba(52, 211, 153);
}
.menu li {
  display: block;
  position: relative;
}
</style>
