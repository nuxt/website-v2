<template>
  <section>
    <nui-container>
      <h1>
        Discover
      </h1>
      <ul>
        <li>
          <nuxt-link :to="localePath('discover-the-framework')">What is NuxtJS?</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('discover-features')">Why NuxtJS?</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('discover-mentions')">They are talking about NuxtJS?</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('discover-showcase')">Who is NuxtJS?</nuxt-link>
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
