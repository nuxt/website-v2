import { useContext, useRoute, computed } from '@nuxtjs/composition-api'

// TODO: do these checks on `$docus.currentPath` instead of `route.path` once `$docus.currentPath` ssr issue is fixed
export function useNav() {
  const { app } = useContext()
  const route = useRoute()

  const isHome = computed(() => {
    let path = route.value.path
    // fix issue on url check if redirects are made (`/fr` -> `/fr/`)
    if (!path.endsWith('/')) {
      path += '/'
    }
    return path === app.localePath('/')
  })

  const currentSlug = computed(() => {
    return route.value.path !== '/' && route?.value?.params?.pathMatch
      ? route.value.params.pathMatch.split('/')[0]
      : null
  })

  return {
    isHome,
    currentSlug
  }
}
