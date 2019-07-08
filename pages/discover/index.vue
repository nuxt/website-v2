<template>
  <div>
    <nui-hero>
      <nui-container>
        <h1>
          Discover
        </h1>
      </nui-container>
    </nui-hero>
    <nui-container class="py-8">
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
  </div>
</template>

<script>
import nuiHero from '@/components/commons/Hero'
import nuiContainer from '@/components/commons/Container'

export default {
  components: {
    nuiHero,
    nuiContainer
  }
}
</script>
