<template>
  <nav class="fixed h-16 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-t left-0 bottom-0 right-0 z-30 border-light-border dark:border-dark-border block lg:hidden transition-colors duration-300 ease-linear">
    <div class="flex justify-between items-center h-full">
      <template v-for="link in headerLinks">
        <nuxt-link v-if="link.type === 'dynamic'" :key="link.slug" class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-nuxt-gray transition-colors duration-300 ease-linear" :to="{ name: link.routeName, params: { section: link.slug } }">
          <component :is="'nui-' + link.slug + '-icon'" class="inline-block h-5 fill-current mb-1" :class="{'text-nuxt-lightgreen': $route.params.section === link.slug}"/>
          <span class="block text-xs md:text-base md:pl-3 font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ link.name }}</span>
        </nuxt-link>
        <nuxt-link v-if="link.type === 'static'" :key="link.slug" class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-nuxt-gray transition-colors duration-300 ease-linear" :to="{ name: link.slug }">
          <component :is="'nui-' + link.slug + '-icon'" class="inline-block h-5 fill-current mb-1" :class="{'text-nuxt-lightgreen': $route.params.section === link.slug}"/>
          <span class="block text-xs md:text-base md:pl-3 font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ link.name }}</span>
        </nuxt-link>
        <a v-else-if="link.type === 'external'" :key="link.href" :href="link.href">
          {{ link.name }}
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import nuiExamplesIcon from '@/components/svg/Code'
import nuiGuideIcon from '@/components/svg/Books'
import nuiApiIcon from '@/components/svg/List'
import nuiFaqIcon from '@/components/svg/Faq'
import nuiResourcesIcon from '@/components/svg/Resources'

export default {
  components: {
    nuiExamplesIcon,
    nuiGuideIcon,
    nuiApiIcon,
    nuiFaqIcon,
    nuiResourcesIcon
  },
  computed: {
    ...mapState({
      headerLinks: state => state.lang.headerLinks
    })
  }
}
</script>

<style lang="scss" scoped>
/*.header_mobile_nav a {
  padding-bottom: max(0.5rem,env(safe-area-inset-bottom));
}*/
</style>
