<template>
  <section>
    <nui-container>
      <h1>
        Resources
      </h1>
      <ul>
        <li>
          <nuxt-link :to="localePath('resources-modules')">Modules</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('resources-templates')">Templates</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('resources-examples')">Examples</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('resources-design')">Design</nuxt-link>
        </li>
      </ul>
    </nui-container>
  </section>
</template>

<script>
import nuiContainer from '@/components/nui/commons/Container'

export default {
  components: {
    nuiContainer
  }
}
</script>
