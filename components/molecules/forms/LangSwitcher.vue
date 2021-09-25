<template>
  <Dropdown
    v-if="$i18n.locales.length > 1"
    :items="[$i18n.locales]"
    :strategy="strategy"
    placement="bottom"
    mode="hover"
    class="inline-flex items-center w-12 h-12"
  >
    <template #trigger>
      <IconTranslate class="d-icon" :class="iconClass" />
    </template>

    <template #item="{ item: locale }">
      <NuxtLink
        :to="switchLocalePath(locale.code)"
        class="px-4 py-1 flex items-center whitespace-no-wrap"
        :class="[
          $i18n.locale === locale.code
            ? $docus.currentPath.value === '/'
              ? 'font-semibold cursor-default text-gray-200'
              : 'font-semibold cursor-default text-gray-800 dark:text-gray-200'
            : 'hover:d-text-primary'
        ]"
        >{{ locale.name }}</NuxtLink
      >
    </template>
  </Dropdown>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    iconClass: {
      type: String,
      default: 'w-6 h-6 m-auto'
    },
    strategy: {
      type: String,
      default: 'absolute'
    }
  }
})
</script>
