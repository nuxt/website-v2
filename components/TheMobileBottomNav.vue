<template>
  <nav
    class="fixed bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-t left-0 bottom-0 right-0 z-30 border-light-border dark:border-dark-border block lg:hidden transition-colors duration-300 ease-linear"
  >
    <div class="flex justify-between items-center h-16">
      <template v-for="link in $t('header.links')">
        <nuxt-link
          v-if="link.type === 'dynamic'"
          :key="link.slug"
          class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-nuxt-gray transition-colors duration-300 ease-linear"
          :to="
            localePath({ name: link.routeName, params: { section: link.slug } })
          "
        >
          <component
            :is="link.slug + '-icon'"
            class="inline-block h-5 fill-current mb-1"
            :class="{
              'text-nuxt-lightgreen': $route.params.section === link.slug
            }"
          />
          <span
            class="block text-xs md:text-base md:pl-3 font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
          >
            {{ link.name }}
          </span>
        </nuxt-link>
        <nuxt-link
          v-if="link.type === 'static'"
          :key="link.slug"
          class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-nuxt-gray transition-colors duration-300 ease-linear"
          :to="localePath({ name: link.slug })"
        >
          <component
            :is="link.slug + '-icon'"
            class="inline-block h-5 fill-current mb-1"
            :class="{
              'text-nuxt-lightgreen': $route.params.section === link.slug
            }"
          />
          <span
            class="block text-xs md:text-base md:pl-3 font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
          >
            {{ link.name }}
          </span>
        </nuxt-link>
        <a
          v-else-if="link.type === 'external'"
          :key="link.href"
          :href="link.href"
        >
          {{ link.name }}
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
import ExamplesIcon from '~/assets/icons/code.svg?inline'
import GuideIcon from '~/assets/icons/books.svg?inline'
import ApiIcon from '~/assets/icons/list.svg?inline'
import FaqIcon from '~/assets/icons/faq.svg?inline'
import ResourcesIcon from '~/assets/icons/resources.svg?inline'
import BlogIcon from '~/assets/icons/blog.svg?inline'

export default {
  components: {
    ExamplesIcon,
    GuideIcon,
    ApiIcon,
    FaqIcon,
    ResourcesIcon,
    BlogIcon
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
