<template>
  <Link
    to="/v3"
    class="group block flex items-center transition-height delay-200 bg-primary hover:bg-primary-400"
    :class="[$route.path === localePath('/') ? 'h-10' : 'h-0 overflow-hidden']"
  >
    <i18n
      tag="p"
      path="banner.format"
      class="text-sky-darkest group-hover:text-black sm:top-1.5 w-full pl-4 sm:text-center text-sm"
    >
      <template #nuxt>
        <b>Nuxt 3</b>
      </template>
      <template #here>
        <b>{{ $t('banner.here') }}</b>
      </template>
    </i18n>
  </Link>
</template>
